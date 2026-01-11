import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaFileAlt, FaClipboardList, FaChevronRight } from 'react-icons/fa';
import PdfListModal from '../common/PdfListModal';
import PdfViewerModal from '../common/PdfViewerModal';

const SubjectCard = ({ name, code, materials }) => {
  const navigate = useNavigate();
  const [listModal, setListModal] = useState({ open: false, title: '', path: '' });
  const [viewerModal, setViewerModal] = useState({ open: false, url: '', name: '' });
  const [cachedPdfFiles, setCachedPdfFiles] = useState([]);

  const materialLinks = [
    { icon: <FaBook className="text-lg" />, label: 'Notes', path: materials?.notes, color: 'from-emerald-500 to-teal-500' },
    { icon: <FaFileAlt className="text-lg" />, label: 'Model Papers', path: materials?.modelPapers, color: 'from-orange-500 to-amber-500' },
    { icon: <FaClipboardList className="text-lg" />, label: 'Previous Papers', path: materials?.previousPapers, color: 'from-violet-500 to-purple-500' }
  ];

  const getShortName = () => name?.replace(/\s+for\s+(CSE|ISE|ECE)/gi, '').replace(/\s*\(.*?\)/g, '').trim() || 'Subject';
  const isMobile = () => window.innerWidth <= 768 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  useEffect(() => {
    const saved = sessionStorage.getItem('activePdfModal');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.subjectCode === code) {
          setListModal({ open: true, title: data.title, path: data.path });
          // Restore cached PDF files
          if (data.pdfFiles && data.pdfFiles.length > 0) {
            setCachedPdfFiles(data.pdfFiles);
          }
        }
      } catch (e) {
        sessionStorage.removeItem('activePdfModal');
      }
    }
  }, [code]);

  const handlePdfFilesLoaded = (files) => {
    setCachedPdfFiles(files);
  };

  const handleViewPdf = (url, pdfName) => {
    if (isMobile()) {
      // Save state to sessionStorage including cached PDF files
      sessionStorage.setItem('activePdfModal', JSON.stringify({ 
        subjectCode: code, 
        title: listModal.title, 
        path: listModal.path,
        pdfFiles: cachedPdfFiles
      }));
      navigate(`/pdf-viewer?file=${encodeURIComponent(url)}&title=${encodeURIComponent(pdfName)}`);
    } else {
      // Don't close list modal on desktop, just open viewer modal on top
      setViewerModal({ open: true, url, name: pdfName });
    }
  };

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-blue-200">
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white p-6 overflow-hidden">
          {/* Decorative elements */}
          {/* <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div> */}
          
          <h3 className="text-lg font-bold mb-2 leading-tight line-clamp-2 relative z-10">{name}</h3>
          {code && (
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
              {code}
            </span>
          )}
        </div>

        {/* Material buttons */}
        <div className="p-5 space-y-3">
          {materialLinks.map((m, i) => (
            <button 
              key={i} 
              onClick={() => setListModal({ open: true, title: m.label, path: m.path })}
              className="w-full flex items-center gap-4 px-4 py-3.5 bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all group/btn border border-transparent hover:border-blue-200"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${m.color} rounded-xl flex items-center justify-center text-white shadow-md transition-transform`}>
                {m.icon}
              </div>
              <span className="text-slate-700 group-hover/btn:text-slate-900 font-medium flex-1 text-left">{m.label}</span>
              <FaChevronRight className="text-slate-400 group-hover/btn:text-blue-500 group-hover/btn:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </div>

      <PdfListModal
        isOpen={listModal.open}
        onClose={() => {
          setListModal({ open: false, title: '', path: '' });
          setCachedPdfFiles([]);
          sessionStorage.removeItem('activePdfModal');
        }}
        title={listModal.title}
        subjectName={getShortName()}
        materialPath={listModal.path}
        onViewPdf={handleViewPdf}
        cachedPdfFiles={cachedPdfFiles}
        onPdfFilesLoaded={handlePdfFilesLoaded}
      />

      <PdfViewerModal
        isOpen={viewerModal.open}
        onClose={() => setViewerModal({ open: false, url: '', name: '' })}
        pdfUrl={viewerModal.url}
        fileName={viewerModal.name}
      />
    </>
  );
};

export default SubjectCard;
