const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let svgCount = 0;

walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let svgRegex = /<svg[\s\S]*?<\/svg>/g;
    let match;
    let index = 0;
    while ((match = svgRegex.exec(content)) !== null) {
      let svgContent = match[0];
      // Basic cleanup: some SVGs might have React specific attributes like className, viewBox, strokeWidth.
      // Since it's just to "save copies", we can just write the raw JSX as SVG (most browsers will render it fine if we just convert camelCase to lowercase, but let's just do a basic replace for common ones)
      svgContent = svgContent.replace(/className=/g, 'class=');
      svgContent = svgContent.replace(/strokeWidth=/g, 'stroke-width=');
      svgContent = svgContent.replace(/strokeLinecap=/g, 'stroke-linecap=');
      svgContent = svgContent.replace(/strokeLinejoin=/g, 'stroke-linejoin=');
      svgContent = svgContent.replace(/fillRule=/g, 'fill-rule=');
      svgContent = svgContent.replace(/clipRule=/g, 'clip-rule=');
      
      // If it doesn't have xmlns, add it
      if (!svgContent.includes('xmlns=')) {
        svgContent = svgContent.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
      }

      let fileName = `public/images/extracted_${path.basename(filePath, '.tsx')}_${index}.svg`;
      fs.writeFileSync(fileName, svgContent);
      index++;
      svgCount++;
    }
  }
});

console.log(`Extracted ${svgCount} SVGs.`);
