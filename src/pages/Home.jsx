import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowUp, FaQuoteLeft, FaCommentDots, FaUserGraduate } from 'react-icons/fa';
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
    { name: "Samson", role: "AIML, 2nd Year", text: "The Applied Chemistry notes from Triple S were incredibly detailed. The previous year papers helped me ace my first semester exam!", avatar: <FaUserGraduate /> },
    { name: "Priya", role: "CSE, 3rd Year", text: "Triple S has been a lifesaver! The organized materials and easy navigation made my exam preparation so much easier.", avatar: <FaUserGraduate /> },
    { name: "Rahul", role: "ECE, 1st Year", text: "Best platform for VTU students! The 2025 scheme materials are well organized and the SGPA calculator is super helpful.", avatar: <FaUserGraduate /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Triple S - Student Study Support | Engineering Study Materials"
        description="Triple S - Student Study Support provides curated notes, model papers, and previous year question papers for engineering students to excel in their exams."
        keywords="student study support, engineering notes, model papers, previous year papers, exam preparation, VTU, engineering education, BE notes, BTech notes"
        url="https://triple-s.netlify.app/"
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
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-1.5 sm:p-2 border border-white/50">
            <div className="flex items-center gap-1 sm:gap-2">
              <FaSearch className="text-slate-400 ml-2 sm:ml-4 text-base sm:text-lg flex-shrink-0" />
              <input
                type="text"
                placeholder="Search subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-slate-700 outline-none rounded-xl bg-transparent placeholder:text-slate-400"
              />
              <button className="hidden sm:flex px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all items-center gap-2">
                <FaSearch className="sm:hidden" />
                <span className="hidden sm:inline">Search</span>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm font-medium text-white mb-4">
              <FaCommentDots /> What Students Say
            </span>
            <h2 className="text-4xl font-bold text-white">Student Testimonials</h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/10">
              <FaQuoteLeft className="text-5xl text-white/20 mb-6" />
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-3xl">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-white/60">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              
              {/* Navigation dots */}
              <div className="flex justify-center gap-3 mt-10">
                {testimonials.map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentTestimonial(idx)}
                    className={`h-2 rounded-full transition-all ${idx === currentTestimonial ? 'bg-white w-8' : 'bg-white/30 w-2 hover:bg-white/50'}`} />
                ))}
              </div>
            </div>

            {/* Nav buttons */}
            <button onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 bg-white/10 backdrop-blur-xl hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl border border-white/10">
              ‹
            </button>
            <button onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 bg-white/10 backdrop-blur-xl hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl border border-white/10">
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}

    </div>
  );
};

export default Home;
