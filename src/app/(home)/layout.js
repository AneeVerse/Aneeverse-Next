import Footer from '@/components/layout/Footer'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='mt-[80px]'>
        {children}
        <Footer/>
    </div>
  )
}

export default layout