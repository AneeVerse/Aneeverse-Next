import SlidingLogos from '@/components/home/SlidingLogos'
import AIDesignSection from '@/components/pricing/AIDesignSection'
import CreativeStatsOurWorks from '@/components/works/CreativeStatsOurWorks'
import OurWorkSection from '@/components/works/OurWorkSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <CreativeStatsOurWorks/>
      <SlidingLogos/>
      <OurWorkSection   />
      <AIDesignSection/>
    </div>
  )
}

export default page