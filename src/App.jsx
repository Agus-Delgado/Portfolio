import React, { useState, useEffect } from 'react';

// Main Portfolio Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'education', 'experience'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={styles.container}>
      <style>{globalStyles}</style>
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <span style={styles.logo}>AD</span>
          <div style={styles.navLinks}>
            {['about', 'projects', 'skills', 'education', 'experience'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                style={{
                  ...styles.navLink,
                  ...(activeSection === item ? styles.navLinkActive : {})
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={{
          ...styles.heroContent,
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <div style={styles.herobadge}>Disponible para nuevos proyectos</div>
          <h1 style={styles.heroTitle}>Agustín Delgado</h1>
          <p style={styles.heroSubtitle}>
            Machine Learning Engineer <span style={styles.separator}>•</span> 
            Data Analyst <span style={styles.separator}>•</span> 
            Full Stack Developer
          </p>
          <div style={styles.heroContact}>
            <a href="mailto:augusto.delgado00@hotmail.com" style={styles.contactLink}>
              <EmailIcon /> augusto.delgado00@hotmail.com
            </a>
            <a href="tel:+541150521473" style={styles.contactLink}>
              <PhoneIcon /> +54 11 5052-1473
            </a>
            <span style={styles.contactLink}>
              <LocationIcon /> Ramos Mejía, Buenos Aires
            </span>
            <a href="https://linkedin.com/in/agustin-delgado-data98615190" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
          <div style={styles.heroStats}>
            <div style={styles.stat}>
              <span style={styles.statNumber}>62</span>
              <span style={styles.statLabel}>Certificaciones</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>4+</span>
              <span style={styles.statLabel}>Proyectos en Producción</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>7+</span>
              <span style={styles.statLabel}>Años en Healthcare</span>
            </div>
          </div>
        </div>
        <div style={styles.heroGradient}></div>
      </header>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionNumber}>01</span>
            Perfil Profesional
          </h2>
          <div style={styles.aboutGrid}>
            <div style={styles.aboutText}>
              <p style={styles.paragraph}>
                Especialista en <strong>Inteligencia Artificial y Análisis de Datos</strong> con 62 certificaciones 
                profesionales y experiencia práctica desarrollando soluciones tecnológicas para el sector healthcare.
              </p>
              <p style={styles.paragraph}>
                Combino sólidos fundamentos en Machine Learning, desarrollo Full Stack y Business Intelligence 
                para transformar datos en decisiones estratégicas de negocio.
              </p>
              <p style={styles.paragraph}>
                Mi enfoque se centra en aplicar IA de forma práctica para resolver problemas reales: desde la 
                predicción de inasistencias médicas hasta la automatización de procesos administrativos complejos.
              </p>
            </div>
            <div style={styles.aboutHighlights}>
              <div style={styles.highlight}>
                <div style={styles.highlightIcon}>🎯</div>
                <div>
                  <h4 style={styles.highlightTitle}>Especialización Healthcare</h4>
                  <p style={styles.highlightText}>Proyectos reales implementados en el sector salud</p>
                </div>
              </div>
              <div style={styles.highlight}>
                <div style={styles.highlightIcon}>🔧</div>
                <div>
                  <h4 style={styles.highlightTitle}>Stack Completo</h4>
                  <p style={styles.highlightText}>Python, FastAPI, React, Django, PostgreSQL</p>
                </div>
              </div>
              <div style={styles.highlight}>
                <div style={styles.highlightIcon}>📊</div>
                <div>
                  <h4 style={styles.highlightTitle}>BI Avanzado</h4>
                  <p style={styles.highlightText}>Power BI, Tableau, SQL, Pandas, NumPy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{...styles.section, ...styles.sectionAlt}}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionNumber}>02</span>
            Proyectos Destacados
          </h2>
          <div style={styles.projectsGrid}>
            <ProjectCard
              title="SmartClinic No-Show Predictor"
              category="Machine Learning + Business Intelligence"
              tags={['Python', 'Scikit-learn', 'Power BI', 'SQL']}
              context="Consultorio médico enfrentaba altas tasas de inasistencias que generaban pérdidas económicas y desorganización operativa."
              solution="Sistema predictivo que analiza 10,000+ turnos mediante Regresión Logística para identificar patrones de no-show."
              impact="Dashboard interactivo con 3 vistas analíticas que permite decisiones data-driven para optimizar la agenda."
              color="#10b981"
            />
            <ProjectCard
              title="Plataforma de Gestión para Geriátricos"
              category="Full Stack Development + PWA"
              tags={['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'JWT']}
              context="Múltiples hogares geriátricos necesitaban centralizar gestión de residentes, historiales clínicos y finanzas."
              solution="Sistema integral con API REST y PWA mobile-first. 23 tablas relacionales, autenticación JWT y notificaciones Web Push."
              impact="Gestión completa de 3 sedes con módulos de clínica, medicación, finanzas y auditoría. Funcionalidad offline."
              color="#3b82f6"
            />
            <ProjectCard
              title="Mi Consultorio - Historias Clínicas"
              category="Healthcare SaaS Platform"
              tags={['Django', 'Python', 'PostgreSQL', 'Bootstrap']}
              context="Profesionales de salud necesitaban digitalizar historias clínicas cumpliendo normativa argentina."
              solution="Plataforma con CKEditor WYSIWYG, turnos con notificaciones por email, recetas digitales y control financiero."
              impact="Dashboard analítico con métricas en tiempo real y generación automática de carpetas médicas en PDF."
              color="#8b5cf6"
            />
            <ProjectCard
              title="Consultorio Barcala - Web Corporativo"
              category="Modern Web Development"
              tags={['React 19', 'TypeScript', 'Supabase', 'Framer Motion']}
              context="Consultorio médico necesitaba presencia digital profesional para mejorar comunicación con pacientes."
              solution="Sitio web moderno con sistema de diseño centralizado, componentes reutilizables y arquitectura escalable."
              impact="Plataforma profesional con animaciones, routing optimizado y formularios validados. Deploy en Vercel."
              color="#f59e0b"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionNumber}>03</span>
            Stack Tecnológico
          </h2>
          <div style={styles.skillsGrid}>
            <SkillCategory
              title="Lenguajes"
              icon="💻"
              skills={['Python', 'TypeScript', 'JavaScript', 'SQL']}
            />
            <SkillCategory
              title="Machine Learning & IA"
              icon="🤖"
              skills={['Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'Feature Engineering']}
            />
            <SkillCategory
              title="Backend"
              icon="⚙️"
              skills={['FastAPI', 'Django', 'SQLAlchemy', 'JWT Auth', 'RESTful APIs']}
            />
            <SkillCategory
              title="Frontend"
              icon="🎨"
              skills={['React 18/19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion']}
            />
            <SkillCategory
              title="Bases de Datos"
              icon="🗄️"
              skills={['PostgreSQL', 'SQLite', 'Supabase']}
            />
            <SkillCategory
              title="Business Intelligence"
              icon="📊"
              skills={['Power BI', 'Tableau', 'Data Visualization', 'Dashboard Design']}
            />
            <SkillCategory
              title="DevOps & Tools"
              icon="🚀"
              skills={['Git', 'GitHub', 'Vercel', 'Docker', 'Gunicorn']}
            />
            <SkillCategory
              title="Competencias Clave"
              icon="✨"
              skills={['Desarrollo End-to-End', 'Healthcare Domain', 'IA Aplicada', 'Autonomía Técnica']}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{...styles.section, ...styles.sectionAlt}}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionNumber}>04</span>
            Formación Académica
          </h2>
          <div style={styles.educationGrid}>
            <EducationCard
              title="Carrera en IA y Ciencia de Datos"
              institution="Instituto Superior Santo Domingo"
              period="2024 - 2028"
              status="En curso"
            />
            <EducationCard
              title="Carrera de Data Analytics"
              institution="Coderhouse"
              period="2024 - 2025"
              status="Completado"
            />
            <EducationCard
              title="Diplomatura en Ciberseguridad"
              institution="Academia Numen"
              period="2023 - 2024"
              status="Completado"
            />
          </div>
          <div style={styles.certificationsBox}>
            <h3 style={styles.certTitle}>62 Certificaciones Profesionales</h3>
            <p style={styles.certSubtitle}>Coursera • LinkedIn Learning • Microsoft • Cisco</p>
            <div style={styles.certCategories}>
              <span style={styles.certBadge}>Data Science & Analytics</span>
              <span style={styles.certBadge}>Machine Learning & IA</span>
              <span style={styles.certBadge}>Desarrollo de Software</span>
              <span style={styles.certBadge}>Ciberseguridad</span>
              <span style={styles.certBadge}>Business Intelligence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionNumber}>05</span>
            Experiencia Profesional
          </h2>
          <div style={styles.experienceTimeline}>
            <ExperienceCard
              title="Associate"
              company="Blanc Labs"
              period="Junio 2024 - Noviembre 2024"
              description="Participación en grupos de aprendizaje multidisciplinarios explorando desafíos de transformación digital en sectores financiero y salud (EE.UU./Canadá). Colaboración en análisis de soluciones tecnológicas prácticas."
            />
            <ExperienceCard
              title="Auxiliar Administrativo"
              company="Consultorio Médico"
              period="Marzo 2017 - Presente"
              description="Gestión administrativa integral y soporte operativo. Identificación de oportunidades de automatización que derivaron en el desarrollo de múltiples proyectos tecnológicos propios (SmartClinic, Mi Consultorio)."
              current
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerMain}>
            <h3 style={styles.footerTitle}>¿Trabajamos juntos?</h3>
            <p style={styles.footerText}>
              Estoy disponible para nuevos proyectos en IA, Data Science y Desarrollo Full Stack.
            </p>
            <a href="mailto:augusto.delgado00@hotmail.com" style={styles.footerCta}>
              Contactame →
            </a>
          </div>
          <div style={styles.footerLinks}>
            <a href="mailto:augusto.delgado00@hotmail.com" style={styles.footerLink}>Email</a>
            <a href="https://linkedin.com/in/agustin-delgado-data98615190" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>LinkedIn</a>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.footerCopy}>© 2025 Agustín Delgado. Todos los derechos reservados.</p>
            <p style={styles.footerLang}>
              <span style={styles.langBadge}>Español: Nativo</span>
              <span style={styles.langBadge}>Inglés: Avanzado</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-components
function ProjectCard({ title, category, tags, context, solution, impact, color }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      style={{
        ...styles.projectCard,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 25px 50px -12px rgba(0,0,0,0.25)' : '0 4px 6px -1px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{...styles.projectAccent, backgroundColor: color}}></div>
      <div style={styles.projectContent}>
        <span style={styles.projectCategory}>{category}</span>
        <h3 style={styles.projectTitle}>{title}</h3>
        <div style={styles.projectDetails}>
          <div style={styles.projectDetail}>
            <strong>Contexto:</strong> {context}
          </div>
          <div style={styles.projectDetail}>
            <strong>Solución:</strong> {solution}
          </div>
          <div style={styles.projectDetail}>
            <strong>Impacto:</strong> {impact}
          </div>
        </div>
        <div style={styles.projectTags}>
          {tags.map((tag, i) => (
            <span key={i} style={{...styles.tag, borderColor: color, color: color}}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ title, icon, skills }) {
  return (
    <div style={styles.skillCard}>
      <div style={styles.skillHeader}>
        <span style={styles.skillIcon}>{icon}</span>
        <h4 style={styles.skillTitle}>{title}</h4>
      </div>
      <div style={styles.skillList}>
        {skills.map((skill, i) => (
          <span key={i} style={styles.skillBadge}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

function EducationCard({ title, institution, period, status }) {
  return (
    <div style={styles.educationCard}>
      <div style={styles.educationHeader}>
        <h4 style={styles.educationTitle}>{title}</h4>
        <span style={{
          ...styles.educationStatus,
          backgroundColor: status === 'En curso' ? '#dbeafe' : '#d1fae5',
          color: status === 'En curso' ? '#1d4ed8' : '#047857'
        }}>{status}</span>
      </div>
      <p style={styles.educationInstitution}>{institution}</p>
      <p style={styles.educationPeriod}>{period}</p>
    </div>
  );
}

function ExperienceCard({ title, company, period, description, current }) {
  return (
    <div style={styles.experienceCard}>
      <div style={styles.experienceDot}></div>
      <div style={styles.experienceContent}>
        <div style={styles.experienceHeader}>
          <h4 style={styles.experienceTitle}>{title}</h4>
          {current && <span style={styles.currentBadge}>Actual</span>}
        </div>
        <p style={styles.experienceCompany}>{company}</p>
        <p style={styles.experiencePeriod}>{period}</p>
        <p style={styles.experienceDescription}>{description}</p>
      </div>
    </div>
  );
}

// Icons
function EmailIcon() {
  return (
    <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// Global styles
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #0a0a0b;
    color: #e5e5e5;
    line-height: 1.6;
  }
  
  strong {
    color: #ffffff;
    font-weight: 600;
  }
  
  ::selection {
    background: #3b82f6;
    color: white;
  }
`;

// Styles object
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0b',
  },
  
  // Navigation
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(10, 10, 11, 0.8)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-1px',
  },
  navLinks: {
    display: 'flex',
    gap: '8px',
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: '#a3a3a3',
    fontSize: '14px',
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
  },
  navLinkActive: {
    color: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  
  // Hero
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '120px 24px 80px',
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '900px',
    position: 'relative',
    zIndex: 1,
  },
  heroGradient: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '800px',
    background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  heroBadge: {
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '100px',
    color: '#10b981',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '32px',
    letterSpacing: '0.5px',
  },
  heroTitle: {
    fontSize: 'clamp(48px, 10vw, 80px)',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '16px',
    letterSpacing: '-2px',
    lineHeight: '1.1',
  },
  heroSubtitle: {
    fontSize: 'clamp(18px, 3vw, 22px)',
    color: '#a3a3a3',
    marginBottom: '40px',
    fontWeight: '400',
  },
  separator: {
    color: '#3b82f6',
    margin: '0 8px',
  },
  heroContact: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '48px',
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#a3a3a3',
    textDecoration: 'none',
    fontSize: '14px',
    padding: '8px 16px',
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.08)',
    transition: 'all 0.2s ease',
  },
  icon: {
    width: '16px',
    height: '16px',
  },
  heroStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '48px',
    flexWrap: 'wrap',
  },
  stat: {
    textAlign: 'center',
  },
  statNumber: {
    display: 'block',
    fontSize: '48px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #ffffff, #a3a3a3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: '1',
  },
  statLabel: {
    fontSize: '14px',
    color: '#737373',
    fontWeight: '500',
  },
  
  // Sections
  section: {
    padding: '120px 24px',
  },
  sectionAlt: {
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  sectionContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '48px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  sectionNumber: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#3b82f6',
    fontFamily: "'JetBrains Mono', monospace",
  },
  
  // About
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '48px',
  },
  aboutText: {},
  paragraph: {
    color: '#a3a3a3',
    fontSize: '16px',
    marginBottom: '20px',
    lineHeight: '1.8',
  },
  aboutHighlights: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  highlight: {
    display: 'flex',
    gap: '16px',
    padding: '20px',
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  highlightIcon: {
    fontSize: '24px',
  },
  highlightTitle: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '4px',
  },
  highlightText: {
    color: '#737373',
    fontSize: '14px',
  },
  
  // Projects
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '24px',
  },
  projectCard: {
    backgroundColor: '#141415',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.05)',
    transition: 'all 0.3s ease',
  },
  projectAccent: {
    height: '4px',
  },
  projectContent: {
    padding: '28px',
  },
  projectCategory: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#737373',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '8px',
    display: 'block',
  },
  projectTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '20px',
  },
  projectDetails: {
    marginBottom: '20px',
  },
  projectDetail: {
    fontSize: '14px',
    color: '#a3a3a3',
    marginBottom: '12px',
    lineHeight: '1.6',
  },
  projectTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  tag: {
    fontSize: '12px',
    fontWeight: '500',
    padding: '4px 12px',
    borderRadius: '100px',
    border: '1px solid',
    backgroundColor: 'transparent',
  },
  
  // Skills
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
  },
  skillCard: {
    padding: '24px',
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  skillHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  skillIcon: {
    fontSize: '24px',
  },
  skillTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
  },
  skillList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  skillBadge: {
    fontSize: '13px',
    color: '#a3a3a3',
    padding: '6px 12px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '6px',
  },
  
  // Education
  educationGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  educationCard: {
    padding: '24px',
    backgroundColor: '#141415',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  educationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px',
  },
  educationTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    flex: 1,
  },
  educationStatus: {
    fontSize: '11px',
    fontWeight: '600',
    padding: '4px 10px',
    borderRadius: '100px',
  },
  educationInstitution: {
    fontSize: '14px',
    color: '#a3a3a3',
    marginBottom: '4px',
  },
  educationPeriod: {
    fontSize: '13px',
    color: '#737373',
  },
  certificationsBox: {
    padding: '32px',
    backgroundColor: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))',
    background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))',
    borderRadius: '16px',
    border: '1px solid rgba(59,130,246,0.2)',
    textAlign: 'center',
  },
  certTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '8px',
  },
  certSubtitle: {
    fontSize: '14px',
    color: '#a3a3a3',
    marginBottom: '24px',
  },
  certCategories: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
  },
  certBadge: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#ffffff',
    padding: '8px 16px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '8px',
  },
  
  // Experience
  experienceTimeline: {
    position: 'relative',
    paddingLeft: '32px',
    borderLeft: '2px solid rgba(255,255,255,0.1)',
  },
  experienceCard: {
    position: 'relative',
    marginBottom: '40px',
  },
  experienceDot: {
    position: 'absolute',
    left: '-41px',
    top: '6px',
    width: '16px',
    height: '16px',
    backgroundColor: '#3b82f6',
    borderRadius: '50%',
    border: '4px solid #0a0a0b',
  },
  experienceContent: {
    paddingLeft: '16px',
  },
  experienceHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '4px',
  },
  experienceTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
  },
  currentBadge: {
    fontSize: '11px',
    fontWeight: '600',
    padding: '4px 10px',
    backgroundColor: '#10b981',
    color: '#ffffff',
    borderRadius: '100px',
  },
  experienceCompany: {
    fontSize: '16px',
    color: '#3b82f6',
    fontWeight: '500',
    marginBottom: '4px',
  },
  experiencePeriod: {
    fontSize: '13px',
    color: '#737373',
    marginBottom: '12px',
  },
  experienceDescription: {
    fontSize: '14px',
    color: '#a3a3a3',
    lineHeight: '1.7',
  },
  
  // Footer
  footer: {
    backgroundColor: '#0a0a0b',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    padding: '80px 24px 40px',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerMain: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  footerTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '16px',
  },
  footerText: {
    fontSize: '16px',
    color: '#a3a3a3',
    marginBottom: '24px',
  },
  footerCta: {
    display: 'inline-block',
    padding: '14px 32px',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'all 0.2s ease',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    marginBottom: '48px',
  },
  footerLink: {
    color: '#737373',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'color 0.2s ease',
  },
  footerBottom: {
    textAlign: 'center',
    paddingTop: '32px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  },
  footerCopy: {
    fontSize: '13px',
    color: '#525252',
    marginBottom: '12px',
  },
  footerLang: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
  },
  langBadge: {
    fontSize: '12px',
    color: '#737373',
    padding: '4px 12px',
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: '100px',
  },
};
