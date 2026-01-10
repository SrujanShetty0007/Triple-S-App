# Triple S - PDF Management

## 📁 How It Works

### Adding PDFs:
1. Copy your PDF to the correct folder:
   ```
   public/assets/pdfs/2025-scheme/sem1/{subject-folder}/{type}/
   ```
   Where `{type}` is: `notes`, `model-papers`, or `previous-papers`

2. Run the update script:
   ```
   node update_manifest.js
   ```
   Or double-click: `update-website.bat`

3. Done! The PDF appears on the website.

### Deleting PDFs:
1. Delete the PDF file from the folder
2. Run: `node update_manifest.js`
3. Done!

## 📂 Folder Structure
```
public/assets/pdfs/2025-scheme/sem1/
├── applied-mathematics-cse/
│   ├── notes/
│   ├── model-papers/
│   └── previous-papers/
├── applied-chemistry-cse/
│   ├── notes/
│   ├── model-papers/
│   └── previous-papers/
... (21 subject folders total)
```

## 🔧 Files Overview
- `update_manifest.js` - Scans PDF folders and generates manifest.json
- `manifest.json` - Auto-generated list of all PDFs
- `update-website.bat` - Windows batch file to run the update script
