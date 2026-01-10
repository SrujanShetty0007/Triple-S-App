import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaHeart, FaArrowRight, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { APP_NAME, CONTACT } from '../../utils/constants';
import logoB from '../../assets/images/triple-s_logo_b.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: '2025 Scheme', path: '/2025-scheme' },
    { name: 'VTU Resources', path: '/vtu' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Contribute', path: '/contribute' }
  ];

  const resources = [
    { name: 'SGPA Calculator', path: '/vtu' },
    { name: 'CGPA Calculator', path: '/vtu' },
    { name: 'Model Papers', path: '/2025-scheme' },
    { name: 'Previous Papers', path: '/2025-scheme' }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={18} />, href: CONTACT.linkedin, label: 'LinkedIn', bg: 'bg-[#0077b5]' },
    { icon: <FaGithub size={18} />, href: CONTACT.github, label: 'GitHub', bg: 'bg-[#333]' },
    { icon: <FaInstagram size={18} />, href: CONTACT.instagram, label: 'Instagram', bg: 'bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888]' },
    { icon: <FaWhatsapp size={18} />, href: `https://wa.me/${CONTACT.whatsapp}`, label: 'WhatsApp', bg: 'bg-[#25D366]' }
  ];

  return (
    <footer className="bg-slate-900 text-white mt-auto relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logoB} 
                alt="Triple S Logo" 
                className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your one-stop platform for VTU engineering study materials. Quality notes, papers & tools for academic excellence.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 ${social.bg} rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section - Enhanced */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Get In Touch
            </h3>
            
            <div className="space-y-4">
              {/* Email */}
              <a 
                href={`mailto:${CONTACT.email}`}
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors">
                  <FaEnvelope className="text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email</p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors break-all">{CONTACT.email}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
                  <FaWhatsapp className="text-green-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">WhatsApp</p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{CONTACT.whatsapp}</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Location</p>
                  <p className="text-sm text-slate-300">Karnataka, India</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Response Time</p>
                  <p className="text-sm text-slate-300">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            <span>Made with</span>
            <FaHeart className="text-red-500 text-xs" />
            <span>by</span>
            <a 
              href={CONTACT.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              Srujan & Webotrex
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
