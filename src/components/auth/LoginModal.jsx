import { useState } from 'react';
import { FaTimes, FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import { signUpWithEmail, signInWithEmail, signInWithGoogle } from '../../firebase/authService';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
    <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.26c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fill="#34A853"/>
    <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
  </svg>
);

const LoginModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (activeTab === 'signin') {
        const result = await signInWithEmail(formData.email, formData.password);
        result.success ? onClose() : setError(result.error);
      } else {
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords don't match");
          setLoading(false);
          return;
        }
        const result = await signUpWithEmail(formData.email, formData.password, formData.name);
        result.success ? onClose() : setError(result.error);
      }
    } catch {
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      result.success ? onClose() : setError(result.error);
    } catch {
      setError('Google sign in failed.');
    } finally {
      setLoading(false);
    }
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setError('');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  if (!isOpen) return null;

  const inputClass = "w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-sm";

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="relative bg-blue-600 text-white px-6 py-5">
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <FaTimes />
          </button>
          <h2 className="text-xl font-bold">Welcome to Triple S</h2>
          <p className="text-blue-100 text-sm mt-1">Your academic journey starts here</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          {['signin', 'signup'].map(tab => (
            <button key={tab} onClick={() => switchTab(tab)} disabled={loading}
              className={`flex-1 py-3.5 text-sm font-medium transition-all ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
              {tab === 'signin' ? 'Sign In' : 'Sign Up'}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="p-6">
          {error && <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {activeTab === 'signup' && (
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required disabled={loading} className={inputClass} />
              </div>
            )}

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" required disabled={loading} className={inputClass} />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="Password" required disabled={loading} className={`${inputClass} pr-10`} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {activeTab === 'signup' && (
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input type={showPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" required disabled={loading} className={inputClass} />
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? (activeTab === 'signin' ? 'Signing in...' : 'Creating account...') : (activeTab === 'signin' ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className="flex items-center gap-4 my-5">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <button onClick={handleGoogleSignIn} disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-gray-200 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all disabled:opacity-50">
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>

          {activeTab === 'signup' && (
            <p className="text-xs text-gray-400 text-center mt-4">
              By signing up, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
