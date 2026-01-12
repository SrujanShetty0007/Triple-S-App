const SemesterFilter = ({ onFilterChange, activeSemester }) => {
  const semesters = [
    { id: 'all', label: 'All Semesters' },
    { id: 'sem1', label: 'Semester 1' },
    { id: 'sem2', label: 'Semester 2' },
    { id: 'sem3', label: 'Semester 3' },
    { id: 'sem4', label: 'Semester 4' },
    { id: 'sem5', label: 'Semester 5' },
    { id: 'sem6', label: 'Semester 6' },
    { id: 'sem7', label: 'Semester 7' },
    { id: 'sem8', label: 'Semester 8' }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-4 border border-slate-100">
      <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:justify-center scrollbar-hide">
        {semesters.map((semester) => (
          <button
            key={semester.id}
            onClick={() => onFilterChange(semester.id)}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all whitespace-nowrap flex-shrink-0 ${
              activeSemester === semester.id
                ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white'
                : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            {semester.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SemesterFilter;
