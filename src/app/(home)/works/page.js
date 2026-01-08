import SlidingLogos from '@/components/home/SlidingLogos'
import AIDesignSection from '@/components/pricing/AIDesignSection'
import CreativeStatsOurWorks from '@/components/works/CreativeStatsOurWorks'
import OurWorkSection from '@/components/works/OurWorkSection'
import { client } from '@/sanity/lib/client';
import { getPortfolioWorksQuery, getCustomerStoriesQuery } from '@/sanity/lib/queries';
import { metadata as worksMetadata } from './metadata';

// Export metadata for SEO
export const metadata = worksMetadata;

// Revalidation: Regenerate page every hour
export const revalidate = 3600;

export default async function WorksPage() {
  // Fetch data on server for optimal performance
  let portfolioItems = [];
  let customerStories = [];
  
  try {
    const [portfolioData, storiesData] = await Promise.all([
      client.fetch(getPortfolioWorksQuery),
      client.fetch(getCustomerStoriesQuery)
    ]);
    
    portfolioItems = portfolioData || [];
    customerStories = storiesData || [];
  } catch (error) {
    console.error('Error fetching data for works page:', error);
    // Continue with empty arrays on error
  }

  return (
    <div>
      <CreativeStatsOurWorks/>
      <SlidingLogos/>
      <OurWorkSection 
        portfolioItems={portfolioItems} 
        customerStories={customerStories}
        isLoading={false} 
      />
      <AIDesignSection/>
    </div>
  )
}