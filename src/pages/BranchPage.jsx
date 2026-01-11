import { useParams, Link, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaBookOpen } from 'react-icons/fa';
import { getBranchBySlug, semesters } from '../data/branches';
import SEO from '../components/common/SEO';

const BranchPage = () => {
  const location = useLocation();
  const branchSlug = location.pathname.split('/')[1];
  const branchData = getBranchBySlug(branchSlug);

  if (!branchData) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Branch Not Found</h1>
          <Link to="/vtu-2025-scheme" className="text-blue-600 hover:underline">← Back to VTU 2025 Scheme</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title={`VTU 2025 Scheme ${branchData.shortName} Notes & Question Papers | Triple-S`}
        description={`Download VTU 2025 scheme ${branchData.name} notes, syllabus and question papers. Complete semester-wise study materials for ${branchData.shortName} students.`}
        keywords={`VTU 2025 ${branchData.shortName} notes, VTU ${branchData.shortName} syllabus, VTU ${branchData.shortName} question papers, ${branchData.name} VTU 2025`}
        url={`https://triple-s.netlify.app/${branchData.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": `VTU 2025 ${branchData.shortName} Study Materials`,
          "description": branchData.description,
          "url": `https://triple-s.netlify.app/${branchData.slug}`
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/vtu-2025-scheme" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-4 transition-colors">
            <FaArrowLeft className="text-xs" /> Back to VTU 2025 Scheme
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{branchData.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                VTU 2025 Scheme – {branchData.name}
              </h1>
              <p className="text-blue-200 mt-1">{branchData.shortName} Study Materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Semesters Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Select Semester</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {semesters.map(sem => (
            <Link
              key={sem.id}
              to={`/${branchData.slug}/${sem.slug}`}
              className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <FaBookOpen className="text-blue-600 text-xl mb-2" />
                  <h3 className="font-bold text-slate-800">{sem.name}</h3>
                  <p className="text-sm text-slate-500">View subjects</p>
                </div>
                <FaArrowRight className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            VTU 2025 {branchData.shortName} – Study Materials
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Access comprehensive <strong>VTU 2025 scheme {branchData.name}</strong> study materials. 
            Triple-S provides semester-wise notes, syllabus PDFs, previous year question papers, 
            and model papers for all {branchData.shortName} subjects. Our materials are aligned with 
            the latest VTU 2025 curriculum and help students prepare effectively for their exams.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BranchPage;
