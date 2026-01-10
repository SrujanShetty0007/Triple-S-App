import SubjectCard from './SubjectCard';

const SubjectGrid = ({ subjects }) => {
  if (!subjects || subjects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No subjects available for this semester yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {subjects.map((subject) => (
        <SubjectCard key={subject.id} {...subject} />
      ))}
    </div>
  );
};

export default SubjectGrid;
