const fs = require('fs');
const path = require('path');

// Function to generate static paths based on the src/app directory
function generateStaticPaths(rootDir) {
  const appDir = path.join(rootDir, 'src', 'app'); // Path to your src/app directory
  const paths = [];

  // Generate path for the page.js file
  paths.push({ params: { pagePath: '/' } });

  // Recursively traverse the src/app directory
  function traverse(directory) {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
      const filePath = path.join(directory, file);
      const relativePath = path.relative(appDir, filePath);
      const isDirectory = fs.statSync(filePath).isDirectory();

      if (isDirectory) {
        // If directory, recursively traverse
        traverse(filePath);
      } else {
        // If file is not page.js, generate path
        if (file !== 'page.js') {
          const pagePath = `/${relativePath.replace(/\.js$/, '')}`; // Adjust the path format as needed
          paths.push({ params: { pagePath } });
        }
      }
    });
  }

  traverse(appDir);
  return paths;
}

// Export the generateStaticPaths function
module.exports = {
  generateStaticPaths
};
