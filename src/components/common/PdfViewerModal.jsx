import { useState, useEffect } from 'react';
import { FaTimes, FaDownload } from 'react-icons/fa';

const PdfViewerModal = ({ isOpen, onClose, pdfUrl, fileName }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) setLoading(true);
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const download = () => {
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="w-full h-full max-w-5xl max-h-[88vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="bg-blue-600 text-white px-5 py-3 flex items-center justify-between">
          <h3 className="text-base font-bold truncate flex-1">{fileName}</h3>
          <div className="flex gap-2 ml-3">
            <button onClick={download} className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-md flex items-center gap-2 text-sm">
              <FaDownload className="text-xs" /> Download
            </button>
            <button onClick={onClose} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-md flex items-center justify-center">
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="flex-1 relative bg-gray-100">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
              <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-gray-500 text-sm">Loading PDF...</p>
            </div>
          )}
          <iframe 
            src={pdfUrl} 
            title={fileName} 
            className="w-full h-full border-0" 
            onLoad={() => setLoading(false)}
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;
