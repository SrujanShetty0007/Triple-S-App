import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaHeart, FaChevronRight } from 'react-icons/fa';
import { APP_NAME, CONTACT, NAV_LINKS } from '../../utils/constants';
import logoB from '../../assets/images/triple-s_logo_b.png';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white mt-auto overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logoB} 
                alt="Triple S Logo" 
                className="h-12 w-auto brightness-110"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              The ultimate resource hub for VTU engineering students. Providing quality notes, 
              model papers, and calculators to help you excel in your academic journey.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedin size={18} />, href: CONTACT.linkedin, color: 'hover:bg-blue-600' },
                { icon: <FaGithub size={18} />, href: CONTACT.github, color: 'hover:bg-slate-700' },
                { icon: <FaInstagram size={18} />, href: CONTACT.instagram, color: 'hover:bg-pink-600' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:-translate-y-1 border border-white/10`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Explore */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
              Quick Explore
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: '2025 Scheme', path: '/2025-scheme' },
                { name: 'VTU Resources', path: '/vtu' },
                { name: 'Contribute', path: '/contribute' },
                { name: 'About Us', path: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-blue-400 transition-all flex items-center gap-2 group"
                  >
                    <FaChevronRight className="text-[10px] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Subjects */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
              Popular Hubs
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Mathematics', 'Physics', 'Chemistry', 'C-Programming', 'Electronics', 'Mechanical', 'CAED'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300 hover:bg-white/10 transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
              Contact Support
            </h3>
            <div className="space-y-4">
              <a 
                href={`mailto:${CONTACT.email}`}
                className="group flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Email Us</p>
                  <p className="text-sm text-slate-200 font-medium break-all">{CONTACT.email}</p>
                </div>
              </a>
              <div className="text-xs text-slate-500 leading-relaxed italic">
                * We usually respond within 24 hours. Your contributions help keep this platform free!
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-bold">{APP_NAME} Hub</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Crafted with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by</span>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold hover:underline">Srujan S Shetty</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
