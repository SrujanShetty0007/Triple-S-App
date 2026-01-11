// App constants
export const APP_NAME = "Triple S";
export const APP_FULL_NAME = "Student Study Support";
export const APP_DESCRIPTION = "VTU notes, syllabus & question papers for engineering students.";

// Contact information
export const CONTACT = {
    email: "triples.studies.edu@gmail.com",
    whatsapp: "+918217358117",
    linkedin: "https://www.linkedin.com/in/srujan-shetty0007/",
    github: "https://github.com/srujanshetty0007",
    instagram: "https://www.instagram.com/srujan_shetty0007/"
};

// Navigation links
export const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "2025 Scheme", path: "/vtu-2025-scheme" },
    { name: "Contribute", path: "/contribute" },
    { name: "VTU", path: "/vtu" },
    { name: "Contact", path: "/contact" }
];

// Material types
export const MATERIAL_TYPES = {
    NOTES: "notes",
    MODEL_PAPERS: "model-papers",
    PREVIOUS_PAPERS: "previous-papers"
};

// Grade point mapping for SGPA/CGPA
export const GRADE_MAPPING = [
    { range: "90-100", points: 10 },
    { range: "80-89", points: 9 },
    { range: "70-79", points: 8 },
    { range: "60-69", points: 7 },
    { range: "50-59", points: 6 },
    { range: "45-49", points: 5 },
    { range: "40-44", points: 4 },
    { range: "< 40", points: 0 }
];

// Performance levels
export const PERFORMANCE_LEVELS = {
    OUTSTANDING: { min: 9.5, label: "🏆 Outstanding Performance" },
    EXCELLENT: { min: 8.5, label: "🌟 Excellent Performance" },
    VERY_GOOD: { min: 7.5, label: "👍 Very Good Performance" },
    GOOD: { min: 6.5, label: "✅ Good Performance" },
    AVERAGE: { min: 5.0, label: "📈 Average Performance" },
    NEEDS_IMPROVEMENT: { min: 0, label: "📚 Needs Improvement" }
};

// API endpoints
export const API_ENDPOINTS = {
    MANIFEST: "/assets/pdfs/manifest.json"
};
