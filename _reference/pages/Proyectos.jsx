// Proyectos — 5 proyectos conceptuales con galería de drawings (planos/cortes/axos/detalles)
const { useState: useStatePr } = React;

const PROYECTOS = [
  {
    id: 'lp01',
    num: 'P—01',
    title: 'Vivienda LP—01',
    place: 'La Plata, BA',
    kind: 'Vivienda unifamiliar',
    type: 'residencial',
    year: '2026',
    stage: 'Anteproyecto',
    area: '180 m²',
    plot: '300 m²',
    program: 'Vivienda + estudio',
    desc:
      'Casa entre medianeras pensada para un lote típico de La Plata. ' +
      'Patio central que organiza la planta y separa el área pública del descanso. ' +
      'Materialidad simple: ladrillo a la vista, hormigón y carpintería negra.',
    drawings: [
      { kind: 'plan',    v: 1, tag: 'Planta baja · 1:100' },
      { kind: 'section', v: 1, tag: 'Corte longitudinal' },
      { kind: 'detail',  v: 4, tag: 'Modulación fachada' },
    ],
  },
  {
    id: 'cb02',
    num: 'P—02',
    title: 'Edificio City Bell',
    place: 'City Bell, BA',
    kind: 'Multifamiliar',
    type: 'multifamiliar',
    year: '2026',
    stage: 'Proyecto ejecutivo',
    area: '1.200 m²',
    plot: '600 m²',
    program: '12 unidades + cocheras',
    desc:
      'Edificio bajo de 4 plantas con doce unidades de 1 y 2 ambientes. ' +
      'Patio común en planta baja, terraza verde de uso compartido. ' +
      'Estrategia bioclimática: orientación norte, parasoles de aluminio.',
    drawings: [
      { kind: 'plan',    v: 3, tag: 'Planta tipo · 1:200' },
      { kind: 'axon',    v: 2, tag: 'Axonometría' },
      { kind: 'section', v: 3, tag: 'Elevación frente' },
    ],
  },
  {
    id: 'sr03',
    num: 'P—03',
    title: 'Refugio Sierra',
    place: 'Concepto · Sierra',
    kind: 'Casa de fin de semana',
    type: 'residencial',
    year: '2026',
    stage: 'Croquis',
    area: '95 m²',
    plot: '2.000 m²',
    program: 'Dos cuartos + estar',
    desc:
      'Estudio conceptual para una casa mínima en sierra. ' +
      'Volumen único con cubierta a dos aguas, ventanal vidriado al valle. ' +
      'Construcción seca, en madera laminada y chapa.',
    drawings: [
      { kind: 'section', v: 4, tag: 'Corte transversal' },
      { kind: 'plan',    v: 4, tag: 'Planta única' },
      { kind: 'axon',    v: 4, tag: 'Volumetría' },
    ],
  },
  {
    id: 'lc04',
    num: 'P—04',
    title: 'Local C—12',
    place: 'La Plata, BA',
    kind: 'Comercial · Interiorismo',
    type: 'comercial',
    year: '2026',
    stage: 'Documentación',
    area: '60 m²',
    plot: '—',
    program: 'Local + depósito',
    desc:
      'Reforma integral de un local sobre calle 12. ' +
      'Mostrador continuo en hormigón pulido, iluminación lineal, paleta hueso. ' +
      'Diseño replicable para una posible expansión a otras sucursales.',
    drawings: [
      { kind: 'plan',    v: 4, tag: 'Planta · 1:50' },
      { kind: 'detail',  v: 1, tag: 'Detalle mobiliario' },
      { kind: 'detail',  v: 2, tag: 'Detalle luminaria' },
    ],
  },
  {
    id: 'cp05',
    num: 'P—05',
    title: 'Casa Patio',
    place: 'Concepto · La Plata',
    kind: 'Vivienda unifamiliar',
    type: 'residencial',
    year: '2026',
    stage: 'Anteproyecto',
    area: '220 m²',
    plot: '500 m²',
    program: 'Vivienda 3 dormitorios',
    desc:
      'Casa en L con patio principal entre el área social y los dormitorios. ' +
      'Galería continua que protege del sol del oeste. ' +
      'Hormigón visto, carpintería de aluminio negro, piso de cemento alisado.',
    drawings: [
      { kind: 'plan',    v: 2, tag: 'Planta general · 1:100' },
      { kind: 'axon',    v: 3, tag: 'Axonometría' },
      { kind: 'section', v: 2, tag: 'Corte vivienda' },
    ],
  },
];

const FILTERS = [
  { id: 'todos',           label: 'Todos' },
  { id: 'residencial',     label: 'Residencial' },
  { id: 'multifamiliar',   label: 'Multifamiliar' },
  { id: 'comercial',       label: 'Comercial' },
];

function drawingFor(d) {
  if (d.kind === 'plan')    return <DrawPlan variant={d.v} />;
  if (d.kind === 'section') return <DrawSection variant={d.v} />;
  if (d.kind === 'axon')    return <DrawAxon variant={d.v} />;
  return <DrawDetail variant={d.v} />;
}

function ProjectCard({ p, idx, numberingStyle }) {
  const num = numberingStyle === 'pad'
    ? String(idx + 1).padStart(3, '0')
    : numberingStyle === 'p'
      ? p.num
      : `${String(idx + 1).padStart(2,'0')} / ${String(PROYECTOS.length).padStart(2,'0')}`;
  return (
    <article className="nb-project-card">
      <div className="nb-project-gallery">
        {p.drawings.slice(0, 3).map((d, i) => (
          <div key={i} className="nb-project-thumb" style={{color: 'var(--nobra-blue)'}}>
            {drawingFor(d)}
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
        <div className="nb-project-spec">
          <div className="nb-project-spec-row">
            <span className="nb-project-spec-k">Estado</span>
            <span className="nb-project-spec-v">{p.stage}</span>
          </div>
          <div className="nb-project-spec-row">
            <span className="nb-project-spec-k">Superficie</span>
            <span className="nb-project-spec-v">{p.area}</span>
          </div>
          <div className="nb-project-spec-row">
            <span className="nb-project-spec-k">Programa</span>
            <span className="nb-project-spec-v">{p.program}</span>
          </div>
          <div className="nb-project-spec-row">
            <span className="nb-project-spec-k">Lote</span>
            <span className="nb-project-spec-v">{p.plot}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function Proyectos({ tweaks, onNav }) {
  const [filter, setFilter] = useStatePr('todos');
  const visible = filter === 'todos' ? PROYECTOS : PROYECTOS.filter(p => p.type === filter);

  return (
    <div className="nb-page" data-screen-label="03 Proyectos">
      <section className="nb-page-hero">
        <div className="nb-page-hero-left">
          <span className="nb-eyebrow nb-eyebrow-num">
            <span className="nb-rule"></span>
            01 · Proyectos en curso
          </span>
          <h1 className="nb-page-title">
            Bocetos<br />
            tomando <em>forma</em>.
          </h1>
          <p className="nb-body" style={{marginTop: 16, maxWidth: '52ch'}}>
            Como estudio joven, lo que mostramos son proyectos <strong style={{color:'var(--nobra-blue)'}}>en proceso</strong> —
            anteproyectos, croquis y propuestas en desarrollo. Las obras construidas vendrán; mientras tanto, esto es lo que estamos pensando.
          </p>
        </div>
        <div className="nb-page-hero-meta">
          <div className="nb-page-hero-meta-row">
            <span className="nb-page-hero-meta-k">En curso</span>
            <span className="nb-page-hero-meta-v">05 · proyectos</span>
          </div>
          <div className="nb-page-hero-meta-row">
            <span className="nb-page-hero-meta-k">Tipologías</span>
            <span className="nb-page-hero-meta-v">Vivienda · Multifam · Comercial</span>
          </div>
          <div className="nb-page-hero-meta-row">
            <span className="nb-page-hero-meta-k">Materialidad</span>
            <span className="nb-page-hero-meta-v">Hormigón · Ladrillo · Madera</span>
          </div>
          <div className="nb-page-hero-meta-row">
            <span className="nb-page-hero-meta-k">Año</span>
            <span className="nb-page-hero-meta-v">2026 —</span>
          </div>
        </div>
      </section>

      <div className="nb-proyectos-filter">
        <span className="nb-proyectos-filter-label">Filtrar por tipo</span>
        {FILTERS.map(f => (
          <button key={f.id}
                  className={`nb-chip ${filter === f.id ? 'is-active' : ''}`}
                  onClick={() => setFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="nb-projects-list">
        {visible.map((p, i) => (
          <ProjectCard key={p.id}
                       p={p}
                       idx={PROYECTOS.indexOf(p)}
                       numberingStyle={tweaks?.projectNumbering || 'slash'} />
        ))}
        {visible.length === 0 && (
          <div style={{padding: 80, textAlign: 'center', color: 'var(--stone-500)'}}>
            No tenemos proyectos de este tipo todavía. <a href="#contacto" onClick={(e)=>{e.preventDefault(); onNav('contacto');}}>Conversemos sobre el tuyo →</a>
          </div>
        )}
      </div>

      <section style={{
        padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,80px)',
        background: 'var(--bone-2)',
        textAlign: 'center',
      }}>
        <span className="nb-eyebrow nb-eyebrow-num" style={{justifyContent: 'center'}}>
          <span className="nb-rule"></span>
          Próximo paso
        </span>
        <h2 className="nb-h2" style={{marginTop: 16, marginBottom: 24, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto'}}>
          ¿Tu proyecto puede ser<br />
          el próximo <em>P—06</em>?
        </h2>
        <button className="nb-btn nb-btn-primary"
                onClick={() => onNav('contacto')}
                style={{marginTop: 16}}>
          Empecemos tu proyecto
        </button>
      </section>
    </div>
  );
}

window.Proyectos = Proyectos;
