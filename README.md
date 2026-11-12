# Bekasyl Karshygauly: resume site

- `index.html`: layout, styles and rendering (Dark Premium, two columns, print/PDF styles).
- `content.js`: all the text in three languages (kk / ru / en). Edit only this file to change the content.
- `assets/`: photo and social preview image.
- `resume-kk.pdf`, `resume-ru.pdf`, `resume-en.pdf`: ready-made PDFs for the "Download PDF" button.

## Rebuild the PDFs after editing `content.js`

Run from this folder (Git Bash):

```bash
for L in kk ru en; do "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=5000 --print-to-pdf="resume-$L.pdf" "file:///$(pwd -W)/index.html?lang=$L"; done
```

Or open the page in Chrome and use "Print → Save as PDF": the print styles keep the same colors and layout (A4, no margins).
