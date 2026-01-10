import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaDownload } from 'react-icons/fa';

// Load PDF.js from CDN
const loadPdfJs = () => {
  return new Promise((resolve) => {
    if (window.pdfjsLib) { resolve(window.pdfjsLib); return; }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.min.js';
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js';
      resolve(window.pdfjsLib);
    };
    document.head.appendChild(script);
  });
};

const MobilePdfViewer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  
  const [pdf, setPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pdfUrl = searchParams.get('file');
  const title = searchParams.get('title') || 'PDF Viewer';

  useEffect(() => {
    if (!pdfUrl) { setError('No PDF specified'); setLoading(false); return; }
    
    loadPdfJs().then(pdfjsLib => {
      pdfjsLib.getDocument(pdfUrl).promise
        .then(pdfDoc => { setPdf(pdfDoc); setTotalPages(pdfDoc.numPages); setLoading(false); })
        .catch(err => { setError(err.message); setLoading(false); });
    });
  }, [pdfUrl]);

  useEffect(() => {
    if (!pdf || !canvasRef.current) return;
    
    pdf.getPage(currentPage).then(page => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const containerWidth = window.innerWidth - 20;
      const viewport = page.getViewport({ scale: 1 });
      const scale = containerWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });
      const pixelRatio = window.devicePixelRatio || 1;

      canvas.style.width = `${scaledViewport.width}px`;
      canvas.style.height = `${scaledViewport.height}px`;
      canvas.width = scaledViewport.width * pixelRatio;
      canvas.height = scaledViewport.height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);

      page.render({ canvasContext: ctx, viewport: scaledViewport });
    });
  }, [pdf, currentPage]);

  const handleDownload = () => {
    const link = Object.assign(document.createElement('a'), { href: pdfUrl, download: title + '.pdf', target: '_blank' });
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-blue-700 rounded-lg"><FaArrowLeft /></button>
        <h1 className="text-lg font-semibold truncate flex-1">{title}</h1>
      </header>

      {/* Toolbar */}
      <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage <= 1}
            className="p-2 bg-gray-700 rounded-lg disabled:opacity-50"><FaChevronLeft /></button>
          <span className="text-sm">Page {currentPage} of {totalPages}</span>
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage >= totalPages}
            className="p-2 bg-gray-700 rounded-lg disabled:opacity-50"><FaChevronRight /></button>
        </div>
        <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg font-medium">
          <FaDownload /> Download
        </button>
      </div>

      {/* Canvas Container */}
      <div className="flex-1 overflow-auto flex justify-center p-2 bg-gray-800">
        {loading && (
          <div className="flex flex-col items-center justify-center text-white py-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
            <p>Loading PDF...</p>
          </div>
        )}
        {error && <div className="text-red-400 py-20 text-center">{error}</div>}
        {!loading && !error && <canvas ref={canvasRef} className="shadow-2xl" />}
      </div>
    </div>
  );
};

export default MobilePdfViewer;
