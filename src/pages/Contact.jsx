import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaPaperPlane, FaClock } from 'react-icons/fa';
import SEO from '../components/common/SEO';
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
    { icon: <FaEnvelope />, title: 'Email Us', value: CONTACT.email, href: `mailto:${CONTACT.email}`, color: 'bg-blue-600' },
    { icon: <FaWhatsapp />, title: 'WhatsApp', value: CONTACT.whatsapp, href: `https://wa.me/${CONTACT.whatsapp.replace('+', '')}`, color: 'bg-green-600' },
    { icon: <FaClock />, title: 'Response Time', value: 'Within 24-48 hours', href: null, color: 'bg-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact Triple-S | Get Help & Support"
        description="Contact Triple S for VTU study materials support, report issues, share feedback, or contribute notes."
        keywords="contact Triple S, VTU support contact, engineering student helpdesk"
        url="https://triple-s.netlify.app/contact"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold mb-6">
              <FaEnvelope />
              <span>Get In Touch</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Contact Us
            </h1>
            
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactMethods.map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white text-xl mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-500">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Send Us a Message</h2>
              <p className="text-slate-500 text-sm mb-6">Fill out the form below and we'll get back to you shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
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
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <button type="submit" className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-blue-600 rounded-xl p-8 md:p-10 text-white text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Want to Contribute Study Materials?</h3>
            <p className="text-blue-100 mb-6">Help fellow students by sharing your notes, model papers, or previous year question papers.</p>
            <a href="/contribute" className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:shadow-lg transition-all">
              Contribute Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
