import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Career AI Pilot",
    category: "HACKATHON / TEAM LEAD",
    year: "2026",
    description:
      "An AI-powered career guidance concept built during a hackathon. I led the team and explored how AI and workflow automation could make career discovery more useful.",
    tags: ["AI", "Google AI Studio", "n8n", "Lovable"],
    visual: "career",
    featured: true,
    url: "https://github.com/chandancoder-dev/CareerAI-Pilot",
  },
  {
    number: "02",
    name: "Forma AI",
    category: "DYNAMIC FORM EXPERIENCE",
    year: "2026",
    description:
      "A dynamic form application. My contribution focused on reusable React components that render form fields from structured schemas.",
    tags: ["React", "JavaScript", "Dynamic UI"],
    visual: "forms",
  },
  {
    number: "03",
    name: "Audit Trail",
    category: "TEAM PROJECT",
    year: "2026",
    description:
      "A shipment audit trail application with event history and historical state reconstruction. My area of work is the Historical State interface.",
    tags: ["React", "Event History", "Timeline UI"],
    visual: "audit",
  },
  {
    number: "04",
    name: "SyncSpace",
    category: "COLLABORATIVE PROJECT",
    year: "2026",
    description:
      "A team project where I worked on frontend development and component-based interface building.",
    tags: ["Frontend", "React", "Team Project"],
    visual: "sync",
  },
];

const experience = [
  {
    index: "01",
    role: "Web Developer & Team Lead",
    company: "Axlero Innovative Solutions",
    detailsParts: [
      "Worked as a Web Developer and led a team, coordinating collaboration and development tasks.",
    ],
    highlights: ["Team Lead"],
  },
  {
    index: "02",
    role: "Web Developer Intern",
    company: "InAmigos Foundation",
    detailsParts: [
      "Developed an NGO awareness webpage and was recognised as a 2nd Top Performer.",
    ],
    highlights: ["2nd Top Performer"],
  },
  {
    index: "03",
    role: "Hackathon Team Lead & Developer",
    company: "Agentic AI Hackathon and Workshop",
    detailsParts: [
      "Led a team to build Career AI Pilot, an AI-powered career assistance project using AI tools and n8n workflow automation.",
    ],
    highlights: [],
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Interface",
    items: "HTML · CSS · JavaScript · React · Bootstrap",
  },
  {
    number: "02",
    title: "Logic & data",
    items: "Python · Node.js · Express · MongoDB · SQLite",
  },
  {
    number: "03",
    title: "Workflow",
    items: "Git · GitHub · VS Code · Vercel · n8n",
  },
];

function ProjectArtwork({ type, number }) {
  return (
    <div
      className={`project-art art-${type}`}
      aria-label={`${type} project illustration`}
      role="img"
    >
      <span className="art-index">FIG. {number}</span>

      {type === "career" && (
        <>
          <div className="career-orbit orbit-one" />
          <div className="career-orbit orbit-two" />
          <div className="career-core">AI</div>
          <div className="career-node node-one">SKILLS</div>
          <div className="career-node node-two">ROLES</div>
          <div className="career-node node-three">YOU</div>
          <div className="career-caption">
            <span>CAREER / MAP</span>
            <span>01—04</span>
          </div>
          <div className="career-mini-card">
            <span className="mini-dot" />
            <div>
              <small>YOUR NEXT MOVE</small>
              <strong>Find your direction.</strong>
            </div>
            <span className="mini-arrow">↗</span>
          </div>
        </>
      )}

      {type === "forms" && (
        <>
          <div className="form-art-title">INPUT / OUTPUT</div>
          <div className="form-window">
            <div className="form-window-top">
              <span>FORM_SCHEMA.JSON</span>
              <span>↗</span>
            </div>
            <div className="form-field">
              <span>01</span>
              <div className="fake-input">Full name</div>
              <span>↳</span>
            </div>
            <div className="form-field">
              <span>02</span>
              <div className="fake-input">Select a category</div>
              <span>⌄</span>
            </div>
            <div className="form-field">
              <span>03</span>
              <div className="fake-input">Your response...</div>
              <span>↳</span>
            </div>
            <div className="form-submit">
              RENDER FORM <span>↗</span>
            </div>
          </div>
          <span className="form-stamp">
            DYNAMIC
            <br />
            BY DESIGN
          </span>
        </>
      )}

      {type === "audit" && (
        <>
          <span className="audit-coordinate">SHIPMENT / HISTORY</span>
          <div className="audit-track">
            <div className="track-line" />
            <div className="track-event">
              <span className="track-point filled" />
              <div>
                <small>EVENT 001</small>
                <strong>Container created</strong>
              </div>
              <time>09:10</time>
            </div>
            <div className="track-event">
              <span className="track-point" />
              <div>
                <small>EVENT 002</small>
                <strong>Loaded on ship</strong>
              </div>
              <time>13:45</time>
            </div>
            <div className="track-event alert-event">
              <span className="track-point" />
              <div>
                <small>EVENT 003</small>
                <strong>Temperature spike</strong>
              </div>
              <time>16:20</time>
            </div>
          </div>
          <div className="audit-footer">
            RECONSTRUCT THE PAST. UNDERSTAND THE PRESENT.
          </div>
        </>
      )}

      {type === "sync" && (
        <>
          <div className="sync-shape shape-one">S</div>
          <div className="sync-shape shape-two">S.</div>
          <div className="sync-shape shape-three">+</div>
          <div className="sync-label">
            <small>TEAM SPACE / 001</small>
            <strong>
              Different minds.
              <br />
              One shared space.
            </strong>
          </div>
          <div className="sync-bottom">
            <span>IDEA</span>
            <span>↗</span>
            <span>BUILD</span>
            <span>↗</span>
            <span>SHARE</span>
          </div>
        </>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          Chandan K R<span className="wordmark-dot">.</span>
          <small>PERSONAL ARCHIVE / 2026</small>
        </a>

        <button
          className="mobile-menu"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>

        <nav
          id="primary-navigation"
          className={`main-nav ${menuOpen ? "nav-open" : ""}`}
        >
          <a href="#work" onClick={closeMenu}>
            Selected work <span>01</span>
          </a>
          <a href="#about" onClick={closeMenu}>
            The person <span>02</span>
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience <span>03</span>
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <span>↗</span>
          </a>
        </nav>
      </header>

      <section className="hero page-shell" id="home">
        <div className="hero-topline">
          <p>
            <span className="live-dot" /> OPEN TO INTERESTING OPPORTUNITIES
          </p>
          <p>INDEPENDENTLY CURIOUS. PRACTICALLY MINDED.</p>
        </div>

        <div className="hero-layout">
          <div className="hero-main">
            <p className="eyebrow">HELLO, I'M CHANDAN K R — BCA / 2027</p>
            <h1>
              I turn ideas
              <br />
              into <span className="serif-word">things</span>
              <br />
              that <span className="underlined-word">work.</span>
            </h1>
            <div className="hero-bottom">
              <span className="hero-star" aria-hidden="true">
                ✳
              </span>
              <p>
                Developer, team lead, and builder exploring the space between
                useful software and ambitious ideas.
              </p>
              <a href="#work" className="text-link">
                EXPLORE SELECTED WORK <span>↓</span>
              </a>
            </div>
          </div>

          <aside className="hero-art" aria-label="Personal graphic">
            <div className="hero-art-top">
              <span>FIELD NOTE No. 001</span>
              <span>EST. 2026</span>
            </div>
            <div className="hero-art-center">
              <div className="art-circle circle-large" />
              <div className="art-circle circle-small" />
              <div className="art-cross">+</div>
              <div className="art-block">
                <span>THINK</span>
                <span>MAKE</span>
                <span>
                  REFINE<span className="red-period">.</span>
                </span>
              </div>
              <span className="art-side-text">IDEAS IN PROGRESS / ALWAYS</span>
            </div>
            <div className="hero-art-bottom">
              <span>WEB / AI / EXPERIMENTS</span>
              <span>12° 58' N — 77° 35' E</span>
            </div>
          </aside>
        </div>

        <div className="hero-index">
          <span>SCROLL TO EXPLORE</span>
          <span className="index-line" />
          <span>01 — 04 / SELECTED PROJECTS</span>
        </div>
      </section>

      <div
        className="ticker"
        aria-label="Ideas, experiments, and things in progress"
      >
        <div className="ticker-track">
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index}>
              IDEAS INTO INTERFACES <i>✳</i> EXPERIMENTS INTO EXPERIENCE{" "}
              <i>✳</i>
              CODE INTO SOMETHING USEFUL <i>✳</i>
            </span>
          ))}
        </div>
      </div>

      <section className="work-section page-shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Built, not just
              <br />
              <span>imagined.</span>
            </h2>
          </div>
          <p className="section-intro">
            A collection of projects, prototypes, and team experiences. Each one
            taught me something worth carrying into the next.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`project-row ${project.featured ? "featured-project" : ""}`}
            >
              <div className="project-meta">
                <span className="project-number">{project.number}</span>
                <span className="project-year">{project.year}</span>
              </div>

              <div className="project-copy">
                <p className="eyebrow">{project.category}</p>
                <h3>
                  {project.name}
                  <span className="red-period">.</span>
                </h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.url ? (
                  <a
                    className="text-link project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW REPOSITORY <span>↗</span>
                  </a>
                ) : (
                  <span className="project-note">
                    PROJECT NOTES / IN PROGRESS
                  </span>
                )}
              </div>

              <ProjectArtwork type={project.visual} number={project.number} />
            </article>
          ))}
        </div>

        <div className="work-footer">
          <span>MORE EXPERIMENTS ARE ALWAYS UNDERWAY.</span>
          <a
            href="https://github.com/chandancoder-dev"
            target="_blank"
            rel="noreferrer"
          >
            BROWSE GITHUB ↗
          </a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="page-shell about-layout">
          <div className="about-label">
            <p className="eyebrow">02 / THE PERSON BEHIND THE PROJECTS</p>
            <div className="round-stamp">
              <span>LEARN</span>
              <span className="stamp-symbol">✳</span>
              <span>BUILD</span>
              <span className="stamp-symbol">✳</span>
              <span>REPEAT</span>
            </div>
          </div>

          <div className="about-copy">
            <h2>
              Still learning.
              <br />
              Always <span className="serif-word">making.</span>
            </h2>
            <p>
              I'm a BCA student developing my skills in web development and
              software engineering through hands-on projects, internships, and
              collaboration.
            </p>
            <p>
              I enjoy taking an idea apart, understanding how it could work, and
              helping turn it into something people can actually use. AI-powered
              applications and the intersection of product thinking and
              engineering are areas I'm especially interested in exploring.
            </p>

            <div className="education-line">
              <span>EDUCATION</span>
              <strong>Bachelor of Computer Applications</strong>
              <span>EXPECTED 2027</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section page-shell">
        <div className="skills-heading">
          <p className="eyebrow">A WORKING TOOLKIT</p>
          <h2>
            Tools of the trade<span className="red-period">.</span>
          </h2>
          <p>Technologies I use, practise, and continue to develop with.</p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.number}>
              <span className="skill-number">{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
        <p className="skills-note">
          MY TOOLKIT WILL CHANGE. MY CURIOSITY WON'T.
        </p>
      </section>

      <section className="experience-section" id="experience">
        <div className="page-shell">
          <div className="section-heading experience-heading">
            <div>
              <p className="eyebrow">03 / EXPERIENCE & INITIATIVE</p>
              <h2>
                Learning by
                <br />
                <span>doing.</span>
              </h2>
            </div>
            <p className="section-intro">
              The places, teams, and challenges that have helped me grow beyond
              the classroom.
            </p>
          </div>

          <div className="experience-list">
            {experience.map((item) => {
              // Replace highlighted phrases with <mark> spans
              const renderDetails = (parts, highlights) => {
                const text = parts[0];
                if (!highlights || highlights.length === 0) return text;
                const escaped = highlights.map((h) =>
                  h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                );
                const regex = new RegExp(`(${escaped.join("|")})`, "g");
                const segments = text.split(regex);
                return segments.map((seg, i) =>
                  highlights.includes(seg) ? (
                    <mark key={i} className="exp-highlight">
                      {seg}
                    </mark>
                  ) : (
                    seg
                  ),
                );
              };

              return (
                <article className="experience-row" key={item.index}>
                  <span className="experience-number">{item.index}</span>
                  <div className="experience-content">
                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
                    <p className="experience-details">
                      {renderDetails(item.detailsParts, item.highlights)}
                    </p>
                  </div>
                  <span className="experience-mark">↗</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="page-shell">
          <div className="contact-kicker">
            <span>04 / THE NEXT CHAPTER</span>
            <span>GOOD THINGS START WITH A CONVERSATION.</span>
          </div>

          <h2>
            Got an idea?
            <br />
            <span className="serif-word">Let's make it real.</span>
          </h2>

          <div className="contact-bottom">
            <p>
              Open to connecting with developers, teams, and people working on
              interesting problems.
            </p>

            <div className="contact-links">
              <a href="mailto:chandankrc498@gmail.com">
                EMAIL ME <span>↗</span>
              </a>
              <a
                href="https://github.com/chandancoder-dev"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/chandan-kr-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN <span>↗</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <a className="footer-wordmark" href="#home">
              CK<span>.</span>
            </a>
            <span>DESIGNED WITH INTENTION. BUILT WITH CODE.</span>
            <a href="#home">BACK TO THE TOP ↑</a>
            <span>© {new Date().getFullYear()} CHANDAN K R</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
