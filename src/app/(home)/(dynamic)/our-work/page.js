'use client';

import React, { useEffect, useState } from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import SlidingLogos from '@/components/home/SlidingLogos';
import { client } from '@/sanity/lib/client';
import { getPortfolioWorksQuery } from '@/sanity/lib/queries';
import { revalidate } from './config';

// This isn't used in client components, but we'll define it for Next.js to pick up
export { revalidate };

// Note: In a client component, we can't use the metadata export directly
// The metadata is now defined in the layout.js file or in a separate metadata.js file
// export const metadata = {...}

export default function OurWorkPage() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchPortfolioItems() {
      try {
        const data = await client.fetch(getPortfolioWorksQuery);
        setPortfolioItems(data);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchPortfolioItems();
  }, []);
  
  return (
    <div>
      <div className='mt-[40px]'>
        <PortfolioHero />
        <SlidingLogos />
        
        {isLoading ? (
          <div className="py-16 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
          </div>
        ) : (
          <PortfolioGrid portfolioItems={portfolioItems} />
        )}
      </div>
    </div>
  );
} 