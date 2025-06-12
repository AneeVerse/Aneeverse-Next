import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from '../sanity/schemaTypes'

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'be9i5ty1',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Aneeverse Content Studio',
  basePath: '/studio',
  hostname: 'blog.aneeverse.com',
  plugins: [deskTool()],
  schema: { types: schemaTypes },
  studio: {
    components: {
      // Custom logo component can be added here
    }
  },
  document: {
    productionUrl: async (prev, context) => {
      const { document } = context;
      if (!document || !document.slug) {
        return prev;
      }
      
      const slug = document.slug.current;
      let url;
      
      switch (document._type) {
        case 'post':
          url = `https://aneeverse.com/blog/${slug}`;
          break;
        case 'customerStory':
          url = `https://aneeverse.com/customer-stories/${slug}`;
          break;
        default:
          url = prev;
      }
      
      return url;
    }
  }
})