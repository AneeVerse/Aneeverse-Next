import BlogHeroSection from '@/components/blog/BlogHeroSection'
import DigitalAdvertising from '@/components/blog/DigitalAdvertising'
import Newsletter from '@/components/blog/NewsLetter'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white pb-16'>
        <BlogHeroSection    />
        <DigitalAdvertising />
        <Newsletter />
      
    </div>
  )
}

export default page
