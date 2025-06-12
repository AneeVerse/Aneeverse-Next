'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../lib/sanityConfig'
import { useEffect } from 'react'

export default function StudioPage() {
  // Set document title directly to override Sanity's default title
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = 'Content Studio | Aneeverse'
    }
  }, [])

  return <NextStudio config={config} />
} 