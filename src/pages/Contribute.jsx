import { useState } from 'react';
import { FaUpload, FaEnvelope, FaWhatsapp, FaPaperPlane, FaCheckCircle, FaCloudUploadAlt } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { CONTACT } from '../utils/constants';

const Contribute = () => {
  const [fileName, setFileName] = useState('');

  const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'];
  const materialTypes = ['Notes', 'Model Question Papers', 'Previous Year Papers'];

  const handleFileChange = (e) => e.target.files[0] && setFileName(e.target.files[0].name);

  const benefits = [
    "Help thousands of students",
    "Build your academic reputation",
    "Contribute to the community",
    "Get credited for your work"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contribute Study Materials | Triple-S"
        description="Help thousands of VTU engineering students by contributing your study materials, notes, and question papers."
        keywords="contribute study materials VTU, upload engineering notes, share VTU notes"
        url="https://triple-s.netlify.app/contribute"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold mb-6">
              <FaCloudUploadAlt />
              <span>Share Your Knowledge</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Contribute Materials
            </h1>
            
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Help fellow students succeed by sharing your study materials with the community
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Submit Your Materials</h2>
              <p className="text-slate-500 text-sm mb-6">Fill out the form and we'll add your materials to the platform.</p>
              
              <form action="https://formsubmit.co/srujanshetty65@gmail.com" method="POST" encType="multipart/form-data" className="space-y-5">
                <input type="hidden" name="_subject" value="New Triple S Contribution" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Semester</label>
                    <select name="semester" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
                      <option value="">Select Semester</option>
                      {semesters.map(sem => <option key={sem} value={sem}>{sem}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Material Type</label>
                    <select name="materialType" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
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
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Upload File</label>
                  <input type="file" id="file" name="attachment" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} required className="hidden" />
                  <label htmlFor="file" className="flex flex-col items-center justify-center w-full px-6 py-8 border-2 border-dashed border-slate-300 rounded-lg hover:border-blue-500 cursor-pointer bg-slate-50 transition-all">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-3">
                      <FaUpload className="text-xl" />
                    </div>
                    <span className="text-slate-700 font-medium">{fileName || 'Click to upload file'}</span>
                    <span className="text-slate-400 text-sm mt-1">PDF, JPG, PNG (Max 150MB)</span>
                  </label>
                </div>

                <button type="submit" className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                  <FaPaperPlane /> Submit Contribution
                </button>

                <div className="grid grid-cols-2 gap-4">
                  <a href={`mailto:${CONTACT.email}`} className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
                    <FaEnvelope /> Via Email
                  </a>
                  <a href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
                    <FaWhatsapp /> Via WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits Card */}
            <div className="bg-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Why Contribute?</h3>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition-all">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase">Email</p>
                    <p className="text-slate-700 text-sm font-medium">{CONTACT.email}</p>
                  </div>
                </a>
                <a href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-green-300 transition-all">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase">WhatsApp</p>
                    <p className="text-slate-700 text-sm font-medium">{CONTACT.whatsapp}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
