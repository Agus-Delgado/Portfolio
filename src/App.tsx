import React, { useEffect, useId, useMemo, useState } from 'react'

type Project = {
  title: string
  category: string
  problem: string
  analyticalFocus: string
  outcome: string
  metricHighlight?: string
  stack?: string[]
  bullets?: string[]
  summary: string
}

const PRIMARY_PROJECTS: Project[] = [
  {
    title: 'Mi Consultorio',
    category: 'Salud · sistema en producción',
    problem: 'Información dispersa en papel y planillas; poca visibilidad de turnos, caja y operación diaria.',
    analyticalFocus:
      'Centralización de datos, KPIs de agenda y reporting alineado a cómo trabaja el consultorio en la práctica.',
    outcome: 'Un solo lugar para consultar agenda, asistencias e indicadores operativos y financieros.',
    metricHighlight: 'En uso real',
    stack: ['SQL', 'Power BI', 'Python', 'Reporting'],
    summary:
      'Problema: información dispersa en papel y planillas, poca visibilidad de turnos, caja y operación diaria. Se centralizaron datos y se construyeron reportes para priorizar turnos, seguimiento y decisiones cotidianas.',
    bullets: [
      'Impacto: un solo lugar para consultar agenda, asistencias e indicadores operativos.',
      'Uso de datos para reducir fricción administrativa y dar continuidad clínica-administrativa.',
      'Reporting y procesos alineados a cómo trabaja el consultorio en la práctica.'
    ]
  },
  {
    title: 'SmartClinic No-Show Predictor',
    category: 'Salud · analítica y BI',
    problem: 'Inasistencias que afectan ocupación y planificación sin una lectura común del riesgo.',
    analyticalFocus:
      'Métricas de riesgo, segmentación y tablero para priorizar recordatorios y decisiones operativas prudentes.',
    outcome: 'Priorización de turnos según riesgo y lectura más clara frente a la operación esperada.',
    metricHighlight: 'KPIs + segmentación',
    stack: ['SQL', 'Power BI', 'Python', 'KPIs'],
    summary:
      'Problema: inasistencias que afectan ocupación y planificación. Se analizó un volumen representativo de turnos, se definieron métricas de riesgo y se priorizó la lectura en un tablero para acciones operativas.',
    bullets: [
      'Enfoque en indicadores y segmentación para decidir recordatorios o sobreventa prudente.',
      'Dashboard para comparar patrones y desvíos frente a la operación esperada.',
      'Menos énfasis en el algoritmo y más en qué mirar y qué hacer con los datos.'
    ]
  },
  {
    title: 'ModelArc',
    category: 'BI · KPIs y visualización',
    problem: 'Lectura poco clara de desempeño y comparativas en reuniones de seguimiento.',
    analyticalFocus: 'Modelado de métricas ejecutivas, KPIs comparativos y narrativa visual sobria.',
    outcome: 'Lectura más clara del desempeño mediante KPIs comparativos y foco en desvíos accionables.',
    metricHighlight: 'Storytelling con datos',
    stack: ['Power BI', 'DAX', 'Data modeling', 'Storytelling'],
    summary:
      'Problema: lectura poco clara de desempeño y comparativas. Se modelaron métricas ejecutivas y vistas simples para detectar desvíos y focalizar reuniones en números, no en discusiones abstractas.',
    bullets: [
      'Diseño de KPIs comparativos y narrativa visual sobria.',
      'Prioridad en interpretación rápida para perfiles de negocio.',
      'Ejemplo de cómo estructuro tableros sin ruido innecesario.'
    ]
  }
]

const SECONDARY_PROJECTS: Project[] = [
  {
    title: 'AtlasOps',
    category: 'Complementario · operación',
    problem: 'Consola orientada a KPIs y alertas.',
    analyticalFocus: 'Visión de producto y métricas; el portfolio prioriza BI en salud.',
    outcome: 'Complementa el perfil sin competir con los casos principales.',
    summary:
      'Producto de consola con foco en KPIs y alertas. Aporta visión de producto; el portfolio prioriza casos BI en salud y analítica.'
  },
  {
    title: 'Consultorio Barcala',
    category: 'Complementario · web',
    problem: 'Presencia institucional online.',
    analyticalFocus: 'Comunicación clara; no es el eje analítico del perfil.',
    outcome: 'Sitio institucional en producción.',
    summary:
      'Sitio institucional. Comunicación y presencia online; no es el eje analítico del perfil.'
  },
  {
    title: 'Paradise ClubNet',
    category: 'Complementario · ecosistema',
    problem: 'Información modular a escala para clubes.',
    analyticalFocus: 'Organización de módulos y datos; detrás de los proyectos BI.',
    outcome: 'Muestra orden de información a escala.',
    summary:
      'Portal modular para clubes. Muestra organización de información a escala; queda detrás de los proyectos BI y de salud.'
  }
]

type SkillItem = { name: string; emphasis: number }

const SKILL_GROUPS: { title: string; items: SkillItem[] }[] = [
  {
    title: 'Núcleo BI y analítica',
    items: [
      { name: 'SQL', emphasis: 96 },
      { name: 'Power BI', emphasis: 94 },
      { name: 'Excel', emphasis: 90 },
      { name: 'Python (analytics)', emphasis: 82 },
      { name: 'ETL / limpieza', emphasis: 88 },
      { name: 'KPIs & reporting', emphasis: 92 },
      { name: 'Dashboards', emphasis: 93 },
      { name: 'Data modeling', emphasis: 86 }
    ]
  },
  {
    title: 'Complemento',
    items: [
      { name: 'Fundamentos ML', emphasis: 52 },
      { name: 'GenAI / RAG', emphasis: 48 },
      { name: 'Git / GitHub', emphasis: 72 },
      { name: 'Desarrollo web (apoyo)', emphasis: 58 }
    ]
  }
]

type ExperienceItem = {
  period: string
  title: string
  place: string
  description?: string
  bullets?: string[]
  featured?: boolean
}

const EXPERIENCE: ExperienceItem[] = [
  {
    period: '2018 — Actualidad',
    title: 'Data Analyst',
    place: 'Consultorio médico · Argentina',
    featured: true,
    bullets: [
      'Migración de registros manuales a bases SQL y consultas orientadas a la operación diaria.',
      'Reducción aproximada del ~70% en el tiempo de búsqueda de información.',
      'Dashboards en Power BI para KPIs operativos y financieros.',
      'Reporting mensual automatizado con Python (menos trabajo repetitivo, más consistencia).',
      'Eliminación de más de 15 horas mensuales de tareas repetitivas.',
      'Sistema Mi Consultorio en uso real: datos y procesos alineados al consultorio.',
      'Mejora continua de procesos y soporte a decisiones con información confiable.'
    ]
  },
  {
    period: 'Formación',
    title: 'Tecnicatura y especialización en datos',
    place: 'Formación académica y práctica continua',
    description:
      'Base sólida en SQL, Power BI, análisis y herramientas de negocio; actualización constante en entorno de datos.'
  }
]

type HeroKpi = { value: string; label: string; spark?: number[] }

const HERO_KPIS: HeroKpi[] = [
  { value: '+9 años', label: 'En operación real con datos', spark: [12, 14, 18, 22, 28, 35, 42, 48, 55, 62, 70, 78] },
  { value: '~70%', label: 'Menos tiempo de búsqueda', spark: [88, 82, 76, 70, 65, 58, 52, 48, 42, 38, 34, 30] },
  { value: '15+ h/mes', label: 'Automatizadas (reporting)', spark: [8, 12, 18, 22, 28, 32, 38, 44, 50, 58, 65, 72] },
  { value: 'Op. + finanzas', label: 'Dashboards en Power BI', spark: [20, 28, 35, 42, 48, 55, 60, 66, 72, 78, 84, 90] }
]

const HERO_TOOLKIT = [
  'SQL',
  'Power BI',
  'Excel',
  'Python',
  'ETL',
  'KPI Design',
  'Reporting',
  'Data Modeling',
]

const ABOUT_HIGHLIGHTS = [
  {
    title: 'De datos a decisión',
    text: 'KPIs y tableros pensados para que equipos no técnicos lean tendencias y desvíos sin ruido.'
  },
  {
    title: 'Operación real',
    text: 'Experiencia en salud: agenda, caja, reporting y procesos que conviven con el día a día del negocio.'
  },
  {
    title: 'Automatización sensata',
    text: 'Python y pipelines ligeros donde aportan: menos horas repetitivas y números consistentes.'
  }
]

function Sparkline({ values, className = '' }: { values: number[]; className?: string }) {
  const gradId = useId().replace(/:/g, '')
  if (!values.length) return null
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  const w = 100
  const h = 26
  const bottom = h - 1
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1 || 1)) * w
    const y = h - ((v - min) / range) * (h - 5) - 2.5
    return `${x.toFixed(1)},${y.toFixed(1)}`
  })
  const linePts = pts.join(' ')
  const areaPts = `0,${bottom} ${linePts} ${w},${bottom}`
  return (
    <svg className={`sparkline ${className}`} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(91, 163, 217, 0.22)" />
          <stop offset="100%" stopColor="rgba(91, 163, 217, 0)" />
        </linearGradient>
      </defs>
      <polygon className="sparkline-area" points={areaPts} fill={`url(#${gradId})`} />
      <polyline fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points={linePts} />
    </svg>
  )
}

function HeroMiniBars() {
  const bars = [42, 68, 55, 82, 61, 90, 74]
  return (
    <div className="hero-mini-bars-wrap" aria-hidden>
      <div className="hero-mini-bars-head">
        <span className="hero-mini-bars-label">Comparativa editorial</span>
        <span className="hero-mini-bars-axis" />
      </div>
      <div className="hero-mini-bars-track">
        {bars.map((h, i) => (
          <div key={i} className="hero-mini-bar" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-title-wrap">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  )
}

function ProjectCard({
  project,
  primary = false,
  onOpen
}: {
  project: Project
  primary?: boolean
  onOpen: (project: Project) => void
}) {
  return (
    <article className={`project-card ${primary ? 'primary' : 'secondary'}`}>
      <div className="project-card-top">
        <div className="project-meta">
          <span>{project.category}</span>
        </div>
        {project.metricHighlight ? <span className="metric-pill">{project.metricHighlight}</span> : null}
      </div>
      <h3>{project.title}</h3>
      <dl className="project-facts">
        <div>
          <dt>Problema</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Enfoque analítico</dt>
          <dd>{project.analyticalFocus}</dd>
        </div>
      </dl>
      {project.stack ? (
        <div className="tag-row project-tools">
          {project.stack.map((tag: string) => (
            <span key={tag} className="tag tag--tool">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <div className="project-outcome">
        <span className="project-outcome-label">Resultado</span>
        <p>{project.outcome}</p>
      </div>
      <button type="button" className="ghost-link" onClick={() => onOpen(project)}>
        Ver detalle
      </button>
    </article>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const ids = ['sobre-mi', 'proyectos', 'skills', 'experiencia', 'contacto']
    const onScroll = () => {
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection('inicio')
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!selectedProject) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selectedProject])

  const navItems = useMemo(
    () =>
      [
        ['inicio', 'Inicio'],
        ['sobre-mi', 'Sobre mí'],
        ['proyectos', 'Proyectos'],
        ['skills', 'Stack'],
        ['experiencia', 'Experiencia'],
        ['contacto', 'Contacto']
      ] as const,
    []
  )

  const scrollTo = (id: string) => {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <style>{styles}</style>
      <div className="page-shell">
        <div className="bg-orb orb-a" aria-hidden />
        <div className="bg-orb orb-b" aria-hidden />

        <nav className="topbar">
          <div className="container topbar-inner">
            <div className="brand-block">
              <span className="brand-mark" aria-hidden />
              <div className="brand-text">
                <strong>Agustín Delgado</strong>
                <span>Data Analyst · BI</span>
              </div>
            </div>
            <div className="nav-links">
              {navItems.map(([id, label]) => (
                <button
                  type="button"
                  key={id}
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <header className="hero container hero--wide" id="inicio">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-name">Agustín Delgado</p>
              <p className="hero-role">Data Analyst | BI Analyst</p>
              <p className="hero-lead">
                Transformo datos en información útil para la operación y la toma de decisiones mediante dashboards, KPIs,
                reporting y automatización de procesos.
              </p>
              <div className="hero-toolkit" aria-label="Stack principal">
                <div className="hero-toolkit-title">Stack principal</div>
                <div className="hero-toolkit-grid">
                  {HERO_TOOLKIT.map((t) => (
                    <span key={t} className="hero-toolkit-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <aside className="hero-analytics card subtle" aria-label="Resumen de impacto y foco analítico">
              <div className="hero-analytics-head">
                <span className="eyebrow">Impacto &amp; foco</span>
                <p className="hero-analytics-dek">
                  Señales de trabajo con métricas, reporting y visualización — sin simular un dashboard completo.
                </p>
              </div>
              <div className="kpi-grid">
                {HERO_KPIS.map((k) => (
                  <div className="kpi-cell" key={k.label}>
                    {k.spark ? <Sparkline values={k.spark} /> : null}
                    <span className="kpi-value">{k.value}</span>
                    <span className="kpi-label">{k.label}</span>
                  </div>
                ))}
              </div>
              <HeroMiniBars />
            </aside>
          </div>
        </header>

        <main>
          <section className="section section--tight container section-divider about-section" id="sobre-mi">
            <div className="about-section-inner">
              <div className="about-head">
                <SectionTitle
                  eyebrow="Sobre mí"
                  title="Analítica aplicada a operación real"
                intro="SQL, Power BI, Excel y Python aplicados a operación real en salud. ETL, KPIs y reporting para decisiones más claras."
                />
              </div>
              <div className="about-grid">
                <div className="text-block text-block--about">
                  <p>
                    Trabajo con datos de punta a punta: modelado y consultas en SQL, tableros en Power BI, limpieza y preparación
                    de información, y scripts en Python para análisis y reporting repetible. El foco es que los números sirvan
                    para decidir: indicadores claros, procesos más ordenados y menos tiempo perdido en tareas manuales.
                  </p>
                  <p>
                    En el consultorio médico apliqué eso en un entorno real: pasar de registros dispersos a bases consultables,
                    construir vistas operativas y financieras, y automatizar reportes que antes consumían horas. El sistema{' '}
                    <strong>Mi Consultorio</strong> es parte de esa entrega y está en uso en la práctica diaria.
                  </p>
                  <p className="muted-note">
                    Herramientas de ML o entornos generativos pueden sumar cuando el problema lo justifica; no son el mensaje
                    central de este perfil.
                  </p>
                </div>
                <aside className="about-highlights">
                  {ABOUT_HIGHLIGHTS.map((h) => (
                    <div key={h.title} className="about-highlight card subtle">
                      <h3>{h.title}</h3>
                      <p>{h.text}</p>
                    </div>
                  ))}
                </aside>
              </div>
            </div>
          </section>

          <section className="section container section-divider" id="proyectos">
            <SectionTitle
              eyebrow="Proyectos"
              title="Casos con narrativa BI"
              intro="Problema de negocio, enfoque analítico y resultado medible. Los casos complementarios quedan al final."
            />
            <div className="project-grid primary-grid">
              {PRIMARY_PROJECTS.map((project) => (
                <ProjectCard key={project.title} project={project} primary onOpen={setSelectedProject} />
              ))}
            </div>

            <div className="secondary-wrap">
              <div className="section-subtitle">Complementarios</div>
              <div className="project-grid secondary-grid">
                {SECONDARY_PROJECTS.map((project) => (
                  <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
                ))}
              </div>
            </div>
          </section>

          <section className="section container section-divider" id="skills">
            <SectionTitle
              eyebrow="Stack"
              title="Toolkit analítico"
              intro="Núcleo BI primero. Las barras funcionan como énfasis visual, no como puntaje formal."
            />
            <div className="skills-stack">
              {SKILL_GROUPS.map((group) => (
                <article key={group.title} className="skill-panel card subtle">
                  <h3>{group.title}</h3>
                  <ul className="skill-bars">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <div className="skill-bar-row">
                          <span className="skill-bar-name">{item.name}</span>
                          <div className="skill-bar-track" role="presentation">
                            <span className="skill-bar-fill" style={{ width: `${item.emphasis}%` }} />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="section container section-divider" id="experiencia">
            <div className="experience-block">
              <SectionTitle
                eyebrow="Experiencia"
                title="Impacto medible y sistemas en uso"
                intro="El núcleo del perfil está en el consultorio: datos, reporting y automatización en uso real. La formación sostiene ese recorrido."
              />
              <div className="timeline-wrap">
                {EXPERIENCE.map((item) => (
                  <article
                    key={item.title + item.period}
                    className={`timeline-card card subtle${item.featured ? ' timeline-card--featured' : ''}`}
                  >
                    {item.featured ? <span className="featured-ribbon">Rol principal</span> : null}
                    <span className="timeline-period">{item.period}</span>
                    <h3>{item.title}</h3>
                    <strong>{item.place}</strong>
                    {item.bullets ? (
                      <ul className="timeline-bullets">
                        {item.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                    {item.description ? <p className="timeline-desc">{item.description}</p> : null}
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section container section-divider" id="contacto">
            <div className="contact-card card subtle">
              <div className="contact-card-inner">
                <div>
                  <span className="eyebrow">Contacto</span>
                  <h2 className="contact-heading">Conversaciones profesionales</h2>
                  <p className="contact-copy">
                    Para roles de Data Analyst o BI Analyst. Escribime por correo, LinkedIn o revisá código en GitHub.
                  </p>
                  <p className="contact-loc muted-note">Argentina</p>
                </div>
                <div className="contact-actions">
                  <a href="mailto:augusto.delgado00@hotmail.com" className="button button--quiet primary">
                    Enviar mail
                  </a>
                  <a
                    href="https://linkedin.com/in/agustin-delgado-data98615190"
                    target="_blank"
                    rel="noreferrer"
                    className="button button--quiet secondary"
                  >
                    LinkedIn
                  </a>
                  <a href="https://github.com/Agus-Delgado" target="_blank" rel="noreferrer" className="button button--quiet secondary">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer container">
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} Agustín Delgado</span>
            <span className="footer-loc">Data Analyst · BI · Argentina</span>
          </div>
          <div className="footer-links">
            <a href="mailto:augusto.delgado00@hotmail.com">augusto.delgado00@hotmail.com</a>
            <span className="footer-sep" aria-hidden>
              ·
            </span>
            <a href="https://linkedin.com/in/agustin-delgado-data98615190" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span className="footer-sep" aria-hidden>
              ·
            </span>
            <a href="https://github.com/Agus-Delgado" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </footer>

        {selectedProject ? (
          <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
            <div className="modal card" role="dialog" aria-modal onClick={(e) => e.stopPropagation()}>
              <button type="button" className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Cerrar">
                ×
              </button>
              <span className="eyebrow">Detalle</span>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.summary}</p>
              <dl className="modal-facts">
                <div>
                  <dt>Problema</dt>
                  <dd>{selectedProject.problem}</dd>
                </div>
                <div>
                  <dt>Enfoque analítico</dt>
                  <dd>{selectedProject.analyticalFocus}</dd>
                </div>
                <div>
                  <dt>Resultado</dt>
                  <dd>{selectedProject.outcome}</dd>
                </div>
              </dl>
              {selectedProject.stack ? (
                <>
                  <h4>Herramientas</h4>
                  <div className="tag-row">
                    {selectedProject.stack.map((tag: string) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              ) : null}
              {selectedProject.bullets ? (
                <>
                  <h4>Aspectos clave</h4>
                  <ul className="modal-list">
                    {selectedProject.bullets.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

const styles = `:root {
  --bg: #060d16;
  --border: rgba(130, 155, 190, 0.14);
  --text: #e8eef8;
  --muted: #94a3b8;
  --accent: #5ba3d9;
  --accent-soft: rgba(91, 163, 217, 0.12);
  --shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  --font: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: var(--font);
  background: var(--bg);
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(40, 70, 110, 0.28), transparent),
    linear-gradient(180deg, #050a10 0%, #070f18 100%);
  color: var(--text);
}
a { color: inherit; text-decoration: none; }
a:hover { text-decoration: underline; text-underline-offset: 3px; }
button { font: inherit; }
.page-shell { position: relative; min-height: 100vh; overflow-x: hidden; }
.bg-orb {
  position: fixed; border-radius: 999px; filter: blur(72px); pointer-events: none; opacity: 0.11;
}
.orb-a { width: 300px; height: 300px; background: #1a3a5c; top: 32px; left: -100px; }
.orb-b { width: 240px; height: 240px; background: #152a45; right: -90px; top: 200px; }
.container { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }
.hero--wide.container { width: min(1220px, calc(100% - 48px)); }
.topbar {
  position: sticky; top: 0; z-index: 30;
  backdrop-filter: blur(12px);
  background: rgba(5, 10, 16, 0.88);
  border-bottom: 1px solid var(--border);
}
.topbar-inner {
  display: flex; align-items: center; justify-content: space-between; min-height: 68px; gap: 20px;
}
.brand-block {
  display: flex; align-items: center; gap: 14px;
  padding: 4px 0;
}
.brand-mark {
  width: 11px; height: 38px;
  border-radius: 4px;
  background: linear-gradient(180deg, var(--accent) 0%, rgba(91, 163, 217, 0.32) 100%);
  box-shadow: 0 0 22px rgba(91, 163, 217, 0.22);
  flex-shrink: 0;
}
.brand-text { display: flex; flex-direction: column; gap: 4px; line-height: 1.2; }
.brand-text strong {
  font-size: 0.97rem;
  letter-spacing: -0.03em;
  font-weight: 650;
}
.brand-text span { color: #8fa3b8; font-size: 0.73rem; letter-spacing: 0.04em; font-weight: 500; }
.nav-links { display: flex; gap: 3px; flex-wrap: wrap; justify-content: flex-end; }
.nav-links button {
  background: transparent; color: var(--muted); border: 1px solid transparent; border-radius: 999px;
  padding: 8px 11px; cursor: pointer; transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;
  font-size: 0.82rem;
  font-weight: 500;
}
.nav-links button.active, .nav-links button:hover {
  color: var(--text); border-color: var(--border); background: rgba(255,255,255,0.035);
}
.hero { padding: 76px 0 72px; }
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 1fr);
  gap: clamp(32px, 4.5vw, 56px);
  align-items: start;
}
.hero-copy { align-self: start; max-width: 42rem; padding-top: 4px; }
.hero-name {
  margin: 0 0 12px;
  font-size: clamp(1.15rem, 2.1vw, 1.38rem);
  font-weight: 650;
  letter-spacing: -0.025em;
  color: var(--text);
}
.hero-role {
  margin: 0 0 22px;
  font-size: clamp(1.04rem, 1.9vw, 1.22rem);
  font-weight: 650;
  color: var(--accent);
  letter-spacing: -0.018em;
}
.hero-lead {
  margin: 0;
  color: var(--muted);
  font-size: 1.03rem;
  line-height: 1.8;
  max-width: 54ch;
}
.hero-analytics {
  padding: 24px 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid rgba(91, 163, 217, 0.16);
  border-radius: 18px;
  background: linear-gradient(152deg, rgba(11, 20, 32, 0.96) 0%, rgba(6, 12, 20, 0.78) 100%);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255,255,255,0.04);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.hero-analytics:hover {
  border-color: rgba(91, 163, 217, 0.22);
  box-shadow: 0 20px 52px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255,255,255,0.05);
}
.hero-analytics-head { padding-right: 4px; border-bottom: 1px solid rgba(130, 155, 190, 0.1); padding-bottom: 14px; margin-bottom: 2px; }
.hero-analytics-dek {
  margin: 10px 0 0;
  font-size: 0.84rem;
  color: #7f90a3;
  line-height: 1.58;
  max-width: none;
}
.kpi-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 16px;
}
.kpi-cell {
  padding: 14px 14px 12px;
  border-radius: 13px;
  border: 1px solid rgba(130, 155, 190, 0.11);
  background: rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 98px;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}
.kpi-cell:hover {
  border-color: rgba(91, 163, 217, 0.22);
  background: rgba(91, 163, 217, 0.04);
  transform: translateY(-1px);
}
.sparkline {
  width: 100%;
  height: 26px;
  color: rgba(91, 163, 217, 0.62);
  opacity: 1;
}
.kpi-value {
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #e2eaf5;
}
.kpi-label {
  font-size: 0.67rem;
  color: var(--muted);
  line-height: 1.38;
  text-transform: uppercase;
  letter-spacing: 0.065em;
}
.hero-mini-bars-wrap {
  margin-top: 2px;
  padding: 14px 14px 12px;
  border-radius: 12px;
  border: 1px solid rgba(130, 155, 190, 0.1);
  background: rgba(0, 0, 0, 0.18);
}
.hero-mini-bars-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}
.hero-mini-bars-label {
  font-size: 0.64rem;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: #7a8b9e;
  font-weight: 600;
}
.hero-mini-bars-axis {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(91, 163, 217, 0.25), transparent);
  opacity: 0.8;
}
.hero-mini-bars-track {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 56px;
  padding: 4px 4px 0;
  border-bottom: 1px solid rgba(130, 155, 190, 0.14);
}
.hero-mini-bar {
  flex: 1;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(180deg, rgba(91, 163, 217, 0.5) 0%, rgba(91, 163, 217, 0.1) 100%);
  min-height: 10px;
  transition: opacity 0.2s ease, filter 0.2s ease, transform 0.2s ease;
}
.hero-mini-bar:hover { filter: brightness(1.08); transform: scaleY(1.04); transform-origin: bottom center; }
.hero-mini-bar:nth-child(3n) { opacity: 0.88; }

.hero-toolkit {
  margin-top: 28px;
  padding: 16px 16px 14px;
  border-radius: 15px;
  border: 1px solid rgba(130, 155, 190, 0.12);
  background: rgba(255, 255, 255, 0.022);
}
.hero-toolkit-title {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.095em;
  color: #8497ad;
  font-weight: 700;
  margin-bottom: 14px;
}
.hero-toolkit-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px 11px;
}
.hero-toolkit-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 8px 9px;
  border-radius: 11px;
  border: 1px solid rgba(130, 155, 190, 0.16);
  background: rgba(91, 163, 217, 0.055);
  color: #b2c5e0;
  font-size: 0.78rem;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.button {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 124px;
  padding: 10px 16px; border-radius: 10px; text-decoration: none; border: 1px solid var(--border);
  transition: background 0.15s ease, border-color 0.15s ease;
  font-weight: 600; font-size: 0.88rem;
}
.button--quiet.primary {
  background: rgba(91, 163, 217, 0.18);
  color: var(--text);
  border-color: rgba(91, 163, 217, 0.35);
}
.button--quiet.primary:hover { background: rgba(91, 163, 217, 0.28); text-decoration: none; }
.button--quiet.secondary {
  background: rgba(255,255,255,0.03);
  color: var(--text);
}
.button--quiet.secondary:hover { background: rgba(255,255,255,0.06); text-decoration: none; }
.card {
  border: 1px solid var(--border);
  border-radius: 17px;
  box-shadow: var(--shadow);
  position: relative;
  transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
}
.subtle {
  background: rgba(8, 14, 22, 0.62);
}
.section { padding: 72px 0 0; }
.section--tight { padding-top: 56px; }
.section-divider {
  border-top: 1px solid rgba(130, 155, 190, 0.08);
  padding-top: 72px;
  margin-top: 8px;
}
.section-title-wrap { max-width: 700px; margin-bottom: 28px; }
.section-title-wrap h2 {
  margin: 12px 0 12px;
  font-size: clamp(1.34rem, 2.45vw, 1.68rem);
  line-height: 1.18;
  letter-spacing: -0.03em;
  font-weight: 650;
}
.section-intro {
  color: #94a6bb;
  line-height: 1.62;
  margin: 0;
  font-size: 0.93rem;
  max-width: 58ch;
  padding-left: 12px;
  border-left: 2px solid rgba(91, 163, 217, 0.2);
}
.eyebrow {
  display: inline-flex;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  font-size: 0.73rem;
  color: #78b0db;
  font-weight: 700;
  opacity: 0.96;
}
.about-section-inner { width: 100%; }
.about-head .section-title-wrap { margin-bottom: 0; max-width: 760px; }
.about-head { margin-bottom: 30px; }
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(268px, 380px);
  gap: 28px 46px;
  align-items: start;
  align-content: start;
}
.text-block--about {
  margin: 0;
  padding: 0;
}
.about-highlights {
  margin: 0;
  padding: 0;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.text-block--about p {
  color: var(--muted);
  line-height: 1.8;
  margin: 0 0 16px;
  font-size: 0.97rem;
}
.text-block--about strong { color: #c8d4e8; font-weight: 600; }
.about-highlight {
  padding: 16px 18px;
  border: 1px solid rgba(130, 155, 190, 0.12);
  border-radius: 14px;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.about-highlight:hover {
  border-color: rgba(91, 163, 217, 0.18);
  background: rgba(91, 163, 217, 0.04);
}
.about-highlight h3 {
  margin: 0 0 8px;
  font-size: 0.88rem;
  font-weight: 650;
  letter-spacing: -0.02em;
  color: #c5d2e8;
}
.about-highlight p {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.6;
  color: #8b9cb0;
}
.muted-note {
  font-size: 0.87rem !important;
  color: #7c8a9e !important;
  font-style: normal;
}
.project-grid { display: grid; gap: 18px; }
.primary-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.secondary-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.project-card {
  padding: 24px 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid rgba(130, 155, 190, 0.12);
  border-radius: 17px;
}
.project-card:hover {
  border-color: rgba(91, 163, 217, 0.16);
  box-shadow: 0 14px 44px rgba(0, 0, 0, 0.32);
  transform: translateY(-2px);
}
.project-card.primary {
  background: linear-gradient(165deg, rgba(12, 20, 32, 0.95) 0%, rgba(7, 12, 20, 0.72) 100%);
}
.project-card.secondary { background: rgba(6, 12, 20, 0.48); padding: 20px; }
.project-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
}
.project-meta span {
  display: inline-flex; padding: 5px 10px; border-radius: 999px; font-size: 0.68rem; color: var(--accent);
  background: var(--accent-soft); border: 1px solid rgba(91, 163, 217, 0.18);
  line-height: 1.3;
}
.metric-pill {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #a8bdd4;
  padding: 5px 8px;
  border-radius: 8px;
  border: 1px solid rgba(130, 155, 190, 0.15);
  background: rgba(255,255,255,0.02);
  white-space: nowrap;
}
.project-card h3 {
  margin: 0 0 14px;
  font-size: 1.08rem;
  letter-spacing: -0.025em;
  font-weight: 650;
  line-height: 1.2;
}
.project-facts {
  margin: 0 0 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.project-facts div { margin: 0; }
.project-facts dt {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7c90;
  margin: 0 0 4px;
  font-weight: 600;
}
.project-facts dd {
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.55;
  color: #9fb0c4;
}
.project-tools { margin-top: 0; margin-bottom: 14px; }
.tag-row { display: flex; flex-wrap: wrap; gap: 6px; }
.tag {
  display: inline-flex; padding: 5px 9px; border-radius: 8px; border: 1px solid var(--border); font-size: 0.72rem;
  background: rgba(255,255,255,0.02);
  color: var(--muted);
}
.tag--tool {
  border-color: rgba(91, 163, 217, 0.2);
  background: rgba(91, 163, 217, 0.06);
  color: #a8bdd4;
}
.project-outcome {
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(91, 163, 217, 0.12);
  background: rgba(91, 163, 217, 0.05);
  margin-bottom: 12px;
}
.project-outcome-label {
  display: block;
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 6px;
}
.project-outcome p {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: #c5d4e6;
}
.ghost-link {
  margin-top: auto;
  padding: 0; background: transparent; border: 0; color: var(--accent); cursor: pointer; font-weight: 600;
  font-size: 0.86rem; align-self: flex-start;
}
.ghost-link:hover { text-decoration: underline; }
.secondary-wrap { margin-top: 44px; }
.section-subtitle { color: var(--muted); margin-bottom: 14px; font-size: 0.87rem; font-weight: 500; }
.skills-stack {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  max-width: 900px;
}
.skill-panel { padding: 22px 22px 18px; border-radius: 17px; }
.skill-panel:hover { border-color: rgba(91, 163, 217, 0.14); }
.skill-panel h3 {
  margin: 0 0 16px;
  font-size: 0.95rem;
  font-weight: 650;
  letter-spacing: -0.02em;
}
.skill-bars { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.skill-bar-row {
  display: grid;
  grid-template-columns: minmax(0, 42%) 1fr;
  gap: 12px;
  align-items: center;
}
.skill-bar-name { font-size: 0.8rem; color: #a8b6c8; }
.skill-bar-track {
  height: 6px;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(130, 155, 190, 0.08);
  overflow: hidden;
}
.skill-bar-fill {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(91, 163, 217, 0.25) 0%, rgba(91, 163, 217, 0.65) 100%);
  transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.experience-block { max-width: 860px; }
.timeline-wrap { display: flex; flex-direction: column; gap: 16px; margin-top: 14px; }
.timeline-card {
  padding: 24px 24px 22px;
  border-radius: 17px;
}
.timeline-card:hover {
  border-color: rgba(130, 155, 190, 0.18);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.28);
}
.timeline-card--featured {
  border-color: rgba(91, 163, 217, 0.22);
  background: linear-gradient(160deg, rgba(14, 24, 38, 0.95) 0%, rgba(8, 14, 22, 0.75) 100%);
  padding-top: 26px;
}
.featured-ribbon {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  opacity: 0.9;
}
.timeline-period {
  display: inline-flex; margin-bottom: 8px; color: var(--accent); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em;
  font-weight: 600;
}
.timeline-card h3 {
  margin: 0 0 6px;
  font-size: 1.06rem;
  letter-spacing: -0.02em;
  font-weight: 650;
}
.timeline-card strong { display: block; color: #c5d2e8; margin-bottom: 12px; font-size: 0.87rem; font-weight: 500; }
.timeline-bullets {
  margin: 0 0 0 1.05rem;
  padding: 0;
  color: var(--muted);
  line-height: 1.65;
  font-size: 0.91rem;
}
.timeline-bullets li { margin-bottom: 8px; }
.timeline-desc { color: var(--muted); font-size: 0.9rem; line-height: 1.7; margin: 0; }
.contact-card { padding: 0; border: 1px solid rgba(91, 163, 217, 0.14); overflow: hidden; border-radius: 17px; }
.contact-card:hover { border-color: rgba(91, 163, 217, 0.2); }
.contact-card-inner {
  display: flex;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
  padding: 28px 30px 26px;
  align-items: flex-start;
}
.contact-heading {
  margin: 8px 0 10px;
  font-size: clamp(1.18rem, 2.1vw, 1.42rem);
  font-weight: 650;
  letter-spacing: -0.03em;
}
.contact-copy { color: var(--muted); max-width: 44ch; line-height: 1.7; margin: 0 0 8px; font-size: 0.94rem; }
.contact-loc { margin: 0 !important; }
.contact-actions { display: flex; flex-direction: column; gap: 10px; min-width: 160px; }
.footer {
  padding: 36px 0 48px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: var(--muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--border);
  margin-top: 28px;
}
.footer-meta { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
.footer-loc { color: #6b7a8f; }
.footer-links { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.footer-links a { color: var(--muted); }
.footer-links a:hover { color: var(--text); }
.footer-sep { color: #4a5568; user-select: none; }
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(2, 6, 12, 0.78);
  backdrop-filter: blur(4px);
  display: grid; place-items: center; padding: 24px; z-index: 60;
}
.modal {
  width: min(640px, 100%); background: rgba(10, 16, 24, 0.98); padding: 26px;
  border-radius: 16px;
}
.modal-close {
  position: absolute; top: 14px; right: 14px; width: 36px; height: 36px; border-radius: 999px; border: 1px solid var(--border);
  background: rgba(255,255,255,0.03); color: var(--text); cursor: pointer; font-size: 1.25rem; line-height: 1;
}
.modal h3 { margin: 8px 0 12px; font-size: 1.32rem; letter-spacing: -0.03em; }
.modal h4 { margin: 16px 0 8px; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); font-weight: 600; }
.modal p, .modal-list { color: var(--muted); line-height: 1.75; font-size: 0.94rem; }
.modal-facts { margin: 16px 0; display: flex; flex-direction: column; gap: 12px; }
.modal-facts dt {
  font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.07em; color: #6b7c90; margin-bottom: 4px; font-weight: 600;
}
.modal-facts dd { margin: 0; font-size: 0.9rem; color: #9fb0c4; line-height: 1.6; }
.modal-list { padding-left: 18px; margin: 0; }
@media (prefers-reduced-motion: no-preference) {
  .hero-copy { animation: heroIn 0.68s cubic-bezier(0.22, 1, 0.36, 1) both; }
  .hero-analytics { animation: heroIn 0.72s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both; }
}
@keyframes heroIn {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .hero-copy, .hero-analytics { animation: none !important; }
  .project-card, .timeline-card, .card, .kpi-cell, .hero-analytics, .about-highlight { transition: none !important; }
  .project-card:hover, .timeline-card:hover, .kpi-cell:hover { transform: none !important; }
}
@media (max-width: 1080px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-analytics { max-width: 100%; }
  .hero-toolkit-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .about-grid { grid-template-columns: 1fr; }
  .primary-grid, .secondary-grid { grid-template-columns: 1fr; }
  .skills-stack { grid-template-columns: 1fr; }
  .skill-bar-row { grid-template-columns: minmax(0, 46%) 1fr; }
}
@media (max-width: 720px) {
  .container { width: min(100% - 28px, 1120px); }
  .topbar-inner { padding: 8px 0; align-items: flex-start; flex-direction: column; }
  .nav-links { justify-content: flex-start; }
  .hero { padding: 48px 0 40px; }
  .hero-analytics { max-width: none; }
  .hero-toolkit { margin-top: 24px; padding: 14px 14px 12px; }
  .hero-toolkit-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 9px; }
  .hero-toolkit-chip { min-height: 34px; font-size: 0.75rem; }
  .kpi-grid { grid-template-columns: 1fr; }
  .section-divider { padding-top: 56px; }
  .project-card, .timeline-card, .skill-panel { padding: 18px; }
  .nav-links button { padding: 7px 9px; font-size: 0.8rem; }
  .contact-card-inner { padding: 22px 20px; }
}
`
