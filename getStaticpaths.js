// generateStaticPaths.js
const fs = require('fs');
const path = require('path');

// Function to generate static paths
function generateStaticPaths() {
  const pagePath = '/src/app/page.js'; // Set the root path as the page path
  return [{ params: { pagePath } }];
}

// Usage: Run the script to generate static paths
const staticPaths = generateStaticPaths();
console.log(staticPaths);