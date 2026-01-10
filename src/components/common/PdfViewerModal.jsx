import { useState, useEffect } from 'react';
import { FaTimes, FaDownload } from 'react-icons/fa';

const PdfViewerModal = ({ isOpen, onClose, pdfUrl, fileName }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) setLoading(true);
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleDownload = () => {
    Object.assign(document.createElement('a'), { href: pdfUrl, download: fileName, target: '_blank' }).click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div className="w-full h-full max-w-7xl max-h-screen m-4 bg-white rounded-2xl shadow-2xl flex flex-col animate-slideUp" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold truncate">{fileName}</h3>
            <p className="text-sm text-white/80">PDF Viewer</p>
          </div>
          <div className="flex gap-2 ml-4">
            <button onClick={handleDownload} className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg flex items-center gap-2 text-sm font-medium">
              <FaDownload /><span className="hidden sm:inline">Download</span>
            </button>
            <button onClick={onClose} className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-2xl">
              <FaTimes />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 relative bg-gray-100 rounded-b-2xl overflow-hidden">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-gray-600">Loading PDF...</p>
            </div>
          )}
          <iframe src={pdfUrl} title={fileName} className="w-full h-full border-0" onLoad={() => setLoading(false)} />
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;
