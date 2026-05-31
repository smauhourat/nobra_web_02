'use client'

import { useEffect } from 'react'

export default function GuiaPage() {
  useEffect(() => {
    window.location.replace('/guia.html')
  }, [])
  return null
}
