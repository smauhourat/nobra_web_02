// Servicios — página completa, bloques visuales (no bullets) + Llave en mano + proceso
const SERVICIOS_FULL = [
  {
    n: '01', t: 'Proyecto',
    benefit: 'Tu idea se vuelve un plano construible. Documentación técnica y municipal lista para ejecutar.',
    detail: 'Anteproyecto · Proyecto ejecutivo · Planos municipales · Detalle constructivo',
    pair: ['ar', 'detalle'],
  },
  {
    n: '02', t: 'Dirección de obra',
    benefit: 'La obra se construye tal como se piensa. Supervisión técnica directa, sin intermediarios.',
    detail: 'Visitas semanales · Coordinación de gremios · Control de avance y calidad · Informe mensual',
    pair: ['ar'],
  },
  {
    n: '03', t: 'Ejecución de obras',
    benefit: 'Construcción llave en mano. Vos no coordinas gremios — nosotros respondemos por todo.',
    detail: 'Equipos propios · Albañilería, instalaciones y terminaciones · Plazo y precio cerrados',
    pair: ['ar'],
    flag: 'destacado',
  },
  {
    n: '04', t: 'Gestiones municipales',
    benefit: 'Resolvemos el papeleo para que la obra avance sin sobresaltos.',
    detail: 'Permisos · Factibilidades · Final de obra · Conexiones · Reglamento de copropiedad',
    pair: ['ar'],
  },
  {
    n: '05', t: 'Interiorismo',
    benefit: 'El espacio interior diseñado con el mismo criterio que la arquitectura.',
    detail: 'Materialidad · Mobiliario a medida · Iluminación · Paleta y atmósfera',
    pair: ['ar'],
  },
  {
    n: '06', t: 'Renders',
    benefit: 'Ver el proyecto antes de construirlo. Decisiones de diseño tomadas con la imagen final a la vista.',
    detail: 'Render fotorrealista · Recorrido virtual · Render técnico · Material para municipal',
    pair: ['ar'],
  },
  {
    n: '07', t: 'Asesorías',
    benefit: 'Una opinión técnica clara cuando la necesitás. Consultas, peritajes y dictámenes.',
    detail: 'Consulta puntual · Peritaje · Dictamen técnico · Revisión de proyecto en curso',
    pair: ['ar'],
  },
  {
    n: '08', t: 'Proyecto de instalaciones',
    benefit: 'Las instalaciones pensadas con la arquitectura, no después.',
    detail: 'Sanitaria · Eléctrica · Gas · Termomecánica · Domótica básica',
    pair: ['ar'],
  },
];

const LLAVE_STAGES = [
  { n: '01', t: 'Proyecto', d: 'Anteproyecto, ejecutivo y planos municipales. Decidimos juntos cada detalle constructivo antes de pedir el primer presupuesto.' },
  { n: '02', t: 'Dirección de obra', d: 'Coordinamos gremios, controlamos avance y calidad. Visitamos la obra semanalmente.' },
  { n: '03', t: 'Ejecución', d: 'Construcción con equipos propios y de confianza. Plazo cerrado, precio cerrado, responsable único.' },
  { n: '04', t: 'Entrega', d: 'Final de obra, conexiones, manual de usuario del inmueble. Te entregamos las llaves listo para mudarte.' },
];

const PROCESS_STEPS = [
  { n: '00', t: 'Primera reunión', d: 'Sin compromiso. Conocemos tu idea, terreno o necesidad. Definimos alcance.' },
  { n: '01', t: 'Anteproyecto', d: 'Tres opciones de partida. Elegimos juntos la que mejor responde al programa.' },
  { n: '02', t: 'Proyecto ejecutivo', d: 'Documentación técnica completa lista para construir. Renders y planos municipales.' },
  { n: '03', t: 'Obra y entrega', d: 'Dirección o ejecución llave en mano. Final de obra y llaves.' },
];

function ServiceRow({ s }) {
  return (
    <article className="nb-service-row">
      <div className="nb-service-row-num">{s.n} / 08</div>
      <div>
        <h3 className="nb-service-row-title">{s.t}</h3>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--stone-300)', letterSpacing: '0.1em',
          textTransform: 'uppercase', marginTop: 8,
        }}>
          {s.detail}
        </div>
      </div>
      <p className="nb-service-row-benefit">{s.benefit}</p>
      <div className="nb-service-row-arrow">→</div>
    </article>
  );
}

function LlaveEnMano({ onNav }) {
  return (
    <section className="nb-llave" data-screen-label="Llave en mano">
      <div className="nb-llave-form-bleed" aria-hidden="true" />
      <div className="nb-llave-inner">
        <div>
          <div className="nb-llave-eyebrow">
            <span className="nb-rule"></span>
            Diferenciador · Servicio integral
          </div>
          <h2 className="nb-llave-title">
            Una sola firma,<br />
            de la <em>idea</em> a las <em>llaves</em>.
          </h2>
          <p className="nb-llave-body">
            La mayoría de los estudios proyectan; un puñado dirige; muy pocos construyen.
            En Nobra ofrecemos los tres: proyectamos, dirigimos y ejecutamos.
            Vos firmás con un solo responsable. Y el criterio que pensó la obra es el mismo
            que la construye.
          </p>
          <button className="nb-btn"
                  style={{
                    background: 'var(--bone)', color: 'var(--nobra-blue)',
                    borderColor: 'var(--bone)',
                  }}
                  onClick={() => onNav('contacto')}>
            Hablemos del proyecto <span className="nb-arrow">→</span>
          </button>
        </div>

        <div className="nb-llave-stages">
          {LLAVE_STAGES.map(s => (
            <div key={s.n} className="nb-llave-stage">
              <div className="nb-llave-stage-num">{s.n}</div>
              <div>
                <h4 className="nb-llave-stage-title">{s.t}</h4>
                <p className="nb-llave-stage-desc">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="nb-process">
      <div className="nb-process-head">
        <span className="nb-eyebrow nb-eyebrow-num">
          <span className="nb-rule"></span>
          Cómo trabajamos
        </span>
        <h2 className="nb-h2" style={{marginTop: 16}}>
          Cuatro etapas claras.<br />
          Una sola conversación.
        </h2>
        <p className="nb-section-lede">
          Cada etapa tiene un entregable concreto y un acuerdo cerrado antes de avanzar.
          Vos sabés en qué estamos en cada momento.
        </p>
      </div>

      <div className="nb-process-timeline">
        {PROCESS_STEPS.map(p => (
          <div key={p.n} className="nb-process-step">
            <div className="nb-process-step-num">Etapa {p.n}</div>
            <h3 className="nb-process-step-title">{p.t}</h3>
            <p className="nb-process-step-desc">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Servicios({ onNav }) {
  return (
    <div className="nb-page" data-screen-label="02 Servicios">
      <section className="nb-page-hero">
        <div className="nb-page-hero-left">
          <span className="nb-eyebrow nb-eyebrow-num">
            <span className="nb-rule"></span>
            01 · Servicios
          </span>
          <h1 className="nb-page-title">
            Ocho servicios,<br />
            un <em>mismo</em> lenguaje.
          </h1>
          <p className="nb-body" style={{marginTop: 16, maxWidth: '52ch'}}>
            Trabajamos cada encargo de punta a punta, o entramos en la etapa que necesites.
            La continuidad del criterio es lo que define el resultado final.
          </p>
        </div>
        <div className="nb-page-hero-meta">
          <div className="nb-page-hero-meta-row">
            <span className="nb-page-hero-meta-k">Servicios</span>
            <span className="nb-page-hero-meta-v">08 · ofertados</span>
          </div>
          <div className="nb-page-hero-meta-row">
            <span className="nb-page-hero-meta-k">Modalidad</span>
            <span className="nb-page-hero-meta-v">Llave en mano · etapa única</span>
          </div>
          <div className="nb-page-hero-meta-row">
            <span className="nb-page-hero-meta-k">Honorarios</span>
            <span className="nb-page-hero-meta-v">Por presupuesto · CAPBA</span>
          </div>
          <div className="nb-page-hero-meta-row">
            <span className="nb-page-hero-meta-k">Cobertura</span>
            <span className="nb-page-hero-meta-v">La Plata + Gran BA</span>
          </div>
        </div>
      </section>

      <LlaveEnMano onNav={onNav} />

      <section style={{padding: 'clamp(80px,10vw,140px) 0 0', background: 'var(--bone)'}}>
        <div style={{padding: '0 clamp(20px,5vw,80px)', maxWidth: 'var(--container)', margin: '0 auto'}}>
          <span className="nb-eyebrow nb-eyebrow-num">
            <span className="nb-rule"></span>
            02 · Lista completa
          </span>
          <h2 className="nb-h2" style={{marginTop: 16, marginBottom: 48}}>
            Cada servicio,<br />
            un beneficio concreto.
          </h2>
        </div>

        <div className="nb-services-page-list">
          {SERVICIOS_FULL.map(s => (
            <ServiceRow key={s.n} s={s} />
          ))}
        </div>
      </section>

      <ProcessSection />

      <section style={{
        padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,80px)',
        background: 'var(--bone)',
        textAlign: 'center',
        borderTop: '1px solid var(--line)',
      }}>
        <span className="nb-eyebrow nb-eyebrow-num" style={{justifyContent: 'center'}}>
          <span className="nb-rule"></span>
          Próximo paso
        </span>
        <h2 className="nb-h2" style={{marginTop: 16, marginBottom: 24, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto'}}>
          ¿Tu proyecto encaja<br />
          en alguno de estos servicios?
        </h2>
        <p className="nb-section-lede" style={{margin: '0 auto 40px', maxWidth: '46ch'}}>
          Agendamos una primera reunión sin compromiso. Te respondemos en menos de 48 hs.
        </p>
        <button className="nb-btn nb-btn-primary"
                onClick={() => onNav('contacto')}>
          Agenda una asesoría
        </button>
      </section>
    </div>
  );
}

window.Servicios = Servicios;
