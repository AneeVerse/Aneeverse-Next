'use client';

import React, { useEffect, useState } from 'react';
import SlidingLogos from '@/components/home/SlidingLogos'
import AIDesignSection from '@/components/pricing/AIDesignSection'
import CreativeStatsOurWorks from '@/components/works/CreativeStatsOurWorks'
import OurWorkSection from '@/components/works/OurWorkSection'
import { client } from '@/sanity/lib/client';
import { getPortfolioWorksQuery, getCustomerStoriesQuery } from '@/sanity/lib/queries';

// Note: Metadata has been moved to metadata.js file to fix 
// the "cannot export metadata from a client component" error
// Note: Revalidation should be configured in a server component, not a client component

const WorksPage = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [customerStories, setCustomerStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const [portfolioData, storiesData] = await Promise.all([
          client.fetch(getPortfolioWorksQuery),
          client.fetch(getCustomerStoriesQuery)
        ]);
        
        setPortfolioItems(portfolioData);
        setCustomerStories(storiesData);
        console.log("Fetched portfolio items:", portfolioData);
        console.log("Fetched customer stories:", storiesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div>
      <CreativeStatsOurWorks/>
      <SlidingLogos/>
      <OurWorkSection 
        portfolioItems={portfolioItems} 
        customerStories={customerStories}
        isLoading={isLoading} 
      />
      <AIDesignSection/>
    </div>
  )
}

export default WorksPage