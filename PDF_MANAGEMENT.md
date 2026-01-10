# PDF Management System

## 📁 Folder Structure

```
public/assets/pdfs/
├── manifest.json (auto-generated)
├── sem1/
│   ├── mathematics/
│   │   ├── notes/
│   │   ├── model-papers/
│   │   └── previous-papers/
│   ├── chemistry/
│   │   ├── notes/
│   │   ├── model-papers/
│   │   └── previous-papers/
│   └── ... (other subjects)
├── sem2/
│   ├── mathematics/
│   ├── physics/
│   ├── chemistry/
│   └── ... (other subjects)
└── sem3-sem8/ (same structure)
```

## 🚀 How to Add New PDFs

### Step 1: Create Folder Structure
Navigate to `public/assets/pdfs/` and create folders following this pattern:
```
public/assets/pdfs/[semester]/[subject]/[material-type]/
```

**Example:**
```
public/assets/pdfs/sem2/mathematics/notes/
public/assets/pdfs/sem2/mathematics/model-papers/
public/assets/pdfs/sem2/mathematics/previous-papers/
```

### Step 2: Add PDF Files
Place your PDF files in the appropriate folder:
- **Notes** → `notes/` folder
- **Model Papers** → `model-papers/` folder
- **Previous Year Papers** → `previous-papers/` folder

### Step 3: Update Manifest
Run the update script:

**Windows:**
```bash
update-website.bat
```

**Mac/Linux:**
```bash
node update_manifest.js
```

This will:
- Scan all PDF folders
- Generate `manifest.json` with all file information
- Format file names for display

### Step 4: Verify
1. Check `public/assets/pdfs/manifest.json` was updated
2. Restart the dev server: `npm run dev`
3. Navigate to the website and verify PDFs appear

## 📝 File Naming Conventions

For best display results, name your files descriptively:

**Good:**
- `module_1_introduction.pdf` → Displays as "Module 1 Introduction"
- `2022_model_paper.pdf` → Displays as "2022 Model Paper"
- `unit-3-notes.pdf` → Displays as "Unit 3 Notes"

**Avoid:**
- `file1.pdf`
- `download.pdf`
- `untitled.pdf`

## 🔧 Supported File Types
- PDF (`.pdf`)
- Images (`.jpg`, `.jpeg`, `.png`)

## 📊 Manifest Structure

The `manifest.json` file is automatically generated with this structure:

```json
{
  "sem1": {
    "mathematics": {
      "notes": [
        {
          "filename": "module_1.pdf",
          "name": "Module 1",
          "path": "/assets/pdfs/sem1/mathematics/notes/module_1.pdf"
        }
      ],
      "model-papers": [...],
      "previous-papers": [...]
    }
  }
}
```

## 🎯 Subject Names

Use kebab-case for folder names:
- `mathematics` ✅
- `applied-chemistry` ✅
- `python-programming` ✅
- `Mathematics` ❌ (use lowercase)
- `Applied Chemistry` ❌ (use hyphens)

## 🔄 Updating Existing PDFs

1. Replace the PDF file in its folder
2. Run `update-website.bat`
3. The manifest will automatically update

## ❌ Deleting PDFs

1. Delete the PDF file from its folder
2. Run `update-website.bat`
3. The manifest will automatically remove the entry

## 🆕 Adding New Semesters

1. Create folder: `public/assets/pdfs/sem9/`
2. Add subject folders inside
3. Add material type folders (notes, model-papers, previous-papers)
4. Add PDFs
5. Run `update-website.bat`

## 🆕 Adding New Subjects

1. Create folder: `public/assets/pdfs/sem2/new-subject/`
2. Create material type folders inside
3. Add PDFs
4. Run `update-website.bat`
5. Update `src/data/subjects.js` to include the new subject

## 🐛 Troubleshooting

**PDFs not showing on website:**
- Check folder structure matches the pattern
- Verify file extensions are `.pdf`
- Run `update-website.bat` again
- Clear browser cache
- Restart dev server

**Manifest not updating:**
- Check Node.js is installed
- Verify you're in the project root directory
- Check file permissions
- Look for error messages in the console

## 📞 Need Help?

Contact: triples.studies.edu@gmail.com
WhatsApp: +91 8217358117
