import { Link } from 'react-router-dom';
import { FaCalculator, FaChartLine, FaSearch, FaGraduationCap, FaFileAlt, FaBell, FaBookOpen, FaCalendarAlt, FaUniversity, FaMapMarkerAlt, FaHistory, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';
import SEO from '../components/common/SEO';

const VTU = () => {
  const tools = [
    { 
      title: 'SGPA Calculator', 
      desc: 'Calculate your Semester Grade Point Average', 
      icon: <FaChartLine />, 
      path: '/sgpa-calculator',
      color: 'bg-blue-600'
    },
    { 
      title: 'CGPA Calculator', 
      desc: 'Calculate your Cumulative Grade Point Average', 
      icon: <FaCalculator />, 
      path: '/cgpa-calculator',
      color: 'bg-indigo-600'
    },
    { 
      title: 'Results Checker', 
      desc: 'Quick access to your VTU exam results', 
      icon: <FaSearch />, 
      path: 'https://results.vtu.ac.in/', 
      external: true,
      color: 'bg-purple-600'
    }
  ];

  const officialResources = [
    { title: 'Model Question Papers', desc: 'Download official model papers', icon: <FaFileAlt />, path: 'https://vtu.ac.in/model-question-paper-b-e-b-tech-b-arch/', color: 'bg-green-600' },
    { title: 'Exam Notifications', desc: 'Latest circulars & updates', icon: <FaBell />, path: 'https://vtu.ac.in/category/circulars/', color: 'bg-orange-500' },
    { title: 'Scheme & Syllabus', desc: 'B.E scheme and syllabus', icon: <FaBookOpen />, path: 'https://vtu.ac.in/b-e-scheme-syllabus/', color: 'bg-cyan-600' },
    { title: 'Exam Time Table', desc: 'View exam schedules', icon: <FaCalendarAlt />, path: 'https://vtu.ac.in/category/time-table/', color: 'bg-rose-600' }
  ];

  const universityInfo = [
    { label: 'University', value: 'Visvesvaraya Technological University (VTU)', icon: <FaUniversity className="text-blue-600" /> },
    { label: 'Location', value: 'Belagavi, Karnataka, India', icon: <FaMapMarkerAlt className="text-red-500" /> },
    { label: 'Established', value: '1 April 1998', icon: <FaHistory className="text-amber-500" /> },
    { label: 'Website', value: 'vtu.ac.in', link: 'https://vtu.ac.in/', icon: <FaGlobe className="text-emerald-500" /> },
    { label: 'Programmes', value: 'B.E/B.Tech, M.Tech, MCA, PhD', icon: <FaGraduationCap className="text-indigo-500" /> }
  ];

  const gradeSystem = [
    { range: '90-100', points: 10, grade: 'Outstanding', color: 'bg-emerald-100 text-emerald-700' },
    { range: '80-89', points: 9, grade: 'Excellent', color: 'bg-blue-100 text-blue-700' },
    { range: '70-79', points: 8, grade: 'Very Good', color: 'bg-cyan-100 text-cyan-700' },
    { range: '60-69', points: 7, grade: 'Good', color: 'bg-indigo-100 text-indigo-700' },
    { range: '50-59', points: 6, grade: 'Above Average', color: 'bg-violet-100 text-violet-700' },
    { range: '45-49', points: 5, grade: 'Average', color: 'bg-amber-100 text-amber-700' },
    { range: '40-44', points: 4, grade: 'Pass', color: 'bg-orange-100 text-orange-700' },
    { range: 'Below 40', points: 0, grade: 'Fail', color: 'bg-red-100 text-red-700' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="VTU Portal | SGPA CGPA Calculator, Results & Resources | Triple-S"
        description="VTU portal for engineering students. Access SGPA calculator, CGPA calculator, exam results, model papers, timetables, and official resources."
        keywords="VTU SGPA calculator, VTU CGPA calculator, VTU results, VTU grading system, VTU official resources, VTU model papers, VTU timetable"
        url="https://triple-s.netlify.app/vtu"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold mb-6">
              <FaUniversity />
              <span>VTU Portal</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              VTU Resources & Tools
            </h1>
            
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Your one-stop destination for VTU calculators, results, and official academic resources.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Tools</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">
              VTU Calculators & Results
            </h2>
            <p className="text-slate-500 mt-2">Quick access to essential student tools</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tools.map((tool) => {
              const Wrapper = tool.external ? 'a' : Link;
              const props = tool.external 
                ? { href: tool.path, target: "_blank", rel: "noopener noreferrer" } 
                : { to: tool.path };

              return (
                <Wrapper key={tool.title} {...props} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
                  <div className={`w-12 h-12 ${tool.color} text-white rounded-lg flex items-center justify-center text-xl mb-4`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{tool.title}</h3>
                  <p className="text-slate-500 text-sm">{tool.desc}</p>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Official Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Quick Access</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">
              Official VTU Resources
            </h2>
            <p className="text-slate-500 mt-2">Direct links to official VTU portals</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {officialResources.map((resource) => (
              <a 
                key={resource.title} 
                href={resource.path} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 ${resource.color} text-white rounded-lg flex items-center justify-center text-xl mb-4`}>
                  {resource.icon}
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{resource.title}</h3>
                <p className="text-slate-500 text-sm">{resource.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Info & Grading Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* About University */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <FaUniversity className="text-blue-600" /> 
                  About VTU
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {universityInfo.map((info, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 text-lg">{info.icon}</div>
                      <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{info.label}</div>
                        <div className="text-slate-700 font-medium">
                          {info.link ? (
                            <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                              {info.value} <FaExternalLinkAlt className="text-xs" />
                            </a>
                          ) : info.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grading System */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <FaChartLine className="text-indigo-600" />
                  VTU Grading System
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 text-xs font-semibold text-slate-400 uppercase tracking-wider pb-3 border-b border-slate-100">
                  <span>Marks</span>
                  <span className="text-center">Points</span>
                  <span className="text-right">Grade</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {gradeSystem.map((g, i) => (
                    <div key={i} className="grid grid-cols-3 py-3 items-center">
                      <span className="text-slate-700 font-medium text-sm">{g.range}</span>
                      <div className="text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${g.color}`}>
                          {g.points}
                        </span>
                      </div>
                      <span className="text-right text-slate-600 text-sm">{g.grade}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VTU;
