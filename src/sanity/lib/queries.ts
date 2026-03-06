import { groq } from 'next-sanity'

// Query to get all customer stories
export const getCustomerStoriesQuery = groq`
  *[_type == "customerStory"] | order(publishedAt desc) {
    _id,
    title,
    projectTitle,
    servicesProvided,
    slug,
    mainImage,
    customerLogo,
    readTime,
    publishedAt,
    shortDescription,
    percentageSaved,
    numberProduced,
    metrics,
    categories[]->{
      title,
      slug
    }
  }
`

// Query to get a single customer story by slug
export const getCustomerStoryBySlugQuery = groq`
  *[_type == "customerStory" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    customerLogo,
    readTime,
    publishedAt,
    shortDescription,
    body,
    percentageSaved,
    numberProduced,
    metrics,
    categories[]->{
      title,
      slug
    }
  }
`

// Query to get all portfolio work items
export const getPortfolioWorksQuery = groq`
  *[_type == "portfolioWork"] | order(featured desc, publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    thumbnailImage,
    projectSummaryImage {
      useExternalImage,
      externalImage,
      sanityImage,
      alt,
      caption
    },
    year,
    industry,
    projectSummary,
    servicesProvided,
    featured,
    publishedAt
  }
`

// Query to get featured portfolio work items
export const getFeaturedPortfolioWorksQuery = groq`
  *[_type == "portfolioWork" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    thumbnailImage,
    projectSummaryImage {
      useExternalImage,
      externalImage,
      sanityImage,
      alt,
      caption
    },
    year,
    industry,
    projectSummary,
    featured,
    publishedAt
  }
`

// Query to get a single portfolio work by slug
export const getPortfolioWorkBySlugQuery = groq`
  *[_type == "portfolioWork" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    thumbnailImage,
    projectSummaryImage {
      useExternalImage,
      externalImage,
      sanityImage,
      alt,
      caption
    },
    year,
    industry,
    projectSummary,
    galleryImages,
    results,
    body,
    featured,
    publishedAt
  }
`

// Query to get recommended posts for homepage
export const getRecommendedPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...10] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      sanityImage {
        asset->{
          _id,
          url
        },
        alt
      },
      externalImage,
      alt,
      asset->{url}
    },
    categories[]->{
      title
    }
  }
`