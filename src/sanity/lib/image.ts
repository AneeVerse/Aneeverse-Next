import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: any, maxWidth: number = 1920) => {
  // Check if the source exists and has a valid way to build a URL
  // Either direct asset reference, asset object with _id, or just the reference string
  const hasAsset = source && (
    source._ref ||
    (source.asset && (source.asset._ref || source.asset._id || source.asset.url))
  );

  if (!hasAsset) {
    console.warn('Invalid image source provided to urlForImage', source);
    const fallback = '/images/image-404.jpg'; // Using an existing image from public/images
    return {
      url: () => fallback,
      width: () => 1200,
      height: () => 630,
      format: () => 'jpg',
      toString: () => fallback,
    }
  }

  try {
    // Use Sanity's built-in optimization with max width to prevent timeout
    return imageBuilder
      .image(source)
      .width(maxWidth)
      .quality(85)
      .auto('format')
  } catch (error) {
    console.error('Error creating image URL:', error);
    const fallback = '/images/image-404.jpg';
    return {
      url: () => fallback,
      width: () => 1200,
      height: () => 630,
      format: () => 'jpg',
      toString: () => fallback,
    }
  }
}
