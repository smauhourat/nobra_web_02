import Link from 'next/link'
import { DrawPlan, DrawSection, DrawAxon } from '@/components/Drawings'
import RenderCarousel from '@/components/RenderCarousel'

const PILLARS = [
  {
    n: '01', t: 'Proyecto', href: '/servicios',
    d: 'Anteproyecto, documentación técnica y planos municipales. Detalle constructivo desde el primer croquis.',
    cta: 'Ver alcance',
    Drawing: () => <DrawPlan variant={1} />,
  },
  {
    n: '02', t: 'Dirección de obra', href: '/servicios',
    d: 'Coordinación de gremios, control de avance y calidad. La obra se construye tal como se piensa.',
    cta: 'Ver alcance',
    Drawing: () => <DrawSection variant={2} />,
  },
  {
    n: '03', t: 'Asesoría integral', href: '/contacto',
    d: 'Acompañamos cada decisión: factibilidad, gestiones, materiales, presupuesto. Trato directo con los arquitectos.',
    cta: 'Conversemos',
    Drawing: () => <DrawAxon variant={1} />,
  },
]

const TRUST = [
  { num: '12', label: 'años', desc: 'de experiencia profesional sumada entre los socios.' },
  { num: '08', label: 'servicios', desc: 'desde el primer croquis hasta la entrega de llaves.' },
  { num: '48 h', label: 'respuesta', desc: 'tiempo máximo de respuesta a cada consulta.' },
  { num: '02', label: 'arquitectos', desc: 'directos en cada reunión y cada decisión técnica.' },
]

export default function HomePage() {
  return (
    <div className="nb-page">
      {/* Hero */}
      <section className="nb-hero" id="top">
        <div className="nb-hero-content">
          <div className="nb-eyebrow">
            <span className="nb-rule" />
            Estudio de arquitectura · CABA · Bs. As.
          </div>
          <h1 className="nb-display">
            Pensamos, proyectamos<br />
            y construimos los espacios<br />
            que <em>habitás</em>.
          </h1>
          <p className="nb-hero-lede">
            Diseño integral, dirección de obra y gestión.
            Trabajamos cada proyecto desde la primera idea hasta la entrega de llaves.
          </p>
          <div className="nb-hero-actions">
            <Link className="nb-btn nb-btn-primary" href="/contacto">
              Contanos tu idea
            </Link>
            <Link className="nb-btn nb-btn-text" href="/servicios">
              Ver servicios <span className="nb-arrow">→</span>
            </Link>
          </div>
        </div>

        <aside className="nb-hero-meta">
          <div className="nb-meta-row"><span className="nb-meta-k">Año</span><span className="nb-meta-v">2026 —</span></div>
          <div className="nb-meta-row"><span className="nb-meta-k">Estudio</span><span className="nb-meta-v">Novoa &amp; Bravin</span></div>
          <div className="nb-meta-row"><span className="nb-meta-k">Sede</span><span className="nb-meta-v">CABA, BA</span></div>
          <div className="nb-meta-row"><span className="nb-meta-k">Servicio</span><span className="nb-meta-v">Proyecto + Obra</span></div>
        </aside>

        <div className="nb-hero-image">
          <RenderCarousel />
        </div>
      </section>

      {/* Pilares */}
      <section className="nb-pillars" id="pilares">
        <div className="nb-pillars-head">
          <div>
            <span className="nb-eyebrow">
              <span className="nb-rule" />
              Qué hacemos
            </span>
          </div>
          <div>
            <h2 className="nb-h2">
              Tres pilares.<br />
              Un mismo criterio<br />
              arquitectónico.
            </h2>
            <p className="nb-section-lede">
              Trabajamos cada encargo de punta a punta, o entramos en la etapa que necesites.
              Lo importante es que el criterio no cambie entre el primer plano y la última terminación.
            </p>
          </div>
        </div>

        <div className="nb-pillars-grid">
          {PILLARS.map(p => (
            <Link key={p.n} href={p.href} className="nb-pillar">
              <div className="nb-pillar-drawing"><p.Drawing /></div>
              <div className="nb-pillar-num">{p.n} / 03</div>
              <h3 className="nb-pillar-title">{p.t}</h3>
              <p className="nb-pillar-desc">{p.d}</p>
              <div className="nb-pillar-link">
                {p.cta} <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="nb-manifesto">
        <div>
          <span className="nb-eyebrow">
            <span className="nb-rule" />
            El estudio
          </span>
        </div>
        <div>
          <p className="nb-manifesto-quote">
            Somos un estudio joven con <em>experiencia profesional</em> sumada en estudios de primera línea.
            Lo que nos diferencia es lo básico: <em>trato directo</em>, atención al detalle,
            honorarios claros y dedicación exclusiva a tu proyecto.
          </p>
          <div className="nb-manifesto-side" style={{ marginTop: 48 }}>
            <Link className="nb-btn nb-btn-text" href="/estudio">
              Conocé el estudio <span className="nb-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="nb-trust">
        <div className="nb-trust-grid">
          {TRUST.map(c => (
            <div key={c.label} className="nb-trust-cell">
              <span className="nb-trust-label">{c.label}</span>
              <span className="nb-trust-num">{c.num}</span>
              <p className="nb-trust-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
