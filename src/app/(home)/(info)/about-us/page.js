import FeaturesSectionAbout from '@/components/about/FeaturesSectionAbout';
import HeroSectionAbout from '@/components/about/HeroSectionAbout';
import ParnterSection from '@/components/about/PartnerSection';
import TeamSectionAbout from '@/components/about/TeamSectionAbout';
import TestimonialSlider from '@/components/about/TestimonialSlider';
import TextWithVideo from '@/components/about/TextWithVideo';
import ValuesComponent from '@/components/about/ValuesComponent';
import NewFooter from '@/components/layout/NewFooter';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
   
    <>
    <div className='bg-secondary-500 space-y-[60px] py-16'>
    <HeroSectionAbout/>
    <ParnterSection/>
    <TextWithVideo/>
    </div>

    <FeaturesSectionAbout/>
    <TeamSectionAbout/>
    <TestimonialSlider/>
    <ValuesComponent/>
    <NewFooter  />
    </>
  );
};

export default AboutUsPage;
