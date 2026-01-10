import { useState, useEffect } from 'react';
import { FaTimes, FaDownload, FaEye, FaFilePdf, FaFolderOpen } from 'react-icons/fa';

const PdfListModal = ({ isOpen, onClose, title, subjectName, materialPath, onViewPdf }) => {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && materialPath) fetchPdfFiles();
  }, [isOpen, materialPath]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const fetchPdfFiles = async () => {
    setLoading(true);
    try {
      const res = await fetch('/assets/pdfs/manifest.json');
      if (!res.ok) { setPdfFiles([]); return; }
      
      const manifest = await res.json();
      const parts = materialPath.split('/').filter(Boolean);
      
      // Handle 2025-scheme: /assets/pdfs/2025-scheme/sem1/subject/type
      // Handle regular: /assets/pdfs/sem1/subject/type
      const pdfs = parts[2] === '2025-scheme'
        ? manifest['2025-scheme']?.[parts[3]]?.[parts[4]]?.[parts[5]] || []
        : manifest[parts[2]]?.[parts[3]]?.[parts[4]] || [];
      
      setPdfFiles(pdfs);
    } catch { setPdfFiles([]); }
    finally { setLoading(false); }
  };

  const handleDownload = (pdf) => {
    const link = Object.assign(document.createElement('a'), { href: pdf.path, download: pdf.filename, target: '_blank' });
    link.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn p-4" onClick={onClose}>
      <div className="w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col animate-slideUp overflow-hidden" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{title} - {subjectName}</h3>
            <p className="text-sm text-white/80 mt-1">Semester 1</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-xl"><FaTimes /></button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex flex-col items-center py-12">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-600">Loading files...</p>
            </div>
          ) : pdfFiles.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FaFolderOpen className="text-4xl text-gray-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">No PDF files available yet.</h4>
              <p className="text-gray-500">Please check back later or contribute your own materials.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {pdfFiles.map((pdf, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <FaFilePdf className="text-red-500 text-xl" />
                    </div>
                    <span className="text-gray-700 font-medium truncate">{pdf.name}</span>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button onClick={() => onViewPdf ? onViewPdf(pdf.path, pdf.name) : window.open(pdf.path)} className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium flex items-center gap-2">
                      <FaEye /><span className="hidden sm:inline">View</span>
                    </button>
                    <button onClick={() => handleDownload(pdf)} className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium flex items-center gap-2">
                      <FaDownload /><span className="hidden sm:inline">Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfListModal;
