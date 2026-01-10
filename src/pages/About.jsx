import { FaBullseye, FaBook, FaFileAlt, FaHistory, FaUsers, FaMobileAlt, FaLayerGroup, FaLinkedinIn, FaGithub, FaInstagram, FaBookOpen } from 'react-icons/fa';
import HeroSection from '../components/common/HeroSection';
import adminImage from '../assets/images/admin.jpg';

const About = () => {
  const features = [
    { icon: <FaBook />, title: "Comprehensive Notes", desc: "Well-organized study notes for each subject, broken down by module.", color: 'from-blue-500 to-cyan-500' },
    { icon: <FaFileAlt />, title: "Model Question Papers", desc: "Practice with carefully crafted model papers for exam preparation.", color: 'from-orange-500 to-amber-500' },
    { icon: <FaHistory />, title: "Previous Year Papers", desc: "Access previous year papers to understand exam patterns.", color: 'from-purple-500 to-pink-500' },
    { icon: <FaUsers />, title: "Community Driven", desc: "Platform thrives on student contributions for knowledge sharing.", color: 'from-green-500 to-emerald-500' },
    { icon: <FaMobileAlt />, title: "Device Friendly", desc: "Access materials on any device with responsive design.", color: 'from-red-500 to-rose-500' },
    { icon: <FaLayerGroup />, title: "Semester Organized", desc: "Materials neatly organized by semester and subject.", color: 'from-indigo-500 to-violet-500' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection 
        badge={<div className="flex items-center gap-2"><FaBookOpen className="text-blue-400" /> About Us</div>} 
        title="About Triple S" 
        subtitle="Student Study Support - Your comprehensive resource platform for B.E. students"
      />

      <div className="container mx-auto px-4 py-16 space-y-20">
        
        {/* Our Mission */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                <FaBullseye className="text-white text-3xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                <span className="font-bold text-slate-800">Triple S (Student Study Support)</span> is dedicated to providing a comprehensive, well-organized, and free resource platform for B.E. students. We believe that access to quality study materials should be easy and free for all students.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-slate-100 hover:border-blue-200">
                <div className={`w-14 h-14 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h3>
                <p className="text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-3xl shadow-xl p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm font-medium mb-6">
                <FaBook /> Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-blue-100/80 text-lg leading-relaxed">
                <p><span className="font-bold text-white">Triple S</span> started as a simple project by <span className="font-bold text-white">Srujan S Shetty</span>, an engineering student at Moodlakatte Institute of Technology who recognized the challenges faced by fellow students.</p>
                <p>The idea was simple: create a clean, minimal, and user-friendly platform where students can quickly access the study materials they need without any distractions.</p>
                <p>Today, Triple S continues to expand its collection while maintaining its core values of simplicity, accessibility, and community collaboration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet The Administrator */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Meet The Administrator</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl mb-4">
                  <img src={adminImage} alt="Srujan S Shetty" className="w-full h-full object-cover"/>
                </div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white uppercase">Admin</span>
              </div>
              <div className="md:w-2/3 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">Srujan S Shetty</h3>
                <p className="text-blue-600 font-medium mb-6">Founder & Developer</p>
                <p className="text-slate-600 mb-6 leading-relaxed">I am a passionate engineering student and web developer who created Triple S to solve a common problem faced by students - finding quality study materials in one organized place.</p>
                <div className="flex gap-3">
                  {[FaLinkedinIn, FaGithub, FaInstagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-11 h-11 bg-slate-100 hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition-all">
                      <Icon />
                    </a>
                  ))}
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
