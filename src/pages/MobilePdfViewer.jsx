import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaDownload } from 'react-icons/fa';

const loadPdfJs = () => new Promise(resolve => {
  if (window.pdfjsLib) return resolve(window.pdfjsLib);
  const s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.min.js';
  s.onload = () => {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js';
    resolve(window.pdfjsLib);
  };
  document.head.appendChild(s);
});

const MobilePdfViewer = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [state, setState] = useState({ pdf: null, page: 1, total: 0, loading: true, error: null });
  
  const url = params.get('file'), title = params.get('title') || 'PDF';

  useEffect(() => {
    if (!url) { setState(s => ({ ...s, error: 'No PDF specified', loading: false })); return; }
    loadPdfJs().then(lib => lib.getDocument(url).promise)
      .then(doc => setState(s => ({ ...s, pdf: doc, total: doc.numPages, loading: false })))
      .catch(e => setState(s => ({ ...s, error: e.message, loading: false })));
  }, [url]);

  useEffect(() => {
    if (!state.pdf || !canvasRef.current) return;
    state.pdf.getPage(state.page).then(page => {
      const canvas = canvasRef.current, ctx = canvas.getContext('2d');
      const scale = (window.innerWidth - 16) / page.getViewport({ scale: 1 }).width;
      const vp = page.getViewport({ scale }), dpr = window.devicePixelRatio || 1;
      canvas.style.width = vp.width + 'px';
      canvas.style.height = vp.height + 'px';
      canvas.width = vp.width * dpr;
      canvas.height = vp.height * dpr;
      ctx.scale(dpr, dpr);
      page.render({ canvasContext: ctx, viewport: vp });
    });
  }, [state.pdf, state.page]);

  const setPage = (fn) => setState(s => ({ ...s, page: fn(s.page) }));
  const download = () => {
    const a = document.createElement('a');
    a.href = url;
    a.download = title + '.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="bg-blue-600 text-white px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-blue-700 rounded-lg"><FaArrowLeft /></button>
        <h1 className="text-base font-semibold truncate flex-1">{title}</h1>
      </header>
      <div className="bg-gray-800 text-white px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={state.page <= 1}
            className="p-2 bg-gray-700 rounded disabled:opacity-40"><FaChevronLeft /></button>
          <span className="text-xs">{state.page} / {state.total}</span>
          <button onClick={() => setPage(p => Math.min(state.total, p + 1))} disabled={state.page >= state.total}
            className="p-2 bg-gray-700 rounded disabled:opacity-40"><FaChevronRight /></button>
        </div>
        <button onClick={download} className="flex items-center gap-2 px-3 py-1.5 bg-green-600 rounded text-sm font-medium">
          <FaDownload className="text-xs" /> Download
        </button>
      </div>
      <div className="flex-1 overflow-auto flex justify-center p-2 bg-gray-800">
        {state.loading && (
          <div className="flex flex-col items-center justify-center text-white py-20">
            <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-sm">Loading...</p>
          </div>
        )}
        {state.error && <p className="text-red-400 py-20 text-center text-sm">{state.error}</p>}
        {!state.loading && !state.error && <canvas ref={canvasRef} className="shadow-xl" />}
      </div>
    </div>
  );
};

export default MobilePdfViewer;
