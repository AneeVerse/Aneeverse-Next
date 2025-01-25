import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import FeaturesSection from '@/components/home/FeaturesSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import NewFooter from '@/components/layout/NewFooter'
import AboutDesignServicesSection from '@/components/services/AboutDesignServicesSection'
import CreativeDesignServices from '@/components/services/CreativeDesignServices'
import FAQSection from '@/components/services/FAQSection'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesSupportSection from '@/components/services/ServicesSupportSection'
import WebsiteServices from '@/components/services/WebsiteServices'
import React from 'react'

const page = () => {
  return (
   <div>
    <ServicesHero />
     <SlidingLogos />
     <ServicesSupportSection />
     <div className='bg-secondary-500 space-y-[100px] py-16 px-6'>
        <WebsiteServices />
        <CreativeDesignServices />

        <CreativeDesignServices />

        <WebsiteServices />
        </div>
        <DynamicOurWorks />
        <FeaturesSection />
        <AboutDesignServicesSection />
        <FAQSection />
        <NewFooter />
   </div>
  )
}

export default page