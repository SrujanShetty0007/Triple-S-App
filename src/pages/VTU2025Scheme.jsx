import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { scheme2025Subjects, semesters2025 } from '../data/scheme2025';
import SubjectGrid from '../components/subjects/SubjectGrid';
import SemesterFilter from '../components/subjects/SemesterFilter';
import SEO from '../components/common/SEO';

const VTU2025Scheme = () => {
  const [activeSemester, setActiveSemester] = useState('sem1');
  const [searchQuery, setSearchQuery] = useState('');

  const getFilteredSubjects = () => {
    let filtered = activeSemester === 'all'
      ? Object.entries(scheme2025Subjects).flatMap(([sem, subjs]) => 
          subjs.map(subj => ({ ...subj, semester: sem }))
        )
      : scheme2025Subjects[activeSemester] || [];

    if (searchQuery.trim()) {
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.code.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="VTU 2025 Scheme Notes, Syllabus & Question Papers | Triple-S"
        description="Download VTU 2025 scheme notes, syllabus and previous year question papers. Complete study materials for VTU new curriculum."
        keywords="VTU 2025 scheme notes, VTU 2025 syllabus pdf, VTU 2025 question papers, VTU new scheme 2025, VTU 2025 study materials, VTU semester notes, engineering notes VTU"
        url="https://triple-s.netlify.app/vtu-2025-scheme"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "VTU 2025 Scheme Study Materials",
          "description": "Complete collection of VTU 2025 scheme notes, syllabus and question papers",
          "url": "https://triple-s.netlify.app/vtu-2025-scheme"
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4">
            📚 Complete Study Materials
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            VTU 2025 Scheme Complete Study Materials
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Download notes, syllabus PDFs, previous year question papers and model papers for all VTU 2025 scheme subjects
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">✓ VTU 2025 Notes</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">✓ Syllabus PDFs</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">✓ Question Papers</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">✓ Free Download</span>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="container mx-auto px-4 py-8 -mt-6 relative z-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-2 flex items-center gap-2">
            <FaSearch className="text-slate-400 ml-3" />
            <input
              type="text"
              placeholder="Search VTU 2025 scheme subjects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-3 outline-none text-slate-700 placeholder:text-slate-400"
            />
            <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Semester Filter */}
      <section className="container mx-auto px-4 pb-4">
        <SemesterFilter activeSemester={activeSemester} onFilterChange={setActiveSemester} />
      </section>

      {/* Results Header */}
      <section className="container mx-auto px-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              {searchQuery ? `Results for "${searchQuery}"` : semesters2025.find(s => s.key === activeSemester)?.name || 'All Subjects'}
            </h2>
            <p className="text-slate-500 text-sm">{getFilteredSubjects().length} subjects found</p>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="container mx-auto px-4 pb-16">
        {getFilteredSubjects().length > 0 ? (
          <SubjectGrid subjects={getFilteredSubjects()} />
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center border border-slate-100">
            <FaSearch className="text-4xl text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-700 mb-2">No subjects found</h3>
            <p className="text-slate-500 text-sm">
              {searchQuery ? `No subjects match "${searchQuery}"` : 'Materials for this semester will be available soon.'}
            </p>
          </div>
        )}
      </section>

      {/* SEO Content */}
      <section className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-slate-800 mb-4">VTU 2025 Scheme – Complete Guide</h2>
          <div className="prose prose-slate prose-sm max-w-none">
            <p className="text-slate-600 mb-4">
              The <strong>VTU 2025 scheme</strong> introduces updated curriculum and syllabus for engineering students. 
              Triple-S provides comprehensive study materials including detailed notes, syllabus PDFs, previous year 
              question papers, and model papers aligned with the new VTU 2025 curriculum.
            </p>
            <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Available Resources:</h3>
            <ul className="text-slate-600 list-disc pl-5 space-y-1">
              <li><strong>VTU 2025 Notes</strong> – Chapter-wise detailed notes for all subjects</li>
              <li><strong>VTU 2025 Syllabus</strong> – Official syllabus PDFs for each subject</li>
              <li><strong>VTU 2025 Question Papers</strong> – Previous year and model papers</li>
              <li><strong>VTU 2025 Study Materials</strong> – Reference books and additional resources</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VTU2025Scheme;
