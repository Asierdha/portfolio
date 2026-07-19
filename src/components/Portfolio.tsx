import { useEffect, useRef, useState } from "react";
import "../../portfolio/styles.css";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#formacion", label: "Formación" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/asier-del-hoyo-%C3%A1lvarez-5922a0399";
const CV_URL = `${import.meta.env.BASE_URL}CV_AsierDelHoyo.pdf`;

const EXPERIENCE = [
  {
    date: "Feb 2026 — Jun 2026",
    role: "Especialista de Ciberseguridad (SOC & GRC)",
    company: "Semantic-Systems · Derio, Bizkaia",
    summary: "Diseño de SOC, implantación de SGSI y consultoría de cumplimiento en ISO 27001 y ENS.",
    highlights: [
      <>Participé en el <strong>diseño de la arquitectura y stack de herramientas</strong> de un nuevo Centro de Operaciones de Seguridad (SOC).</>,
      <>Contribuí al desarrollo del <strong>SGSI/ISMS</strong> para la certificación <strong>ISO 27001</strong> e implantación del <strong>ENS</strong>: inventario de activos, análisis de riesgos, SoA y planes de tratamiento.</>,
      <>Ejecuté <strong>consultorías de madurez de seguridad</strong> a empresas externas, evaluando cumplimiento del ENS y priorizando refuerzos según criticidad de sistemas.</>,
    ],
  },
  {
    date: "Feb 2025 — May 2025",
    role: "Técnico de Sistemas Informáticos",
    company: "Campus CST San Mamés · Bilbao",
    summary: "Soporte L1/L2 y bastionado de infraestructura en un entorno corporativo de alto volumen.",
    highlights: [
      <>Administré y <strong>bastioné (hardening)</strong> entornos Linux (CentOS, Debian, Ubuntu) y Windows Server con Active Directory y GPOs.</>,
      <>Desplegué y aprovisioné servidores virtualizados sobre <strong>VMware ESXi</strong> y VirtualBox, incluyendo monitorización y mantenimiento operativo.</>,
      <>Resolví incidencias de hardware y software directamente en planta, minimizando el impacto sobre los usuarios.</>,
    ],
  },
  {
    date: "Mar 2023 — Jun 2023",
    role: "Técnico de Sistemas Microinformáticos",
    company: "Diss-process Bilbao · Bilbao",
    summary: "Diagnóstico, reparación y puesta a punto de equipos y redes en cliente.",
    highlights: [
      <>Diagnostiqué y reparé averías físicas y lógicas en equipos, tablets y periféricos.</>,
      <>Realicé instalaciones de SO, configuración de aplicaciones y <strong>gestión de licencias</strong> en equipos nuevos.</>,
      <>Ejecuté <strong>cableado estructurado Ethernet</strong> y montaje de dispositivos en las instalaciones del cliente.</>,
    ],
  },
];

const SKILLS: { title: string; items: string[] }[] = [
  {
    title: "Ciberseguridad y Operaciones SOC (Blue Team)",
    items: ["Wazuh", "Elastic Stack", "Suricata", "Snort", "Nmap", "Wireshark", "MITRE ATT&CK", "Cyber Kill Chain"],
  },
  {
    title: "Administración de Sistemas y Automatización",
    items: ["Windows Server / Active Directory", "Linux (Debian, Ubuntu, CentOS)", "PowerShell", "Bash", "Apache", "Docker", "VMware", "VirtualBox"],
  },
  {
    title: "Redes y Seguridad Perimetral",
    items: ["Firewalls", "TCP/IP", "DNS", "DHCP", "SSH", "VPN", "VLAN", "Subnetting", "SSL/TLS"],
  },
  {
    title: "Gobierno, Riesgo y Cumplimiento (GRC)",
    items: ["ISO 27001", "ENS", "SGSI (Sistemas de Gestión de Seguridad de la Información)"],
  },
];

const EDUCATION = [
  { date: "2025 — 2026", title: "Especialista en Ciberseguridad en Entorno IT", institution: "Maristak Durango Ikastetxea", desc: "Formación avanzada en Blue Team, GRC, análisis forense e inteligencia de amenazas." },
  { date: "2023 — 2025", title: "Técnico Superior en Administración de Sistemas Informáticos en Red", institution: "Centro de Estudios Mikeldi", desc: "Administración de sistemas Linux/Windows Server, redes, virtualización y bases de datos." },
  { date: "2021 — 2023", title: "Técnico en Sistemas Microinformáticos y Redes", institution: "CIFP Construcción Bizkaia", desc: "Fundamentos de hardware, software, redes locales y soporte técnico." },
  { date: "2026", title: "Cisco CyberOps Associate", institution: "Cisco Networking Academy / Maristak Durango", desc: "Operaciones de ciberseguridad, monitorización y respuesta a incidentes en un SOC." },
];

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());

    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navLinks = document.querySelectorAll(".main-nav .nav-link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              const href = link.getAttribute("href");
              link.classList.toggle("active", href === `#${entry.target.id}`);
            });
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        toggleRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a href="#inicio" className="logo">ADH.</a>
        <nav
          ref={navRef}
          className={`main-nav${menuOpen ? " open" : ""}`}
          aria-label="Navegación principal"
        >
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link" onClick={closeMenu}>
              {n.label}
            </a>
          ))}
        </nav>
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="pf-container">
            <p className="hero-eyebrow">HOLA, SOY ASIER DEL HOYO</p>
            <h1 className="hero-title">Preparado para monitorizar, defender y reforzar tu infraestructura.</h1>
            <p className="hero-role">
              Técnico en Ciberseguridad y Administrador de Sistemas. Especializado en operaciones de Blue Team, bastionado de redes y gestión de cumplimiento (ISO 27001 / ENS).
            </p>
            <div className="hero-actions">
              <a href="#experiencia" className="btn btn-primary">Ver mi trayectoria</a>
              <a href={CV_URL} className="btn btn-secondary" download>Descargar CV</a>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <span>BLUE TEAM</span>
            <span>SOC</span>
            <span>ISO 27001</span>
            <span>ENS</span>
            <span>HARDENING</span>
          </div>
        </section>

        <section id="sobre-mi" className="section">
          <div className="pf-container">
            <div className="section-header">
              <p className="section-eyebrow">Quién soy</p>
              <h2 className="section-title">Sobre mí</h2>
            </div>
            <div className="about-content">
              <p>
                Soy Asier Del Hoyo, técnico especializado en administración de sistemas y ciberseguridad, enfocado en el área de <strong>Blue Team y GRC</strong>. Acabo de finalizar mi formación de especialización en ciberseguridad y busco mi primera oportunidad profesional en entornos SOC o soporte de sistemas.
              </p>
              <p>
                Durante mi trayectoria académica y periodos de prácticas, he tenido la oportunidad de colaborar en la arquitectura de un SOC, apoyar la documentación para certificaciones <strong>ISO 27001</strong> e implantación del <strong>ENS</strong>, y gestionar servidores Linux y Windows. Mi fuerte es combinar el conocimiento de la infraestructura técnica con los procesos normativos.
              </p>
              <p>
                Me mueve la curiosidad técnica, el rigor y el aprendizaje continuo. Dedico gran parte de mi tiempo libre a montar laboratorios propios y resolver retos para mantener mis habilidades al día. Actualmente cuento con la certificación <strong>Cisco CyberOps Associate</strong>.
              </p>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section section-alt">
          <div className="pf-container">
            <div className="section-header">
              <p className="section-eyebrow">Trayectoria profesional</p>
              <h2 className="section-title">Experiencia</h2>
            </div>
            <div className="timeline">
              {EXPERIENCE.map((item) => (
                <div key={item.role} className="timeline-item">
                  <div className="timeline-marker" aria-hidden="true"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">{item.date}</span>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-desc">{item.summary}</p>
                    <ul className="timeline-highlights">
                      {item.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="formacion" className="section">
          <div className="pf-container">
            <div className="section-header">
              <p className="section-eyebrow">Estudios y certificaciones</p>
              <h2 className="section-title">Formación</h2>
            </div>
            <div className="education-grid">
              {EDUCATION.map((e) => (
                <article key={e.title} className="education-card">
                  <span className="education-date">{e.date}</span>
                  <h3 className="education-title">{e.title}</h3>
                  <p className="education-institution">{e.institution}</p>
                  <p className="education-desc">{e.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="section section-alt">
          <div className="pf-container">
            <div className="section-header">
              <p className="section-eyebrow">Core competencies</p>
              <h2 className="section-title">Habilidades</h2>
            </div>
            <div className="skills-grid">
              {SKILLS.map((g) => (
                <div key={g.title} className="skill-group">
                  <h3 className="skill-title">{g.title}</h3>
                  <ul className="skill-list">
                    {g.items.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section section-contact">
          <div className="pf-container">
            <div className="contact-simple">
              <p className="section-eyebrow">Hablemos</p>
              <h2 className="section-title">Conectemos</h2>
              <p className="contact-desc">
                Estoy abierto a mi primera oportunidad profesional en entornos SOC, Blue Team o administración de sistemas. Si mi perfil encaja con lo que buscas, contáctame directamente por LinkedIn o revisa mi CV completo.
              </p>
              <div className="contact-actions">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Conectar en LinkedIn
                </a>
                <a href={CV_URL} className="btn btn-secondary" download>
                  Descargar Currículum
                </a>
              </div>
              <div className="contact-direct">
                <a href="mailto:asierdelhoyoalvarez@gmail.com" className="contact-link">
                  asierdelhoyoalvarez@gmail.com
                </a>
                <a href="tel:+34616861701" className="contact-link">+34 616 861 701</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="pf-container footer-inner">
          <p>&copy; {year ?? ""} Asier Del Hoyo Álvarez. Portugalete, Bizkaia.</p>
          <a href="#inicio" className="back-top">Volver arriba ↑</a>
        </div>
      </footer>
    </>
  );
}
