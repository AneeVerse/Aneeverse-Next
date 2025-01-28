import SlidingLogos from '@/components/home/SlidingLogos'
import AIDesignSection from '@/components/pricing/AIDesignSection'
import CreativeSectionPricing from '@/components/pricing/CreativeSectionPricing'
import FAQSectionPricing from '@/components/pricing/FAQSectionPricing'
import FeatureGridPricing from '@/components/pricing/FeatureGridPricing'
import PricingComponent from '@/components/pricing/PricingComponent'
import TestimonialSliderPricing from '@/components/pricing/TestimonialSliderPricing'
import React from 'react'

const page = () => {
  return (
    <div>
        <PricingComponent  />
        <div className='py-16 bg-primary-500'>
        <SlidingLogos />
        </div>
        <CreativeSectionPricing />
        <FeatureGridPricing />
        <TestimonialSliderPricing />
        <AIDesignSection />
        <FAQSectionPricing />
    </div>
  )
}

export default page