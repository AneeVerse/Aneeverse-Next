import { groq } from 'next-sanity'

// Query to get all customer stories
export const getCustomerStoriesQuery = groq`
  *[_type == "customerStory"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    customerLogo,
    readTime,
    publishedAt,
    shortDescription,
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
    categories[]->{
      title,
      slug
    }
  }
`