'use client'
import Image from 'next/image'
import { useRef, useEffect, useCallback } from 'react'

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

const SPEED = 0.5 // px por frame (~30px/s a 60fps)

// Mantiene el offset en el rango (-halfWidth, 0] para el loop infinito
function wrapOffset(offset: number, halfWidth: number): number {
  if (halfWidth <= 0) return offset
  const mod = offset % halfWidth
  return mod > 0 ? mod - halfWidth : mod === 0 ? 0 : mod
}

export default function RenderCarousel() {
  const items = [...RENDERS, ...RENDERS]
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef    = useRef<HTMLDivElement>(null)
  const offsetRef   = useRef(0)
  const rafRef      = useRef<number>(0)
  const halfWidth   = useRef(0)
  const isDragging  = useRef(false)
  const dragStartX  = useRef(0)
  const dragStartOffset = useRef(0)

  const tick = useCallback(() => {
    const el = trackRef.current
    if (el && !halfWidth.current && el.scrollWidth > 0) {
      halfWidth.current = el.scrollWidth / 2
    }
    if (el && !isDragging.current && halfWidth.current > 0) {
      offsetRef.current = wrapOffset(offsetRef.current - SPEED, halfWidth.current)
      el.style.transform = `translateX(${offsetRef.current}px)`
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [tick])

  const startDrag = useCallback((clientX: number) => {
    isDragging.current = true
    dragStartX.current = clientX
    dragStartOffset.current = offsetRef.current
    containerRef.current?.setAttribute('data-dragging', '')
  }, [])

  const moveDrag = useCallback((clientX: number) => {
    if (!isDragging.current || !trackRef.current) return
    const delta = clientX - dragStartX.current
    const next = wrapOffset(dragStartOffset.current + delta, halfWidth.current)
    offsetRef.current = next
    trackRef.current.style.transform = `translateX(${next}px)`
  }, [])

  const endDrag = useCallback(() => {
    isDragging.current = false
    containerRef.current?.removeAttribute('data-dragging')
  }, [])

  return (
    <div
      ref={containerRef}
      className="nb-rcarousel"
      onMouseDown={e => { startDrag(e.clientX); e.preventDefault() }}
      onMouseMove={e => moveDrag(e.clientX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
    >
      <div ref={trackRef} className="nb-rcarousel-track">
        {items.map((src, i) => (
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
