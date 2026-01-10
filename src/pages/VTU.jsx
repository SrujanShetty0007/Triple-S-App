import { Link } from 'react-router-dom';
import { FaCalculator, FaChartLine, FaSearch, FaGraduationCap, FaFileAlt, FaBell, FaBookOpen, FaCalendarAlt, FaUniversity, FaMapMarkerAlt, FaHistory, FaGlobe } from 'react-icons/fa';
import HeroSection from '../components/common/HeroSection';
import SEO from '../components/common/SEO';

const VTU = () => {
  const tools = [
    { 
      title: 'SGPA Calculator', 
      desc: 'Calculate your Semester Grade Point Average with ease', 
      icon: <FaChartLine />, 
      path: '/sgpa-calculator', 
      color: 'from-blue-500 to-indigo-600',
      badge: 'Available Now'
    },
    { 
      title: 'CGPA Calculator', 
      desc: 'Calculate your Cumulative Grade Point Average', 
      icon: <FaCalculator />, 
      path: '/cgpa-calculator', 
      color: 'from-indigo-500 to-purple-600',
      badge: 'Available Now'
    },
    { 
      title: 'Results Checker', 
      desc: 'Quick access to your VTU exam results', 
      icon: <FaSearch />, 
      path: 'https://results.vtu.ac.in/', 
      external: true, 
      color: 'from-purple-500 to-pink-600',
      badge: 'Check Now'
    }
  ];

  const officialResources = [
    { title: 'Model Question Papers', icon: <FaFileAlt />, path: 'https://vtu.ac.in/model-question-paper-b-e-b-tech-b-arch/' },
    { title: 'Exam Circulars & Notifications', icon: <FaBell />, path: 'https://vtu.ac.in/category/circulars/' },
    { title: 'B.E Scheme & Syllabus', icon: <FaBookOpen />, path: 'https://vtu.ac.in/b-e-scheme-syllabus/' },
    { title: 'Exam Time Table', icon: <FaCalendarAlt />, path: 'https://vtu.ac.in/category/time-table/' }
  ];

  const universityInfo = [
    { label: 'Name', value: 'Visvesvaraya Technological University (VTU)', icon: <FaUniversity className="text-blue-500" /> },
    { label: 'Location', value: 'Belagavi, Karnataka, India', icon: <FaMapMarkerAlt className="text-red-500" /> },
    { label: 'Established', value: '1 April 1998', icon: <FaHistory className="text-amber-500" /> },
    { label: 'Website', value: 'VTU Official Website', link: 'https://vtu.ac.in/', icon: <FaGlobe className="text-emerald-500" /> },
    { label: 'Academic Programmes', value: 'B.E/B.Tech, B.Arch, M.Tech, M.Arch, BSc, MSc, MCA, PhD', icon: <FaGraduationCap className="text-indigo-500" /> }
  ];

  const gradeSystem = [
    { range: '90-100', points: 10, grade: 'Outstanding', color: 'text-emerald-600 bg-emerald-50' },
    { range: '80-89', points: 9, grade: 'Excellent', color: 'text-blue-600 bg-blue-50' },
    { range: '70-79', points: 8, grade: 'Very Good', color: 'text-cyan-600 bg-cyan-50' },
    { range: '60-69', points: 7, grade: 'Good', color: 'text-indigo-600 bg-indigo-50' },
    { range: '50-59', points: 6, grade: 'Above Average', color: 'text-violet-600 bg-violet-50' },
    { range: '45-49', points: 5, grade: 'Average', color: 'text-amber-600 bg-amber-50' },
    { range: '40-44', points: 4, grade: 'Pass', color: 'text-orange-600 bg-orange-50' },
    { range: 'Below 40', points: 0, grade: 'Fail', color: 'text-red-600 bg-red-50' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="VTU Resources & Tools | SGPA CGPA Calculator, Results"
        description="Access VTU resources including SGPA Calculator, CGPA Calculator, exam results, model question papers, and official VTU circulars. Your one-stop VTU portal."
        keywords="VTU, SGPA calculator, CGPA calculator, VTU results, VTU exam, Visvesvaraya Technological University, VTU grade calculator"
        url="https://triple-s.netlify.app/vtu"
      />
      <HeroSection 
        badge={<div className="flex items-center gap-2"><FaUniversity className="text-blue-300" /> VTU Portal</div>} 
        title="VTU Resources & Tools" 
        subtitle="Your one-stop destination for VTU results, calculators, and academic resources. Fast, reliable, and designed specifically for VTU students."
      />

      <div className="container mx-auto px-4 py-12 -mt-16 relative z-10">
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tools.map((tool) => {
            const Wrapper = tool.external ? 'a' : Link;
            const props = tool.external 
              ? { href: tool.path, target: "_blank", rel: "noopener noreferrer" } 
              : { to: tool.path };

            return (
              <Wrapper key={tool.title} {...props} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 transform translate-y-4"></div>
                <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden border border-white/50 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 h-full">
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full border border-blue-100 uppercase tracking-wider">
                    {tool.badge}
                  </div>

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {tool.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{tool.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{tool.desc}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* Official Resources Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 relative inline-block">
              Official VTU Resources
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {officialResources.map((resource) => (
              <a 
                key={resource.title} 
                href={resource.path} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {resource.icon}
                </div>
                <h3 className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">{resource.title}</h3>
              </a>
            ))}
          </div>
        </div>

        {/* About University & Grading System Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* About University */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <FaUniversity className="text-blue-600" /> 
                About University
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {universityInfo.map((info, idx) => (
                  <div key={idx} className="flex gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-50 last:border-0">
                    <div className="mt-1 flex-shrink-0 text-lg opacity-80">{info.icon}</div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">{info.label}</div>
                      <div className="text-slate-800 font-medium">
                        {info.link ? (
                          <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                            {info.value} <FaGlobe className="text-[10px]" />
                          </a>
                        ) : info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50/50 rounded-xl text-sm text-slate-600 leading-relaxed border border-blue-100">
                <strong>About VTU:</strong> The official VTU website provides students and faculty with comprehensive access to results, notifications, academic resources, and important updates.
              </div>
            </div>
          </div>

          {/* Grading System */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <FaChartLine className="text-indigo-600" />
                Grading System
              </h2>
              <span className="text-xs font-bold px-2 py-1 bg-indigo-100 text-indigo-700 rounded uppercase">Reference</span>
            </div>
            <div className="p-0">
              <div className="grid grid-cols-3 bg-slate-50 text-slate-500 font-semibold text-xs uppercase tracking-wider py-3 px-4 border-b border-slate-200">
                <span>Range</span>
                <span className="text-center">Points</span>
                <span className="text-right">Grade</span>
              </div>
              <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                {gradeSystem.map((g, i) => (
                  <div key={i} className="grid grid-cols-3 px-4 py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors items-center">
                    <span className="font-medium text-slate-700">{g.range}</span>
                    <div className="text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${g.color}`}>
                        {g.points}
                      </span>
                    </div>
                    <span className="text-right font-medium text-slate-600">{g.grade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VTU;
