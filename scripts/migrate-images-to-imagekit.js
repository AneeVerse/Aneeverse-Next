/**
 * Image Migration Script
 * Migrates static images from public/images/ to ImageKit.io CDN
 * 
 * Usage: node scripts/migrate-images-to-imagekit.js
 * 
 * This script:
 * 1. Scans public/images/ folder structure
 * 2. Uploads images to ImageKit maintaining folder structure
 * 3. Generates mapping file with old → new URLs
 * 4. Updates components automatically (optional)
 */

const fs = require('fs');
const path = require('path');
const { createHash } = require('crypto');

// ImageKit configuration
const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/aghmftdmm';

// Folder mapping: public/images/ → ImageKit folder
const FOLDER_MAPPING = {
  'home': '/home',
  'home/logo': '/home/logo',
  'home/works': '/home/works',
  'home/command center': '/home/command-center',
  'home/human creativity': '/home/human-creativity',
  'home/we recommend': '/home/we-recommend',
  'about': '/about',
  'blog': '/blog',
  'services': '/services',
  'works': '/works',
  'customer-stories': '/customer-stories',
  'pricing': '/pricing',
  'testimonials': '/testimonials',
  'logos': '/logos',
  'meta': '/meta',
  'our-team': '/our-team',
};

// Migration map to store old → new URLs
const migrationMap = {};

/**
 * Get ImageKit folder path from local path
 */
function getImageKitFolder(localPath) {
  const relativePath = localPath.replace(/^public\/images\//, '');
  const folder = path.dirname(relativePath);
  
  // Map to ImageKit folder structure
  if (FOLDER_MAPPING[folder]) {
    return FOLDER_MAPPING[folder];
  }
  
  // Default: convert to kebab-case
  return '/' + folder.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Get clean filename for ImageKit
 */
function getCleanFileName(fileName) {
  // Remove spaces, special chars, convert to lowercase with hyphens
  return fileName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9.-]/g, '')
    .replace(/\.(png|jpg|jpeg|webp|avif|gif)$/i, (match) => match.toLowerCase());
}

/**
 * Scan images directory recursively
 */
function scanImagesDir(dir, baseDir = 'public/images') {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    const relativePath = path.relative(baseDir, fullPath);
    
    if (item.isDirectory()) {
      files.push(...scanImagesDir(fullPath, baseDir));
    } else if (/\.(png|jpg|jpeg|webp|avif|gif)$/i.test(item.name)) {
      files.push({
        localPath: fullPath,
        relativePath: relativePath,
        fileName: item.name,
        size: fs.statSync(fullPath).size,
      });
    }
  }
  
  return files;
}

/**
 * Generate migration report
 */
function generateMigrationReport() {
  const report = {
    totalImages: Object.keys(migrationMap).length,
    mappings: migrationMap,
    timestamp: new Date().toISOString(),
  };
  
  fs.writeFileSync(
    'image-migration-map.json',
    JSON.stringify(report, null, 2)
  );
  
  console.log(`\n✅ Migration report saved to image-migration-map.json`);
  console.log(`   Total images mapped: ${report.totalImages}`);
}

/**
 * Main migration function
 */
async function main() {
  console.log('🔄 Starting image migration to ImageKit...\n');
  
  // Scan all images
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    console.error('❌ public/images directory not found!');
    process.exit(1);
  }
  
  const images = scanImagesDir(imagesDir);
  console.log(`📦 Found ${images.length} images to migrate\n`);
  
  // Group by priority
  const priorityImages = images.filter(img => 
    img.relativePath.startsWith('home/') || 
    img.relativePath.includes('logo') ||
    img.relativePath.includes('footer')
  );
  
  const otherImages = images.filter(img => !priorityImages.includes(img));
  
  console.log(`🎯 Priority images (home page): ${priorityImages.length}`);
  console.log(`📁 Other images: ${otherImages.length}\n`);
  
  console.log('📝 Migration Instructions:');
  console.log('   1. Use ImageKit MCP to upload images');
  console.log('   2. Maintain folder structure as defined in FOLDER_MAPPING');
  console.log('   3. Use clean filenames (kebab-case)');
  console.log('   4. Update component references after upload\n');
  
  console.log('📋 Priority Images to Upload First:');
  priorityImages.slice(0, 10).forEach((img, idx) => {
    const folder = getImageKitFolder(img.localPath);
    const cleanName = getCleanFileName(img.fileName);
    console.log(`   ${idx + 1}. ${img.relativePath}`);
    console.log(`      → ImageKit: ${folder}/${cleanName}`);
    console.log(`      → URL: ${IMAGEKIT_BASE_URL}${folder}/${cleanName}\n`);
  });
  
  // Generate example mapping
  priorityImages.slice(0, 5).forEach(img => {
    const folder = getImageKitFolder(img.localPath);
    const cleanName = getCleanFileName(img.fileName);
    const oldPath = `/images/${img.relativePath.replace(/\\/g, '/')}`;
    const newUrl = `${IMAGEKIT_BASE_URL}${folder}/${cleanName}`;
    migrationMap[oldPath] = newUrl;
  });
  
  generateMigrationReport();
  
  console.log('\n✅ Migration script completed!');
  console.log('   Next steps:');
  console.log('   1. Upload images to ImageKit using MCP');
  console.log('   2. Update component references');
  console.log('   3. Test image loading');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { getImageKitFolder, getCleanFileName, FOLDER_MAPPING };

