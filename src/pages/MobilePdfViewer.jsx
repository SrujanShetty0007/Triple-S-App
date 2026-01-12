import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaDownload } from 'react-icons/fa';

const PDFJS_VERSION = '3.11.174';
const PDFJS_CDN = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}`;

const loadPdfJs = () => new Promise((resolve, reject) => {
  if (window.pdfjsLib) return resolve(window.pdfjsLib);
  const script = document.createElement('script');
  script.src = `${PDFJS_CDN}/pdf.min.js`;
  script.onload = () => {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = `${PDFJS_CDN}/pdf.worker.min.js`;
    resolve(window.pdfjsLib);
  };
  script.onerror = () => reject(new Error('Failed to load PDF.js'));
  document.head.appendChild(script);
});

const MobilePdfViewer = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const renderTaskRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [downloadToast, setDownloadToast] = useState(false);
  
  const url = params.get('file');
  const title = params.get('title') || 'PDF Document';

  useEffect(() => {
    if (!url) {
      setError('No PDF file specified');
      setLoading(false);
      return;
    }

    loadPdfJs()
      .then(lib => lib.getDocument({
        url,
        cMapUrl: `${PDFJS_CDN}/cmaps/`,
        cMapPacked: true,
      }).promise)
      .then(doc => {
        setPdf(doc);
        setTotal(doc.numPages);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load PDF');
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    if (!pdf || !canvasRef.current) return;

    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
      renderTaskRef.current = null;
    }

    pdf.getPage(page).then(pdfPage => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      const containerWidth = containerRef.current?.clientWidth || window.innerWidth - 16;
      const scale = containerWidth / pdfPage.getViewport({ scale: 1 }).width;
      const viewport = pdfPage.getViewport({ scale });
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = viewport.width * dpr;
      canvas.height = viewport.height * dpr;
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;
      ctx.scale(dpr, dpr);

      renderTaskRef.current = pdfPage.render({ canvasContext: ctx, viewport });
      renderTaskRef.current.promise.catch(() => {});
    });

    return () => {
      if (renderTaskRef.current) renderTaskRef.current.cancel();
    };
  }, [pdf, page]);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.pdf`;
    a.click();
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="bg-blue-600 text-white px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-blue-700 rounded-lg">
          <FaArrowLeft />
        </button>
        <h1 className="text-base font-semibold truncate flex-1">{title}</h1>
      </header>

      <div className="bg-gray-800 text-white px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setPage(p => Math.max(1, p - 1))} 
            disabled={page <= 1}
            className="p-2.5 bg-gray-700 rounded-lg disabled:opacity-40"
          >
            <FaChevronLeft />
          </button>
          <span className="text-sm min-w-[50px] text-center">{page} / {total}</span>
          <button 
            onClick={() => setPage(p => Math.min(total, p + 1))} 
            disabled={page >= total}
            className="p-2.5 bg-gray-700 rounded-lg disabled:opacity-40"
          >
            <FaChevronRight />
          </button>
        </div>
        <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg text-sm font-medium">
          <FaDownload className="text-xs" /> Download
        </button>
      </div>

      <div ref={containerRef} className="flex-1 overflow-auto bg-gray-800 p-2 flex justify-center">
        {loading && (
          <div className="flex flex-col items-center justify-center text-white py-20">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-sm">Loading PDF...</p>
          </div>
        )}
        {error && <p className="text-red-400 py-20 text-center">{error}</p>}
        {!loading && !error && (
          <canvas ref={canvasRef} className="shadow-xl bg-white" />
        )}
      </div>

      {/* Download Toast */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 bg-blue-600 text-white rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 z-[100] ${downloadToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        <span className="font-medium text-sm">Downloading...</span>
      </div>
    </div>
  );
};

export default MobilePdfViewer;
