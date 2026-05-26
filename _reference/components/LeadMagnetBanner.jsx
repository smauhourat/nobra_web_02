// LeadMagnetBanner — sticky bottom-right card promoting the free checklist
const { useState: useStateLM, useEffect: useEffectLM } = React;

function LeadMagnetBanner({ enabled, onOpen }) {
  const [visible, setVisible] = useStateLM(false);
  const [dismissed, setDismissed] = useStateLM(false);

  useEffectLM(() => {
    if (!enabled || dismissed) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, [enabled, dismissed]);

  if (!enabled || dismissed) return null;

  return (
    <div className={`nb-leadmag-banner ${visible ? 'is-visible' : ''}`}>
      <button className="nb-leadmag-banner-close"
              aria-label="Cerrar"
              onClick={() => setDismissed(true)}>×</button>
      <div className="nb-leadmag-banner-mark">
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="6" y="4" width="20" height="24" />
          <line x1="10" y1="11" x2="22" y2="11" />
          <line x1="10" y1="16" x2="22" y2="16" />
          <line x1="10" y1="21" x2="18" y2="21" />
          <path d="M 23 19 L 26 22 L 30 17" strokeWidth="1.4" />
        </svg>
      </div>
      <div className="nb-leadmag-banner-text">
        <strong>Guía gratuita</strong>
        10 puntos antes de construir.
      </div>
      <button className="nb-leadmag-banner-cta" onClick={onOpen}>
        Descargar
      </button>
    </div>
  );
}

window.LeadMagnetBanner = LeadMagnetBanner;
