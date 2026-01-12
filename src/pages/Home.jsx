import { Link } from 'react-router-dom';
import { FaDownload, FaBookOpen, FaFileAlt, FaGraduationCap, FaArrowRight, FaCheckCircle, FaClock } from 'react-icons/fa';
import SEO from '../components/common/SEO';

const Home = () => {
  const features = [
    { icon: <FaBookOpen />, title: 'Complete Notes', desc: 'Chapter-wise detailed notes for all subjects', color: 'bg-blue-600' },
    { icon: <FaFileAlt />, title: 'Question Papers', desc: 'Previous year papers and model papers', color: 'bg-green-600' },
    { icon: <FaGraduationCap />, title: 'Syllabus', desc: 'Updated syllabus PDFs for all semesters', color: 'bg-purple-600' },
    { icon: <FaDownload />, title: 'Free Downloads', desc: 'All materials available for free', color: 'bg-orange-500' }
  ];

  const schemes = [
    { 
      name: '2025 Scheme', 
      status: 'available', 
      desc: 'Latest VTU curriculum with updated syllabus',
      link: '/vtu-2025-scheme'
    },
    { 
      name: '2022 Scheme', 
      status: 'available', 
      desc: 'Complete study materials for 2022 scheme',
      link: '/vtu-2022-scheme'
    },
    { 
      name: '2018 Scheme', 
      status: 'coming', 
      desc: 'Study materials coming soon',
      link: null
    }
  ];

  const resources = [
    'VTU Notes PDF Download',
    'Previous Year Question Papers',
    'Model Papers with Solutions',
    'Syllabus & Study Guides'
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Triple-S | Student Study Support – VTU Notes, Syllabus & Question Papers"
        description="Triple-S is a student study support platform providing VTU notes, previous year question papers, syllabus and PDFs for all engineering branches. Free study materials for VTU students."
        keywords="Triple-S, student study support, VTU notes, VTU question papers, VTU syllabus, engineering study materials, VTU 2025 scheme, VTU 2022 scheme, free VTU notes"
        url="https://triple-s.netlify.app"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Triple-S - Student Study Support",
          "url": "https://triple-s.netlify.app",
          "description": "Student study support platform for VTU engineering students"
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold mb-6">
              <FaGraduationCap />
              <span>Student Study Support Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Triple-S
              <span className="block text-blue-200 mt-2">Your Complete VTU Study Companion</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Access comprehensive study materials including notes, syllabus, 
              previous year question papers and model papers for VTU engineering students.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/vtu-2025-scheme" 
                className="px-8 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <FaDownload /> Browse Study Materials
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 bg-blue-500 text-white rounded-xl font-bold text-lg hover:bg-blue-400 transition-all flex items-center justify-center gap-2"
              >
                About Triple-S
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scheme Cards */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              VTU Study Materials by Scheme
            </h2>
            <p className="text-slate-500 mt-2">Select your scheme to access study materials</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {schemes.map((scheme, i) => {
              const cardContent = (
                <>
                  {scheme.status === 'available' && (
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-4">
                      Available Now
                    </span>
                  )}
                  {scheme.status === 'coming' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full mb-4">
                      <FaClock className="text-xs" /> Coming Soon
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{scheme.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{scheme.desc}</p>
                  
                  {scheme.link ? (
                    <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      Access Materials <FaArrowRight className="text-sm" />
                    </span>
                  ) : (
                    <span className="text-slate-400 text-sm">Materials uploading...</span>
                  )}
                </>
              );

              return scheme.link ? (
                <Link 
                  key={i}
                  to={scheme.link}
                  className="group bg-white rounded-xl border-2 p-6 transition-all border-blue-500 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer block"
                >
                  {cardContent}
                </Link>
              ) : (
                <div 
                  key={i}
                  className="bg-white rounded-xl border-2 p-6 transition-all border-slate-200"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              What We Offer
            </h2>
            <p className="text-slate-500 mt-2">Everything you need for your VTU preparation</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${f.color} text-white rounded-lg flex items-center justify-center text-xl mb-4`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Complete Study Resources
              </h3>
              <p className="text-blue-100 mb-6">
                Triple-S provides comprehensive study materials for VTU engineering students.
                All resources are free to download and use.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resources.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link 
                to="/vtu-2025-scheme" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
              >
                Get Started <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
