import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaQuoteLeft, FaUserGraduate, FaChevronLeft, FaChevronRight, FaCheck, FaArrowRight } from 'react-icons/fa';
import { subjects } from '../data/subjects';
import HeroSection from '../components/common/HeroSection';
import SubjectGrid from '../components/subjects/SubjectGrid';
import SemesterFilter from '../components/subjects/SemesterFilter';
import SEO from '../components/common/SEO';
import { APP_NAME, APP_DESCRIPTION } from '../utils/constants';

const Home = () => {
  const [activeSemester, setActiveSemester] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const getFilteredSubjects = () => {
    let filtered = activeSemester === 'all' 
      ? Object.entries(subjects).flatMap(([sem, subjs]) => subjs.map(subj => ({ ...subj, semester: sem })))
      : subjects[activeSemester] || [];
    if (searchQuery) {
      filtered = filtered.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.code.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return filtered;
  };

  const testimonials = [
    { name: "Samson", role: "AIML, 2nd Year", text: "The Applied Chemistry notes from Triple S were incredibly detailed. The previous year papers helped me ace my first semester exam!" },
    { name: "Priya", role: "CSE, 3rd Year", text: "Triple S has been a lifesaver! The organized materials and easy navigation made my exam preparation so much easier." },
    { name: "Rahul", role: "ECE, 1st Year", text: "Best platform for VTU students! The 2025 scheme materials are well organized and the SGPA calculator is super helpful." }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Triple S | VTU Engineering Notes, Model Papers & Previous Year Question Papers"
        description="Download free VTU notes, model papers, and previous year question papers for all engineering branches. Complete study materials for CSE, ISE, ECE, Mechanical, Civil - VTU 2022 scheme. Latest syllabus, PYQs, and semester-wise resources for engineering students."
        keywords="VTU notes pdf download, VTU previous year papers, VTU model papers, engineering study materials, VTU 2022 scheme notes, VTU question papers with solutions, VTU CSE notes, VTU ISE notes, VTU ECE notes, free engineering notes, semester wise notes VTU, VTU syllabus, VTU CBCS scheme, BE engineering notes, student study support, Karnataka VTU, engineering exam preparation, VTU resources"
        url="https://triple-s.netlify.app"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Triple S - Student Study Support",
          "alternateName": "Triple S",
          "url": "https://triple-s.netlify.app",
          "logo": "https://triple-s.netlify.app/assets/images/logo1.png",
          "description": "Triple S provides comprehensive VTU engineering study materials including notes, model papers, and previous year question papers for all branches and semesters.",
          "foundingDate": "2024",
          "founder": {
            "@type": "Person",
            "name": "Srujan S Shetty"
          },
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "knowsAbout": ["Engineering Education", "VTU Curriculum", "Engineering Study Materials", "Academic Resources"],
          "educationalCredentialAwarded": "Study Materials and Resources",
          "sameAs": [
            "https://github.com/srujanshetty0007",
            "https://www.linkedin.com/in/srujan-shetty0007/"
          ]
        }}
      />
      <HeroSection title={APP_NAME} subtitle={APP_DESCRIPTION}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/2025-scheme"
            className="px-8 py-4 bg-white text-slate-800 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-center">
            2025 Scheme
          </Link>
          <Link to="/about"
            className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center">
            More About Us
          </Link>
        </div>
      </HeroSection>

      {/* Search Section */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-2 border border-slate-100">
            <div className="flex items-center gap-2">
              <FaSearch className="text-slate-400 ml-4 text-lg flex-shrink-0" />
              <input
                type="text"
                placeholder="Search subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-4 text-base text-slate-700 outline-none rounded-xl bg-transparent placeholder:text-slate-400"
              />
              <button className="hidden sm:flex px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors items-center gap-2 font-medium">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Semester Filter */}
      <section className="container mx-auto px-4 py-8">
        <SemesterFilter activeSemester={activeSemester} onFilterChange={setActiveSemester} />
      </section>

      {/* Subjects Section */}
      <section id="explore-material" className="container mx-auto px-4 pb-16">
        {activeSemester !== 'all' && (
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-800">Semester {activeSemester.replace('sem', '')}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          </div>
        )}
        <SubjectGrid subjects={getFilteredSubjects()} />
      </section>

      {/* Testimonials Section - Clean Design */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">What Students Say</h2>
          </div>
          
          {/* Testimonials Container */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
              {/* Quote Icon */}
              <FaQuoteLeft className="text-4xl text-blue-100 absolute top-8 left-8" />
              
              {/* Testimonial Content */}
              <div className="text-center pt-8">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                    <FaUserGraduate />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-slate-500 text-sm">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-full flex items-center justify-center transition-colors"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 rounded-full flex items-center justify-center transition-colors"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
            
            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2.5 rounded-full transition-all ${idx === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-slate-300 w-2.5 hover:bg-slate-400'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Before Footer */}
      <section className="relative bg-slate-100">
        <div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 md:py-16 relative overflow-hidden"
          style={{ clipPath: 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)' }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left Content */}
              <div className="max-w-xl text-center lg:text-left">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest">
                  ✦ Ready to Start?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Accelerate Your<br className="hidden md:block" /> Engineering Preparation
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/90">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <FaCheck className="text-green-400 font-bold" /> Free Access
                  </span>
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <FaCheck className="text-green-400 font-bold" /> 2025 Scheme
                  </span>
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <FaCheck className="text-green-400 font-bold" /> Expert Notes
                  </span>
                </div>
              </div>
              
              {/* Right Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/2025-scheme" 
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/10"
                >
                  Explore Now <FaArrowRight size={16} />
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white/10 text-white border-2 border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  Contact Us <FaArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
