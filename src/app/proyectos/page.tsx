'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DrawPlan, DrawSection, DrawAxon, DrawDetail } from '@/components/Drawings'

type DrawingKind = 'plan' | 'section' | 'axon' | 'detail'
interface Drawing { kind: DrawingKind; v: number; tag: string }
interface Project {
  id: string; num: string; title: string; place: string; kind: string;
  type: string; year: string; stage: string; area: string; plot: string;
  program: string; desc: string; desc2: string; drawings: Drawing[]
}

const PROYECTOS: Project[] = [
  {
    id: 'lp01', num: 'P—01', title: 'Vivienda FA—01', place: 'Gran Buenos Aires, BA',
    kind: 'Vivienda unifamiliar', type: 'residencial', year: '2026', stage: 'Proyecto',
    area: '290 m²', plot: '760 m²', program: 'Vivienda + estudio',
    desc: 'Vivienda de desarrollo en dos niveles resuelta mediante una composición de volúmenes ortogonales con predominio de la horizontalidad, tensionada por un plano vertical que jerarquiza el acceso. La planta baja resuelve con eficiencia la relación entre el programa social, los tres dormitorios y las áreas de servicio, prolongándose hacia una galería con parrilla que vincula el interior con el exterior.',
    desc2: 'Aberturas de perfil negro, revoques texturados y pérgola en madera definen una paleta material contenida y coherente. Dejando en planta alta un espacio flexible sin definir por completo, en donde el cliente puede ir adaptándolo a las necesidades específicas de cada etapa de su vida.',
    drawings: [{ kind: 'plan', v: 1, tag: 'Planta baja · 1:100' }, { kind: 'section', v: 1, tag: 'Corte longitudinal' }, { kind: 'detail', v: 4, tag: 'Modulación fachada' }],
  },
  {
    id: 'cb02', num: 'P—02', title: 'Edificio City Bell', place: 'City Bell, BA',
    kind: 'Multifamiliar', type: 'multifamiliar', year: '2026', stage: 'Proyecto ejecutivo',
    area: '1.200 m²', plot: '600 m²', program: '12 unidades + cocheras',
    desc: 'Edificio bajo de 4 plantas con doce unidades de 1 y 2 ambientes. Patio común en planta baja, terraza verde de uso compartido. Estrategia bioclimática: orientación norte, parasoles de aluminio.',
    desc2: '',
    drawings: [{ kind: 'plan', v: 3, tag: 'Planta tipo · 1:200' }, { kind: 'axon', v: 2, tag: 'Axonometría' }, { kind: 'section', v: 3, tag: 'Elevación frente' }],
  },
  {
    id: 'sr03', num: 'P—03', title: 'Vivienda H.A.S_04', place: 'Concepto',
    kind: 'Vivienda', type: 'residencial', year: '2025', stage: 'Proyecto',
    area: '270 m²', plot: '620 m²', program: 'Vivienda',
    desc: 'El proyecto se desarrolla a partir de la intersección de prismas de distintas alturas y profundidades, generando una fachada con movimiento y jerarquía visual. La composición evita la simetría tradicional y busca una imagen actual, elegante y de fuerte presencia urbana.',
    desc2: 'Se trata de una vivienda unifamiliar de imagen moderna y sofisticada, donde la combinación de piedra, revoques claros, vidrio y madera genera una composición equilibrada entre robustez y ligereza. El diseño logra una identidad arquitectónica fuerte, una adecuada relación con el exterior y una estética contemporánea que mantiene vigencia a lo largo del tiempo.',
    drawings: [{ kind: 'section', v: 4, tag: 'Corte transversal' }, { kind: 'plan', v: 4, tag: 'Planta única' }, { kind: 'axon', v: 4, tag: 'Volumetría' }],
  },
  {
    id: 'lc04', num: 'P—04', title: 'Local C—12', place: 'La Plata, BA',
    kind: 'Interiorismo', type: 'interiorismo', year: '2026', stage: 'Documentación',
    area: '60 m²', plot: '—', program: 'Local + depósito',
    desc: 'Reforma integral de un local sobre calle 12. Mostrador continuo en hormigón pulido, iluminación lineal, paleta hueso. Diseño replicable para una posible expansión a otras sucursales.',
    desc2: '',
    drawings: [{ kind: 'plan', v: 4, tag: 'Planta · 1:50' }, { kind: 'detail', v: 1, tag: 'Detalle mobiliario' }, { kind: 'detail', v: 2, tag: 'Detalle luminaria' }],
  },
  {
    id: 'cp05', num: 'P—05', title: 'Casa fin de Semana FA_05', place: 'Gran Buenos Aires, BA',
    kind: 'Vivienda unifamiliar', type: 'residencial', year: '2026', stage: 'Proyecto',
    area: '300 m²', plot: '1700 m²', program: 'Vivienda de fin de Semana',
    desc: 'Esta vivienda de fin de semana se concibe como un refugio para el descanso y la vida familiar, donde la arquitectura prioriza la relación con el entorno natural. La combinación de ladrillo, piedra, madera y grandes superficies vidriadas produce una imagen cálida, elegante y atemporal, mientras que la galería, el jardín y la piscina se convierten en los verdaderos protagonistas de la experiencia espacial.',
    desc2: '',
    drawings: [{ kind: 'plan', v: 2, tag: 'Planta general · 1:100' }, { kind: 'axon', v: 3, tag: 'Axonometría' }, { kind: 'section', v: 2, tag: 'Corte vivienda' }],
  },
]

const FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'residencial', label: 'Residencial' },
  { id: 'multifamiliar', label: 'Multifamiliar' },
  { id: 'interiorismo', label: 'Interiorismo' },
]

function DrawingFor({ d }: { d: Drawing }) {
  if (d.kind === 'plan')    return <DrawPlan variant={d.v} />
  if (d.kind === 'section') return <DrawSection variant={d.v} />
  if (d.kind === 'axon')    return <DrawAxon variant={d.v} />
  return <DrawDetail variant={d.v} />
}

function ProjectCard({ p, idx }: { p: Project; idx: number }) {
  const num = `${String(idx + 1).padStart(2, '0')} / ${String(PROYECTOS.length).padStart(2, '0')}`
  return (
    <article className="nb-project-card">
      <div className="nb-project-gallery">
        {p.drawings.slice(0, 3).map((d, i) => (
          <div key={i} className="nb-project-thumb" style={{ color: 'var(--nobra-blue)' }}>
            <DrawingFor d={d} />
            <span className="nb-project-thumb-tag">{d.tag}</span>
          </div>
        ))}
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
        <p className="nb-project-desc">{p.desc2}</p>
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

export default function ProyectosPage() {
  const [filter, setFilter] = useState('todos')
  const visible = filter === 'todos' ? PROYECTOS : PROYECTOS.filter(p => p.type === filter)

  return (
    <div className="nb-page">
      {/* Page hero */}
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

      {/* Filtros */}
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

      {/* Lista */}
      <div className="nb-projects-list">
        {visible.map((p, i) => (
          <ProjectCard key={p.id} p={p} idx={PROYECTOS.indexOf(p)} />
        ))}
        {visible.length === 0 && (
          <div style={{ padding: 80, textAlign: 'center', color: 'var(--stone-500)' }}>
            No tenemos proyectos de este tipo todavía.{' '}
            <Link href="/contacto">Conversemos sobre el tuyo →</Link>
          </div>
        )}
      </div>

      {/* CTA */}
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
    </div>
  )
}
