// Header — multi-page con estado activo + menú móvil
const { useEffect: useEffectH, useState: useStateH } = React;

function Header({ route, onNav }) {
  const [scrolled, setScrolled] = useStateH(false);
  const [open, setOpen] = useStateH(false);

  useEffectH(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffectH(() => { setOpen(false); }, [route]);

  const links = [
    { id: 'estudio',   label: 'Estudio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto',  label: 'Contacto' },
  ];

  const handle = (id) => (e) => {
    e.preventDefault();
    onNav(id);
  };

  return (
    <React.Fragment>
      <header className={`nb-header ${scrolled ? 'is-scrolled' : ''}`} data-screen-label="Header">
        <a className="nb-brand" href="#" onClick={handle('home')} aria-label="Inicio">
          <img className="nb-brand-mark" src="ds/logo-marca-color.svg" alt="" />
          <span className="nb-brand-text">Nobra</span>
        </a>

        <nav className="nb-nav">
          {links.map(l => (
            <a key={l.id}
               className={`nb-nav-link ${route === l.id ? 'is-active' : ''}`}
               href={`#${l.id}`}
               onClick={handle(l.id)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="nb-cta" href="#contacto" onClick={handle('contacto')}>
          Agenda asesoría
          <span className="nb-cta-arrow">→</span>
        </a>

        <button className="nb-burger" aria-label="Abrir menú"
                onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </header>

      <div className={`nb-mobile-menu ${open ? 'is-open' : ''}`}>
        <a href="#" onClick={handle('home')}>Inicio</a>
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} onClick={handle(l.id)}>{l.label}</a>
        ))}
        <div className="nb-mobile-meta">
          <span>estudio@nobra.ar</span>
          <span>La Plata, Buenos Aires</span>
        </div>
      </div>
    </React.Fragment>
  );
}

window.Header = Header;
