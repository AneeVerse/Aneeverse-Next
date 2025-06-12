'use client'

import { definePlugin } from 'sanity'
import React, { useEffect } from 'react'

// Custom document metadata component that enhances SEO on Sanity Studio
const DocumentMetadata = ({ document }) => {
  useEffect(() => {
    if (document && document.displayed) {
      const doc = document.displayed
      
      // Set page title based on document title
      if (doc.title) {
        document.title = `${doc.title} | Aneeverse Content Studio`
      }
      
      // Create meta description if one doesn't exist
      if (!document.querySelector('meta[name="description"]')) {
        const metaDesc = document.createElement('meta')
        metaDesc.name = 'description'
        metaDesc.content = doc.shortDescription || 
          `Editing "${doc.title || 'Document'}" in Aneeverse Content Studio`
        document.head.appendChild(metaDesc)
      }
      
      // Create OpenGraph tags
      const ogTags = [
        { property: 'og:title', content: doc.title ? `${doc.title} | Aneeverse Content Studio` : 'Aneeverse Content Studio' },
        { property: 'og:description', content: doc.shortDescription || `Editing content in Aneeverse Content Studio` },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: window.location.href },
        { property: 'og:image', content: 'https://aneeverse.com/images/meta/studio-preview.jpg' },
        { property: 'og:site_name', content: 'Aneeverse' }
      ]
      
      // Add Twitter card tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: doc.title ? `${doc.title} | Aneeverse Content Studio` : 'Aneeverse Content Studio' },
        { name: 'twitter:description', content: doc.shortDescription || `Editing content in Aneeverse Content Studio` },
        { name: 'twitter:image', content: 'https://aneeverse.com/images/meta/studio-preview.jpg' }
      ]
      
      // Add all meta tags to document head
      const allTags = [...ogTags, ...twitterTags]
      allTags.forEach(tag => {
        const meta = document.createElement('meta')
        const key = Object.keys(tag)[0]
        meta.setAttribute(key, tag[key])
        meta.content = tag.content
        document.head.appendChild(meta)
      })
    }
  }, [document])

  return null
}

// Export the plugin
export const customComponents = definePlugin({
  name: 'custom-components',
  document: {
    components: {
      // Add the metadata component to all documents
      metadata: DocumentMetadata
    }
  }
}) 