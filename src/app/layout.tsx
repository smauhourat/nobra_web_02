import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadMagnetBanner from '@/components/LeadMagnetBanner'

export const metadata: Metadata = {
  title: 'Nobra · Novoa & Bravin Arquitectos',
  description: 'Estudio de arquitectura en La Plata, Buenos Aires. Proyecto, dirección de obra y construcción llave en mano.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <LeadMagnetBanner />
      </body>
    </html>
  )
}
