// Contacto — form principal + lead magnet (Checklist de 10 puntos)
const { useState: useStateCt } = React;

const CHECKLIST_POINTS = [
  'Definir el programa real',
  'Tener escritura del terreno',
  'Conocer el código urbano',
  'Pedir factibilidad de servicios',
  'Saber el presupuesto realista',
  'Considerar honorarios profesionales',
  'Prever el plazo total de obra',
  'Reservar un margen de contingencia',
  'Elegir bien al constructor',
  'Documentar todo por escrito',
];

function LeadMagnet({ onSubmit, sent }) {
  const [email, setEmail] = useStateCt('');

  const submit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) onSubmit(email);
  };

  return (
    <section className="nb-leadmag" id="checklist" data-screen-label="Lead magnet">
      <div className="nb-leadmag-left">
        <div className="nb-leadmag-eyebrow">
          <span className="nb-rule"></span>
          Guía gratuita · PDF
        </div>
        <h2 className="nb-leadmag-title">
          Checklist:<br />
          <em>10 puntos</em> antes<br />
          de construir.
        </h2>
        <p className="nb-body" style={{maxWidth: '52ch'}}>
          Una guía corta y honesta con todo lo que conviene tener resuelto antes de
          firmar el primer plano. Pensada para clientes que recién empiezan.
        </p>
        <ol className="nb-leadmag-list">
          {CHECKLIST_POINTS.map(p => <li key={p}>{p}</li>)}
        </ol>
      </div>

      <form className="nb-leadmag-form" onSubmit={submit}>
        {sent ? (
          <div className="nb-leadmag-form-done">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
              <circle cx="16" cy="16" r="13" />
              <path d="M 10 16 L 14 20 L 22 12" />
            </svg>
            <h3 className="nb-leadmag-form-title">Te lo enviamos</h3>
            <p className="nb-leadmag-form-sub">
              Revisá tu casilla. Si no llega en 5 minutos, mirá en spam.
            </p>
          </div>
        ) : (
          <>
            <h3 className="nb-leadmag-form-title">Descargar la guía</h3>
            <p className="nb-leadmag-form-sub">Te enviamos el PDF al email. Sin spam, palabra de arquitectos.</p>
            <input type="email"
                   required
                   placeholder="tu@email.com"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)} />
            <button className="nb-btn nb-btn-primary" type="submit">
              Enviarme la guía →
            </button>
            <p style={{fontSize: 11, color: 'var(--stone-300)', lineHeight: 1.5, marginTop: 4}}>
              Al descargar aceptás recibir nuestro newsletter ocasional. Podés darte de baja
              cuando quieras.
            </p>
          </>
        )}
      </form>
    </section>
  );
}

function Contacto({ onNav, leadMagnetOpen, onLeadMagnetClose }) {
  const [form, setForm] = useStateCt({
    nombre: '', email: '', telefono: '',
    proyecto: 'Vivienda', presupuesto: 'Por definir',
    cuando: 'En los próximos 3 meses', mensaje: '',
  });
  const [sent, setSent] = useStateCt(false);
  const [leadSent, setLeadSent] = useStateCt(false);

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="nb-page" data-screen-label="05 Contacto">
      <section className="nb-contacto-page" id="form">
        <div className="nb-contacto-page-grid">
          <div>
            <span className="nb-eyebrow nb-eyebrow-num inv">
              <span className="nb-rule inv"></span>
              01 · Hablemos
            </span>
            <h1 className="nb-contacto-page-title">
              ¿Tenés un terreno,<br />
              una idea, o un<br />
              <em>plano viejo</em>?
            </h1>
            <p className="nb-body inv" style={{maxWidth: '46ch'}}>
              Escribinos y coordinamos una primera reunión —presencial o virtual—
              sin compromiso. Te respondemos en menos de 48 horas hábiles.
            </p>

            <div className="nb-contact-info">
              <div><span>Estudio</span><b>La Plata, Buenos Aires</b></div>
              <div><span>Email</span><b>estudio@nobra.ar</b></div>
              <div><span>Teléfono</span><b>+54 221 000 0000</b></div>
              <div><span>Horario</span><b>Lun a Vie · 9 a 18 hs</b></div>
              <div><span>Matrícula</span><b>CAPBA · D-V</b></div>
            </div>

            <div style={{
              marginTop: 48, paddingTop: 24,
              borderTop: '1px solid rgba(246,244,239,0.2)',
            }}>
              <div className="nb-leadmag-eyebrow" style={{color: 'var(--bone)', marginBottom: 12}}>
                <span className="nb-rule inv"></span>
                ¿Todavía no decidiste?
              </div>
              <a href="#checklist"
                 style={{
                   color: 'var(--bone)',
                   textDecoration: 'underline',
                   textUnderlineOffset: 4,
                   fontSize: 14,
                 }}
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById('checklist')?.scrollIntoView({behavior: 'smooth', block: 'start'});
                 }}>
                Descargá nuestra guía: Checklist de 10 puntos antes de construir →
              </a>
            </div>
          </div>

          <form className="nb-form" onSubmit={submit}>
            {sent ? (
              <div className="nb-form-sent">
                <span className="nb-eyebrow">Recibido</span>
                <h3 className="nb-h3" style={{color: 'var(--bone)'}}>
                  Gracias, {form.nombre || 'te escribimos pronto'}.
                </h3>
                <p>
                  Recibimos tu mensaje. Te respondemos al correo indicado en menos
                  de 48 hs hábiles para coordinar la primera reunión.
                </p>
                <button type="button"
                        className="nb-btn nb-btn-text"
                        onClick={() => {
                          setSent(false);
                          setForm({
                            nombre:'', email:'', telefono:'',
                            proyecto:'Vivienda', presupuesto:'Por definir',
                            cuando:'En los próximos 3 meses', mensaje:'',
                          });
                        }}>
                  Enviar otro mensaje <span className="nb-arrow">→</span>
                </button>
              </div>
            ) : (
              <>
                <div className="nb-field">
                  <label>Nombre</label>
                  <input value={form.nombre} onChange={update('nombre')} required />
                </div>
                <div className="nb-field-row">
                  <div className="nb-field">
                    <label>Email</label>
                    <input type="email" value={form.email} onChange={update('email')} required />
                  </div>
                  <div className="nb-field">
                    <label>Teléfono</label>
                    <input value={form.telefono} onChange={update('telefono')} />
                  </div>
                </div>
                <div className="nb-field-row">
                  <div className="nb-field">
                    <label>Tipo de proyecto</label>
                    <select value={form.proyecto} onChange={update('proyecto')}>
                      <option>Vivienda</option>
                      <option>Multifamiliar</option>
                      <option>Comercial</option>
                      <option>Interiorismo</option>
                      <option>Asesoría / Consulta</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div className="nb-field">
                    <label>Cuándo</label>
                    <select value={form.cuando} onChange={update('cuando')}>
                      <option>Lo antes posible</option>
                      <option>En los próximos 3 meses</option>
                      <option>Este año</option>
                      <option>Sin fecha definida</option>
                    </select>
                  </div>
                </div>
                <div className="nb-field">
                  <label>Presupuesto estimado</label>
                  <select value={form.presupuesto} onChange={update('presupuesto')}>
                    <option>Por definir</option>
                    <option>Hasta USD 50.000</option>
                    <option>USD 50.000 — 150.000</option>
                    <option>USD 150.000 — 400.000</option>
                    <option>Más de USD 400.000</option>
                  </select>
                </div>
                <div className="nb-field">
                  <label>Contanos brevemente</label>
                  <textarea rows="4"
                            value={form.mensaje}
                            onChange={update('mensaje')}
                            placeholder="¿Qué tenés en mente? ¿Tenés terreno, plano, presupuesto?" />
                </div>
                <button className="nb-btn nb-btn-primary" type="submit">
                  Empecemos tu proyecto →
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <LeadMagnet
        onSubmit={(email) => setLeadSent(true)}
        sent={leadSent}
      />

      <section style={{
        padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px)',
        background: 'var(--bone)',
        textAlign: 'center',
      }}>
        <p className="nb-section-lede" style={{margin: '0 auto', maxWidth: '46ch'}}>
          ¿Preferís llamarnos? Estamos disponibles de Lunes a Viernes de 9 a 18 hs.
        </p>
        <div style={{marginTop: 24}}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 200,
            fontSize: 'clamp(24px, 3vw, 36px)',
            color: 'var(--nobra-blue)',
            letterSpacing: '-0.01em',
          }}>+54 221 000 0000</span>
        </div>
      </section>
    </div>
  );
}

window.Contacto = Contacto;
