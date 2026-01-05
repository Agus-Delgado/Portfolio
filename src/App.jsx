import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'education', 'experience'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) { setActiveSection(section); break; }
        }
      }
    };
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={styles.container}>
      <style>{globalStyles}</style>
      <div className="custom-cursor" style={{ left: mousePos.x - 10, top: mousePos.y - 10, transform: cursorVariant === 'hover' ? 'scale(2.5)' : 'scale(1)', backgroundColor: cursorVariant === 'hover' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.8)' }} />
      <div className="bg-gradient-1" /><div className="bg-gradient-2" /><div className="noise-overlay" />
      
      <nav style={styles.nav} className="nav-blur">
        <div style={styles.navContent}>
          <span style={styles.logo} className="logo-animate">
            <span style={{fontWeight: '700', color: '#ffffff'}}>Agustín</span>
            <span style={{fontWeight: '300', color: '#6366f1', marginLeft: '8px'}}>Delgado</span>
          </span>
          <div style={styles.navLinks}>
            {['about', 'projects', 'skills', 'education', 'experience'].map((item, i) => (
              <button key={item} onClick={() => scrollTo(item)} className="nav-link" style={{ ...styles.navLink, animationDelay: `${i * 0.1}s`, ...(activeSection === item ? styles.navLinkActive : {}) }}
                onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && <span className="nav-indicator" />}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <header style={styles.hero}>
        <div className={`hero-content ${isLoaded ? 'hero-loaded' : ''}`}>
          <div style={styles.heroBadge} className="hero-badge"><span className="badge-dot" />Disponible para nuevos proyectos</div>
          <h1 style={styles.heroTitle}><span className="title-line">Agustín</span><span className="title-line title-accent">Delgado</span></h1>
          <div style={styles.heroRoles}>
            <span className="role-tag">Machine Learning Engineer</span><span className="role-divider">◆</span>
            <span className="role-tag">Data Analyst</span><span className="role-divider">◆</span>
            <span className="role-tag">Full Stack Developer</span>
          </div>
          <p style={styles.heroDescription}>Transformo datos en decisiones estratégicas y construyo soluciones de IA para el sector healthcare.</p>
          <div style={styles.heroContact}>
            <a href="mailto:augusto.delgado00@hotmail.com" style={styles.contactLink} className="contact-pill" onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}><EmailIcon /> augusto.delgado00@hotmail.com</a>
            <a href="tel:+541150521473" style={styles.contactLink} className="contact-pill" onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}><PhoneIcon /> +54 11 5052-1473</a>
            <span style={styles.contactLink} className="contact-pill"><LocationIcon /> Buenos Aires, Argentina</span>
            <a href="https://linkedin.com/in/agustin-delgado-data98615190" target="_blank" rel="noopener noreferrer" style={styles.contactLink} className="contact-pill" onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}><LinkedInIcon /> LinkedIn</a>
          </div>
          <div style={styles.heroStats}>
            <div style={styles.stat} className="stat-card"><span style={styles.statNumber} className="stat-number">62</span><span style={styles.statLabel}>Certificaciones</span></div>
            <div style={styles.stat} className="stat-card"><span style={styles.statNumber} className="stat-number">4+</span><span style={styles.statLabel}>Proyectos en Prod</span></div>
            <div style={styles.stat} className="stat-card"><span style={styles.statNumber} className="stat-number">7+</span><span style={styles.statLabel}>Años Healthcare</span></div>
          </div>
        </div>
      </header>

      <section id="about" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="section-title"><span style={styles.sectionNumber}>01</span>Perfil Profesional</h2>
          <div style={styles.aboutGrid}>
            <div style={styles.aboutText}>
              <p style={styles.paragraph} className="fade-in-up">Especialista en <strong>Inteligencia Artificial y Análisis de Datos</strong> con 62 certificaciones profesionales y experiencia práctica desarrollando soluciones tecnológicas para el sector healthcare.</p>
              <p style={styles.paragraph} className="fade-in-up">Combino sólidos fundamentos en Machine Learning, desarrollo Full Stack y Business Intelligence para transformar datos en decisiones estratégicas de negocio.</p>
              <p style={styles.paragraph} className="fade-in-up">Mi enfoque se centra en aplicar IA de forma práctica para resolver problemas reales: desde la predicción de inasistencias médicas hasta la automatización de procesos administrativos complejos.</p>
            </div>
            <div style={styles.aboutHighlights}>
              <div style={styles.highlight} className="highlight-card"><div style={styles.highlightIcon}>🎯</div><div><h4 style={styles.highlightTitle}>Especialización Healthcare</h4><p style={styles.highlightText}>Proyectos reales implementados en el sector salud</p></div></div>
              <div style={styles.highlight} className="highlight-card"><div style={styles.highlightIcon}>🔧</div><div><h4 style={styles.highlightTitle}>Stack Completo</h4><p style={styles.highlightText}>Python, FastAPI, React, Django, PostgreSQL</p></div></div>
              <div style={styles.highlight} className="highlight-card"><div style={styles.highlightIcon}>📊</div><div><h4 style={styles.highlightTitle}>BI Avanzado</h4><p style={styles.highlightText}>Power BI, Tableau, SQL, Pandas, NumPy</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" style={{...styles.section, ...styles.sectionAlt}}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="section-title"><span style={styles.sectionNumber}>02</span>Proyectos Destacados</h2>
          <div style={styles.projectsGrid} className="projects-grid">
            <ProjectCard title="SmartClinic No-Show Predictor" category="Machine Learning + BI" tags={['Python', 'Scikit-learn', 'Power BI', 'SQL']} context="Sistema predictivo que analiza 10,000+ turnos para identificar patrones de inasistencias." impact="Dashboard interactivo con 3 vistas analíticas para decisiones data-driven." color="#10b981" setCursorVariant={setCursorVariant} />
            <ProjectCard title="Plataforma Geriátricos" category="Full Stack + PWA" tags={['FastAPI', 'React', 'TypeScript', 'PostgreSQL']} context="Sistema integral con 23 tablas relacionales para gestión de múltiples sedes." impact="Gestión completa de 3 sedes con funcionalidad offline." color="#3b82f6" setCursorVariant={setCursorVariant} />
            <ProjectCard title="Mi Consultorio" category="Healthcare SaaS" tags={['Django', 'Python', 'Bootstrap']} context="Plataforma para profesionales de salud con CKEditor y recetas digitales." impact="Dashboard con métricas en tiempo real y generación de PDFs." color="#8b5cf6" setCursorVariant={setCursorVariant} />
            <ProjectCard title="Consultorio Barcala" category="Modern Web" tags={['React 19', 'TypeScript', 'Framer Motion']} context="Sitio web moderno con sistema de diseño centralizado." impact="Plataforma con animaciones y routing optimizado." color="#f59e0b" setCursorVariant={setCursorVariant} />
          </div>
        </div>
      </section>

      <section id="skills" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="section-title"><span style={styles.sectionNumber}>03</span>Stack Tecnológico</h2>
          <div style={styles.skillsGrid}>
            <SkillCategory title="Lenguajes" icon="💻" skills={['Python', 'TypeScript', 'JavaScript', 'SQL']} />
            <SkillCategory title="Machine Learning" icon="🤖" skills={['Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow']} />
            <SkillCategory title="Backend" icon="⚙️" skills={['FastAPI', 'Django', 'SQLAlchemy', 'JWT Auth']} />
            <SkillCategory title="Frontend" icon="🎨" skills={['React 18/19', 'TypeScript', 'Vite', 'Tailwind']} />
            <SkillCategory title="Databases" icon="🗄️" skills={['PostgreSQL', 'SQLite', 'Supabase']} />
            <SkillCategory title="BI Tools" icon="📊" skills={['Power BI', 'Tableau', 'Data Viz']} />
            <SkillCategory title="DevOps" icon="🚀" skills={['Git', 'Vercel', 'Docker', 'CI/CD']} />
            <SkillCategory title="Core Skills" icon="✨" skills={['Problem Solving', 'Agile', 'APIs', 'Testing']} />
          </div>
        </div>
      </section>

      <section id="education" style={{...styles.section, ...styles.sectionAlt}}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="section-title"><span style={styles.sectionNumber}>04</span>Formación</h2>
          <div style={styles.educationGrid}>
            <EducationCard title="Tecnicatura en IA y Ciencia de Datos" institution="Instituto Superior Santo Domingo" period="2024 - Actualidad" status="En curso" />
            <EducationCard title="Analista de Datos" institution="Coderhouse" period="2024 - Actualidad" status="En curso" />
            <EducationCard title="Ingeniería en Sistemas" institution="Universidad Abierta Interamericana" period="2018 - 2020" status="Incompleto" />
          </div>
          <div style={styles.certificationsBox} className="cert-box">
            <div className="cert-number">62</div>
            <h3 style={styles.certTitle}>Certificaciones Profesionales</h3>
            <p style={styles.certSubtitle}>Obtenidas a través de Coursera, LinkedIn Learning, Google y más</p>
            <div style={styles.certCategories}>{['Data Science', 'Machine Learning', 'Python', 'SQL & BI', 'Cloud & DevOps', 'Cybersecurity'].map(cat => (<span key={cat} style={styles.certBadge} className="cert-tag">{cat}</span>))}</div>
          </div>
        </div>
      </section>

      <section id="experience" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="section-title"><span style={styles.sectionNumber}>05</span>Experiencia</h2>
          <div style={styles.experienceTimeline}>
            <ExperienceCard title="Administrativo & ML Engineer" company="Consultorio Médico Privado" period="2018 - Presente" description="Desarrollo e implementación de soluciones ML para optimización de turnos. Digitalización completa de procesos administrativos con sistemas propios." current={true} />
            <ExperienceCard title="Desarrollador Full Stack" company="Blanc Labs (Proyecto Rotoplas)" period="2021" description="Participación en proyecto de transformación digital. Desarrollo frontend con React y colaboración en arquitectura de microservicios." current={false} />
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerMain}>
            <h3 style={styles.footerTitle}>¿Trabajamos juntos?</h3>
            <p style={styles.footerText}>Estoy buscando nuevas oportunidades en ML Engineering, Data Analytics o Full Stack Development.</p>
            <a href="mailto:augusto.delgado00@hotmail.com" style={styles.footerCta} className="cta-button" onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}>Contactame →</a>
          </div>
          <div style={styles.footerLinks}>
            <a href="mailto:augusto.delgado00@hotmail.com" style={styles.footerLink} className="footer-link">Email</a>
            <a href="https://linkedin.com/in/agustin-delgado-data98615190" target="_blank" rel="noopener noreferrer" style={styles.footerLink} className="footer-link">LinkedIn</a>
            <a href="https://github.com/agustindelgado" target="_blank" rel="noopener noreferrer" style={styles.footerLink} className="footer-link">GitHub</a>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.footerCopy}>© 2025 Agustín Delgado. Diseñado & desarrollado con ♥</p>
            <div style={styles.footerLang}><span style={styles.langBadge}>🇦🇷 Español Nativo</span><span style={styles.langBadge}>🇺🇸 Inglés B2</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ title, category, tags, context, impact, color, setCursorVariant }) {
  return (
    <div className="project-card" style={{ '--accent-color': color }} onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}>
      <div className="project-glow" style={{ background: color }} />
      <div className="project-content">
        <div className="project-header"><span className="project-category">{category}</span><div className="project-line" style={{ backgroundColor: color }} /></div>
        <h3 className="project-title">{title}</h3>
        <p className="project-context">{context}</p>
        <p className="project-impact"><span style={{ color }}>→</span> {impact}</p>
        <div className="project-tags">{tags.map(tag => (<span key={tag} className="project-tag">{tag}</span>))}</div>
      </div>
    </div>
  );
}

function SkillCategory({ title, icon, skills }) {
  return (
    <div className="skill-card">
      <div style={styles.skillHeader}><span style={styles.skillIcon}>{icon}</span><h4 style={styles.skillTitle}>{title}</h4></div>
      <div style={styles.skillList}>{skills.map(skill => (<span key={skill} style={styles.skillBadge} className="skill-badge">{skill}</span>))}</div>
    </div>
  );
}

function EducationCard({ title, institution, period, status }) {
  return (
    <div style={styles.educationCard} className="edu-card">
      <div style={styles.educationHeader}><h4 style={styles.educationTitle}>{title}</h4><span style={{...styles.educationStatus, backgroundColor: status === 'En curso' ? '#dbeafe' : '#f3f4f6', color: status === 'En curso' ? '#1d4ed8' : '#6b7280'}}>{status}</span></div>
      <p style={styles.educationInstitution}>{institution}</p><p style={styles.educationPeriod}>{period}</p>
    </div>
  );
}

function ExperienceCard({ title, company, period, description, current }) {
  return (
    <div style={styles.experienceCard} className="exp-card">
      <div style={styles.experienceDot} className={current ? 'dot-pulse' : ''} />
      <div style={styles.experienceContent}>
        <div style={styles.experienceHeader}><h4 style={styles.experienceTitle}>{title}</h4>{current && <span style={styles.currentBadge}>Actual</span>}</div>
        <p style={styles.experienceCompany}>{company}</p><p style={styles.experiencePeriod}>{period}</p><p style={styles.experienceDescription}>{description}</p>
      </div>
    </div>
  );
}

function EmailIcon() { return (<svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>); }
function PhoneIcon() { return (<svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>); }
function LocationIcon() { return (<svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>); }
function LinkedInIcon() { return (<svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>); }

const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
*{margin:0;padding:0;box-sizing:border-box;cursor:none}
html{scroll-behavior:smooth}
body{font-family:'Outfit',-apple-system,BlinkMacSystemFont,sans-serif;background:#050505;color:#e5e5e5;line-height:1.6;overflow-x:hidden}
strong{color:#fff;font-weight:600}
::selection{background:rgba(99,102,241,0.4);color:#fff}
.custom-cursor{position:fixed;width:20px;height:20px;border-radius:50%;pointer-events:none;z-index:9999;transition:transform .15s ease-out,background-color .15s ease;mix-blend-mode:difference;will-change:transform}
@media(max-width:768px){.custom-cursor{display:none}*{cursor:auto}}
.bg-gradient-1{position:fixed;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle at 30% 30%,rgba(99,102,241,0.08) 0%,transparent 50%);animation:float 20s ease-in-out infinite;pointer-events:none;z-index:0}
.bg-gradient-2{position:fixed;top:-50%;right:-50%;width:200%;height:200%;background:radial-gradient(circle at 70% 70%,rgba(236,72,153,0.05) 0%,transparent 50%);animation:float 25s ease-in-out infinite reverse;pointer-events:none;z-index:0}
.noise-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:0.03;pointer-events:none;z-index:1}
@keyframes float{0%,100%{transform:translate(0,0) rotate(0deg)}33%{transform:translate(30px,-30px) rotate(5deg)}66%{transform:translate(-20px,20px) rotate(-5deg)}}
.nav-blur{backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%)}
.nav-link{position:relative;animation:fadeInDown .5s ease forwards;opacity:0}
.nav-link:hover{color:#fff!important;background:rgba(99,102,241,0.1)!important}
.nav-indicator{position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);width:20px;height:2px;background:linear-gradient(90deg,#6366f1,#ec4899);border-radius:2px}
.logo-animate{animation:logoReveal 1s ease forwards}
.logo-bracket{color:#6366f1;font-weight:400}
@keyframes logoReveal{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeInDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
.hero-content{opacity:0;transform:translateY(40px);transition:all 1s cubic-bezier(0.16,1,0.3,1);text-align:center}
.hero-loaded{opacity:1;transform:translateY(0)}
.badge-dot{display:inline-block;width:8px;height:8px;background:#10b981;border-radius:50%;margin-right:8px;animation:dot-pulse 1.5s ease-in-out infinite}
@keyframes dot-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(1.2)}}
.title-line{display:block;animation:slideUp .8s ease forwards;animation-delay:.2s;opacity:0;transform:translateY(100%)}
.title-accent{background:linear-gradient(135deg,#6366f1 0%,#ec4899 50%,#f59e0b 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation-delay:.4s}
@keyframes slideUp{to{opacity:1;transform:translateY(0)}}
.hero-roles{animation:fadeIn .8s ease forwards;animation-delay:.6s;opacity:0}
.role-tag{display:inline-block;padding:4px 12px;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:20px;font-size:14px;transition:all .3s ease}
.role-tag:hover{background:rgba(99,102,241,0.2);transform:translateY(-2px)}
.role-divider{margin:0 12px;color:#6366f1;font-size:8px}
.hero-description{animation:fadeIn .8s ease forwards;animation-delay:.7s;opacity:0}
@keyframes fadeIn{to{opacity:1}}
.hero-contact{animation:fadeIn .8s ease forwards;animation-delay:.8s;opacity:0}
.contact-pill{transition:all .3s ease;border:1px solid rgba(255,255,255,0.1)}
.contact-pill:hover{background:rgba(99,102,241,0.15)!important;border-color:rgba(99,102,241,0.3);transform:translateY(-2px)}
.hero-stats{animation:fadeIn .8s ease forwards;animation-delay:.9s;opacity:0}
.stat-card{transition:all .3s ease;border:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02)}
.stat-card:hover{transform:translateY(-5px);border-color:rgba(99,102,241,0.3);background:rgba(99,102,241,0.05)}
.stat-number{background:linear-gradient(135deg,#6366f1,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.scroll-indicator{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;color:#737373;font-size:11px;text-transform:uppercase;letter-spacing:2px;animation:fadeIn 1s ease forwards,bounce 2s ease-in-out infinite;animation-delay:1.5s,2s;opacity:0;z-index:1}
.scroll-line{width:1px;height:24px;background:linear-gradient(to bottom,#6366f1,transparent)}
@keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(10px)}}
.section-title{position:relative}
.section-title::after{content:'';position:absolute;bottom:-10px;left:0;width:60px;height:3px;background:linear-gradient(90deg,#6366f1,#ec4899);border-radius:2px}
.project-large,.project-medium,.project-small{grid-column:span 1}

.project-card{position:relative;padding:32px;background:rgba(20,20,22,0.8);border-radius:24px;border:1px solid rgba(255,255,255,0.05);overflow:hidden;transition:all .4s cubic-bezier(0.16,1,0.3,1)}
.project-card:hover{transform:translateY(-8px) scale(1.02);border-color:var(--accent-color);box-shadow:0 20px 40px -20px var(--accent-color)}
.project-glow{position:absolute;top:0;left:0;width:100%;height:4px;opacity:0.8}
.project-card:hover .project-glow{height:100%;opacity:0.05;transition:all .4s ease}
.project-content{position:relative;z-index:1;height:100%;display:flex;flex-direction:column}
.project-header{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.project-category{font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--accent-color)}
.project-line{flex:1;height:1px;opacity:0.3}
.project-title{font-family:'Space Grotesk',sans-serif;font-size:22px;font-weight:700;color:#fff;margin-bottom:16px;line-height:1.3}
.project-context{font-size:15px;color:#a3a3a3;margin-bottom:12px;flex:1}
.project-impact{font-size:14px;color:#d4d4d4;margin-bottom:20px;padding:12px;background:rgba(255,255,255,0.03);border-radius:8px}
.project-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto}
.project-tag{font-size:12px;font-family:'JetBrains Mono',monospace;padding:6px 12px;background:rgba(255,255,255,0.05);border-radius:6px;color:#a3a3a3;transition:all .2s ease}
.project-card:hover .project-tag{background:rgba(255,255,255,0.1)}
.skill-card{padding:24px;background:rgba(255,255,255,0.02);border-radius:16px;border:1px solid rgba(255,255,255,0.05);transition:all .3s ease}
.skill-card:hover{transform:translateY(-4px);border-color:rgba(99,102,241,0.3);background:rgba(99,102,241,0.05)}
.skill-badge{transition:all .2s ease}
.skill-card:hover .skill-badge{background:rgba(99,102,241,0.15);color:#c7d2fe}
.edu-card{transition:all .3s ease}
.edu-card:hover{transform:translateY(-4px);border-color:rgba(99,102,241,0.3)}
.cert-box{position:relative;overflow:hidden}
.cert-number{position:absolute;top:-20px;right:-20px;font-family:'Space Grotesk',sans-serif;font-size:150px;font-weight:800;color:rgba(99,102,241,0.05);line-height:1;pointer-events:none}
.cert-tag{transition:all .2s ease}
.cert-tag:hover{background:rgba(99,102,241,0.2);transform:translateY(-2px)}
.exp-card{transition:all .3s ease}
.exp-card:hover{transform:translateX(8px)}
.dot-pulse{position:relative}
.dot-pulse::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;border-radius:50%;background:#3b82f6;animation:pulse-ring 1.5s ease-out infinite}
@keyframes pulse-ring{0%{transform:translate(-50%,-50%) scale(1);opacity:0.5}100%{transform:translate(-50%,-50%) scale(2.5);opacity:0}}
.cta-button{position:relative;overflow:hidden;transition:all .3s ease}
.cta-button::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transition:left .5s ease}
.cta-button:hover{transform:translateY(-3px);box-shadow:0 10px 30px -10px rgba(99,102,241,0.5)}
.cta-button:hover::before{left:100%}
.footer-link{position:relative;transition:all .2s ease}
.footer-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:#6366f1;transition:width .3s ease}
.footer-link:hover{color:#fff!important}
.footer-link:hover::after{width:100%}
.highlight-card{transition:all .3s ease}
.highlight-card:hover{transform:translateX(8px);background:rgba(99,102,241,0.05)}
.fade-in-up{animation:fadeInUp .6s ease forwards;opacity:0}
@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:900px){.hero-contact{flex-direction:column;align-items:center}.hero-stats{flex-direction:column;align-items:center}}
@media(max-width:768px){.projects-grid{grid-template-columns:1fr!important}}
`;

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#050505', position: 'relative' },
  nav: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: 'rgba(5, 5, 5, 0.7)', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  navContent: { maxWidth: '1400px', margin: '0 auto', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', letterSpacing: '-0.5px', display: 'flex', alignItems: 'center' },
  navLinks: { display: 'flex', gap: '8px' },
  navLink: { background: 'none', border: 'none', color: '#a3a3a3', fontSize: '14px', fontWeight: '500', padding: '10px 18px', borderRadius: '10px', cursor: 'none', transition: 'all 0.2s ease', fontFamily: 'inherit' },
  navLinkActive: { color: '#ffffff', backgroundColor: 'rgba(99, 102, 241, 0.1)' },
  hero: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '120px 32px 80px' },
  heroBadge: { display: 'inline-flex', alignItems: 'center', padding: '10px 20px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '100px', fontSize: '14px', fontWeight: '500', color: '#10b981', marginBottom: '32px' },
  heroTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(48px, 10vw, 100px)', fontWeight: '800', lineHeight: '1', letterSpacing: '-3px', marginBottom: '24px', color: '#ffffff' },
  heroRoles: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' },
  heroDescription: { fontSize: '18px', color: '#a3a3a3', maxWidth: '500px', margin: '0 auto 32px', textAlign: 'center', lineHeight: '1.7' },
  heroContact: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '48px' },
  contactLink: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '10px', color: '#a3a3a3', textDecoration: 'none', fontSize: '14px', transition: 'all 0.2s ease' },
  heroStats: { display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' },
  stat: { textAlign: 'center', padding: '24px 32px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '16px', minWidth: '140px' },
  statNumber: { display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: '42px', fontWeight: '800', marginBottom: '4px' },
  statLabel: { fontSize: '13px', color: '#737373', textTransform: 'uppercase', letterSpacing: '1px' },
  projectsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' },
  icon: { width: '16px', height: '16px' },
  section: { padding: '120px 32px', position: 'relative', zIndex: 2 },
  sectionAlt: { backgroundColor: 'rgba(255,255,255,0.01)' },
  sectionContent: { maxWidth: '1200px', margin: '0 auto' },
  sectionTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: '700', color: '#ffffff', marginBottom: '48px', display: 'flex', alignItems: 'center', gap: '16px' },
  sectionNumber: { fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: '500', color: '#6366f1', padding: '6px 12px', backgroundColor: 'rgba(99, 102, 241, 0.1)', borderRadius: '6px' },
  aboutGrid: { display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px', alignItems: 'start' },
  aboutText: { display: 'flex', flexDirection: 'column', gap: '20px' },
  paragraph: { fontSize: '17px', color: '#d4d4d4', lineHeight: '1.8' },
  aboutHighlights: { display: 'flex', flexDirection: 'column', gap: '20px' },
  highlight: { display: 'flex', gap: '16px', padding: '20px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' },
  highlightIcon: { fontSize: '28px', flexShrink: 0 },
  highlightTitle: { fontSize: '16px', fontWeight: '600', color: '#ffffff', marginBottom: '4px' },
  highlightText: { fontSize: '14px', color: '#a3a3a3' },
  skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' },
  skillHeader: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' },
  skillIcon: { fontSize: '24px' },
  skillTitle: { fontSize: '15px', fontWeight: '600', color: '#ffffff' },
  skillList: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  skillBadge: { fontSize: '13px', color: '#a3a3a3', padding: '6px 12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px' },
  educationGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '48px' },
  educationCard: { padding: '28px', backgroundColor: 'rgba(20, 20, 22, 0.8)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' },
  educationHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' },
  educationTitle: { fontSize: '16px', fontWeight: '600', color: '#ffffff', flex: 1, lineHeight: '1.4' },
  educationStatus: { fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '100px', whiteSpace: 'nowrap' },
  educationInstitution: { fontSize: '14px', color: '#a3a3a3', marginBottom: '4px' },
  educationPeriod: { fontSize: '13px', color: '#737373' },
  certificationsBox: { padding: '40px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.05))', borderRadius: '24px', border: '1px solid rgba(99, 102, 241, 0.2)', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  certTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', fontWeight: '700', color: '#ffffff', marginBottom: '8px', position: 'relative' },
  certSubtitle: { fontSize: '15px', color: '#a3a3a3', marginBottom: '28px', position: 'relative' },
  certCategories: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', position: 'relative' },
  certBadge: { fontSize: '13px', fontWeight: '500', color: '#e5e5e5', padding: '10px 18px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '10px' },
  experienceTimeline: { position: 'relative', paddingLeft: '40px', borderLeft: '2px solid rgba(99, 102, 241, 0.2)' },
  experienceCard: { position: 'relative', marginBottom: '48px' },
  experienceDot: { position: 'absolute', left: '-49px', top: '6px', width: '16px', height: '16px', backgroundColor: '#6366f1', borderRadius: '50%', border: '4px solid #050505' },
  experienceContent: { paddingLeft: '16px' },
  experienceHeader: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' },
  experienceTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '600', color: '#ffffff' },
  currentBadge: { fontSize: '11px', fontWeight: '600', padding: '4px 12px', backgroundColor: '#10b981', color: '#ffffff', borderRadius: '100px' },
  experienceCompany: { fontSize: '16px', color: '#6366f1', fontWeight: '500', marginBottom: '4px' },
  experiencePeriod: { fontSize: '13px', color: '#737373', marginBottom: '16px' },
  experienceDescription: { fontSize: '15px', color: '#a3a3a3', lineHeight: '1.7' },
  footer: { backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '100px 32px 48px', position: 'relative', zIndex: 2 },
  footerContent: { maxWidth: '800px', margin: '0 auto' },
  footerMain: { textAlign: 'center', marginBottom: '60px' },
  footerTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '42px', fontWeight: '700', color: '#ffffff', marginBottom: '16px', letterSpacing: '-1px' },
  footerText: { fontSize: '17px', color: '#a3a3a3', marginBottom: '32px', lineHeight: '1.7' },
  footerCta: { display: 'inline-block', padding: '16px 36px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#ffffff', textDecoration: 'none', borderRadius: '12px', fontWeight: '600', fontSize: '16px' },
  footerLinks: { display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '60px' },
  footerLink: { color: '#737373', textDecoration: 'none', fontSize: '15px', fontWeight: '500' },
  footerBottom: { textAlign: 'center', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.05)' },
  footerCopy: { fontSize: '14px', color: '#525252', marginBottom: '16px' },
  footerLang: { display: 'flex', justifyContent: 'center', gap: '16px' },
  langBadge: { fontSize: '13px', color: '#737373', padding: '6px 14px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '100px' },
};
