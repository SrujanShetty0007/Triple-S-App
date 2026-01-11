import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaChevronDown, FaHome, FaInfoCircle, 
  FaGraduationCap, FaLayerGroup, FaUniversity, FaHandHoldingHeart, 
  FaEnvelope, FaChevronRight, FaUserCircle
} from 'react-icons/fa';
import { APP_NAME, NAV_LINKS } from '../../utils/constants';
import logoB from '../../assets/images/triple-s_logo_b.png';
import LoginModal from '../auth/LoginModal';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut: handleSignOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setShowUserMenu(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showUserMenu && !e.target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showUserMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setActiveDropdown(null);
  };

  const getIcon = (name) => {
    const icons = {
      'Home': <FaHome />,
      'About': <FaInfoCircle />,
      '2025 Scheme': <FaGraduationCap />,
      'VTU': <FaUniversity />,
      'Contribute': <FaHandHoldingHeart />,
      'Contact': <FaEnvelope />
    };
    return icons[name] || null;
  };

  return (
    <>
      <header className={`sticky top-0 z-[100] py-3 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
      } border-b border-gray-100`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img 
                src={logoB} 
                alt="Triple S Logo" 
                className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button
                        className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 font-medium ${
                          activeDropdown === link.name ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                        }`}
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      >
                        <span className="text-blue-500/70">{getIcon(link.name)}</span>
                        {link.name}
                        <FaChevronDown className={`text-[10px] transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                        activeDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                      }`}>
                        <div className="p-2 grid gap-1">
                          {link.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 rounded-lg transition-colors group/item"
                            >
                              <span className="font-medium text-sm">{item.name}</span>
                              <FaChevronRight className="text-[10px] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 font-medium ${
                        location.pathname === link.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      <span className="text-blue-500/70">{getIcon(link.name)}</span>
                      {link.name}
                      {location.pathname === link.path && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="ml-4 h-8 w-[1px] bg-gray-200"></div>
              
              {/* User Login/Avatar */}
              {user ? (
                <div className="relative ml-4 user-menu-container">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowUserMenu(!showUserMenu);
                    }}
                    className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform"
                    title={user.displayName || user.email}
                  >
                    {(user.displayName || user.email || 'U').charAt(0).toUpperCase()}
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute top-[calc(100%+8px)] right-0 w-52 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-[200]">
                      <div className="px-4 py-3 bg-slate-50 border-b border-gray-200">
                        <p className="font-semibold text-gray-800 text-sm truncate">{user.displayName || 'User'}</p>
                        <p className="text-xs text-gray-500 truncate mt-0.5">{user.email}</p>
                      </div>
                      <button 
                        onClick={async () => {
                          await handleSignOut();
                          setShowUserMenu(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                      >
                        <span>🚪</span>
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="ml-4 w-10 h-10 flex items-center justify-center text-blue-600 hover:scale-110 transition-transform"
                  aria-label="Login"
                >
                  <FaUserCircle className="text-3xl" />
                </button>
              )}
            </nav>

            {/* Mobile Header Buttons */}
            <div className="lg:hidden flex items-center gap-2">
              {user ? (
                <div className="relative user-menu-container">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowUserMenu(!showUserMenu);
                    }}
                    className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                  >
                    {(user.displayName || user.email || 'U').charAt(0).toUpperCase()}
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute top-[calc(100%+8px)] right-0 w-52 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-[200]">
                      <div className="px-4 py-3 bg-slate-50 border-b border-gray-200">
                        <p className="font-semibold text-gray-800 text-sm truncate">{user.displayName || 'User'}</p>
                        <p className="text-xs text-gray-500 truncate mt-0.5">{user.email}</p>
                      </div>
                      <button 
                        onClick={async () => {
                          await handleSignOut();
                          setShowUserMenu(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                      >
                        <span>🚪</span> <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="w-9 h-9 flex items-center justify-center text-blue-600"
                  aria-label="Login"
                >
                  <FaUserCircle className="text-2xl" />
                </button>
              )}
              
              {/* Animated Hamburger Button */}
              <button
                onClick={toggleMobileMenu}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Sidebar */}
      <aside className={`fixed top-0 right-0 h-full w-[85%] sm:w-80 bg-white z-[120] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logoB} alt="Logo" className="h-8 w-auto" />
              <span className="font-bold text-blue-600">Menu</span>
            </div>
            <button 
              onClick={toggleMobileMenu} 
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                        activeDropdown === link.name ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-xl ${activeDropdown === link.name ? 'text-blue-600' : 'text-gray-400'}`}>
                          {getIcon(link.name)}
                        </span>
                        <span className="font-semibold">{link.name}</span>
                      </div>
                      <FaChevronDown className={`text-xs transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === link.name ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="ml-12 border-l-2 border-blue-100 space-y-1">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={toggleMobileMenu}
                            className={`block px-5 py-3 text-sm font-medium rounded-r-lg transition-all ${
                              location.pathname === item.path ? 'text-blue-600 bg-blue-50/50' : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={toggleMobileMenu}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                      location.pathname === link.path ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`text-xl ${location.pathname === link.path ? 'text-white' : 'text-gray-400'}`}>
                      {getIcon(link.name)}
                    </span>
                    <span className="font-semibold">{link.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t">
            <p className="text-xs text-center text-gray-400 font-medium">
              © {new Date().getFullYear()} Triple S • Built for VTU Students
            </p>
          </div>
        </div>
      </aside>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Header;
