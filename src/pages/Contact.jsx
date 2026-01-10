import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaPaperPlane, FaClock, FaArrowRight, FaComments } from 'react-icons/fa';
import HeroSection from '../components/common/HeroSection';
import { CONTACT } from '../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    { icon: <FaEnvelope className="text-2xl" />, title: 'Email Us', value: CONTACT.email, href: `mailto:${CONTACT.email}`, color: 'from-blue-500 to-cyan-500', hoverColor: 'group-hover:from-blue-600 group-hover:to-cyan-600' },
    { icon: <FaWhatsapp className="text-2xl" />, title: 'WhatsApp', value: CONTACT.whatsapp, href: `https://wa.me/${CONTACT.whatsapp}`, color: 'from-green-500 to-emerald-500', hoverColor: 'group-hover:from-green-600 group-hover:to-emerald-600' },
    { icon: <FaClock className="text-2xl" />, title: 'Office Hours', value: 'Mon - Fri\n9:00 AM - 6:00 PM IST', color: 'from-purple-500 to-pink-500', hoverColor: 'group-hover:from-purple-600 group-hover:to-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection 
        badge={<div className="flex items-center gap-2"><FaComments className="text-blue-400" /> Get In Touch</div>} 
        title="Contact Us" 
        subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((item, i) => (
              <a key={i} href={item.href} target={item.href ? '_blank' : undefined} rel="noopener noreferrer"
                className="group block bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300 border border-slate-100 hover:border-blue-200">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} ${item.hoverColor} rounded-xl flex items-center justify-center text-white mb-4 transition-all shadow-lg group-hover:scale-110`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 whitespace-pre-line">{item.value}</p>
                {item.href && (
                  <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    <span>Connect</span>
                    <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Send Us a Message</h2>
              <p className="text-slate-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['name', 'email'].map(field => (
                    <div key={field}>
                      <label className="block text-sm font-semibold text-slate-700 mb-2 capitalize">{field === 'name' ? 'Your Name' : 'Email Address'}</label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        required
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder={field === 'email' ? 'john@example.com' : 'John Doe'}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <button type="submit" className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-10 max-w-3xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">Want to Contribute Study Materials?</h3>
            <p className="text-blue-100 mb-6">Help fellow students by sharing your notes, model papers, or previous year question papers.</p>
            <a href="/contribute" className="inline-block px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">
              Contribute Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
