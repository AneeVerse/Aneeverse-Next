import BlogHeroSection from '@/components/blog/BlogHeroSection'
import CreativeDesign from '@/components/blog/CreativeDesign'
import DigitalAdvertising from '@/components/blog/DigitalAdvertising'
import Newsletter from '@/components/blog/NewsLetter'
import Layout from '@/components/common/Layout'
import React from 'react'

export const metadata = {
  title: "Blog | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Blog | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/blog`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Blog | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  return (
    <div className='bg-white pb-16'>
        <BlogHeroSection    />
        <DigitalAdvertising />
        <CreativeDesign   />
        <Layout>
        <Newsletter />
        </Layout>
      
    </div>
  )
}

export default page
