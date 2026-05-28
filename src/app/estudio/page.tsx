import Link from 'next/link'
import { DrawPortrait, ToolMark } from '@/components/Drawings'

const FOUNDERS = [
  {
    n: 'Novoa', full: 'Mat. arq. Novoa', role: 'Socio · Proyecto y obra',
    bio: 'Seis años de experiencia profesional en estudios de vivienda y multifamiliar de la región. Antes de fundar Nobra trabajó como project leader en obras residenciales de hasta 1.500 m².',
    meta: [['Matrícula', 'CAPBA · D-V'], ['Especialidad', 'Vivienda · Obra'], ['Software', 'Revit · ArchiCAD']] as [string, string][],
    v: 1,
  },
  {
    n: 'Bravin', full: 'Mat. arq. Bravin', role: 'Socia · Diseño e interiorismo',
    bio: 'Seis años en estudios de interiorismo y comercial de Buenos Aires y CABA. Trabajó en proyectos de retail, gastronomía y vivienda de gama media-alta.',
    meta: [['Matrícula', 'CAPBA · D-V'], ['Especialidad', 'Interiorismo · Retail'], ['Software', 'SketchUp · Twinmotion']] as [string, string][],
    v: 2,
  },
]

const TOOLKIT = [
  { kind: 'revit',      name: 'Revit',      use: 'BIM · Modelado',          desc: 'Trabajamos en BIM desde el anteproyecto. Un solo modelo, sin inconsistencias entre planos.' },
  { kind: 'archicad',   name: 'ArchiCAD',   use: 'BIM · Documentación',     desc: 'Para proyectos donde la documentación municipal manda. Salida de planos rápida y limpia.' },
  { kind: 'autocad',    name: 'AutoCAD',    use: 'CAD · Detalles',          desc: 'Detalle constructivo y planos técnicos. La precisión que requieren los gremios.' },
  { kind: 'sketchup',   name: 'SketchUp',   use: '3D · Volumetría',         desc: 'Modelado conceptual rápido. Para iterar volumetrías con el cliente en reunión.' },
  { kind: 'twinmotion', name: 'Twinmotion', use: 'Render · Tiempo real',    desc: 'Renders fotorrealistas y recorridos virtuales. Ver el proyecto antes de construirlo.' },
  { kind: 'rhino',      name: 'Rhino',      use: '3D · Geometría compleja', desc: 'Para piezas singulares: carpinterías, mobiliario, fachadas no estándar.' },
  { kind: 'enscape',    name: 'Enscape',    use: 'Render · Cliente',        desc: 'Render en tiempo real durante la reunión. Decisiones tomadas con la imagen final a la vista.' },
  { kind: 'notion',     name: 'Notion',     use: 'Gestión · Cliente',       desc: 'Cada proyecto tiene su tablero compartido. Documentos, fotos y avance en un solo lugar.' },
]

export default function EstudioPage() {
  return (
    <div className="nb-page">
      {/* Page hero */}
      <section className="nb-page-hero">
        <div className="nb-page-hero-left">
          <span className="nb-eyebrow">
            <span className="nb-rule" />
            01 · El estudio
          </span>
          <h1 className="nb-page-title">
            Somos un<br />
            estudio <em>joven</em>.<br />
            Trabajamos<br />
            como <em>uno solo</em>.
          </h1>
        </div>
        <div className="nb-page-hero-meta">
          <div className="nb-page-hero-meta-row"><span className="nb-page-hero-meta-k">Socios</span><span className="nb-page-hero-meta-v">02 · Novoa &amp; Bravin</span></div>
          <div className="nb-page-hero-meta-row"><span className="nb-page-hero-meta-k">Fundación</span><span className="nb-page-hero-meta-v">2026</span></div>
          <div className="nb-page-hero-meta-row"><span className="nb-page-hero-meta-k">Sede</span><span className="nb-page-hero-meta-v">CABA, Buenos Aires</span></div>
          <div className="nb-page-hero-meta-row"><span className="nb-page-hero-meta-k">Matrícula</span><span className="nb-page-hero-meta-v">CAPBA · D-V</span></div>
        </div>
      </section>

      {/* Historia */}
      <section className="nb-estudio-intro">
        <div className="nb-estudio-intro-side">
          <span className="nb-eyebrow">
            <span className="nb-rule" />
            02 · Historia
          </span>
          <h2 className="nb-h2" style={{ marginTop: 20 }}>Por qué Nobra.</h2>
        </div>
        <div className="nb-estudio-prose">
          <p>
            Novoa y Bravin nos asociamos en 2026 después de años trabajando por separado
            en estudios de primera línea. <strong>Cada uno</strong> con su recorrido —obra, interiorismo,
            documentación, dirección— pero con la misma manera de entender la arquitectura: como un oficio
            de detalle y disciplina, no de espectáculo.
          </p>
          <p>
            Lo que ofrecemos no es nuevo, pero sí poco común: <strong>trato directo</strong> con los arquitectos
            que firman el proyecto, atención al uso real del espacio, y honorarios claros desde
            la primera reunión. No tenemos un equipo intermedio. Vos hablás con nosotros, siempre.
          </p>
          <p>
            Empezamos sin un portfolio construido. Eso no nos preocupa: traemos
            <strong> doce años de experiencia profesional sumada</strong> entre los dos, y un compromiso
            con cada proyecto que solo es posible cuando el estudio es chico y dedicado.
          </p>
          <blockquote className="nb-quote" style={{ margin: '24px 0', maxWidth: '46ch' }}>
            "La arquitectura no es lo que se ve, es lo que se vive."
          </blockquote>
          <p>
            Trabajamos en <strong>BIM</strong> desde el primer croquis. Modelamos cada proyecto antes de
            construirlo: lo recorremos en render, lo cuantificamos en planilla, lo coordinamos
            con instalaciones. Cuando llega el momento de la obra, la mayoría de las decisiones
            ya están tomadas. Es más rápido, más barato y menos sorpresivo.
          </p>
        </div>
      </section>

      {/* Fundadores */}
      <section className="nb-founders">
        <div className="nb-founders-head">
          <span className="nb-eyebrow">
            <span className="nb-rule" />
            03 · Quiénes somos
          </span>
          <h2 className="nb-h2" style={{ marginTop: 16 }}>
            Dos arquitectos.<br />Una sola firma.
          </h2>
        </div>
        <div className="nb-founders-grid">
          {FOUNDERS.map(f => (
            <article key={f.n} className="nb-founder">
              <div className="nb-founder-portrait">
                <DrawPortrait variant={f.v} />
                <span className="nb-founder-portrait-tag">Retrato · pendiente</span>
              </div>
              <div>
                <h3 className="nb-founder-name">{f.full}</h3>
                <div className="nb-founder-role">{f.role}</div>
                <p className="nb-founder-bio">{f.bio}</p>
                <div className="nb-founder-meta">
                  {f.meta.map(([k, v]) => (
                    <div key={k} className="nb-founder-meta-row">
                      <span className="nb-founder-meta-k">{k}</span>
                      <span className="nb-founder-meta-v">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Toolkit */}
      <section className="nb-toolkit">
        <div className="nb-toolkit-head">
          <div>
            <span className="nb-eyebrow">
              <span className="nb-rule" />
              04 · Toolkit técnico
            </span>
          </div>
          <div>
            <h2 className="nb-h2">
              Trabajamos en BIM<br />
              desde el primer plano.
            </h2>
            <p className="nb-section-lede">
              Cada proyecto vive como un modelo 3D coordinado. No hay "el plano que está bien"
              y "el render que está desactualizado". Todo sale del mismo lugar.
            </p>
          </div>
        </div>
        <div className="nb-toolkit-grid">
          {TOOLKIT.map(t => (
            <article key={t.kind} className="nb-tool">
              <ToolMark kind={t.kind} />
              <div>
                <h3 className="nb-tool-name">{t.name}</h3>
                <div className="nb-tool-use">{t.use}</div>
              </div>
              <p className="nb-tool-desc">{t.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--nobra-blue)', color: 'var(--bone)', padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
        <span className="nb-eyebrow inv" style={{ justifyContent: 'center' }}>
          <span className="nb-rule inv" />
          Empecemos
        </span>
        <h2 className="nb-h2 inv" style={{ marginTop: 16, marginBottom: 24, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
          ¿Empezamos a pensar<br />
          juntos tu proyecto?
        </h2>
        <p className="nb-section-lede inv" style={{ margin: '0 auto 40px', maxWidth: '46ch' }}>
          Una primera reunión, sin compromiso. Te respondemos en menos de 48 horas hábiles.
        </p>
        <Link className="nb-btn" href="/contacto" style={{ background: 'var(--bone)', color: 'var(--nobra-blue)', borderColor: 'var(--bone)' }}>
          Agenda una asesoría
        </Link>
      </section>
    </div>
  )
}
