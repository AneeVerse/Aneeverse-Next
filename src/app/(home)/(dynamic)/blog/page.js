import BlogHeroSection from '@/components/blog/BlogHeroSection'
import CreativeDesign from '@/components/blog/CreativeDesign'
import DigitalAdvertising from '@/components/blog/DigitalAdvertising'
import Newsletter from '@/components/blog/NewsLetter'
import Layout from '@/components/common/Layout'
import React from 'react'

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
