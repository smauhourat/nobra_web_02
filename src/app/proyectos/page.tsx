'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface ImageSet { planta?: string; corte?: string; renders?: string[] }
interface Project {
  id: string; num: string; title: string; place: string; kind: string;
  type: string; year: string; stage: string; area: string; plot: string;
  program: string; desc: string; desc2: string; renderCount: number; images?: ImageSet
}
interface LightboxItem { id: string; src: string; label: string; caption: string }
interface LightboxData { items: LightboxItem[]; index: number }

const PROYECTOS: Project[] = [
  {
    id: 'lp01', num: 'P—01', title: 'Vivienda FA—01', place: 'Gran Buenos Aires, BA',
    kind: 'Vivienda unifamiliar', type: 'residencial', year: '2026', stage: 'Proyecto',
    area: '290 m²', plot: '760 m²', program: 'Vivienda + estudio', renderCount: 3,
    desc: 'Vivienda de desarrollo en dos niveles resuelta mediante una composición de volúmenes ortogonales con predominio de la horizontalidad, tensionada por un plano vertical que jerarquiza el acceso. La planta baja resuelve con eficiencia la relación entre el programa social, los tres dormitorios y las áreas de servicio, prolongándose hacia una galería con parrilla que vincula el interior con el exterior.',
    desc2: 'Aberturas de perfil negro, revoques texturados y pérgola en madera definen una paleta material contenida y coherente. Dejando en planta alta un espacio flexible sin definir por completo, en donde el cliente puede ir adaptándolo a las necesidades específicas de cada etapa de su vida.',
    images: {
      planta: '/assets/proyectos/lp01-planta.webp',
      corte: '/assets/proyectos/lp01-corte.webp',
      renders: [
        '/assets/proyectos/lp01-render-01.webp',
        '/assets/proyectos/lp01-render-02.webp',
        '/assets/proyectos/lp01-render-03.webp',
      ],
    },
  },
  {
    id: 'cb02', num: 'P—02', title: 'Edificio Calathea__03', place: 'CABA, BA',
    kind: 'Multifamiliar', type: 'multifamiliar', year: '2025', stage: 'Proyecto',
    area: '1.290 m²', plot: '200 m²', program: '5 unidades + cocheras', renderCount: 3,
    desc: 'El proyecto corresponde a un edificio multifamiliar de lenguaje contemporáneo, concebido a partir de una composición volumétrica limpia y equilibrada que enfatiza la verticalidad mediante la combinación de planos macizos, grandes superficies vidriadas y revestimientos texturados.',
    desc2: 'La propuesta busca generar una imagen moderna y atemporal mediante el contraste entre materiales cálidos y neutros. La fachada se organiza a partir de un núcleo vertical central vidriado que actúa como elemento ordenador de la composición, acompañado por franjas laterales revestidas en textura madera que aportan escala y calidez.',
    images: {
      planta: '/assets/proyectos/cb02-planta.webp',
      corte: '/assets/proyectos/cb02-corte.webp',
      renders: [
        '/assets/proyectos/cb02-render-01.webp',
        '/assets/proyectos/cb02-render-02.webp',
        '/assets/proyectos/cb02-render-03.webp',
      ],
    },    
  },
  {
    id: 'sr03', num: 'P—03', title: 'Vivienda H.A.S_04', place: 'Concepto',
    kind: 'Vivienda', type: 'residencial', year: '2025', stage: 'Proyecto',
    area: '270 m²', plot: '620 m²', program: 'Vivienda', renderCount: 1,
    desc: 'El proyecto se desarrolla a partir de la intersección de prismas de distintas alturas y profundidades, generando una fachada con movimiento y jerarquía visual. La composición evita la simetría tradicional y busca una imagen actual, elegante y de fuerte presencia urbana.',
    desc2: 'Se trata de una vivienda unifamiliar de imagen moderna y sofisticada, donde la combinación de piedra, revoques claros, vidrio y madera genera una composición equilibrada entre robustez y ligereza. El diseño logra una identidad arquitectónica fuerte, una adecuada relación con el exterior y una estética contemporánea que mantiene vigencia a lo largo del tiempo.',
    images: {
      planta: '/assets/proyectos/sr03-planta.webp',
      corte: '/assets/proyectos/sr03-corte.webp',
      renders: [
        '/assets/proyectos/sr03-render-01.webp',
      ],
    },
  },
  {
    id: 'lc04', num: 'P—04', title: 'COCINA BARRIO M.E_02', place: 'CABA',
    kind: 'Interiorismo', type: 'interiorismo', year: '2026', stage: 'Construido',
    area: '8 m²', plot: '—', program: 'Reforma cocina', renderCount: 1,
    desc: 'El diseño responde a una lógica de cocina integrada, donde las áreas de preparación, cocción y lavado se alinean sobre un frente principal. La isla funciona como elemento articulador: aporta superficie de trabajo adicional, delimita visualmente el ambiente y permite un uso social del espacio sin interrumpir las tareas culinarias.',
    desc2: '',
    images: {
      planta: '/assets/proyectos/lc04-planta.webp',
      corte: '/assets/proyectos/lc04-corte.webp',
      renders: [
        '/assets/proyectos/lc04-render-01.webp',
      ],
    },    
  },
  {
    id: 'cp05', num: 'P—05', title: 'Casa fin de Semana FA_05', place: 'Gran Buenos Aires, BA',
    kind: 'Vivienda unifamiliar', type: 'residencial', year: '2026', stage: 'Proyecto',
    area: '300 m²', plot: '1700 m²', program: 'Vivienda de fin de Semana', renderCount: 2,
    desc: 'Esta vivienda de fin de semana se concibe como un refugio para el descanso y la vida familiar, donde la arquitectura prioriza la relación con el entorno natural. La combinación de ladrillo, piedra, madera y grandes superficies vidriadas genera una imagen cálida, elegante y atemporal, mientras que la galería, el jardín y la piscina se convierten en los verdaderos protagonistas de la experiencia espacial',
    desc2: '',
    images: {
      planta: '/assets/proyectos/cp05-planta.webp',
      corte: '/assets/proyectos/cp05-corte.webp',
      renders: [
        '/assets/proyectos/cp05-render-01.webp',
        '/assets/proyectos/cp05-render-02.webp',
      ],
    },    
  },
]

const FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'residencial', label: 'Residencial' },
  { id: 'multifamiliar', label: 'Multifamiliar' },
  { id: 'interiorismo', label: 'Interiorismo' },
]

const IconExpand = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
  </svg>
)
const IconClose = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const IconChevL = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
)
const IconChevR = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
)

function GalleryTile({
  item, className, group, onExpand,
}: {
  item: LightboxItem
  className?: string
  group: LightboxItem[]
  onExpand: (group: LightboxItem[], id: string) => void
}) {
  const hasImage = Boolean(item.src)
  return (
    <div className={`nb-slot${className ? ` ${className}` : ''}${hasImage ? ' has-image' : ''}`}>
      {hasImage && <img src={item.src} alt={item.caption} />}
      <span className="nb-slot-tag">{item.label}</span>
      <button
        className="nb-slot-expand"
        onClick={() => hasImage && onExpand(group.filter(t => t.src), item.id)}
        aria-label={`Ver ${item.label} en tamaño original`}
      >
        <IconExpand />
      </button>
    </div>
  )
}

function ProjectCard({ p, idx, onExpand }: {
  p: Project; idx: number
  onExpand: (group: LightboxItem[], id: string) => void
}) {
  const num = `${String(idx + 1).padStart(2, '0')} / ${String(PROYECTOS.length).padStart(2, '0')}`

  const mk = (id: string, label: string, src?: string): LightboxItem => ({
    id, src: src ?? '', label, caption: `${p.title} · ${label}`,
  })

  const renders: LightboxItem[] = Array.from({ length: p.renderCount }, (_, i) =>
    mk(`${p.id}-render-${i + 1}`, `Render ${String(i + 1).padStart(2, '0')}`,
      p.images?.renders?.[i])
  )
  const plantaItem = mk(`${p.id}-planta`, 'Planta', p.images?.planta)
  const corteItem  = mk(`${p.id}-corte`,  'Corte',  p.images?.corte)

  const featureRender = renders[0]
  const extraRenders  = renders.slice(1)

  return (
    <article className="nb-project-card">
      <div className="nb-project-gallery">
        <GalleryTile
          item={featureRender}
          className="nb-gal-primary"
          group={renders}
          onExpand={onExpand}
        />
        <div className="nb-gal-tech">
          <GalleryTile item={plantaItem} group={[plantaItem]} onExpand={onExpand} />
          <GalleryTile item={corteItem}  group={[corteItem]}  onExpand={onExpand} />
        </div>
        {extraRenders.length > 0 && (
          <div className="nb-gal-renders">
            {extraRenders.map(r => (
              <GalleryTile key={r.id} item={r} group={renders} onExpand={onExpand} />
            ))}
          </div>
        )}
      </div>

      <div className="nb-project-info">
        <div className="nb-project-num">{num}</div>
        <div className="nb-project-meta-row">
          <span>{p.kind}</span>
          <span>{p.place}</span>
          <span>{p.year}</span>
        </div>
        <h3 className="nb-project-title">{p.title}</h3>
        <p className="nb-project-desc">{p.desc}</p>
        {p.desc2 && <p className="nb-project-desc">{p.desc2}</p>}
        <div className="nb-project-spec">
          <div className="nb-project-spec-row"><span className="nb-project-spec-k">Estado</span><span className="nb-project-spec-v">{p.stage}</span></div>
          <div className="nb-project-spec-row"><span className="nb-project-spec-k">Superficie</span><span className="nb-project-spec-v">{p.area}</span></div>
          <div className="nb-project-spec-row"><span className="nb-project-spec-k">Programa</span><span className="nb-project-spec-v">{p.program}</span></div>
          <div className="nb-project-spec-row"><span className="nb-project-spec-k">Lote</span><span className="nb-project-spec-v">{p.plot}</span></div>
        </div>
      </div>
    </article>
  )
}

function ProjectLightbox({ data, setData }: {
  data: LightboxData | null
  setData: React.Dispatch<React.SetStateAction<LightboxData | null>>
}) {
  useEffect(() => {
    if (!data) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setData(null)
      else if (e.key === 'ArrowLeft')  setData(d => d && { ...d, index: (d.index - 1 + d.items.length) % d.items.length })
      else if (e.key === 'ArrowRight') setData(d => d && { ...d, index: (d.index + 1) % d.items.length })
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [data, setData])

  if (!data) return null
  const { items, index } = data
  const cur = items[index]
  const multi = items.length > 1
  const go = (delta: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setData(d => d && { ...d, index: (d.index + delta + d.items.length) % d.items.length })
  }

  return (
    <div className="nb-lightbox" onClick={() => setData(null)}>
      <div className="nb-lightbox-bar" onClick={e => e.stopPropagation()}>
        <span className="nb-lightbox-cap">{cur.caption}</span>
        <div className="nb-lightbox-bar-right">
          {multi && (
            <span className="nb-lightbox-count">
              {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
          )}
          <button className="nb-lightbox-close" onClick={() => setData(null)} aria-label="Cerrar">
            <IconClose />
          </button>
        </div>
      </div>
      <div className="nb-lightbox-stage" onClick={() => setData(null)}>
        {multi && (
          <button className="nb-lightbox-nav" onClick={e => go(-1, e)} aria-label="Anterior">
            <IconChevL />
          </button>
        )}
        <div className="nb-lightbox-figure" onClick={e => e.stopPropagation()}>
          <img className="nb-lightbox-img" src={cur.src} alt={cur.caption} />
        </div>
        {multi && (
          <button className="nb-lightbox-nav" onClick={e => go(1, e)} aria-label="Siguiente">
            <IconChevR />
          </button>
        )}
      </div>
    </div>
  )
}

export default function ProyectosPage() {
  const [filter, setFilter] = useState('todos')
  const [lightbox, setLightbox] = useState<LightboxData | null>(null)
  const visible = filter === 'todos' ? PROYECTOS : PROYECTOS.filter(p => p.type === filter)

  const onExpand = (group: LightboxItem[], clickedId: string) => {
    const filled = group.filter(t => t.src)
    if (!filled.length) return
    const i = Math.max(0, filled.findIndex(t => t.id === clickedId))
    setLightbox({ items: filled, index: i })
  }

  return (
    <div className="nb-page">
      <section className="nb-page-hero">
        <div className="nb-page-hero-left">
          <span className="nb-eyebrow">
            <span className="nb-rule" />
            01 · Proyectos en curso
          </span>
          <h1 className="nb-page-title">
            Bocetos<br />
            tomando <em>forma</em>.
          </h1>
          <p className="nb-body" style={{ marginTop: 16, maxWidth: '52ch' }}>
            Como estudio joven, lo que mostramos son proyectos <strong style={{ color: 'var(--nobra-blue)' }}>en proceso</strong> —
            anteproyectos, croquis y propuestas en desarrollo. Las obras construidas vendrán; mientras tanto, esto es lo que estamos pensando.
          </p>
        </div>
        <div className="nb-page-hero-meta">
          <div className="nb-page-hero-meta-row"><span className="nb-page-hero-meta-k">En curso</span><span className="nb-page-hero-meta-v">05 · proyectos</span></div>
          <div className="nb-page-hero-meta-row"><span className="nb-page-hero-meta-k">Tipologías</span><span className="nb-page-hero-meta-v">Vivienda · Multifam · Comercial</span></div>
          <div className="nb-page-hero-meta-row"><span className="nb-page-hero-meta-k">Materialidad</span><span className="nb-page-hero-meta-v">Hormigón · Ladrillo · Madera</span></div>
          <div className="nb-page-hero-meta-row"><span className="nb-page-hero-meta-k">Año</span><span className="nb-page-hero-meta-v">2026 —</span></div>
        </div>
      </section>

      <div className="nb-proyectos-filter">
        <span className="nb-proyectos-filter-label">Filtrar por tipo</span>
        {FILTERS.map(f => (
          <button
            key={f.id}
            className={`nb-chip${filter === f.id ? ' is-active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="nb-projects-list">
        {visible.map(p => (
          <ProjectCard key={p.id} p={p} idx={PROYECTOS.indexOf(p)} onExpand={onExpand} />
        ))}
        {visible.length === 0 && (
          <div style={{ padding: 80, textAlign: 'center', color: 'var(--stone-500)' }}>
            No tenemos proyectos de este tipo todavía.{' '}
            <Link href="/contacto">Conversemos sobre el tuyo →</Link>
          </div>
        )}
      </div>

      <section style={{ padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,80px)', background: 'var(--bone-2)', textAlign: 'center' }}>
        <span className="nb-eyebrow" style={{ justifyContent: 'center' }}>
          <span className="nb-rule" />
          Próximo paso
        </span>
        <h2 className="nb-h2" style={{ marginTop: 16, marginBottom: 24, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
          ¿Tu proyecto puede ser<br />
          el próximo <em>P—06</em>?
        </h2>
        <Link className="nb-btn nb-btn-primary" href="/contacto" style={{ marginTop: 16 }}>
          Empecemos tu proyecto
        </Link>
      </section>

      <ProjectLightbox data={lightbox} setData={setLightbox} />
    </div>
  )
}
