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
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
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
          description: 'Override the default title tag (defaults to post title)',
          validation: Rule => Rule.max(70).warning('Meta titles work best when under 60 characters')
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Custom description for search results (defaults to post short description)',
          validation: Rule => Rule.max(170).warning('Meta descriptions work best when under 160 characters')
        }),
        // Open Graph (Facebook/LinkedIn)
        defineField({
          name: 'ogTitle',
          title: 'OG Title',
          type: 'string',
          description: 'Custom title for social media shares (defaults to meta title)'
        }),
        defineField({
          name: 'ogDescription',
          title: 'OG Description',
          type: 'text',
          rows: 3,
          description: 'Custom description for social media shares (defaults to meta description)'
        }),
        defineField({
          name: 'ogLocale',
          title: 'OG Locale',
          type: 'string',
          description: 'Primary language and region for this content (og:locale)',
          initialValue: 'en_US',
          options: {
            list: [
              {title: 'English (US)', value: 'en_US'},
              {title: 'English (UK)', value: 'en_GB'},
              {title: 'English (Ireland)', value: 'en_IE'},
              {title: 'English (India)', value: 'en_IN'},
              {title: 'English (Singapore)', value: 'en_SG'},
              {title: 'English (Australia)', value: 'en_AU'},
              {title: 'English (Canada)', value: 'en_CA'},
              {title: 'Spanish', value: 'es_ES'},
              {title: 'French', value: 'fr_FR'},
              {title: 'German', value: 'de_DE'},
              {title: 'Italian', value: 'it_IT'},
              {title: 'Portuguese (Brazil)', value: 'pt_BR'},
              {title: 'Arabic (UAE)', value: 'ar_AE'},
              {title: 'Arabic (Qatar)', value: 'ar_QA'},
              {title: 'Arabic (Saudi Arabia)', value: 'ar_SA'},
              {title: 'Arabic', value: 'ar_AR'},
              {title: 'Chinese (Simplified)', value: 'zh_CN'},
              {title: 'Japanese', value: 'ja_JP'},
              {title: 'Korean', value: 'ko_KR'},
              {title: 'Russian', value: 'ru_RU'},
              {title: 'Hindi', value: 'hi_IN'},
              {title: 'Dutch', value: 'nl_NL'},
              {title: 'Swedish', value: 'sv_SE'},
              {title: 'Norwegian', value: 'nb_NO'},
              {title: 'Danish', value: 'da_DK'},
              {title: 'Finnish', value: 'fi_FI'},
              {title: 'Polish', value: 'pl_PL'},
              {title: 'Turkish', value: 'tr_TR'}
            ],
            layout: 'dropdown'
          }
        }),
        defineField({
          name: 'ogLocaleAlternate',
          title: 'OG Alternate Locales',
          type: 'array',
          description: 'Additional languages this content is available in (og:locale:alternate)',
          of: [
            {
              type: 'string',
              name: 'locale',
              title: 'Locale',
              options: {
                list: [
                  {title: 'English (US)', value: 'en_US'},
                  {title: 'English (UK)', value: 'en_GB'},
                  {title: 'English (Ireland)', value: 'en_IE'},
                  {title: 'English (India)', value: 'en_IN'},
                  {title: 'English (Singapore)', value: 'en_SG'},
                  {title: 'English (Australia)', value: 'en_AU'},
                  {title: 'English (Canada)', value: 'en_CA'},
                  {title: 'Spanish', value: 'es_ES'},
                  {title: 'French', value: 'fr_FR'},
                  {title: 'German', value: 'de_DE'},
                  {title: 'Italian', value: 'it_IT'},
                  {title: 'Portuguese (Brazil)', value: 'pt_BR'},
                  {title: 'Arabic (UAE)', value: 'ar_AE'},
                  {title: 'Arabic (Qatar)', value: 'ar_QA'},
                  {title: 'Arabic (Saudi Arabia)', value: 'ar_SA'},
                  {title: 'Arabic', value: 'ar_AR'},
                  {title: 'Chinese (Simplified)', value: 'zh_CN'},
                  {title: 'Japanese', value: 'ja_JP'},
                  {title: 'Korean', value: 'ko_KR'},
                  {title: 'Russian', value: 'ru_RU'},
                  {title: 'Hindi', value: 'hi_IN'},
                  {title: 'Dutch', value: 'nl_NL'},
                  {title: 'Swedish', value: 'sv_SE'},
                  {title: 'Norwegian', value: 'nb_NO'},
                  {title: 'Danish', value: 'da_DK'},
                  {title: 'Finnish', value: 'fi_FI'},
                  {title: 'Polish', value: 'pl_PL'},
                  {title: 'Turkish', value: 'tr_TR'}
                ],
                layout: 'dropdown'
              }
            }
          ],
          options: {
            sortable: false
          }
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
          description: 'The name of your website (default: Aneeverse)',
          initialValue: 'Aneeverse'
        }),
        defineField({
          name: 'ogUrl',
          title: 'OG URL',
          type: 'url',
          description: 'The canonical URL of this content (defaults to post slug URL)'
        }),
        // OG Image fields removed as requested
        defineField({
          name: 'ogImageType',
          title: 'OG Image Type',
          type: 'string',
          description: 'MIME type of the OG image',
          initialValue: 'image/webp',
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
          description: 'Use this if the content exists elsewhere (defaults to post slug URL)'
        })
      ]
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
