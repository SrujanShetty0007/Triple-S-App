import { useState } from 'react';
import { FaUpload, FaEnvelope, FaWhatsapp, FaPaperPlane, FaCheckCircle, FaCloudUploadAlt, FaHeadset } from 'react-icons/fa';
import HeroSection from '../components/common/HeroSection';
import { CONTACT } from '../utils/constants';

const Contribute = () => {
  const [formData, setFormData] = useState({ name: '', email: '', semester: '', subject: '', materialType: '' });
  const [fileName, setFileName] = useState('');

  const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'];
  const materialTypes = ['Notes', 'Model Question Papers', 'Previous Year Papers'];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => e.target.files[0] && setFileName(e.target.files[0].name);

  const handleSubmit = (e) => {
    // Standard form submission to formsubmit.co will happen via the form's action and method
  };

  const shareViaWhatsApp = () => {
    const message = `Hi! I want to contribute study materials:\nName: ${formData.name}\nSemester: ${formData.semester}\nSubject: ${formData.subject}\nMaterial Type: ${formData.materialType}`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const benefits = [
    "Help thousands of students",
    "Build your academic reputation",
    "Contribute to the community",
    "Get credited for your work"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection 
        badge={<div className="flex items-center gap-2"><FaCloudUploadAlt className="text-blue-400" /> Share Your Knowledge</div>} 
        title="Contribute Materials" 
        subtitle="Help fellow students succeed by sharing your study materials with the community"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Submit Your Materials</h2>
              <p className="text-slate-500 mb-8">Fill out the form and we'll add your materials to the platform.</p>
              
              <form action="https://formsubmit.co/srujanshetty65@gmail.com" method="POST" encType="multipart/form-data" className="space-y-6">
                {/* FormSubmit.co hidden fields */}
                <input type="hidden" name="_subject" value="New Triple S Contribution" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[{ name: 'name', label: 'Your Name', placeholder: 'Enter your name' },
                    { name: 'email', label: 'Email Address', placeholder: 'Enter your email', type: 'email' }
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">{field.label}</label>
                      <input
                        type={field.type || 'text'}
                        name={field.name}
                        required
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Semester</label>
                    <select name="semester" required
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none">
                      <option value="">Select Semester</option>
                      {semesters.map(sem => <option key={sem} value={sem}>{sem}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Material Type</label>
                    <select name="materialType" required
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none">
                      <option value="">Select Type</option>
                      {materialTypes.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject Name</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="e.g., Applied Mathematics"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Upload File</label>
                  <input type="file" id="file" name="attachment" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} required className="hidden" />
                  <label htmlFor="file" className="flex flex-col items-center justify-center w-full px-6 py-8 border-2 border-dashed border-slate-300 rounded-xl hover:border-blue-500 cursor-pointer bg-slate-50 hover:bg-blue-50/50 transition-all group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                      <FaUpload className="text-xl" />
                    </div>
                    <span className="text-slate-700 font-medium">{fileName || 'Click to upload file'}</span>
                    <span className="text-slate-400 text-sm mt-1">PDF, JPG, PNG (Max 150MB)</span>
                  </label>
                </div>

                <button type="submit" className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <FaPaperPlane /> Submit Contribution
                </button>

                <div className="grid grid-cols-2 gap-4">
                  <a href={`mailto:srujanshetty0007@gmail.com`} className="px-4 py-3.5 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
                    <FaEnvelope /> Via Email
                  </a>
                  <button type="button" onClick={shareViaWhatsApp} className="px-4 py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
                    <FaWhatsapp /> Via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Benefits Card */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Why Contribute?</h3>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-green-400 text-sm" />
                    </div>
                    <span className="text-blue-100">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Admin Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FaHeadset /> Need Help?
                </h3>
                <p className="text-blue-100 text-sm mt-1">Contact us for any questions</p>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { icon: <FaEnvelope />, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, bg: 'bg-blue-50' },
                  { icon: <FaWhatsapp />, label: 'WhatsApp', value: CONTACT.whatsapp, href: `https://wa.me/${CONTACT.whatsapp}`, bg: 'bg-green-50' }
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 ${item.bg} rounded-xl hover:scale-[1.02] transition-transform`}>
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-medium">{item.label}</p>
                      <p className="text-slate-700 font-semibold">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
