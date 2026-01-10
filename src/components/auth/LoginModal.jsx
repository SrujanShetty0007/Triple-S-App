import { useState } from 'react';
import { FaTimes, FaGoogle, FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { signUpWithEmail, signInWithEmail, signInWithGoogle } from '../../firebase/authService';

const INITIAL_FORM_STATE = { name: '', email: '', password: '', confirmPassword: '' };

const LoginModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] =useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

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
    } catch (err) {
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
    } catch (err) {
      setError('Google sign in failed.');
    } finally {
      setLoading(false);
    }
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setError('');
    setFormData(INITIAL_FORM_STATE);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 animate-fadeIn" onClick={onClose}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp max-h-[95vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6">
          <button onClick={onClose} className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl transition-all hover:scale-110" disabled={loading}>
            <FaTimes />
          </button>
          <h2 className="text-xl sm:text-2xl font-bold pr-8">Welcome to Triple S</h2>
          <p className="text-blue-100 text-xs sm:text-sm mt-1">Your academic journey starts here</p>
        </div>

        {/* Tabs */}
        <div className="sticky top-[88px] sm:top-[104px] z-10 flex border-b border-gray-200 bg-white">
          {['signin', 'signup'].map(tab => (
            <button key={tab} onClick={() => switchTab(tab)} disabled={loading}
              className={`flex-1 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' : 'text-gray-500 hover:text-gray-700'}`}>
              {tab === 'signin' ? 'Sign In' : 'Sign Up'}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="p-4 sm:p-6">
          {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs sm:text-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {activeTab === 'signup' && (
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required disabled={loading}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all disabled:opacity-50" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required disabled={loading}
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all disabled:opacity-50" />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required disabled={loading}
                  className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all disabled:opacity-50" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} disabled={loading} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {activeTab === 'signup' && (
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <FaLock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input type={showPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••" required disabled={loading}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all disabled:opacity-50" />
                </div>
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full py-3 sm:py-3.5 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {loading ? <><FaSpinner className="animate-spin" />{activeTab === 'signin' ? 'Signing In...' : 'Creating Account...'}</> : (activeTab === 'signin' ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className="flex items-center gap-4 my-4 sm:my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs sm:text-sm text-gray-500 font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <button onClick={handleGoogleSignIn} disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-2.5 sm:py-3 text-sm sm:text-base bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? <FaSpinner className="animate-spin text-lg" /> : <><FaGoogle className="text-red-500 text-base sm:text-lg" />Continue with Google</>}
          </button>

          {activeTab === 'signup' && (
            <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-3 sm:mt-4 leading-relaxed">
              By signing up, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
