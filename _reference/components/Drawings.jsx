// Drawings — line-art SVG placeholders en azul Nobra.
// Sustituyen fotos/renders reales hasta que el estudio entregue material.
// Trazos finos 1px, color current.

const STROKE = 0.9;

function DrawPlan({ variant = 1 }) {
  // floor plan — variants for different projects
  const plans = [
    // 1: rectangular house with patio
    <g key="1" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <rect x="8" y="14" width="84" height="46" />
      <line x1="38" y1="14" x2="38" y2="60" />
      <line x1="62" y1="14" x2="62" y2="38" />
      <line x1="38" y1="38" x2="92" y2="38" />
      <rect x="42" y="42" width="16" height="14" />
      <line x1="50" y1="56" x2="58" y2="60" strokeDasharray="1.5,1.5" />
      <line x1="14" y1="24" x2="22" y2="24" strokeWidth={STROKE * 1.8} />
      <line x1="14" y1="48" x2="22" y2="48" strokeWidth={STROKE * 1.8} />
      <circle cx="48" cy="22" r="1.5" />
      <line x1="46" y1="22" x2="50" y2="22" />
    </g>,
    // 2: L-shaped
    <g key="2" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <path d="M 10 12 L 90 12 L 90 38 L 56 38 L 56 62 L 10 62 Z" />
      <line x1="10" y1="38" x2="56" y2="38" />
      <line x1="32" y1="12" x2="32" y2="38" />
      <line x1="32" y1="38" x2="32" y2="62" strokeDasharray="1.5,1.5" />
      <rect x="64" y="18" width="20" height="14" />
      <circle cx="20" cy="50" r="3" />
      <line x1="14" y1="20" x2="20" y2="20" strokeWidth={STROKE * 1.8} />
      <line x1="40" y1="58" x2="48" y2="58" strokeWidth={STROKE * 1.8} />
    </g>,
    // 3: multifamiliar tower plan
    <g key="3" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <rect x="14" y="14" width="72" height="46" />
      <line x1="50" y1="14" x2="50" y2="60" />
      <line x1="14" y1="37" x2="86" y2="37" />
      <rect x="44" y="32" width="12" height="10" />
      <line x1="20" y1="20" x2="44" y2="20" />
      <line x1="56" y1="20" x2="80" y2="20" />
      <line x1="20" y1="54" x2="44" y2="54" />
      <line x1="56" y1="54" x2="80" y2="54" />
      <circle cx="50" cy="37" r="1.5" />
    </g>,
    // 4: minimal small unit
    <g key="4" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <rect x="20" y="18" width="60" height="38" />
      <line x1="20" y1="34" x2="80" y2="34" />
      <line x1="50" y1="34" x2="50" y2="56" />
      <rect x="36" y="22" width="10" height="8" />
      <line x1="60" y1="22" x2="74" y2="22" strokeDasharray="1.5,1.5" />
      <line x1="24" y1="40" x2="32" y2="40" strokeWidth={STROKE * 1.8} />
    </g>,
  ];
  return (
    <svg viewBox="0 0 100 74" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      {plans[(variant - 1) % plans.length]}
    </svg>
  );
}

function DrawSection({ variant = 1 }) {
  // building section / elevation
  const sections = [
    // 1: pitched roof house
    <g key="1" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <path d="M 10 50 L 50 18 L 90 50 L 90 62 L 10 62 Z" />
      <line x1="10" y1="50" x2="90" y2="50" />
      <line x1="50" y1="18" x2="50" y2="62" strokeDasharray="1.5,1.5" />
      <rect x="22" y="54" width="6" height="8" />
      <rect x="36" y="54" width="6" height="8" />
      <rect x="58" y="54" width="6" height="8" />
      <rect x="72" y="54" width="6" height="8" />
      <line x1="6" y1="62" x2="94" y2="62" strokeWidth={STROKE * 1.5} />
      <line x1="6" y1="64" x2="94" y2="64" strokeDasharray="0.8,1.5" />
    </g>,
    // 2: modern flat roof
    <g key="2" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <rect x="10" y="20" width="80" height="42" />
      <line x1="10" y1="38" x2="90" y2="38" />
      <line x1="34" y1="20" x2="34" y2="38" />
      <line x1="60" y1="20" x2="60" y2="38" />
      <rect x="14" y="44" width="12" height="14" />
      <rect x="30" y="44" width="40" height="14" />
      <rect x="74" y="44" width="12" height="14" />
      <line x1="6" y1="62" x2="94" y2="62" strokeWidth={STROKE * 1.5} />
      <line x1="6" y1="64" x2="94" y2="64" strokeDasharray="0.8,1.5" />
    </g>,
    // 3: tower elevation
    <g key="3" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <rect x="30" y="8" width="40" height="54" />
      <line x1="30" y1="20" x2="70" y2="20" />
      <line x1="30" y1="32" x2="70" y2="32" />
      <line x1="30" y1="44" x2="70" y2="44" />
      <line x1="50" y1="8" x2="50" y2="62" strokeDasharray="1.5,1.5" />
      <line x1="6" y1="62" x2="94" y2="62" strokeWidth={STROKE * 1.5} />
      <line x1="6" y1="64" x2="94" y2="64" strokeDasharray="0.8,1.5" />
    </g>,
    // 4: small cabin
    <g key="4" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <path d="M 20 50 L 50 24 L 80 50 L 80 62 L 20 62 Z" />
      <rect x="42" y="48" width="8" height="14" />
      <rect x="56" y="50" width="8" height="6" />
      <line x1="6" y1="62" x2="94" y2="62" strokeWidth={STROKE * 1.5} />
    </g>,
  ];
  return (
    <svg viewBox="0 0 100 74" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      {sections[(variant - 1) % sections.length]}
    </svg>
  );
}

function DrawAxon({ variant = 1 }) {
  // axonometric / isometric simple
  const axons = [
    // 1: simple house volume
    <g key="1" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <path d="M 22 46 L 50 32 L 78 46 L 78 64 L 50 78 L 22 64 Z" />
      <path d="M 22 46 L 50 60 L 78 46" />
      <path d="M 50 60 L 50 78" />
      <path d="M 36 39 L 36 57 L 50 64" />
      <path d="M 64 39 L 64 57 L 50 64" />
    </g>,
    // 2: tower volume
    <g key="2" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <path d="M 30 20 L 60 8 L 80 18 L 80 60 L 50 72 L 30 62 Z" />
      <path d="M 30 20 L 50 30 L 80 18" />
      <path d="M 50 30 L 50 72" />
      <path d="M 30 32 L 50 42" /> <path d="M 50 42 L 80 30" />
      <path d="M 30 44 L 50 54" /> <path d="M 50 54 L 80 42" />
    </g>,
    // 3: L-shape volume
    <g key="3" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <path d="M 16 44 L 40 32 L 68 46 L 68 52 L 84 60 L 84 70 L 50 86" />
      <path d="M 16 44 L 16 60 L 40 72 L 50 86" />
      <path d="M 40 32 L 40 48 L 16 60" />
      <path d="M 40 48 L 68 60 L 84 60" />
      <path d="M 40 48 L 40 72" strokeDasharray="1.5,1.5" />
    </g>,
    // 4: cabin
    <g key="4" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <path d="M 28 50 L 50 28 L 72 50 L 72 62 L 50 74 L 28 62 Z" />
      <path d="M 28 50 L 50 60 L 72 50" />
      <path d="M 50 60 L 50 74" />
      <path d="M 38 44 L 38 56 L 50 62" />
      <path d="M 62 44 L 62 56" />
    </g>,
  ];
  return (
    <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      {axons[(variant - 1) % axons.length]}
    </svg>
  );
}

function DrawDetail({ variant = 1 }) {
  // construction detail / sketch grid
  const details = [
    <g key="1" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <line x1="10" y1="10" x2="10" y2="64" />
      <line x1="10" y1="10" x2="90" y2="10" />
      <pattern id="grid1" width="6" height="6" patternUnits="userSpaceOnUse">
        <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.4"/>
      </pattern>
      <rect x="10" y="10" width="80" height="54" fill="url(#grid1)" />
      <line x1="30" y1="20" x2="30" y2="50" strokeWidth={STROKE * 1.4} />
      <line x1="60" y1="20" x2="60" y2="50" strokeWidth={STROKE * 1.4} />
      <line x1="30" y1="20" x2="60" y2="20" strokeWidth={STROKE * 1.4} />
      <line x1="30" y1="50" x2="60" y2="50" strokeWidth={STROKE * 1.4} />
      <line x1="45" y1="20" x2="45" y2="50" strokeDasharray="1.5,1.5" />
      <text x="68" y="36" fontSize="3" fill="currentColor" fontFamily="monospace">1:50</text>
    </g>,
    <g key="2" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      <circle cx="50" cy="37" r="22" />
      <line x1="50" y1="15" x2="50" y2="59" strokeDasharray="1.5,1.5" />
      <line x1="28" y1="37" x2="72" y2="37" strokeDasharray="1.5,1.5" />
      <line x1="50" y1="37" x2="68" y2="22" strokeWidth={STROKE * 1.4} />
      <text x="40" y="65" fontSize="3" fill="currentColor" fontFamily="monospace">DET. 01</text>
    </g>,
    <g key="3" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      {/* stair detail */}
      <polyline points="14,60 24,60 24,52 34,52 34,44 44,44 44,36 54,36 54,28 64,28 64,20 74,20 74,12" />
      <line x1="14" y1="60" x2="80" y2="60" strokeWidth={STROKE * 1.5} />
      <line x1="14" y1="62" x2="80" y2="62" strokeDasharray="0.8,1.5" />
      <text x="14" y="70" fontSize="3" fill="currentColor" fontFamily="monospace">ESCALERA</text>
    </g>,
    <g key="4" fill="none" stroke="currentColor" strokeWidth={STROKE}>
      {/* facade modulation */}
      <rect x="10" y="14" width="80" height="50" />
      {[18, 30, 42, 54, 66, 78].map(x => (
        <line key={x} x1={x} y1="14" x2={x} y2="64" />
      ))}
      <line x1="10" y1="28" x2="90" y2="28" strokeWidth={STROKE * 1.2} />
      <line x1="10" y1="50" x2="90" y2="50" strokeWidth={STROKE * 1.2} />
    </g>,
  ];
  return (
    <svg viewBox="0 0 100 74" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      {details[(variant - 1) % details.length]}
    </svg>
  );
}

function DrawPortrait({ variant = 1 }) {
  // founder portrait placeholder — geometric, line-only
  const v = (variant - 1) % 2;
  return (
    <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style={{color: 'var(--stone-300)'}}>
      <g fill="none" stroke="currentColor" strokeWidth={STROKE}>
        {/* head circle */}
        <circle cx="50" cy="44" r={v === 0 ? 20 : 18} />
        {/* shoulders */}
        <path d={v === 0
          ? "M 18 130 L 22 92 Q 30 78 50 78 Q 70 78 78 92 L 82 130"
          : "M 22 130 L 24 96 Q 32 82 50 82 Q 68 82 76 96 L 78 130"} />
        {/* collar / detail */}
        <line x1="40" y1="84" x2="50" y2="100" />
        <line x1="60" y1="84" x2="50" y2="100" />
      </g>
    </svg>
  );
}

// Tool monograms (Revit, ArchiCAD, etc.) — geometric marks
function ToolMark({ kind }) {
  const marks = {
    revit: <g fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="4" y="4" width="24" height="24" /><path d="M 4 16 L 16 4 L 28 16 L 16 28 Z" /></g>,
    archicad: <g fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="16" cy="16" r="12" /><path d="M 4 16 L 28 16 M 16 4 L 16 28" /></g>,
    autocad: <g fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="4" y="4" width="24" height="24" /><path d="M 4 4 L 28 28 M 4 28 L 28 4" /></g>,
    sketchup: <g fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M 6 22 L 16 6 L 26 22 L 16 28 Z" /><path d="M 6 22 L 16 14 L 26 22" /></g>,
    twinmotion: <g fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="16" cy="16" r="11" /><path d="M 16 6 L 22 16 L 16 26 L 10 16 Z" /></g>,
    rhino: <g fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M 4 22 Q 16 4 28 22" /><path d="M 4 22 L 28 22" /><circle cx="10" cy="20" r="1.5" fill="currentColor" stroke="none" /></g>,
    enscape: <g fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="16" cy="16" r="11" /><path d="M 10 16 L 22 16 M 16 10 L 16 22" /></g>,
    notion: <g fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="6" y="4" width="20" height="24" /><line x1="6" y1="10" x2="26" y2="10" /><line x1="6" y1="16" x2="20" y2="16" /><line x1="6" y1="22" x2="22" y2="22" /></g>,
  };
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="nb-tool-mark">
      {marks[kind] || marks.notion}
    </svg>
  );
}

window.DrawPlan = DrawPlan;
window.DrawSection = DrawSection;
window.DrawAxon = DrawAxon;
window.DrawDetail = DrawDetail;
window.DrawPortrait = DrawPortrait;
window.ToolMark = ToolMark;
