# Breadcrumb JSON-LD Dynamic Component

This component automatically generates structured data (JSON-LD) breadcrumbs for SEO purposes based on the current URL path.

## Features

- **Dynamic Generation**: Automatically creates breadcrumbs based on the current pathname
- **Custom Names**: Uses predefined custom names for specific routes (e.g., "our-work" → "Our Work")
- **SEO Optimized**: Generates proper JSON-LD structured data for search engines
- **Client-Side Only**: Only renders on the client to avoid hydration issues
- **Next.js 15 Compatible**: Uses `useAppDir` prop for Next.js App Router

## Usage

The component is automatically included in the root layout and will appear on all pages except:
- Studio pages (`/studio/*`)
- Authentication pages (`/register`, `/login`)

## Custom Breadcrumb Names

The component includes predefined custom names for common routes:

```javascript
const customBreadcrumbNames = {
  'our-work': 'Our Work',
  'customer-stories': 'Customer Stories',
  'seo-optimization': 'SEO Optimization',
  'web-design': 'Web Design',
  'content-marketing': 'Content Marketing',
  'e-commerce': 'E-commerce',
  'ui-ux-design': 'UI/UX Design',
  'local-seo': 'Local SEO',
  'web-development': 'Web Development',
  'blog': 'Blog',
  'about': 'About Us',
  'services': 'Services',
  'pricing': 'Pricing',
  'contact': 'Contact',
  'works': 'Portfolio',
  'team': 'Our Team'
};
```

## Example Output

For a URL like `/services/seo-optimization`, the component will generate:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aneeverse.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://aneeverse.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SEO Optimization",
      "item": "https://aneeverse.com/services/seo-optimization"
    }
  ]
}
```

## Adding New Custom Names

To add new custom breadcrumb names, edit the `customBreadcrumbNames` object in the component file.

## Dependencies

- `next-seo`: For JSON-LD breadcrumb generation
- `next/navigation`: For pathname access
- `react`: For component state management
