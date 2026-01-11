// Branch data with SEO-friendly slugs
export const branches = [
    {
        id: 'cse',
        name: 'Computer Science Engineering',
        shortName: 'CSE',
        slug: 'cse',
        description: 'VTU 2025 Scheme CSE notes, syllabus and question papers',
        icon: '💻'
    },
    {
        id: 'ise',
        name: 'Information Science Engineering',
        shortName: 'ISE',
        slug: 'ise',
        description: 'VTU 2025 Scheme ISE notes, syllabus and question papers',
        icon: '🖥️'
    },
    {
        id: 'ece',
        name: 'Electronics & Communication Engineering',
        shortName: 'ECE',
        slug: 'ece',
        description: 'VTU 2025 Scheme ECE notes, syllabus and question papers',
        icon: '📡'
    },
    {
        id: 'me',
        name: 'Mechanical Engineering',
        shortName: 'ME',
        slug: 'mechanical',
        description: 'VTU 2025 Scheme Mechanical Engineering notes and papers',
        icon: '⚙️'
    },
    {
        id: 'civil',
        name: 'Civil Engineering',
        shortName: 'Civil',
        slug: 'civil',
        description: 'VTU 2025 Scheme Civil Engineering notes and papers',
        icon: '🏗️'
    },
    {
        id: 'eee',
        name: 'Electrical & Electronics Engineering',
        shortName: 'EEE',
        slug: 'eee',
        description: 'VTU 2025 Scheme EEE notes, syllabus and question papers',
        icon: '⚡'
    }
];

export const semesters = [
    { id: 1, name: 'Semester 1', slug: 'sem1' },
    { id: 2, name: 'Semester 2', slug: 'sem2' },
    { id: 3, name: 'Semester 3', slug: 'sem3' },
    { id: 4, name: 'Semester 4', slug: 'sem4' },
    { id: 5, name: 'Semester 5', slug: 'sem5' },
    { id: 6, name: 'Semester 6', slug: 'sem6' },
    { id: 7, name: 'Semester 7', slug: 'sem7' },
    { id: 8, name: 'Semester 8', slug: 'sem8' }
];

export const getBranchBySlug = (slug) => branches.find(b => b.slug === slug || b.id === slug);
