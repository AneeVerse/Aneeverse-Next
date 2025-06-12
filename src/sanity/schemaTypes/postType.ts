import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    // SEO Metadata Section - Positioned right after the title
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'object',
      description: 'Customize how this post appears in search engines and social media',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        // Basic SEO
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Override the default title tag (recommended: 50-60 characters)',
          validation: Rule => Rule.max(70).warning('Meta titles work best when under 60 characters')
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Custom description for search results (recommended: 150-160 characters)',
          validation: Rule => Rule.max(170).warning('Meta descriptions work best when under 160 characters')
        }),
        // Open Graph (Facebook/LinkedIn)
        defineField({
          name: 'ogTitle',
          title: 'OG Title',
          type: 'string',
          description: 'Custom title for social media shares (og:title)'
        }),
        defineField({
          name: 'ogDescription',
          title: 'OG Description',
          type: 'text',
          rows: 3,
          description: 'Custom description for social media shares (og:description)'
        }),
        defineField({
          name: 'ogLocale',
          title: 'OG Locale',
          type: 'string',
          description: 'Language and region for this content (og:locale)',
          initialValue: 'en_US'
        }),
        defineField({
          name: 'ogType',
          title: 'OG Type',
          type: 'string',
          description: 'The type of content (og:type)',
          options: {
            list: [
              {title: 'Article', value: 'article'},
              {title: 'Website', value: 'website'},
              {title: 'Blog', value: 'blog'},
              {title: 'Product', value: 'product'}
            ],
          },
          initialValue: 'article'
        }),
        defineField({
          name: 'ogSiteName',
          title: 'OG Site Name',
          type: 'string',
          description: 'The name of your website (og:site_name)',
          initialValue: 'Aneeverse'
        }),
        defineField({
          name: 'ogUrl',
          title: 'OG URL',
          type: 'url',
          description: 'The canonical URL of this content (og:url)'
        }),
        defineField({
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          description: 'Custom image for social media (og:image, recommended: 1200x630px)',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            })
          ]
        }),
        defineField({
          name: 'ogImageWidth',
          title: 'OG Image Width',
          type: 'number',
          description: 'Width of the OG image in pixels (og:image:width)',
          initialValue: 1124
        }),
        defineField({
          name: 'ogImageHeight',
          title: 'OG Image Height',
          type: 'number',
          description: 'Height of the OG image in pixels (og:image:height)',
          initialValue: 591
        }),
        defineField({
          name: 'ogImageType',
          title: 'OG Image Type',
          type: 'string',
          description: 'MIME type of the OG image (og:image:type)',
          initialValue: 'image/jpeg',
          options: {
            list: [
              {title: 'JPEG', value: 'image/jpeg'},
              {title: 'PNG', value: 'image/png'},
              {title: 'WebP', value: 'image/webp'}
            ]
          }
        }),
        // Article Specific
        defineField({
          name: 'articlePublishedTime',
          title: 'Article Published Time',
          type: 'datetime',
          description: 'When this article was published (article:published_time)'
        }),
        defineField({
          name: 'articleModifiedTime',
          title: 'Article Modified Time',
          type: 'datetime',
          description: 'When this article was last modified (article:modified_time)'
        }),
        // Twitter Card
        defineField({
          name: 'twitterCard',
          title: 'Twitter Card Type',
          type: 'string',
          description: 'The type of Twitter card to use',
          options: {
            list: [
              {title: 'Summary', value: 'summary'},
              {title: 'Summary with Large Image', value: 'summary_large_image'},
              {title: 'App', value: 'app'},
              {title: 'Player', value: 'player'}
            ]
          },
          initialValue: 'summary_large_image'
        }),
        defineField({
          name: 'twitterTitle',
          title: 'Twitter Title',
          type: 'string',
          description: 'Custom title for Twitter (twitter:title)'
        }),
        defineField({
          name: 'twitterDescription',
          title: 'Twitter Description',
          type: 'text',
          rows: 2,
          description: 'Custom description for Twitter (twitter:description)'
        }),
        defineField({
          name: 'twitterImage',
          title: 'Twitter Image',
          type: 'image',
          description: 'Custom image for Twitter (twitter:image)',
          options: {
            hotspot: true
          }
        }),
        defineField({
          name: 'twitterAuthor',
          title: 'Twitter Author',
          type: 'string',
          description: 'The author name to display on Twitter (twitter:data1)'
        }),
        defineField({
          name: 'twitterLabel1',
          title: 'Twitter Label 1',
          type: 'string',
          description: 'First custom label for Twitter (twitter:label1)',
          initialValue: 'Written by'
        }),
        defineField({
          name: 'twitterData1',
          title: 'Twitter Data 1',
          type: 'string',
          description: 'First custom data for Twitter (twitter:data1)'
        }),
        defineField({
          name: 'twitterLabel2',
          title: 'Twitter Label 2',
          type: 'string',
          description: 'Second custom label for Twitter (twitter:label2)',
          initialValue: 'Est. reading time'
        }),
        defineField({
          name: 'twitterData2',
          title: 'Twitter Data 2',
          type: 'string',
          description: 'Second custom data for Twitter (twitter:data2)'
        }),
        // General SEO Fields
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          description: 'Keywords for search engines (comma-separated)',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags'
          }
        }),
        defineField({
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Use this if the content exists elsewhere and this is a duplicate'
        }),
        defineField({
          name: 'noIndex',
          title: 'Hide from Search Engines',
          type: 'boolean',
          description: 'If checked, search engines will not index this post',
          initialValue: false
        }),
        defineField({
          name: 'msapplicationTileImage',
          title: 'MS Application Tile Image',
          type: 'url',
          description: 'URL to the tile image for Microsoft applications'
        })
      ]
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: '',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'timeToRead',
      title: 'Read Time (minutes)',
      type: 'number',
      description: 'Estimated time to read this article in minutes',
      validation: Rule => Rule.required().min(1).integer(),
      initialValue: 5,
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'A brief summary of the post that will appear on blog cards (150-200 characters recommended)',
      validation: Rule => Rule.max(200).warning('Short descriptions work best when kept under 200 characters'),
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'includeFaq',
      title: 'Include FAQ Section',
      type: 'boolean',
      description: 'Toggle to include an FAQ section in this post',
      initialValue: false,
    }),
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'FAQ Section Title',
          type: 'string',
          description: 'Title for this post\'s FAQ section',
          initialValue: 'Frequently Asked Questions',
        }),
        defineField({
          name: 'questions',
          type: 'array',
          title: 'FAQ Items',
          description: 'Add question/answer pairs for this post',
          of: [
            {
              type: 'object',
              name: 'faqItem',
              fields: [
                defineField({
                  name: 'question',
                  type: 'string',
                  title: 'Question',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'answer',
                  type: 'blockContent',
                  title: 'Answer',
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'question',
                },
              },
            },
          ],
        }),
      ],
      hidden: ({document}) => !document?.includeFaq,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
