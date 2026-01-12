import { useState, useEffect } from 'react';
import { FaTimes, FaDownload, FaEye, FaFilePdf, FaFolderOpen } from 'react-icons/fa';

const PdfListModal = ({ isOpen, onClose, title, subjectName, materialPath, onViewPdf, cachedPdfFiles, onPdfFilesLoaded }) => {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isOpen) return setPdfFiles([]) || setLoaded(false);
    if (!materialPath) return setPdfFiles([]) || setLoaded(true);
    if (cachedPdfFiles?.length) return setPdfFiles(cachedPdfFiles) || setLoaded(true);
    
    // Path: /assets/pdfs/2022-scheme/sem3/subject/type
    // Split: ['', 'assets', 'pdfs', '2022-scheme', 'sem3', 'subject', 'type']
    const parts = materialPath.split('/').filter(Boolean);
    const scheme = parts[2]; // '2022-scheme' or '2025-scheme'
    const sem = parts[3];    // 'sem1', 'sem3', etc.
    const subj = parts[4];   // 'oops-java', etc.
    const type = parts[5];   // 'notes', 'model-papers', 'previous-papers'
    
    const timeout = setTimeout(() => { setPdfFiles([]); setLoaded(true); }, 3000);
    
    fetch('/assets/pdfs/manifest.json')
      .then(r => r.ok ? r.json() : {})
      .then(m => {
        clearTimeout(timeout);
        // Handle all scheme directories dynamically
        const pdfs = scheme?.endsWith('-scheme') 
          ? m?.[scheme]?.[sem]?.[subj]?.[type] || []
          : m?.[sem]?.[subj]?.[type] || [];
        setPdfFiles(pdfs);
        onPdfFilesLoaded?.(pdfs);
        setLoaded(true);
      })
      .catch(() => { clearTimeout(timeout); setPdfFiles([]); setLoaded(true); });
    
    return () => clearTimeout(timeout);
  }, [isOpen, materialPath, cachedPdfFiles, onPdfFilesLoaded]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3" onClick={onClose}>
      <div className="w-full max-w-3xl max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="bg-blue-600 text-white px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">{title} - {subjectName}</h3>
            <p className="text-xs text-white/70 mt-0.5">Select a file to view or download</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center"><FaTimes /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {!loaded ? (
            <div className="flex flex-col items-center py-16">
              <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-gray-500 text-sm">Loading...</p>
            </div>
          ) : !pdfFiles.length ? (
            <div className="flex flex-col items-center py-16 text-center">
              <FaFolderOpen className="text-5xl text-gray-300 mb-4" />
              <p className="text-gray-600 font-medium">Not Available</p>
              <p className="text-gray-400 text-sm mt-1">Check back later or contribute</p>
            </div>
          ) : (
            <div className="space-y-2">
              {pdfFiles.map((pdf, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100">
                  <FaFilePdf className="text-red-500 text-xl flex-shrink-0" />
                  <span className="flex-1 text-gray-800 font-medium text-sm truncate">{pdf.name}</span>
                  <button onClick={() => onViewPdf(pdf.path, pdf.name)} className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-md flex items-center gap-1.5">
                    <FaEye className="text-xs" /> View
                  </button>
                  <button onClick={() => Object.assign(document.createElement('a'), { href: pdf.path, download: pdf.filename }).click()} className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium rounded-md flex items-center gap-1.5">
                    <FaDownload className="text-xs" /> Download
                  </button>
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
