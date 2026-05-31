'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/estudio',   label: 'Estudio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto',  label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header className={`nb-header${scrolled ? ' is-scrolled' : ''}`}>
        <Link className="nb-brand" href="/" aria-label="Inicio">
          <img className="nb-brand-mark" src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo-marca-color-2.svg`} alt="" />
          {/* <span className="nb-brand-text">NobraA</span> */}
        </Link>

        <nav className="nb-nav">
          {links.map(l => (
            <Link
              key={l.href}
              className={`nb-nav-link${pathname === l.href ? ' is-active' : ''}`}
              href={l.href}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link className="nb-cta" href="/contacto">
          Agenda asesoría
          <span className="nb-cta-arrow">→</span>
        </Link>

        <button
          className="nb-burger"
          aria-label="Abrir menú"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={`nb-mobile-menu${open ? ' is-open' : ''}`}>
        <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <div className="nb-mobile-meta">
          <span>estudio@nobra.ar</span>
          <span>CABA, Buenos Aires</span>
        </div>
      </div>
    </>
  )
}
