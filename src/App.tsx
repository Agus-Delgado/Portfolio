import React, { useMemo, useState } from 'react'

type Accent = 'cyan' | 'violet' | 'blue'

type FeaturedProject = {
  title: string
  label: string
  headline: string
  summary: string
  signals: string[]
  stack: string[]
  accent: Accent
}

type SecondaryProject = {
  title: string
  type: string
  description: string
}

type ContactLink = {
  label: string
  href: string
}

const featuredProjects: FeaturedProject[] = [
  {
    title: 'Paradise',
    label: 'AI product ecosystem',
    headline: 'Arquitectura SaaS modular con enfoque AI-first, diseño adaptable y visión de plataforma.',
    summary:
      'Paradise está planteado como un ecosistema de módulos desacoplados, capas compartidas, experiencia configurable por vertical y evolución continua. El valor del proyecto no está solo en la interfaz: está en la lógica de producto, la escalabilidad conceptual y la capacidad de conectar operación, datos e inteligencia dentro de un mismo sistema.',
    signals: ['System design', 'Multi-tenant thinking', 'UX adaptable', 'Producto modular'],
    stack: ['React', 'TypeScript', 'Arquitectura modular', 'Design system', 'Cloud-first vision'],
    accent: 'violet',
  },
  {
    title: 'Mi Consultorio',
    label: 'Healthcare operations',
    headline: 'Sistema real para agenda, historias clínicas, caja, reporting y soporte operativo en salud.',
    summary:
      'Este proyecto muestra trabajo sobre una necesidad operativa concreta. Centraliza procesos clínicos y administrativos, mejora trazabilidad, incorpora automatización y deja evidencia de uso real. Es una pieza fuerte porque combina datos, sistema, contexto de negocio y criterio funcional en un entorno sensible como salud.',
    signals: ['Operación real', 'Seguridad y roles', 'Automatización', 'Contexto healthcare'],
    stack: ['Python', 'Django', 'PostgreSQL', 'Dashboards', 'Notificaciones'],
    accent: 'cyan',
  },
  {
    title: 'Paradigm',
    label: 'Data science + analytics',
    headline: 'Caso end-to-end para métricas, análisis reproducible, BI ejecutivo y capa inteligente aplicada.',
    summary:
      'Paradigm funciona como puente entre analytics, ciencia de datos e inteligencia aplicada. El proyecto parte de una base estructurada, construye métricas consistentes, habilita exploración y reporting, y deja espacio para modelos o reglas inteligentes cuando suman capacidad predictiva o priorización real.',
    signals: ['SQL + Python', 'BI reproducible', 'Capas analíticas', 'ML aplicable'],
    stack: ['SQL', 'Python', 'Power BI', 'Tableau', 'scikit-learn'],
    accent: 'blue',
  },
]

const secondaryProjects: SecondaryProject[] = [
  {
    title: 'Consultorio Barcala',
    type: 'Website',
    description: 'Sitio institucional con foco en claridad de propuesta, confianza visual y contacto rápido.',
  },
  {
    title: 'Plataforma geriátrica',
    type: 'Healthcare app',
    description: 'Aplicación orientada a soporte operativo, seguimiento y experiencia de uso en entorno asistencial.',
  },
  {
    title: 'Otros desarrollos web',
    type: 'Product delivery',
    description: 'Implementaciones complementarias que refuerzan capacidad de entrega, adaptación y criterio visual.',
  },
]

const methods = [
  {
    index: '01',
    title: 'Defino el problema correcto',
    text: 'Arranco por operación, decisión y contexto. Primero entiendo qué hay que mejorar; después elijo la herramienta.',
  },
  {
    index: '02',
    title: 'Construyo una base trazable',
    text: 'Datos, métricas y validaciones tienen que ser consistentes para que reporting, automatización o modelos no se rompan a la primera.',
  },
  {
    index: '03',
    title: 'Diseño una solución utilizable',
    text: 'La salida tiene que servir: dashboard, sistema, flujo o capa inteligente que ayude a ejecutar mejor.',
  },
  {
    index: '04',
    title: 'Hago la demo defendible',
    text: 'Cada proyecto busca dejar narrativa, stack, entregables y explicación clara para entrevista, review o producto.',
  },
]

const stackAreas = [
  {
    title: 'Data & Analytics',
    description: 'Métricas, reporting, exploración y modelado orientado a decisión.',
    items: ['SQL', 'Power BI', 'Tableau', 'Excel', 'Data modeling', 'KPI design'],
  },
  {
    title: 'Engineering & Automation',
    description: 'Workflows reproducibles, sistemas y automatización con foco operativo.',
    items: ['Python', 'Django', 'ETL', 'Automatización', 'Quality checks', 'Git / GitHub'],
  },
  {
    title: 'AI & Product Thinking',
    description: 'Aplicación gradual de inteligencia, visión de producto y diseño de soluciones más amplias.',
    items: ['Machine Learning', 'Applied AI', 'Scoring / segmentación', 'SaaS thinking', 'System design', 'UX con criterio'],
  },
]

const contactLinks: ContactLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/agustin-delgado-data98615190/' },
  { label: 'GitHub', href: 'https://github.com/Agus-Delgado' },
  { label: 'Email', href: 'mailto:augusto.delgado00@hotmail.com' },
]

const styles = `
:root {
  color-scheme: dark;
  --bg: #06101d;
  --bg-2: #091728;
  --card: rgba(10, 20, 35, 0.76);
  --card-strong: rgba(12, 23, 39, 0.92);
  --line: rgba(141, 172, 228, 0.14);
  --text: #eef4ff;
  --muted: #92a4c2;
  --soft: #c8d4e8;
  --cyan: #61d8ff;
  --violet: #aa8fff;
  --blue: #7ea8ff;
  --success: #7cf2c7;
  --shadow: 0 30px 80px rgba(0, 0, 0, 0.34);
  --radius-xl: 30px;
  --radius-lg: 24px;
  --radius-md: 18px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at 8% 12%, rgba(97, 216, 255, 0.10), transparent 24%),
    radial-gradient(circle at 88% 10%, rgba(170, 143, 255, 0.14), transparent 24%),
    radial-gradient(circle at 50% 60%, rgba(126, 168, 255, 0.08), transparent 34%),
    linear-gradient(180deg, #06101d 0%, #050b14 100%);
}

a { color: inherit; text-decoration: none; }
button { font: inherit; }

.page {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.backdrop, .backdrop-2 {
  position: fixed;
  border-radius: 999px;
  filter: blur(100px);
  pointer-events: none;
  opacity: 0.9;
}

.backdrop {
  width: 460px;
  height: 460px;
  right: -120px;
  top: -110px;
  background: rgba(170, 143, 255, 0.12);
}

.backdrop-2 {
  width: 420px;
  height: 420px;
  left: -120px;
  bottom: 8%;
  background: rgba(97, 216, 255, 0.10);
}

.shell {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.topbar {
  position: sticky;
  top: 14px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 14px 18px;
  margin-top: 18px;
  border-radius: 22px;
  background: rgba(7, 16, 29, 0.7);
  border: 1px solid rgba(160, 186, 234, 0.10);
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 60px rgba(0,0,0,0.22);
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 15px;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 0.92rem;
  color: #07101d;
  background: linear-gradient(135deg, var(--cyan), #b6e8ff 38%, var(--violet));
  box-shadow: 0 10px 28px rgba(97, 216, 255, 0.18);
}

.brand-copy strong {
  display: block;
  font-size: 0.96rem;
  letter-spacing: -0.02em;
}

.brand-copy span {
  color: var(--muted);
  font-size: 0.9rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.nav a {
  padding: 10px 12px;
  border-radius: 999px;
  color: var(--muted);
  transition: 180ms ease;
}

.nav a:hover {
  color: var(--text);
  background: rgba(255,255,255,0.04);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(320px, 0.88fr);
  gap: 22px;
  padding: 26px 0 54px;
}

.panel {
  background: linear-gradient(180deg, rgba(12, 24, 41, 0.9), rgba(8, 16, 29, 0.78));
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.hero-main {
  border-radius: 34px;
  padding: 34px;
  position: relative;
  overflow: hidden;
}

.hero-main::before {
  content: '';
  position: absolute;
  inset: auto auto -60px -60px;
  width: 240px;
  height: 240px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(97, 216, 255, 0.18), transparent 68%);
}

.hero-main::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 10%, rgba(255,255,255,0.04) 48%, transparent 86%);
  opacity: 0.5;
  pointer-events: none;
}

.kicker-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}

.kicker, .ghost-pill, .meta-pill, .chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(170, 190, 240, 0.14);
  background: rgba(255,255,255,0.035);
  color: #dbe7ff;
}

.kicker::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 18px rgba(124, 242, 199, 0.55);
}

.ghost-pill {
  color: var(--muted);
}

.hero-title {
  margin: 0;
  font-size: clamp(2.8rem, 6vw, 5.4rem);
  line-height: 0.94;
  letter-spacing: -0.07em;
  max-width: 10.5ch;
}

.hero-title span {
  background: linear-gradient(92deg, #ffffff 5%, #9fd4ff 40%, #b391ff 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subcopy {
  margin-top: 20px;
  max-width: 62ch;
  color: var(--soft);
  font-size: 1.08rem;
  line-height: 1.8;
}

.hero-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.button {
  min-height: 50px;
  padding: 0 18px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 650;
  border: 1px solid transparent;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

.button.primary {
  background: linear-gradient(135deg, var(--cyan), #8dc7ff 55%, #cfbcff 100%);
  color: #06101d;
}

.button.secondary {
  background: rgba(255,255,255,0.035);
  border-color: rgba(170,190,240,0.14);
}

.button:hover { transform: translateY(-2px); }

.word-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.word-chip {
  padding: 10px 13px;
  border-radius: 14px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(170,190,240,0.12);
  color: #d8e5fb;
  transition: 180ms ease;
}

.word-chip:hover {
  transform: translateY(-2px);
  border-color: rgba(97, 216, 255, 0.28);
  box-shadow: 0 10px 28px rgba(97, 216, 255, 0.10);
}

.hero-side {
  display: grid;
  gap: 18px;
}

.info-card, .signal-card {
  border-radius: 28px;
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 18px;
}

.stat {
  padding: 16px;
  border-radius: 18px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(170,190,240,0.10);
}

.stat strong {
  display: block;
  margin-bottom: 6px;
  font-size: 1.15rem;
}

.stat span {
  color: var(--muted);
  line-height: 1.5;
  font-size: 0.94rem;
}

.panel-kicker {
  color: #98b7ee;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  font-weight: 700;
}

.panel-title {
  margin: 10px 0 0;
  font-size: 1.35rem;
  letter-spacing: -0.04em;
}

.signal-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.meta-pill {
  transition: 180ms ease;
}

.meta-pill:hover {
  transform: translateY(-2px);
  color: var(--text);
}

main {
  padding-bottom: 44px;
}

section {
  padding: 30px 0;
}

.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 22px;
}

.section-mark {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #99b8eb;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
}

.section-mark::before {
  content: '';
  width: 28px;
  height: 1px;
  background: linear-gradient(90deg, rgba(97, 216, 255, 0.8), rgba(170, 143, 255, 0.2));
}

.section-title {
  margin: 10px 0 0;
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 0.98;
  letter-spacing: -0.06em;
}

.section-copy {
  max-width: 58ch;
  color: var(--muted);
  line-height: 1.75;
}

.feature-grid,
.method-grid,
.secondary-grid,
.stack-grid,
.contact-grid {
  display: grid;
  gap: 18px;
}

.feature-grid,
.method-grid,
.secondary-grid,
.stack-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.contact-grid {
  grid-template-columns: 1.05fr 0.95fr;
}

.interactive {
  position: relative;
  overflow: hidden;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.interactive::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.10), transparent 34%);
  opacity: 0;
  transition: opacity 180ms ease;
  pointer-events: none;
}

.interactive:hover {
  transform: translateY(-4px);
  border-color: rgba(170, 190, 240, 0.20);
  box-shadow: 0 26px 70px rgba(0,0,0,0.28);
}

.interactive:hover::before {
  opacity: 1;
}

.project-card {
  min-height: 100%;
  padding: 24px;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(12, 22, 38, 0.92), rgba(8, 15, 28, 0.84));
  border: 1px solid var(--line);
}

.project-card.cyan { box-shadow: inset 0 1px 0 rgba(97, 216, 255, 0.10); }
.project-card.violet { box-shadow: inset 0 1px 0 rgba(170, 143, 255, 0.10); }
.project-card.blue { box-shadow: inset 0 1px 0 rgba(126, 168, 255, 0.10); }

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 18px;
}

.label-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(170,190,240,0.10);
  color: #dce8ff;
  font-size: 0.84rem;
}

.label-pill::before {
  content: '';
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.9;
}

.project-title {
  margin: 0;
  font-size: clamp(1.35rem, 2.1vw, 1.95rem);
  letter-spacing: -0.04em;
}

.project-headline {
  margin: 10px 0 14px;
  color: #e7effe;
  line-height: 1.55;
  font-size: 1rem;
}

.project-summary {
  color: var(--soft);
  line-height: 1.74;
  margin: 0;
}

.subblock {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid rgba(170,190,240,0.08);
}

.subblock-title {
  margin: 0 0 10px;
  color: #dbe6fb;
  font-size: 0.9rem;
  font-weight: 700;
}

.tag-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  font-size: 0.9rem;
  color: #dce7fb;
  transition: 180ms ease;
}

.chip:hover {
  transform: translateY(-2px);
  border-color: rgba(97, 216, 255, 0.26);
}

.method-card,
.secondary-card,
.stack-card,
.contact-card,
.legal-card {
  padding: 22px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(12, 22, 38, 0.88), rgba(8, 15, 28, 0.78));
  border: 1px solid var(--line);
}

.method-index {
  display: inline-flex;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: #b9d6ff;
  margin-bottom: 16px;
}

.method-card h3,
.secondary-card h3,
.stack-card h3,
.contact-card h3,
.legal-card h3 {
  margin: 0 0 10px;
  font-size: 1.05rem;
  letter-spacing: -0.03em;
}

.method-card p,
.secondary-card p,
.stack-card p,
.contact-card p,
.legal-card p,
.legal-list li {
  color: var(--muted);
  line-height: 1.72;
  margin: 0;
}

.secondary-type {
  display: inline-flex;
  margin-bottom: 14px;
  color: #b9cff4;
  font-size: 0.84rem;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(170,190,240,0.10);
}

.stack-card ul, .legal-list {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}

.stack-card ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.stack-card li {
  padding: 9px 11px;
  border-radius: 12px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(170,190,240,0.10);
  color: #dce7fb;
  font-size: 0.92rem;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.contact-link {
  padding: 11px 14px;
  border-radius: 14px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(170,190,240,0.12);
  transition: 180ms ease;
}

.contact-link:hover {
  transform: translateY(-2px);
  border-color: rgba(97, 216, 255, 0.24);
}

.about-layout {
  display: grid;
  grid-template-columns: minmax(140px, 180px) minmax(0, 1fr);
  gap: 20px;
  align-items: center;
}

.about-photo-card {
  border-radius: 24px;
  padding: 10px;
  border: 1px solid rgba(97, 216, 255, 0.28);
  background: linear-gradient(180deg, rgba(12, 24, 41, 0.7), rgba(8, 16, 29, 0.84));
  box-shadow: 0 0 0 1px rgba(97, 216, 255, 0.1), 0 0 24px rgba(97, 216, 255, 0.2);
}

.about-photo {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid rgba(170, 190, 240, 0.16);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.34);
}

.about-body p {
  margin: 0;
}

.legal-layout {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 18px;
}

.legal-list li + li { margin-top: 10px; }

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 26px 0 34px;
  color: var(--muted);
  font-size: 0.92rem;
}

@media (max-width: 1080px) {
  .hero,
  .contact-grid,
  .legal-layout {
    grid-template-columns: 1fr;
  }

  .feature-grid,
  .method-grid,
  .secondary-grid,
  .stack-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .shell { width: min(100% - 24px, 1180px); }
  .topbar { position: static; flex-direction: column; align-items: flex-start; }
  .hero { grid-template-columns: 1fr; padding-top: 20px; }
  .about-layout { grid-template-columns: 1fr; }
  .about-photo-card { max-width: 180px; }
  .hero-main, .info-card, .signal-card, .project-card, .method-card, .secondary-card, .stack-card, .contact-card, .legal-card { padding: 20px; border-radius: 22px; }
  .feature-grid,
  .method-grid,
  .secondary-grid,
  .stack-grid,
  .info-grid { grid-template-columns: 1fr; }
  .section-head, .footer { flex-direction: column; align-items: flex-start; }
  .hero-title { max-width: 100%; }
}
`

function InteractiveCard({ className = '', children }: { className?: string; children: React.ReactNode }) {
  const [style, setStyle] = useState<React.CSSProperties>({})

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setStyle({ ['--mx' as string]: `${x}%`, ['--my' as string]: `${y}%` })
  }

  return (
    <div className={`interactive ${className}`.trim()} style={style} onMouseMove={handleMove}>
      {children}
    </div>
  )
}

function App() {
  const keywordChips = useMemo(
    () => ['Data Science', 'AI aplicada', 'Analytics', 'Product thinking', 'Automation', 'Healthcare ops', 'System design'],
    [],
  )

  return (
    <div className="page">
      <style>{styles}</style>
      <div className="backdrop" />
      <div className="backdrop-2" />

      <div className="shell">
        <header className="topbar">
          <div className="brand">
            <div className="brand-mark">AD</div>
            <div className="brand-copy">
              <strong>Agustín Delgado</strong>
              <span>Data Science · AI · Analytics · Product-minded systems</span>
            </div>
          </div>

          <nav className="nav">
            <a href="#work">Proyectos</a>
            <a href="#method">Enfoque</a>
            <a href="#stack">Stack</a>
            <a href="#legal">Legal</a>
            <a href="#contact">Contacto</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="hero-main panel">
              <div className="kicker-row">
                <span className="kicker">Portfolio único de Data Science + AI aplicada</span>
                <span className="ghost-pill">Construido para mostrar sistema, criterio y ejecución</span>
              </div>

              <h1 className="hero-title">
                Diseño <span>soluciones con datos, sistemas y AI</span> para problemas reales.
              </h1>

              <p className="hero-subcopy">
                Estoy orientando mi perfil hacia Data Science e Inteligencia Artificial aplicada, pero sin caer en el truco universal de pegar tres buzzwords y esperar un milagro. Mi foco es construir una base confiable, convertir señales en decisiones y llevar esa lógica a productos, operaciones y demos defendibles.
              </p>

              <div className="hero-links">
                <a className="button primary" href="#work">Explorar proyectos</a>
                <a className="button secondary" href="#contact">Ver contacto</a>
              </div>

              <div className="word-grid">
                {keywordChips.map((item) => (
                  <span key={item} className="word-chip">{item}</span>
                ))}
              </div>
            </div>

            <div className="hero-side">
              <div className="info-card panel">
                <span className="panel-kicker">Posicionamiento</span>
                <h2 className="panel-title">Perfil híbrido entre analytics, sistemas y AI aplicada.</h2>
                <div className="info-grid">
                  <div className="stat">
                    <strong>3 proyectos ancla</strong>
                    <span>Paradise, Mi Consultorio y Paradigm como núcleo del relato.</span>
                  </div>
                  <div className="stat">
                    <strong>End-to-end</strong>
                    <span>Problema, diseño, implementación y demo explicable.</span>
                  </div>
                  <div className="stat">
                    <strong>Salud + producto</strong>
                    <span>Experiencia en contexto operativo real y visión de sistema.</span>
                  </div>
                  <div className="stat">
                    <strong>AI con criterio</strong>
                    <span>Aplicada donde suma capacidad, no decoración de marketing.</span>
                  </div>
                </div>
              </div>

              <div className="signal-card panel">
                <span className="panel-kicker">Señales clave</span>
                <h2 className="panel-title">Lo que busco transmitir cuando alguien entra al portfolio.</h2>
                <div className="signal-list">
                  {['Business context', 'Reproducibility', 'Interactive demos', 'System thinking', 'Operational value', 'AI applied'].map((item) => (
                    <span key={item} className="meta-pill">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="work">
            <div className="section-head">
              <div>
                <span className="section-mark">Featured work</span>
                <h2 className="section-title">Proyectos que sostienen el perfil</h2>
              </div>
              <p className="section-copy">
                En vez de una colección de piezas sueltas, el portfolio se apoya en tres proyectos que explican una dirección profesional clara: producto, operación real y data science aplicada a decisión.
              </p>
            </div>

            <div className="feature-grid">
              {featuredProjects.map((project) => (
                <InteractiveCard key={project.title} className={`project-card ${project.accent}`}>
                  <div className="project-top">
                    <span className="label-pill">{project.label}</span>
                    <span className="ghost-pill">Proyecto ancla</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-headline">{project.headline}</p>
                  <p className="project-summary">{project.summary}</p>

                  <div className="subblock">
                    <h4 className="subblock-title">Señales que comunica</h4>
                    <div className="tag-grid">
                      {project.signals.map((item) => (
                        <span key={item} className="chip">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="subblock">
                    <h4 className="subblock-title">Stack / piezas clave</h4>
                    <div className="tag-grid">
                      {project.stack.map((item) => (
                        <span key={item} className="chip">{item}</span>
                      ))}
                    </div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </section>

          <section id="method">
            <div className="section-head">
              <div>
                <span className="section-mark">How I build</span>
                <h2 className="section-title">Cómo convierto una idea en una solución defendible</h2>
              </div>
              <p className="section-copy">
                La lógica del portfolio es mostrar método además de resultado: entender contexto, ordenar la base, diseñar una salida útil y dejar una demo que se pueda explicar con claridad.
              </p>
            </div>

            <div className="method-grid">
              {methods.map((item) => (
                <InteractiveCard key={item.index} className="method-card">
                  <span className="method-index">{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </InteractiveCard>
              ))}
            </div>
          </section>

          <section>
            <div className="section-head">
              <div>
                <span className="section-mark">Additional projects</span>
                <h2 className="section-title">Otros proyectos finalizados</h2>
              </div>
              <p className="section-copy">
                Estas entregas acompañan el portfolio como respaldo práctico y muestran versatilidad en distintos tipos de implementación.
              </p>
            </div>

            <div className="secondary-grid">
              {secondaryProjects.map((project) => (
                <InteractiveCard key={project.title} className="secondary-card">
                  <span className="secondary-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </InteractiveCard>
              ))}
            </div>
          </section>

          <section id="stack">
            <div className="section-head">
              <div>
                <span className="section-mark">Stack</span>
                <h2 className="section-title">Tecnologías y áreas con las que trabajo</h2>
              </div>
              <p className="section-copy">
                Más que listar herramientas, la idea es mostrar cómo se combinan para construir soluciones de analytics, automatización, producto y AI aplicada.
              </p>
            </div>

            <div className="stack-grid">
              {stackAreas.map((group) => (
                <InteractiveCard key={group.title} className="stack-card">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </InteractiveCard>
              ))}
            </div>
          </section>

          <section id="contact">
            <div className="section-head">
              <div>
                <span className="section-mark">Contact</span>
                <h2 className="section-title">Perfil, contacto y siguiente paso</h2>
              </div>
              <p className="section-copy">
                Este portfolio busca funcionar como puerta de entrada a conversaciones sobre producto, analytics, data science y AI aplicada a entornos reales.
              </p>
            </div>

            <div className="contact-grid">
              <InteractiveCard className="contact-card">
                <h3>Sobre mí</h3>
                <div className="about-layout">
                  <div className="about-photo-card">
                    <img
                      className="about-photo"
                      src="/img/foto.jpg"
                      alt="Foto de perfil de Agustin Delki"
                      loading="lazy"
                    />
                  </div>
                  <div className="about-body">
                    <p>
                      Vengo del análisis de datos aplicado a operación real, especialmente en salud, y estoy empujando ese recorrido hacia una propuesta más sólida en Data Science e Inteligencia Artificial aplicada. Mi diferencial está en unir contexto de negocio, diseño de sistema y ejecución técnica sin perder claridad.
                    </p>
                  </div>
                </div>
              </InteractiveCard>

              <InteractiveCard className="contact-card">
                <h3>Canales</h3>
                <p>
                  Podés usar esta zona para llevar el portfolio a su versión pública final con enlaces directos a LinkedIn, GitHub y contacto profesional.
                </p>
                <div className="contact-links">
                  {contactLinks.map((item) => (
                    <a key={item.label} className="contact-link" href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  ))}
                </div>
              </InteractiveCard>
            </div>
          </section>

          <section id="legal">
            <div className="section-head">
              <div>
                <span className="section-mark">Legal</span>
                <h2 className="section-title">Notas legales y alcance del portfolio</h2>
              </div>
              <p className="section-copy">
                Un bloque simple, prolijo y habitual para aclarar contexto, propiedad y uso responsable de demos, marcas y datos presentados.
              </p>
            </div>

            <div className="legal-layout">
              <InteractiveCard className="legal-card">
                <h3>Alcance</h3>
                <ul className="legal-list">
                  <li>Algunos proyectos corresponden a productos en evolución y pueden cambiar con nuevas iteraciones.</li>
                  <li>Las demos, capturas o ejemplos pueden incluir datos sintéticos, de prueba o anonimizados.</li>
                  <li>Este sitio tiene fines profesionales y de portfolio: no constituye oferta comercial formal ni documentación contractual.</li>
                </ul>
              </InteractiveCard>

              <InteractiveCard className="legal-card">
                <h3>Propiedad y referencias</h3>
                <ul className="legal-list">
                  <li>Las marcas, nombres de proyectos y materiales asociados pertenecen a sus respectivos contextos de uso.</li>
                  <li>El contenido visual y textual del portfolio fue curado para mostrar capacidades, enfoque y experiencia profesional.</li>
                  <li>Para colaboraciones, entrevistas o demos privadas, el contacto se canaliza por los medios indicados arriba.</li>
                </ul>
              </InteractiveCard>
            </div>
          </section>
        </main>

        <footer className="footer">
          <span>Portfolio — Agustín Delgado</span>
          <span>Data Science · AI · Analytics · Product-minded systems</span>
        </footer>
      </div>
    </div>
  )
}

export default App
