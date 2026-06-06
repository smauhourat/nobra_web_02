// Proyectos — galería con imágenes reales (planta + corte + renders) por proyecto.
// Cada imagen es un <image-slot> rellenable (arrastrar/soltar, persistente) y el
// click en la lupa abre el visor a tamaño original; los renders se navegan.
const { useState: useStatePr, useEffect: useEffectPr } = React;

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
    area: '240 m²',
    plot: '600 m²',
    program: '3 dormitorios + multiuso',
    desc:
      'Vivienda de una planta con un volumen multiuso en planta alta. ' +
      'Galería con parrilla integrada al estar–comedor, suite principal con vestidor y cochera doble cubierta. ' +
      'Volúmenes blancos y gris grafito, carpintería de aluminio negro.',
    renderCount: 3,
    images: {
      planta: 'assets/proyectos/lp01-planta.png',
      corte: 'assets/proyectos/lp01-corte.png',
      renders: [
        'assets/proyectos/lp01-render-01.jpeg',
        'assets/proyectos/lp01-render-02.jpeg',
        'assets/proyectos/lp01-render-03.png',
      ],
    },
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
    renderCount: 2,
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
    renderCount: 3,
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
    renderCount: 1,
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
    renderCount: 2,
  },
];

const FILTERS = [
  { id: 'todos',           label: 'Todos' },
  { id: 'residencial',     label: 'Residencial' },
  { id: 'multifamiliar',   label: 'Multifamiliar' },
  { id: 'comercial',       label: 'Comercial' },
];

// Icons — Lucide line geometry, currentColor, 1.5px stroke
const IconExpand = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const IconChevL = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>
);
const IconChevR = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

// Read the currently displayed image for a slot id — prefers the live
// shadow-DOM <img> (covers a user drop) and falls back to the author src.
function slotImageSrc(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  const sd = el.shadowRoot;
  if (sd) {
    const img = sd.querySelector('.frame img');
    if (img && img.style.display !== 'none' && img.getAttribute('src')) return img.src;
  }
  return el.getAttribute('src') || null;
}

function GalleryTile({ tile, group, className, placeholder, onExpand }) {
  return (
    <div className={`nb-slot ${className || ''}`}>
      {React.createElement('image-slot', {
        id: tile.id,
        src: tile.src || undefined,
        placeholder: placeholder || `Soltá ${tile.label.toLowerCase()}`,
        fit: 'cover',
        style: { position: 'absolute', inset: 0, width: '100%', height: '100%' },
      })}
      <span className="nb-slot-tag">{tile.label}</span>
      <button className="nb-slot-expand"
              onClick={() => onExpand(group, tile.id)}
              aria-label={`Ver ${tile.label} en tamaño original`}>
        <IconExpand />
      </button>
    </div>
  );
}

function ProjectCard({ p, idx, total, numberingStyle, onExpand }) {
  const num = numberingStyle === 'pad'
    ? String(idx + 1).padStart(3, '0')
    : numberingStyle === 'p'
      ? p.num
      : `${String(idx + 1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;

  const mk = (id, label, src) => ({ id, label, src, caption: `${p.title} · ${label}` });
  const plantaTile = mk(`${p.id}-planta`, 'Planta', p.images && p.images.planta);
  const corteTile  = mk(`${p.id}-corte`,  'Corte',  p.images && p.images.corte);
  const renderTiles = Array.from({ length: p.renderCount }, (_, i) =>
    mk(`${p.id}-render-${i + 1}`, `Render ${String(i + 1).padStart(2, '0')}`,
       p.images && p.images.renders && p.images.renders[i]));

  const featureRender = renderTiles[0];
  const extraRenders = renderTiles.slice(1);

  return (
    <article className="nb-project-card">
      <div className="nb-project-gallery">
        <GalleryTile tile={featureRender} group={renderTiles} className="nb-gal-primary"
                     placeholder="Soltá el render principal" onExpand={onExpand} />
        <div className="nb-gal-tech">
          <GalleryTile tile={plantaTile} group={[plantaTile]} onExpand={onExpand} />
          <GalleryTile tile={corteTile}  group={[corteTile]}  onExpand={onExpand} />
        </div>
        {extraRenders.length > 0 && (
          <div className="nb-gal-renders">
            {extraRenders.map(t => (
              <GalleryTile key={t.id} tile={t} group={renderTiles} onExpand={onExpand} />
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

function ProjectLightbox({ data, setData }) {
  useEffectPr(() => {
    if (!data) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setData(null);
      else if (e.key === 'ArrowLeft')  setData(d => d && { ...d, index: (d.index - 1 + d.items.length) % d.items.length });
      else if (e.key === 'ArrowRight') setData(d => d && { ...d, index: (d.index + 1) % d.items.length });
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [data]);

  if (!data) return null;
  const { items, index } = data;
  const cur = items[index];
  const multi = items.length > 1;
  const go = (delta, e) => {
    if (e) e.stopPropagation();
    setData(d => d && { ...d, index: (d.index + delta + d.items.length) % d.items.length });
  };

  return (
    <div className="nb-lightbox" onClick={() => setData(null)}>
      <div className="nb-lightbox-bar" onClick={(e) => e.stopPropagation()}>
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
          <button className="nb-lightbox-nav" onClick={(e) => go(-1, e)} aria-label="Anterior">
            <IconChevL />
          </button>
        )}
        <div className="nb-lightbox-figure" onClick={(e) => e.stopPropagation()}>
          <img className="nb-lightbox-img" src={cur.src} alt={cur.caption} />
        </div>
        {multi && (
          <button className="nb-lightbox-nav" onClick={(e) => go(1, e)} aria-label="Siguiente">
            <IconChevR />
          </button>
        )}
      </div>
    </div>
  );
}

function Proyectos({ tweaks, onNav }) {
  const [filter, setFilter] = useStatePr('todos');
  const [lightbox, setLightbox] = useStatePr(null);
  const visible = filter === 'todos' ? PROYECTOS : PROYECTOS.filter(p => p.type === filter);

  const onExpand = (group, clickedId) => {
    const filled = group
      .map(t => ({ ...t, src: slotImageSrc(t.id) }))
      .filter(t => t.src);
    if (!filled.length) return;
    let i = filled.findIndex(t => t.id === clickedId);
    if (i < 0) i = 0;
    setLightbox({ items: filled, index: i });
  };

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
        {visible.map((p) => (
          <ProjectCard key={p.id}
                       p={p}
                       idx={PROYECTOS.indexOf(p)}
                       total={PROYECTOS.length}
                       numberingStyle={tweaks?.projectNumbering || 'slash'}
                       onExpand={onExpand} />
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

      <ProjectLightbox data={lightbox} setData={setLightbox} />
    </div>
  );
}

window.Proyectos = Proyectos;
