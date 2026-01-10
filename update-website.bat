@echo off
cd /d "%~dp0"
echo ========================================
echo Triple S - Website Update Script
echo ========================================
echo.

echo [1/2] Updating PDF manifest...
node update_manifest.js

echo.
echo [2/2] Update complete!
echo.
echo ✅ Your PDF manifest has been updated.
echo 📁 You can now add PDFs to public/assets/pdfs/2025-scheme/sem1/
echo.
echo After adding PDFs, run this script again to update the manifest.
echo.

pause
