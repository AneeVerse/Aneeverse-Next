# Client vs Server Components Analysis

## 🟢 SERVER COMPONENTS (No "use client" directive)

### Root Layout & Pages
- ✅ `src/app/layout.js` - Root layout (Server Component)
- ✅ `src/app/page.js` - Home page (Server Component - has metadata export)
- ✅ `src/app/(home)/layout.js` - Home layout (Server Component)

### Home Page Components (Server)
- ✅ `src/components/home/TableComponent.jsx` - Comparison table (Server Component)

### SEO Schema Components
- ✅ `src/components/seo/OrganizationSchema.jsx` - Server Component
- ✅ `src/components/seo/LocalBusinessSchema.jsx` - Server Component
- ✅ `src/components/seo/HomeSchema.jsx` - Server Component
- 🔴 `src/components/seo/WebPageSchema.jsx` - Client Component (uses usePathname hook)
- 🔴 `src/components/seo/BreadcrumbSchema.jsx` - Client Component (uses usePathname hook)

---

## 🔴 CLIENT COMPONENTS (Has "use client" directive)

### Home Page Components (Client)
- 🔴 `src/components/home/HeroSection.jsx` - Hero with animations
- 🔴 `src/components/home/SlidingLogos.jsx` - Sliding logo carousel
- 🔴 `src/components/home/HumanCreativity.jsx` - Features with Framer Motion
- 🔴 `src/components/home/CreativeSection.jsx` - Horizontal scroll section
- 🔴 `src/components/home/CommandCenter.jsx` - Command center cards
- 🔴 `src/components/home/DynamicOurWorks.jsx` - Fetches data from Sanity
- 🔴 `src/components/home/WeRecommend.jsx` - Blog recommendations
- 🔴 `src/components/common/LazySection.jsx` - Lazy loading wrapper

### Layout Components (Client)
- 🔴 `src/components/layout/ClientLayoutWrapper.jsx` - Wraps client logic
- 🔴 `src/components/layout/Navbar.jsx` - Navigation with scroll listener
- 🔴 `src/components/layout/NewFooter.jsx` - Footer with accordions

### Common Components (Client)
- 🔴 `src/components/common/SanityImage.jsx` - Image component with error handling
- 🔴 `src/components/common/Layout.jsx` - Layout wrapper
- 🔴 `src/components/common/AnimatedButton.jsx` - Animated button

### Other Pages (Client)
- 🔴 `src/app/(home)/works/page.js` - Works listing page
- 🔴 `src/app/(home)/works/[id]/page.js` - Work detail page

---

## 📊 Summary

### Home Page (`src/app/page.js`)
- **Page itself**: ✅ Server Component
- **HeroSection**: 🔴 Client Component (animations)
- **SlidingLogos**: 🔴 Client Component (animations)
- **HumanCreativity**: 🔴 Client Component (Framer Motion)
- **CreativeSection**: 🔴 Client Component (scroll animations)
- **CommandCenter**: 🔴 Client Component (memoized)
- **TableComponent**: ✅ Server Component (static content)
- **DynamicOurWorks**: 🔴 Client Component (data fetching)
- **TestimonialSlider**: 🔴 Client Component (slider)
- **WeRecommend**: 🔴 Client Component (memoized)

### Why Components are Client-Side:
1. **Animations** - HeroSection, CreativeSection, SlidingLogos use requestAnimationFrame
2. **Interactivity** - Navbar has scroll listeners, Footer has accordions
3. **Data Fetching** - DynamicOurWorks fetches from Sanity in useEffect
4. **State Management** - Components using useState, useEffect, useRef
5. **Third-party Libraries** - Framer Motion, GSAP require client-side

### Why Components are Server-Side:
1. **Static Content** - TableComponent has no interactivity
2. **SEO** - Schema components (some) are server-rendered for better SEO
3. **Metadata** - Pages export metadata (server-only feature)

---

## 🎯 Optimization Opportunities

### Could be converted to Server Components:
- `TableComponent` - ✅ Already Server Component
- Some Schema components could be server components (already done for OrganizationSchema, LocalBusinessSchema, HomeSchema)

### Must stay Client Components:
- All components with animations
- All components with user interactions
- All components fetching data in useEffect
- All components using hooks (useState, useEffect, etc.)

