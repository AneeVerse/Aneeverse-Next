import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const portfolioWorkType = defineType({
  name: 'portfolioWork',
  title: 'Portfolio Work',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
        accept: 'image/*',
      },
      description: 'Main showcase image of the project',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        })
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
        accept: 'image/*',
      },
      description: 'Thumbnail image for gallery view (will use main image if not provided)',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ],
    }),
    defineField({
      name: 'projectSummaryImage',
      title: 'Project Summary Image',
      type: 'object',
      description: 'Large image displayed alongside project summary (right side)',
      fields: [
        defineField({
          name: 'useExternalImage',
          title: 'Use External Image URL',
          type: 'boolean',
          description: 'Toggle to use external image URL instead of upload',
          initialValue: false,
        }),
        defineField({
          name: 'externalImage',
          title: 'External Image URL',
          type: 'url',
          description: 'Direct URL to the image (e.g., from CDN or external source)',
          hidden: ({parent}) => !parent?.useExternalImage,
          validation: Rule => Rule.custom((value, context) => {
            const useExternal = (context.parent as any)?.useExternalImage;
            if (useExternal && !value) {
              return 'External image URL is required when using external images';
            }
            return true;
          }),
        }),
        defineField({
          name: 'sanityImage',
          title: 'Upload Image',
          type: 'image',
          description: 'Upload image to Sanity',
          options: {
            hotspot: true,
            storeOriginalFilename: false,
          },
          hidden: ({parent}) => parent?.useExternalImage,
          validation: Rule => Rule.custom((value, context) => {
            const useExternal = (context.parent as any)?.useExternalImage;
            if (!useExternal && !value) {
              return 'Please upload an image or use external image URL';
            }
            return true;
          }),
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility',
            })
          ],
        }),
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility (for external images)',
          hidden: ({parent}) => !parent?.useExternalImage,
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Optional caption for the image',
        }),
      ],
      preview: {
        select: {
          useExternal: 'useExternalImage',
          externalUrl: 'externalImage',
          sanityImage: 'sanityImage',
          alt: 'alt',
        },
        prepare(selection) {
          const {useExternal, externalUrl, sanityImage, alt} = selection;
          return {
            title: useExternal ? 'External Image' : 'Uploaded Image',
            subtitle: alt || 'No alt text',
            media: useExternal ? undefined : sanityImage,
          };
        },
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Year or date range of the project (e.g., "2023" or "2022-2023")',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      description: 'Industry of the client',
    }),
    defineField({
      name: 'projectSummary',
      title: 'Project Summary',
      type: 'text',
      description: 'Brief summary of the project displayed in the project summary section',
      rows: 4,
    }),
    defineField({
      name: 'body',
      title: 'Project Content',
      type: 'blockContent',
      description: 'Main content of the project case study',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
            storeOriginalFilename: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
            })
          ],
        })
      ],
      description: 'Additional images to showcase the project',
    }),
    defineField({
      name: 'results',
      title: 'Project Results',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'metric',
              title: 'Metric Name',
              type: 'string',
              description: 'e.g., "Increase in CTR", "Cost Reduction"',
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'e.g., "85%", "13K+", "200%"',
            })
          ],
          preview: {
            select: {
              title: 'metric',
              subtitle: 'value',
            }
          }
        })
      ],
      description: 'Key metrics and results achieved for this project',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark this project as featured to display prominently',
      initialValue: false,
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      year: 'year',
      industry: 'industry',
    },
    prepare(selection) {
      const {title, media, year, industry} = selection
      return {
        title,
        subtitle: [year, industry].filter(Boolean).join(' • '),
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Featured, newest first',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}]
    }
  ]
}) 