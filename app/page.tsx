import SkillsSection from "./components/SkillsSection";
const github = "https://github.com/HarshDhakate551";
const linkedin = "https://in.linkedin.com/in/harshadhakate";
const leetcode = "https://leetcode.com/u/harshdhakate/";

const milestones = [
  {
    number: "01",
    title: "Associate Software Engineer",
    copy: "ASSOCIATE SOFTWARE ENGINEER AT ACCENTURE SINCE NOVEMBER 2025. CONTRIBUTING TO ANDROID APPLICATION DEVELOPMENT WITH KOTLIN AND COLLABORATING THROUGH AGILE, JIRA, GIT AND AZURE DEVOPS.",
    image: "/portfolio/assets/visual-3.jpg",
    tone: "blue",
  },
  {
    number: "02",
    title: "Information Technology, B.E.",
    copy: "GRADUATED FROM SMT. KASHIBAI NAVALE COLLEGE OF ENGINEERING, AFFILIATED WITH SAVITRIBAI PHULE PUNE UNIVERSITY. CGPA: 8.54.",
    image: "/portfolio/assets/visual-1.jpg",
    tone: "rose",
  },
  {
    number: "03",
    title: "Independent full-stack projects",
    copy: "BUILDING WEB APPLICATIONS WITH REACT, NODE.JS, JAVA, SPRING BOOT AND POSTGRESQL, INCLUDING AI-ASSISTED HIRING AND REPOSITORY-BASED RAG CONCEPTS.",
    image: "/portfolio/assets/visual-2.webp",
    tone: "blue",
  },
];

const principles = [
  "BUILD FOR REAL USERS.",
  "KEEP THE CODE REVIEWABLE.",
  "TEST THE IMPORTANT PATHS.",
  "MAKE SMALL, CLEAR CHANGES.",
  "LEARN THE SYSTEM BEFORE CHANGING IT.",
  "WRITE DOWN WHAT YOU LEARN.",
  "USE AI WITH ENGINEERING JUDGMENT.",
  "SHIP, THEN IMPROVE.",
  "KEEP SECURITY IN THE DESIGN.",
  "COLLABORATE EARLY.",
  "FOLLOW THROUGH ON FEEDBACK.",
  "BUILD END TO END.",
  "UNDERSTAND THE TRADE-OFFS.",
  "KEEP GROWING AS AN ENGINEER.",
];

function SectionMarker({ number, title }: { number: string; title: string }) {
  return (
    <div className="section-marker">
      <span>[ {number} / 09 ]</span>
      <span>{title}</span>
    </div>
  );
}

function OutlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="outline-link" href={href}>
      <span>{children}</span>
      <span className="link-arrow" aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Harsh, back to top">
          <span>HARSH—</span>
          <span>©2026</span>
        </a>
        <a className="header-github" href={github} target="_blank" rel="noreferrer">GITHUB</a>
        <a className="header-contact" href="#contact">CONTACT</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" aria-hidden="true">
          <video autoPlay muted loop playsInline poster="/portfolio/assets/hero-poster.webp">
            <source src="/portfolio/assets/hero.webm" type="video/webm" />
          </video>
        </div>
        <h1 id="hero-title" className="hero-title">
          <span>Software engineer</span>
          <span>building across the stack.</span>
        </h1>
        <div className="hero-stack">
          <p className="eyebrow">TECH STACK</p>
          <div className="brand-row" aria-label="Technology and research">
            <span>ANDROID · KOTLIN</span>
            <span>REACT · TYPESCRIPT</span>
            <span>JAVA · SPRING BOOT</span>
            <span>NODE.JS · POSTGRESQL</span>
            <span>GENERATIVE AI · RAG</span>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-copy">
          <span className="red-label">HARSH DHAKATE · PUNE, INDIA</span>
          <p>
            I’m an Associate Software Engineer at Accenture, focused professionally
            on Android development. I also build full-stack web projects and explore
            practical ways to bring AI into useful applications.
          </p>
          <OutlineLink href="#projects">VIEW WORK</OutlineLink>
        </div>
      </section>

<SkillsSection github={github} />

      <section className="content-section journey" id="journey">
        <SectionMarker number="03" title="EXPERIENCE" />
        <div className="journey-backdrop" aria-hidden="true">
          <video autoPlay muted loop playsInline>
            <source src="/portfolio/assets/journey-bg.webm" type="video/webm" />
          </video>
        </div>
        <div className="journey-heading">
          <span className="red-label">EDUCATION · EXPERIENCE · PROJECTS</span>
          <p className="eyebrow">(A SOFTWARE ENGINEERING JOURNEY.)</p>
          <h2>Building from mobile systems to full-stack applications.</h2>
        </div>
        <div className="milestones">
          {milestones.map((item) => (
            <article
              className={`milestone-card ${item.tone}`}
              key={item.number}
              style={{ backgroundImage: `linear-gradient(180deg, rgba(8,8,8,.28), rgba(8,8,8,.82)), url("${item.image}")` }}
            >
              <span className="milestone-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section projects" id="projects">
        <SectionMarker number="04" title="PROJECTS" />
        <div className="projects-head">
          <div>
            <p className="eyebrow">SELECTED WORK.</p>
            <h2>Things I’ve built.</h2>
          </div>
          <p className="project-summary">
            Independent full-stack work across hiring workflows, repository tools,
            and web applications, alongside my professional Android experience.
          </p>
        </div>
        <div className="project-feature-grid">
          <article className="project-feature project-crystal">
            <div className="project-art" role="img" aria-label="HireInsight project artwork" />
            <div className="project-copy">
              <span className="eyebrow">01 / FULL-STACK · AI</span>
              <h3>HireInsight</h3>
              <p>An AI-assisted hiring and interview platform with candidate, interviewer, and company workflows, resume analysis, job management, and interview coordination.</p>
              <span className="tag-row">REACT · TYPESCRIPT · NODE.JS · EXPRESS · POSTGRESQL · GEMINI</span>
              <a className="project-source" href="https://github.com/HarshDhakate551/HireInsight" target="_blank" rel="noreferrer">VIEW REPOSITORY ↗</a>
            </div>
          </article>
          <article className="project-feature project-llm">
            <div className="project-art" role="img" aria-label="Devpolit project artwork" />
            <div className="project-copy">
              <span className="eyebrow">02 / SPRINGBOOT · RAG</span>
              <h3>Devpolit</h3>
              <p>A Spring Boot application exploring repository-based retrieval, GitHub OAuth, and RAG workflows for understanding codebases.</p>
              <span className="tag-row">JAVA · SPRING BOOT · SPRING AI · POSTGRESQL · PGVECTOR · DOCKER</span>
              <a className="project-source" href="https://github.com/HarshDhakate551/Devpolit" target="_blank" rel="noreferrer">VIEW REPOSITORY ↗</a>
            </div>
          </article>
        </div>
        <p className="projects-note">
          Other work includes a course marketplace and an image-to-text extraction app.
          Explore the repositories for more details and current project status.
        </p>
        <OutlineLink href={github}>GITHUB</OutlineLink>
      </section>

      <section className="after-code" aria-label="More about Harsh">
        <div className="after-code-backdrop" aria-hidden="true"><video autoPlay muted loop playsInline><source src="/portfolio/assets/skill-mesh.webm" type="video/webm" /></video></div>
        <SectionMarker number="05" title="AFTER CODE" />
        <div className="after-code-top">
          <span>ANDROID</span>
          <span className="after-code-mark">{"// FULL STACK"}</span>
          <span>AI EXPLORATION</span>
        </div>
        <div className="code-grid">
          <article className="code-card code-crystal">
            <div className="code-card-title"><h3>ANDROID.</h3><span>[01]</span></div>
            <p>PROFESSIONAL EXPERIENCE BUILDING AND DEBUGGING ANDROID APPLICATIONS WITH KOTLIN IN AN ENTERPRISE ENGINEERING TEAM.</p>
          </article>
          <article className="code-card code-llm">
            <div className="code-card-title"><h3>FULL STACK.</h3><span>[02]</span></div>
            <p>INDEPENDENT APPLICATIONS WITH REACT, TYPESCRIPT, NODE.JS, EXPRESS, JAVA, SPRING BOOT, AND RELATIONAL AND DOCUMENT DATABASES.</p>
          </article>
          <article className="code-card code-more">
            <div className="code-card-title"><h3>GENERATIVE AI.</h3><span>[03]</span></div>
            <p>EXPLORING GEMINI-POWERED FEATURES, RESUME ANALYSIS, REPOSITORY-BASED RAG, VECTOR SEARCH, AND AI-ASSISTED DEVELOPMENT.</p>
          </article>
        </div>
        <div className="practice-grid">
          <article><h3>ENGINEERING.</h3><span>[01]</span><p>KOTLIN, ANDROID STUDIO, GIT, AZURE DEVOPS, JIRA, DETEKT, JUNIT EXPOSURE, AND AGILE TEAM WORKFLOWS.</p></article>
          <article><h3>BACKEND.</h3><span>[02]</span><p>JAVA, SPRING BOOT, REST APIS, SPRING SECURITY, POSTGRESQL, MONGODB, AUTHENTICATION, AND DATABASE DESIGN.</p></article>
          <article><h3>CERTIFICATIONS.</h3><span>[03]</span><p>DATABRICKS GENERATIVE AI FUNDAMENTALS (AUGUST 2026) AND ANTHROPIC CLAUDE CERTIFIED DEVELOPER — FOUNDATIONS (VALID THROUGH AUGUST 2027). <a href={linkedin} target="_blank" rel="noreferrer">VIEW LINKEDIN ↗</a></p></article>
        </div>
      </section>

      <section className="content-section philosophy" id="philosophy">
        <SectionMarker number="06" title="APPROACH" />
        <div className="philosophy-heading">
          <div>
            <p className="eyebrow">HOW I APPROACH ENGINEERING</p>
            <h2>Understand it. Build it. Improve it.</h2>
          </div>
          <p>I value clear implementation, team feedback, and validating technical decisions. AI tooling is useful when paired with careful review.</p>
        </div>
        <div className="phases">
          {["Explore", "Build", "Ship", "Iterate"].map((phase, index) => (
            <a href={`#phase-${index + 1}`} key={phase}>
              <span>Phase 0{index + 1}</span>
              <strong>{phase}</strong>
              <span className="phase-arrow">↘</span>
            </a>
          ))}
        </div>
        <article className="phase-detail" id="phase-1">
          <span className="eyebrow">01 / EXPLORE</span>
          <div>
            <h3>Start with a question.</h3>
            <p>Understand the requirements, existing code, and constraints before choosing an implementation.</p>
          </div>
        </article>
        <article className="phase-detail" id="phase-2">
          <span className="eyebrow">02 / BUILD</span>
          <div>
            <h3>Make the idea real.</h3>
            <p>Break work into focused changes, build the feature, and connect the frontend, APIs, and data where needed.</p>
          </div>
        </article>
        <article className="phase-detail" id="phase-3">
          <span className="eyebrow">03 / SHIP</span>
          <div>
            <h3>Put useful work in the world.</h3>
            <p>Use branches and pull requests to share changes, get feedback, and keep collaboration visible.</p>
          </div>
        </article>
        <article className="phase-detail" id="phase-4">
          <span className="eyebrow">04 / ITERATE</span>
          <div>
            <h3>Keep improving.</h3>
            <p>Debug issues, incorporate review feedback, and verify important paths before moving on.</p>
          </div>
        </article>
      </section>

      <section className="principles-intro">
        <p>Practices I bring to team engineering and independent projects.</p>
        <div className="principles-marquee" aria-hidden="true">
          <div><span>PRINCIPLES</span><span>PRINCIPLES</span><span>PRINCIPLES</span></div>
        </div>
      </section>

      <section className="content-section principles" id="principles">
        <SectionMarker number="07" title="PRINCIPLES" />
        <div className="principle-list">
          {principles.map((principle, index) => (
            <div className="principle-row" key={principle}>
              <span>{String(index + 1).padStart(3, "0")}.</span>
              <h3>{principle}</h3>
              <span className="principle-cross">+</span>
            </div>
          ))}
        </div>
      </section>

      <section className="curiosity" id="curiosity">
        <SectionMarker number="08" title="PROFILE" />
        <div className="curiosity-art" aria-hidden="true">
          <video autoPlay muted loop playsInline poster="/portfolio/assets/hero-poster-alt.webp">
            <source src="/portfolio/assets/journey-bg.webm" type="video/webm" />
          </video>
        </div>
        <div className="curiosity-copy">
          <h2>Software that <em>connects the pieces.</em></h2>
          <div className="curiosity-story">
            <p>I’m an Associate Software Engineer at Accenture with professional experience focused on Android application development.</p>
            <p>I earned a B.E. in Information Technology from Smt. Kashibai Navale College of Engineering, affiliated with Savitribai Phule Pune University, with an 8.54 CGPA.</p>
            <p>My independent work extends into full-stack applications using React, TypeScript, Node.js, Express, Java, Spring Boot, PostgreSQL, and MongoDB.</p>
            <p>I’m growing toward full-stack and backend engineering, with an interest in practical Generative AI, RAG, and AI-enabled products.</p>
            <span className="eyebrow curiosity-stack">Pune, Maharashtra · Open to full-stack and backend opportunities</span>
          </div>
        </div>
      </section>

      <section className="content-section contact" id="contact">
        <SectionMarker number="09" title="CONTACT" />
        <div className="contact-title">
          <h2>Let’s connect.</h2>
          <h2>Let’s talk.</h2>
        </div>
        <div className="contact-grid">
          <article><span>001</span><h3>What do you build?</h3><p>Android applications professionally, plus full-stack projects and AI-enabled application experiments independently.</p></article>
          <article><span>002</span><h3>Where are you based?</h3><p>Pune, Maharashtra, India.</p></article>
          <article><span>003</span><h3>What roles interest you?</h3><p>Full-stack and backend software engineering, especially work with Java, Spring Boot, React, and application APIs.</p></article>
          <article><span>004</span><h3>Find me online</h3><p><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a> · <a href={github} target="_blank" rel="noreferrer">GitHub</a> · <a href={leetcode} target="_blank" rel="noreferrer">LeetCode</a></p></article>
        </div>
        <div className="signoff">
          <span>FIND ME<br />ONLINE</span>
          <a href={linkedin} target="_blank" rel="noreferrer">LINKEDIN <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top"><span>HARSH—</span><span>©2026</span></a>
        <span>SOFTWARE ENGINEER · PUNE, INDIA.</span>
        <a href={github} target="_blank" rel="noreferrer">GITHUB ↗</a>
      </footer>
    </main>
  );
}






