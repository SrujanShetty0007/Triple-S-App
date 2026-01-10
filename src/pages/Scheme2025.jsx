import { useState } from 'react';
import { FaSearch, FaGraduationCap } from 'react-icons/fa';
import { scheme2025Subjects, semesters2025 } from '../data/scheme2025';
import HeroSection from '../components/common/HeroSection';
import SubjectGrid from '../components/subjects/SubjectGrid';
import SemesterFilter from '../components/subjects/SemesterFilter';
import SEO from '../components/common/SEO';

const Scheme2025 = () => {
  const [activeSemester, setActiveSemester] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getFilteredSubjects = () => {
    let filtered = activeSemester === 'all'
      ? Object.entries(scheme2025Subjects).flatMap(([sem, subjs]) => 
          subjs.map(subj => ({ ...subj, semester: sem }))
        )
      : scheme2025Subjects[activeSemester] || [];

    if (searchQuery.trim()) {
      filtered = filtered.filter(subject =>
        subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.code.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="VTU 2025 Scheme Notes & Study Materials | New Curriculum Resources"
        description="Access comprehensive study materials for VTU 2025 scheme (new curriculum). Download free notes, model papers, and previous year question papers for all semesters. Updated materials for the latest VTU syllabus, semester-wise resources, and complete coverage of all engineering branches."
        keywords="VTU 2025 scheme notes, VTU new syllabus 2025, 2025 scheme study materials, VTU latest curriculum, VTU new scheme subjects, VTU 2025 syllabus pdf, engineering 2025 scheme notes, VTU updated curriculum, semester notes 2025 scheme, VTU new pattern questions"
        url="https://triple-s.netlify.app/2025-scheme"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "VTU 2025 Scheme Study Materials",
          "description": "Comprehensive collection of study materials for VTU 2025 scheme",
          "about": {
            "@type": "EducationalOccupationalProgram",
            "name": "VTU 2025 Scheme Engineering Curriculum"
          }
        }}
      />
      <HeroSection 
        badge={<div className="flex items-center gap-2"><FaGraduationCap className="text-blue-400" /> VTU 2025 Scheme</div>} 
        title="2025 Scheme" 
        subtitle="Access comprehensive study materials for the new VTU 2025 scheme curriculum"
      />

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
              <button className="w-10 h-10 sm:w-auto sm:h-auto sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center sm:gap-2">
                <FaSearch className="text-sm sm:text-base" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Semester Filter */}
      <section className="container mx-auto px-4 py-8">
        <SemesterFilter 
          activeSemester={activeSemester}
          onFilterChange={setActiveSemester}
        />
      </section>

      {/* Search/Semester Title */}
      {(activeSemester !== 'all' || searchQuery) && (
        <section className="container mx-auto px-4 mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              {searchQuery ? `Results for "${searchQuery}"` : semesters2025.find(s => s.key === activeSemester)?.name}
            </h2>
            <p className="text-slate-500">{getFilteredSubjects().length} subjects found</p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </section>
      )}

      {/* Subjects Grid */}
      <section className="container mx-auto px-4 pb-16">
        {getFilteredSubjects().length > 0 ? (
          <SubjectGrid subjects={getFilteredSubjects()} />
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center border border-slate-100">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="text-3xl text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No subjects found</h3>
            <p className="text-slate-500">
              {searchQuery ? `No subjects match "${searchQuery}"` : 'No subjects available for this semester yet.'}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Scheme2025;
