/**
 * Utility functions for blog category handling
 */

/**
 * Generates a clean category slug for use in URLs
 * @param {string} category - The category name
 * @returns {string} URL-friendly slug
 */
export const getCategorySlug = (category) => {
  if (!category) return '';
  
  // Special case for Aneeverse News
  if (category.toLowerCase() === 'aneeverse news') {
    return 'aneeverse-news';
  }
  
  return category.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
};

/**
 * Generates the correct URL path for a category
 * @param {string} category - The category name
 * @returns {string} The URL path for the category
 */
export const getCategoryUrl = (category) => {
  const slug = getCategorySlug(category);
  
  // Special case for Aneeverse News
  if (slug === 'aneeverse-news') {
    return `/blog/aneeverse-news`;
  }
  
  // Use the new URL format without "category" segment
  return `/blog/${slug}`;
};

/**
 * Normalizes a category name from a slug
 * @param {string} categorySlug - The category slug from URL
 * @returns {string} The normalized category name
 */
export const getNormalizedCategoryName = (categorySlug) => {
  if (!categorySlug) return '';
  
  // Special case for Aneeverse News
  if (categorySlug === 'aneeverse-news') {
    return 'aneeverse news';
  }
  
  return categorySlug.replace(/-/g, ' ');
}; 