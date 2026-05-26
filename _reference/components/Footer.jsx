// Footer — multi-page
function Footer({ onNav }) {
  const handle = (id) => (e) => { e.preventDefault(); onNav(id); };
  return (
    <footer className="nb-footer" data-screen-label="Footer">
      <div className="nb-footer-top">
        <div className="nb-footer-brand">
          <img src="ds/logo-marca-color.svg" alt="" className="nb-footer-mark" />
          <div className="nb-footer-wm">NOBRA</div>
          <p className="nb-footer-tag">Novoa &amp; Bravin Arquitectos</p>
          <p className="nb-footer-tag" style={{maxWidth: '36ch', marginTop: 12, opacity: 0.7}}>
            Diseño integral, dirección y ejecución de obras en La Plata y zona.
          </p>
        </div>

        <div className="nb-footer-cols">
          <div>
            <span className="nb-eyebrow">Navegación</span>
            <ul>
              <li><a href="#estudio" onClick={handle('estudio')}>El estudio</a></li>
              <li><a href="#servicios" onClick={handle('servicios')}>Servicios</a></li>
              <li><a href="#proyectos" onClick={handle('proyectos')}>Proyectos</a></li>
              <li><a href="#contacto" onClick={handle('contacto')}>Contacto</a></li>
            </ul>
          </div>
          <div>
            <span className="nb-eyebrow">Servicios</span>
            <ul>
              <li><a href="#servicios" onClick={handle('servicios')}>Proyecto</a></li>
              <li><a href="#servicios" onClick={handle('servicios')}>Dirección de obra</a></li>
              <li><a href="#servicios" onClick={handle('servicios')}>Ejecución</a></li>
              <li><a href="#servicios" onClick={handle('servicios')}>Interiorismo</a></li>
              <li><a href="#servicios" onClick={handle('servicios')}>Renders</a></li>
            </ul>
          </div>
          <div>
            <span className="nb-eyebrow">Contacto</span>
            <ul>
              <li>La Plata, Buenos Aires</li>
              <li>estudio@nobra.ar</li>
              <li>+54 221 000 0000</li>
              <li style={{marginTop: 10}}>Lun a Vie · 9 a 18 hs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="nb-footer-bottom">
        <span>© 2026 Novoa &amp; Bravin Arquitectos · Mat. CAPBA</span>
        <span>Estudio joven · disciplina arquitectónica</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
