import ParnterSection from '@/components/about/PartnerSection'
import HeroSectionOurTeam from '@/components/ourTeam/HeroSectionOurTeam'
import OurTeamSection from '@/components/ourTeam/OurTeamSection'
import React from 'react'

const page = () => {
  return (
    <div>

    <div className='bg-secondary-500 space-y-[60px] py-16'>
        <HeroSectionOurTeam />
        <ParnterSection />
        <OurTeamSection />
        </div>
    </div>
  )
}

export default page