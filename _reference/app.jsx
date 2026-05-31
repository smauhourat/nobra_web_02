// App — router multi-página (estado React) + tweaks panel
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const initialTweaks = (typeof window !== 'undefined' && window.NB_TWEAKS) || {};
  const [tweaks, setTweak] = useTweaks(initialTweaks);

  // Route state — sourced from hash, but defaults to home
  const getRouteFromHash = () => {
    const h = (window.location.hash || '#home').replace('#', '');
    const valid = ['home','servicios','proyectos','estudio','contacto', 'informe'];
    return valid.includes(h) ? h : 'home';
  };

  const [route, setRoute] = useStateApp(getRouteFromHash());

  useEffectApp(() => {
    const onHash = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const onNav = (id) => {
    setRoute(id);
    window.location.hash = id === 'home' ? '' : id;
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' }));
  };

  // Apply background tweak to body
  useEffectApp(() => {
    document.body.setAttribute('data-bg', tweaks.background || 'bone');
  }, [tweaks.background]);

  const page = (() => {
    switch (route) {
      case 'servicios': return <Servicios onNav={onNav} />;
      case 'proyectos': return <Proyectos onNav={onNav} tweaks={tweaks} />;
      case 'estudio':   return <Estudio onNav={onNav} />;
      case 'contacto':  return <Contacto onNav={onNav} />;
      default:          return <Home onNav={onNav} tweaks={tweaks} />;
    }
  })();

  // Lead magnet banner enabled everywhere except on contact page (already has the card)
  const bannerEnabled = !!tweaks.showLeadMagnetBanner && route !== 'contacto';

  return (
    <React.Fragment>
      <Header route={route} onNav={onNav} />
      <main>{page}</main>
      <Footer onNav={onNav} />

      <LeadMagnetBanner
        enabled={bannerEnabled}
        onOpen={() => onNav('contacto')}
      />

      <TweaksPanel>
        <TweakSection label="Hero">
          <TweakRadio
            label="Layout"
            value={tweaks.heroVariant || 'split'}
            options={[
              { value: 'split',     label: 'Split' },
              { value: 'fullbleed', label: 'Full' },
              { value: 'centered',  label: 'Centro' },
            ]}
            onChange={(v) => setTweak('heroVariant', v)}
          />
          <TweakToggle
            label="Mostrar wordmark de fondo"
            value={!!tweaks.showWordmark}
            onChange={(v) => setTweak('showWordmark', v)}
          />
        </TweakSection>

        <TweakSection label="Estilo">
          <TweakRadio
            label="Fondo"
            value={tweaks.background || 'bone'}
            options={[
              { value: 'bone',  label: 'Hueso' },
              { value: 'paper', label: 'Blanco' },
            ]}
            onChange={(v) => setTweak('background', v)}
          />
        </TweakSection>

        <TweakSection label="Proyectos">
          <TweakRadio
            label="Numeración"
            value={tweaks.projectNumbering || 'slash'}
            options={[
              { value: 'slash', label: '01/05' },
              { value: 'pad',   label: '001' },
              { value: 'p',     label: 'P—01' },
            ]}
            onChange={(v) => setTweak('projectNumbering', v)}
          />
        </TweakSection>

        <TweakSection label="Lead magnet">
          <TweakToggle
            label="Banner flotante en home"
            value={!!tweaks.showLeadMagnetBanner}
            onChange={(v) => setTweak('showLeadMagnetBanner', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
