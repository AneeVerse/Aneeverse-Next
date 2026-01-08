/**
 * ImageKit URL utility
 * Generates ImageKit URLs for static images migrated to CDN
 * Supports gradual migration - falls back to local paths if not migrated
 */

const IMAGEKIT_BASE_URL = 'https://ik.imagekit.io/aghmftdmm';

// Migration map - maps local paths to ImageKit URLs
// Update this as images are migrated to ImageKit
const MIGRATION_MAP = {
  // Add migrated images here as they're uploaded
  // Example: '/images/home/logo/image.png': 'https://ik.imagekit.io/aghmftdmm/home/logo/image.png'
};

/**
 * Converts a local image path to ImageKit URL if migrated, otherwise returns local path
 * @param {string} localPath - Local path like "/images/home/logo/image.png"
 * @returns {string} ImageKit URL or local path
 */
export function getImageKitUrl(localPath) {
  if (!localPath) return null;
  
  // Check if already migrated
  if (MIGRATION_MAP[localPath]) {
    return MIGRATION_MAP[localPath];
  }
  
  // If it's already an ImageKit URL, return as-is
  if (localPath.startsWith('https://ik.imagekit.io/')) {
    return localPath;
  }
  
  // If it's already an external URL, return as-is
  if (localPath.startsWith('http://') || localPath.startsWith('https://')) {
    return localPath;
  }
  
  // For now, return local path (will be migrated later)
  // TODO: Migrate to ImageKit and update MIGRATION_MAP
  return localPath;
}

/**
 * Gets ImageKit URL with transformations
 * @param {string} localPath - Local image path
 * @param {object} transformations - ImageKit transformation parameters
 * @returns {string} ImageKit URL with transformations
 */
export function getImageKitUrlWithTransform(localPath, transformations = {}) {
  const baseUrl = getImageKitUrl(localPath);
  if (!baseUrl) return null;
  
  // If it's a local path (not migrated yet), return as-is
  if (!baseUrl.startsWith('https://ik.imagekit.io/')) {
    return baseUrl;
  }
  
  const params = new URLSearchParams();
  
  // Add transformation parameters
  if (transformations.width) params.append('w', transformations.width);
  if (transformations.height) params.append('h', transformations.height);
  if (transformations.quality) params.append('q', transformations.quality);
  if (transformations.format) params.append('f', transformations.format);
  
  return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
}

/**
 * Get expected ImageKit path for a local image (for migration planning)
 * @param {string} localPath - Local path like "/images/home/logo/image.png"
 * @returns {string} Expected ImageKit path
 */
export function getExpectedImageKitPath(localPath) {
  if (!localPath) return null;
  
  // Remove leading slash and "images/" prefix
  let path = localPath.replace(/^\/images\//, '').replace(/^\//, '');
  
  // Handle special cases
  if (localPath.startsWith('/footer2.jpg')) {
    path = 'common/footer2.jpg';
  }
  
  // Clean filename (kebab-case)
  const parts = path.split('/');
  const fileName = parts.pop();
  const cleanFileName = fileName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9.-]/g, '');
  
  const folder = parts.join('/').toLowerCase().replace(/\s+/g, '-');
  
  return folder ? `${folder}/${cleanFileName}` : cleanFileName;
}

