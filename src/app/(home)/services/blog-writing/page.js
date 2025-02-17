import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import BlogWritingCreativeServices from '@/components/services/blog-writing/BlogWritingCreativeServices'
import BlogWritingFAQSection from '@/components/services/blog-writing/BlogWritingFAQSection'
import BlogWritingStateSection from '@/components/services/blog-writing/BlogWritingStateSection'
import BlogWritingSupportSection from '@/components/services/blog-writing/BlogWritingSupportSection'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import React from 'react'




// metadata
export const metadata = {
    title: "Blog Writing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "blog Writing | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/blog-writing`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "blog Writing | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "blog Writing | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }
  

const page = () => {
  return (
    <div>
           <CommonServicesHeroSection
            title="Blog Writing Services"
            subtitle="Content That Engages & Converts"
            description="  Transform your brand’s online presence with compelling blog content. Our expert writers craft engaging, SEO-friendly articles that drive traffic, boost credibility, and enhance audience engagement."
            ctaText="Book a Call"
            ctaLink="/contact"
            backgroundImage="/images/services/google-ads/hero-banner.avif"
           
          />
        <SlidingLogos />
        <BlogWritingSupportSection />
        <BlogWritingCreativeServices />
        <CommonServicesOurWorks />
        <BlogWritingStateSection />
        <TestimonialSlider />
        <BlogWritingFAQSection />
      
    </div>
  )
}


export default page
