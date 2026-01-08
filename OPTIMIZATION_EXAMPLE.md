# Optimization Example: Converting Client to Server Component

## Current Approach (Client Component - Slower)

```jsx
// ❌ CURRENT: Client Component fetching data
'use client';
const DynamicOurWorks = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Fetches on client-side (slower, larger bundle)
    client.fetch(getPortfolioWorksQuery).then(setProjects);
  }, []);
  
  return <div>{/* render projects */}</div>;
};
```

**Problems:**
- Data fetched in browser (slower)
- Loading state shown to user
- Larger JavaScript bundle
- Not SEO-friendly

---

## Optimized Approach (Server Component - Faster)

### Option 1: Fetch in Page, Pass as Props

```jsx
// ✅ OPTIMIZED: Server Component
// src/app/page.js (Server Component)
export default async function Home() {
  // Fetch data on server (faster, SEO-friendly)
  const [works, stories] = await Promise.all([
    client.fetch(getPortfolioWorksQuery),
    client.fetch(getCustomerStoriesQuery)
  ]);
  
  const projects = [...works, ...stories];
  
  return (
    <div>
      <HeroSection />
      <DynamicOurWorks projects={projects} /> {/* Pass as prop */}
    </div>
  );
}

// src/components/home/DynamicOurWorks.jsx (Can be Server Component)
export default function DynamicOurWorks({ projects }) {
  // No useState, no useEffect - pure rendering!
  return <div>{/* render projects */}</div>;
}
```

**Benefits:**
- ✅ Data fetched on server (faster)
- ✅ No loading state needed
- ✅ Smaller JavaScript bundle
- ✅ SEO-friendly
- ✅ Better performance

---

### Option 2: Server Actions (For Interactive Updates)

```jsx
// ✅ Server Action
// src/app/actions.js
'use server';

export async function getProjects() {
  const [works, stories] = await Promise.all([
    client.fetch(getPortfolioWorksQuery),
    client.fetch(getCustomerStoriesQuery)
  ]);
  return [...works, ...stories];
}

// ✅ Client Component (only for interactivity)
'use client';
import { getProjects } from '@/app/actions';

export default function DynamicOurWorks() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    getProjects().then(setProjects); // Server Action
  }, []);
  
  return <div>{/* render */}</div>;
}
```

---

## When to Use Each Approach

### Use Server Component (Fetch in Page):
- ✅ Static or rarely-changing data
- ✅ Initial page load
- ✅ SEO-critical content
- ✅ No real-time updates needed

### Use Client Component (Fetch in useEffect):
- ✅ Real-time data (WebSocket, polling)
- ✅ User-specific data (after login)
- ✅ Interactive filtering/sorting
- ✅ Data that changes based on user actions

---

## Recommendation for Your Project

### For DynamicOurWorks:
**Best:** Fetch in `page.js` (Server Component) and pass as props
- Faster initial load
- Better SEO
- Smaller bundle
- No loading spinner needed

### Keep Client Components For:
- HeroSection (animations)
- CreativeSection (scroll animations)
- Navbar (scroll listeners)
- Any component with user interactions

---

## Performance Impact

| Approach | Initial Load | Bundle Size | SEO | User Experience |
|----------|-------------|-------------|-----|-----------------|
| **Server Fetch** | ⚡⚡⚡⚡⚡ | ⚡⚡⚡⚡⚡ | ✅ | ⚡⚡⚡⚡⚡ |
| **Client Fetch** | ⚡⚡ | ⚡⚡ | ❌ | ⚡⚡⚡ |

**Conclusion:** Server Components are **always faster** when possible!

