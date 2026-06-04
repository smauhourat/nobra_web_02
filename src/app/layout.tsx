import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadMagnetBanner from '@/components/LeadMagnetBanner'

export const metadata: Metadata = {
  title: 'Nobra · Novoa & Bravin Arquitectos',
  description: 'Estudio de arquitectura en CABA, Buenos Aires. Proyecto, dirección de obra y construcción llave en mano.',
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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-K25P3PZ615" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K25P3PZ615');
        `}
      </Script>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <LeadMagnetBanner />
      </body>
    </html>
  )
}
