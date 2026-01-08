import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: any, maxWidth: number = 1920) => {
  // Check if the source exists and has the required asset reference
  if (!source || !source.asset || !source.asset._ref) {
    console.warn('Invalid image source provided to urlForImage', source);
    return {
      url: () => '/images/placeholder.jpg',
      width: () => 1200,
      height: () => 630,
      format: () => 'jpg',
      toString: () => '/images/placeholder.jpg',
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
    return {
      url: () => '/images/placeholder.jpg',
      width: () => 1200,
      height: () => 630,
      format: () => 'jpg',
      toString: () => '/images/placeholder.jpg',
    }
  }
}
