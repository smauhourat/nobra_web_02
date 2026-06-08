'use client'
import Image from 'next/image'

const RENDERS = [
  '/assets/proyectos/cb02-render-01.webp',
  '/assets/proyectos/cb02-render-02.webp',
  '/assets/proyectos/cb02-render-03.webp',
  '/assets/proyectos/cp05-render-01.webp',
  '/assets/proyectos/cp05-render-02.webp',
  '/assets/proyectos/lc04-render-01.webp',
  '/assets/proyectos/lp01-render-01.webp',
  '/assets/proyectos/lp01-render-02.webp',
  '/assets/proyectos/lp01-render-03.webp',
  '/assets/proyectos/sr03-render-01.webp',
]

export default function RenderCarousel() {
  const track = [...RENDERS, ...RENDERS]

  return (
    <div className="nb-rcarousel">
      <div className="nb-rcarousel-track">
        {track.map((src, i) => (
          <div key={i} className="nb-rcarousel-slide">
            <Image
              src={src}
              alt=""
              fill
              sizes="520px"
              style={{ objectFit: 'cover' }}
              priority={i < 4}
            />
          </div>
        ))}
      </div>
      <div className="nb-rcarousel-label">
        <span className="nb-placeholder-tag">Renders del estudio</span>
      </div>
    </div>
  )
}
