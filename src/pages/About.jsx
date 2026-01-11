import { FaBullseye, FaBook, FaFileAlt, FaHistory, FaUsers, FaMobileAlt, FaLayerGroup, FaLinkedinIn, FaGithub, FaInstagram, FaInfoCircle } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import adminImage from '../assets/images/admin.jpg';
import { CONTACT } from '../utils/constants';

const About = () => {
  const features = [
    { icon: <FaBook />, title: "Comprehensive Notes", desc: "Well-organized study notes for each subject", color: 'bg-blue-600' },
    { icon: <FaFileAlt />, title: "Model Papers", desc: "Practice with carefully crafted model papers", color: 'bg-green-600' },
    { icon: <FaHistory />, title: "Previous Year Papers", desc: "Access PYQs to understand exam patterns", color: 'bg-purple-600' },
    { icon: <FaUsers />, title: "Community Driven", desc: "Platform thrives on student contributions", color: 'bg-orange-500' },
    { icon: <FaMobileAlt />, title: "Device Friendly", desc: "Access on any device with responsive design", color: 'bg-cyan-600' },
    { icon: <FaLayerGroup />, title: "Semester Organized", desc: "Materials organized by semester and subject", color: 'bg-indigo-600' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About Triple-S | Student Study Support Platform"
        description="Triple S is a comprehensive platform providing free VTU engineering study materials, notes, model papers, and PYQs."
        keywords="about Triple S, student study support, VTU platform, engineering education, free study materials"
        url="https://triple-s.netlify.app/about"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold mb-6">
              <FaInfoCircle />
              <span>About Us</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              About Triple-S
            </h1>
            
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Student Study Support - Your comprehensive resource platform for VTU engineering students
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Our Mission */}
        <section className="max-w-4xl mx-auto text-center">
          <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
            <FaBullseye className="text-2xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            <strong className="text-slate-800">Triple-S (Student Study Support)</strong> is dedicated to providing a comprehensive, 
            well-organized, and free resource platform for B.E. students. We believe that access to quality study materials 
            should be easy and free for all students.
          </p>
        </section>

        {/* What We Offer */}
        <section>
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">What We Offer</h2>
            <p className="text-slate-500 mt-2">Everything you need to excel in your studies</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 ${f.color} rounded-lg flex items-center justify-center text-white text-xl mb-4`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-slate-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-slate-200">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2 mb-6">Built for Students, by Students</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-800">Triple-S</strong> started as a simple project by Srujan S Shetty, 
              an engineering student at Moodlakatte Institute of Technology who recognized the challenges faced by fellow students.
            </p>
            <p>
              The idea was simple: create a clean, minimal, and user-friendly platform where students can quickly 
              access the study materials they need without any distractions.
            </p>
            <p>
              Today, Triple-S continues to expand its collection while maintaining its core values of simplicity, 
              accessibility, and community collaboration.
            </p>
          </div>
        </section>

        {/* Administrator */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Team</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">Meet The Administrator</h2>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex flex-col items-center justify-center">
                <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-white/20 mb-4">
                  <img src={adminImage} alt="Srujan S Shetty" className="w-full h-full object-cover"/>
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-white uppercase">Admin</span>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-1">Srujan S Shetty</h3>
                <p className="text-blue-600 font-medium mb-4">Founder & Developer</p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A passionate engineering student and web developer who created Triple-S to solve a common problem 
                  faced by students finding quality study materials in one organized place.
                </p>
                <div className="flex gap-3">
                  <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-all">
                    <FaLinkedinIn />
                  </a>
                  <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-all">
                    <FaGithub />
                  </a>
                  <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-all">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
