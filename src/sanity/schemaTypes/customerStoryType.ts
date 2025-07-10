import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const customerStoryType = defineType({
  name: 'customerStory',
  title: 'Customer Story',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    // NEW: Project Title field
    defineField({
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
      description: 'Name of the project featured in this customer story (e.g., Shopify Growth Workshop)',
    }),
    // NEW: Services Provided field
    defineField({
      name: 'servicesProvided',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of services provided for this project (e.g., Marketing Strategy, Growth Consulting)',
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
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
        accept: 'image/*',
      },
      description: 'Main image for the customer story. Will be displayed at full width on the story page.',
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
      name: 'customerLogo',
      title: 'Customer Logo',
      type: 'image',
      description: 'Logo of the customer featured in this story',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
      validation: Rule => Rule.required().min(1).error('At least one category is required'),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      description: 'Estimated time to read this customer story in minutes',
      validation: Rule => Rule.required().min(1).integer(),
      initialValue: 5,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'A brief summary of the customer story (150-200 characters recommended)',
      validation: Rule => Rule.max(200).warning('Short descriptions work best when kept under 200 characters'),
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      category: 'categories.0.title',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {title, media, category, publishedAt} = selection
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'Unpublished'
      return {
        title,
        subtitle: `${category ? category + ' | ' : ''}Published: ${date}`,
        media,
      }
    },
  },
}) 