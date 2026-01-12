/**
 * Update Manifest Tool for React Project
 * 
 * This script scans the PDF directories and updates the manifest.json file.
 * Run this script whenever you add, remove, or update PDF files.
 * 
 * Usage: node update_manifest.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.join(__dirname, 'public', 'assets', 'pdfs');
const MANIFEST_PATH = path.join(BASE_DIR, 'manifest.json');

function formatDisplayName(filename) {
    return filename
        .replace('.pdf', '')
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function scanDirectory(dirPath) {
    try {
        if (!fs.existsSync(dirPath)) {
            return [];
        }
        const files = fs.readdirSync(dirPath);
        return files.filter(file => {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);
            return stat.isFile() && ['.pdf', '.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase());
        });
    } catch (error) {
        console.error(`Error scanning directory ${dirPath}:`, error);
        return [];
    }
}

function generateManifest() {
    const manifest = {};

    // Ensure base directory exists
    if (!fs.existsSync(BASE_DIR)) {
        console.log('Creating base PDF directory...');
        fs.mkdirSync(BASE_DIR, { recursive: true });
    }

    // Get all top-level directories (sem1, sem2, ..., 2025-scheme, etc.)
    const topLevelDirs = fs.readdirSync(BASE_DIR)
        .filter(item => {
            const itemPath = path.join(BASE_DIR, item);
            return fs.statSync(itemPath).isDirectory();
        });

    console.log('Found top-level directories:', topLevelDirs);

    topLevelDirs.forEach(topDir => {
        const topPath = path.join(BASE_DIR, topDir);

        // Handle all scheme directories (2022-scheme, 2025-scheme, etc.)
        if (topDir.endsWith('-scheme')) {
            manifest[topDir] = {};

            const semesterDirs = fs.readdirSync(topPath)
                .filter(item => item.startsWith('sem') && fs.statSync(path.join(topPath, item)).isDirectory());

            console.log(`Found semesters in ${topDir}:`, semesterDirs);

            semesterDirs.forEach(semester => {
                manifest[topDir][semester] = {};
                const semesterPath = path.join(topPath, semester);

                const subjectDirs = fs.readdirSync(semesterPath)
                    .filter(item => fs.statSync(path.join(semesterPath, item)).isDirectory());

                console.log(`Found subjects for ${topDir}/${semester}:`, subjectDirs);

                subjectDirs.forEach(subject => {
                    manifest[topDir][semester][subject] = {};
                    const subjectPath = path.join(semesterPath, subject);

                    const materialTypeDirs = fs.readdirSync(subjectPath)
                        .filter(item => fs.statSync(path.join(subjectPath, item)).isDirectory());

                    materialTypeDirs.forEach(materialType => {
                        const materialPath = path.join(subjectPath, materialType);
                        const pdfFiles = scanDirectory(materialPath);

                        manifest[topDir][semester][subject][materialType] = pdfFiles.map(filename => ({
                            filename,
                            name: formatDisplayName(filename),
                            path: `/assets/pdfs/${topDir}/${semester}/${subject}/${materialType}/${filename}`
                        }));

                        console.log(`Found ${pdfFiles.length} files in ${topDir}/${semester}/${subject}/${materialType}`);
                    });
                });
            });
        }
        // Handle regular semester directories (sem1, sem2, etc.)
        else if (topDir.startsWith('sem')) {
            manifest[topDir] = {};

            const subjectDirs = fs.readdirSync(topPath)
                .filter(item => fs.statSync(path.join(topPath, item)).isDirectory());

            console.log(`Found subjects for ${topDir}:`, subjectDirs);

            subjectDirs.forEach(subject => {
                manifest[topDir][subject] = {};
                const subjectPath = path.join(topPath, subject);

                const materialTypeDirs = fs.readdirSync(subjectPath)
                    .filter(item => fs.statSync(path.join(subjectPath, item)).isDirectory());

                materialTypeDirs.forEach(materialType => {
                    const materialPath = path.join(subjectPath, materialType);
                    const pdfFiles = scanDirectory(materialPath);

                    manifest[topDir][subject][materialType] = pdfFiles.map(filename => ({
                        filename,
                        name: formatDisplayName(filename),
                        path: `/assets/pdfs/${topDir}/${subject}/${materialType}/${filename}`
                    }));

                    console.log(`Found ${pdfFiles.length} files in ${topDir}/${subject}/${materialType}`);
                });
            });
        }
    });

    return manifest;
}

function updateManifest() {
    console.log('Starting manifest update...');
    console.log('Base directory:', BASE_DIR);

    try {
        const manifest = generateManifest();

        fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

        console.log('\n✅ Manifest updated successfully!');
        console.log(`📄 Manifest saved to: ${MANIFEST_PATH}`);

        // Count totals
        let totalSemesters = 0;
        let totalSubjects = 0;
        let totalFiles = 0;

        Object.keys(manifest).forEach(key => {
            // Handle all scheme directories (ends with -scheme)
            if (key.endsWith('-scheme')) {
                Object.keys(manifest[key]).forEach(sem => {
                    totalSemesters++;
                    Object.keys(manifest[key][sem]).forEach(subj => {
                        totalSubjects++;
                        Object.keys(manifest[key][sem][subj]).forEach(type => {
                            totalFiles += manifest[key][sem][subj][type].length;
                        });
                    });
                });
            } else {
                totalSemesters++;
                Object.keys(manifest[key]).forEach(subj => {
                    totalSubjects++;
                    Object.keys(manifest[key][subj]).forEach(type => {
                        totalFiles += manifest[key][subj][type].length;
                    });
                });
            }
        });

        console.log(`📊 Total semesters: ${totalSemesters}`);
        console.log(`📚 Total subjects: ${totalSubjects}`);
        console.log(`📄 Total PDF files: ${totalFiles}`);
    } catch (error) {
        console.error('❌ Error updating manifest:', error);
    }
}

updateManifest();
