import { useState, useEffect } from 'react';
import { FaCheckCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: 'from-green-500 to-emerald-500',
    info: 'from-blue-500 to-indigo-500',
    error: 'from-red-500 to-rose-500'
  };

  const icons = {
    success: <FaCheckCircle className="text-xl" />,
    info: <FaInfoCircle className="text-xl" />,
    error: <FaTimes className="text-xl" />
  };

  return (
    <div className="flex items-center gap-3 min-w-[320px] max-w-md bg-white rounded-xl shadow-2xl border border-gray-100 p-4 animate-slideInRight">
      <div className={`w-10 h-10 bg-gradient-to-br ${styles[type]} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
        {icons[type]}
      </div>
      <p className="text-gray-800 font-medium flex-1">{message}</p>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
        <FaTimes />
      </button>
    </div>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast {...toast} onClose={() => removeToast(toast.id)} />
        </div>
      ))}
    </div>
  );
};

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const ToastComponent = () => <ToastContainer toasts={toasts} removeToast={removeToast} />;

  return { addToast, ToastComponent };
};

export default Toast;
