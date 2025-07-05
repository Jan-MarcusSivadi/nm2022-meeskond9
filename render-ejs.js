// render-ejs.js
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Paths
const viewsDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'public');

// Pages to render
const pages = [
  { name: 'index', data: { title: 'Home' } },
  { name: 'abc', data: { title: 'ABC' } },
  { name: 'game', data: { title: 'Game' } },
  { name: 'kkk', data: { title: 'KKK' } },
  { name: 'learngame', data: { title: 'Learn Game' } },
  { name: 'questions', data: { title: 'Questions' } },
];

// Ensure public/ directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Render each page
let redirects = [];
pages.forEach(({ name, data }) => {
  const ejsPath = path.join(viewsDir, `${name}.ejs`);
  const outputPath = path.join(outputDir, `${name}.html`);

  ejs.renderFile(
    ejsPath,
    data,
    { root: viewsDir }, // Enables absolute includes like /partials/header
    (err, str) => {
      if (err) {
        console.error(`❌ Failed to render ${name}.ejs:`, err);
      } else {
        fs.writeFileSync(outputPath, str);
        console.log(`✅ Rendered: ${name}.ejs → public/${name}.html`);

        // no redirect for index
        if (name !== 'index') {
          redirects.push(`/${name} /${name}.html 200`);
        }
      }
    }
  );
});

fs.writeFileSync(path.join(outputDir, '_redirects'), redirects.join('\n'));
console.log('✅ _redirects file created');
