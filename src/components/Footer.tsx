import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="nb-footer">
      <div className="nb-footer-top">
        <div className="nb-footer-brand">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo-marca-negativo.svg`} alt="" className="nb-footer-mark" />
          <div className="nb-footer-wm">NOBRA</div>
          <p className="nb-footer-tag">Novoa &amp; Bravin Arquitectos</p>
          <p className="nb-footer-tag" style={{ maxWidth: '36ch', marginTop: 12, opacity: 0.7 }}>
            Diseño integral, dirección y ejecución de obras en CABA y zona.
          </p>
        </div>

        <div className="nb-footer-cols">
          <div>
            <span className="nb-eyebrow">Navegación</span>
            <ul>
              <li><Link href="/estudio">El estudio</Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/proyectos">Proyectos</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <span className="nb-eyebrow">Servicios</span>
            <ul>
              <li><Link href="/servicios">Proyecto</Link></li>
              <li><Link href="/servicios">Dirección de obra</Link></li>
              <li><Link href="/servicios">Ejecución</Link></li>
              <li><Link href="/servicios">Interiorismo</Link></li>
              <li><Link href="/servicios">Renders</Link></li>
            </ul>
          </div>
          <div>
            <span className="nb-eyebrow">Contacto</span>
            <ul>
              <li>CABA, Buenos Aires</li>
              <li>estudio@nobra.ar</li>
              <li>+54 221 000 0000</li>
              <li style={{ marginTop: 10 }}>Lun a Vie · 9 a 18 hs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="nb-footer-bottom">
        <span>© 2026 Novoa &amp; Bravin Arquitectos · Mat. CAPBA</span>
        <span>Desarrolado por <a href="https://www.adhentux.com" target="_blank" rel="noopener noreferrer">Adhentux</a></span>
        <span>Estudio joven · disciplina arquitectónica</span>
      </div>
    </footer>
  )
}
