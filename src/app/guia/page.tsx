'use client'

import { useEffect } from 'react'

export default function InformePage() {
  useEffect(() => {
    window.location.replace('/guia-construir.html')
  }, [])
  return null
}
