import dynamic from "next/dynamic";
import HeroSection from "../components/home/HeroSection";
import LazySection from "@/components/common/LazySection";
import { client } from "@/sanity/lib/client";
import { getPortfolioWorksQuery, getCustomerStoriesQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

// Lazy load all components below the fold using dynamic imports
// Note: ssr: false is not allowed in Server Components in Next.js 15
// Components are already client components, so they'll work without it
const SlidingLogos = dynamic(() => import("@/components/home/SlidingLogos"));

const HumanCreativity = dynamic(() => import("@/components/home/HumanCreativity"));

const CreativeSection = dynamic(() => import("@/components/home/CreativeSection"));

const CommandCenter = dynamic(() => import("@/components/home/CommandCenter"));

const TableComponent = dynamic(() => import("@/components/home/TableComponent"));

const DynamicOurWorks = dynamic(() => import("@/components/home/DynamicOurWorks"));

const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"));

const WeRecommend = dynamic(() => import("@/components/home/WeRecommend"));

const DiscoveryCall = dynamic(() => import("@/components/home/DiscoveryCall"));

const BottomAboutSection = dynamic(() => import("@/components/home/BottomAboutSection"));

// Helper to get optimized Sanity image URL with max width
const getSanityImageUrl = (image, maxWidth = 1200) => {
  if (!image) return "/images/home/works-ban-1.avif";
  try {
    return urlForImage(image, maxWidth).url();
  } catch (error) {
    console.error('Error generating Sanity image URL:', error);
    return "/images/home/works-ban-1.avif";
  }
};

// Homepage specific overrides if any (e.g. canonical is already set to / in layout.js)
export const metadata = {
  alternates: {
    canonical: '/',
  },
};

export default async function Home() {
  // Fetch data on server for optimal performance
  let projects = [];
  try {
    const [works, stories] = await Promise.all([
      client.fetch(getPortfolioWorksQuery),
      client.fetch(getCustomerStoriesQuery)
    ]);

    // Map works - use maxWidth to prevent timeout with large images
    const mappedWorks = works.map((item, index) => ({
      image: getSanityImageUrl(item.thumbnailImage || item.mainImage, 1200),
      title: item.title,
      url: `/works/${item.slug.current}`,
      description: item.servicesProvided?.join(", ") || item.shortDescription || "",
      colSpan: (index % 6 === 0 || index % 6 === 4) ? 2 : 1,
      type: "work"
    }));

    // Map customer stories - use maxWidth to prevent timeout
    const mappedStories = stories.map((story, index) => ({
      image: getSanityImageUrl(story.mainImage, 1200),
      title: story.projectTitle || story.title,
      url: `/customer-stories/${story.slug.current}`,
      description: story.servicesProvided?.join(", ") || story.shortDescription || "",
      colSpan: ((index + mappedWorks.length) % 6 === 0 || (index + mappedWorks.length) % 6 === 4) ? 2 : 1,
      type: "story"
    }));

    // Combine and sort (works first, then stories)
    projects = [...mappedWorks, ...mappedStories];
  } catch (error) {
    console.error('Error fetching projects for home page:', error);
    // projects will remain empty array on error
  }

  return (
    <div>
      {/* HeroSection loads immediately - above the fold content */}
      <HeroSection />

      {/* All other components lazy load when they're about to enter viewport */}
      {/* Using sectionId for sessionStorage caching to prevent reload on fast scroll */}
      <LazySection sectionId="sliding-logos">
        <SlidingLogos />
      </LazySection>

      <LazySection sectionId="human-creativity">
        <HumanCreativity />
      </LazySection>

      <LazySection sectionId="creative-section">
        <CreativeSection />
      </LazySection>

      <LazySection sectionId="command-center">
        <CommandCenter />
      </LazySection>

      <LazySection sectionId="table-component">
        <TableComponent />
      </LazySection>

      <LazySection sectionId="dynamic-works">
        <DynamicOurWorks projects={projects} />
      </LazySection>

      <LazySection sectionId="testimonial-slider">
        <TestimonialsSection />
      </LazySection>

      <LazySection sectionId="we-recommend">
        <WeRecommend />
      </LazySection>

      {/* <FeaturesSection /> */}


      <LazySection sectionId="discovery-call">
        <DiscoveryCall />
      </LazySection>

      {/* <LazySection>
        <BottomAboutSection />
      </LazySection> */}
    </div>
  );
}
