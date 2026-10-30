import { useState } from 'react'

const projects = [
  {
    n: '01',
    type: 'Data science · In progress',
    title: 'House Price Prediction',
    text: 'A regression model that turns housing data into useful price estimates through thoughtful cleaning, exploration, and model evaluation.',
    tools: ['Python', 'Pandas', 'Scikit-learn'],
    className: 'lime',
    art: <><b>92.4%</b><small>prediction confidence</small><svg viewBox="0 0 500 180"><path d="M0 165C58 144 82 118 132 127s76-52 127-35 76-48 126-39 76-34 115-43"/><circle cx="132" cy="127" r="7"/><circle cx="259" cy="92" r="7"/><circle cx="385" cy="53" r="7"/></svg></>,
  },
  {
    n: '02',
    type: 'Research · GraphRAG',
    title: 'Adaptive Graph Compression',
    text: 'A reinforcement-learning approach to reduce retrieved graph context while preserving answer quality for knowledge-graph question answering.',
    tools: ['Python', 'GraphRAG', 'Reinforcement Learning'],
    className: 'violet',
    art: <><svg className="nodes" viewBox="0 0 500 220"><path d="M45 160L143 65L242 140L350 45L455 145M45 160L242 140L350 45M143 65L350 45L455 145"/><circle cx="45" cy="160" r="22"/><circle cx="143" cy="65" r="34"/><circle cx="242" cy="140" r="27"/><circle cx="350" cy="45" r="20"/><circle cx="455" cy="145" r="31"/></svg><em>context, compressed.</em></>,
  },
  {
    n: '03',
    type: 'Full-stack · Workforce tools',
    title: 'WorkNest',
    text: 'A database-driven workforce management platform with dedicated employee and manager portals and role-specific workflows.',
    tools: ['PHP', 'MySQL', 'JavaScript'],
    className: 'orange',
    art: <div className="dash"><i/><div><b/><span><i/><i/><i/></span><em/><em/><em/></div></div>,
  },
]

const skills = ['Python', 'SQL', 'Data cleaning', 'Exploratory analysis', 'Regression modeling', 'MySQL', 'C# / .NET', 'Java', 'PHP', 'Git & GitHub']

function Arrow() {
  return <svg className="arrow" viewBox="0 0 18 18"><path d="M3 9h11M10 4l5 5-5 5"/></svg>
}

export default function App() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <main>
      <header>
        <a className="brand" href="#top">MH<span>.</span></a>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><i/><i/></button>
        <nav className={open ? 'open' : ''}>
          <a href="#work" onClick={close}>Work</a><a href="#about" onClick={close}>About</a><a href="#journey" onClick={close}>Journey</a>
          <a className="navCta" href="#contact" onClick={close}>Let&apos;s talk <Arrow/></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><i/>Aspiring data analyst · Dhaka</p>
          <h1>Curious mind.<br/><em>Clear</em> insights.</h1>
          <p className="intro">I&apos;m Muntasirul, a CSE undergraduate who enjoys finding patterns in messy data and building useful, human-centered software.</p>
          <div className="actions">
            <a className="button dark" href="#work">Explore my work <Arrow/></a>
            <a className="resume" href="/assets/muntasirul-hoque-cv.pdf" download>Download résumé ↓</a>
          </div>
        </div>
        <div className="portraitWrap">
          <div className="blob"/>
          <div className="portrait"><img src="/assets/muntasir-portrait.jpg" alt="Muntasirul Hoque smiling at a table"/></div>
          <div className="note"><small>Currently</small><b>Exploring data, one question at a time.</b></div>
          <span className="spark">✦</span>
        </div>
        <div className="proof"><div><b>3.83</b><span>CGPA / 4.00</span></div><div><b>3×</b><span>Dean&apos;s List</span></div><div><b>5+</b><span>Projects built</span></div></div>
      </section>

      <section className="work" id="work">
        <div className="heading">
          <p className="eyebrow"><i/>Selected work</p>
          <h2>Building with <em>purpose.</em></h2>
          <p>A selection of projects where data, systems, and practical problem-solving come together.</p>
        </div>
        <div className="projects">
          {projects.map(p => <article className={p.className} key={p.title}>
            <div className="projectCopy">
              <span className="num">{p.n}</span><small>{p.type}</small><h3>{p.title}</h3><p>{p.text}</p>
              <ul>{p.tools.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
            <div className="projectArt">{p.art}</div>
          </article>)}
        </div>
        <div className="also"><small>Also built</small><p>Café POS Management <span>·</span> Food Court Management</p></div>
      </section>

      <section className="about" id="about">
        <div className="gallery">
          <figure className="cube"><img src="/assets/muntasir-cubing.png" alt="Muntasirul competing in a timed Rubik's Cube event"/><figcaption><small>Beyond the screen</small>Speedcuber &amp; WCA volunteer</figcaption></figure>
          <figure className="award"><img src="/assets/muntasir-award.png" alt="Muntasirul holding a Dean's List honors certificate"/></figure>
          <div className="stamp" style={{ left: 'auto', right: '-2%', top: '40%' }}>MH</div>
        </div>
        <div className="aboutCopy">
          <p className="eyebrow"><i/>A little about me</p>
          <h2>More than the <em>numbers.</em></h2>
          <p className="lead">I&apos;m a Computer Science &amp; Engineering student at AIUB, drawn to the point where analytical thinking meets real-world impact.</p>
          <p>Whether I&apos;m cleaning a dataset, designing a database, or solving a cube against the clock, I bring the same mindset: understand the system, find the pattern, and keep improving.</p>
          <blockquote>“Good analysis doesn&apos;t just show what happened—it makes the next decision clearer.”</blockquote>
        </div>
      </section>

      <section className="skills">
        <div className="heading compact"><p className="eyebrow"><i/>My toolkit</p><h2>Skills I bring to the <em>table.</em></h2></div>
        <div className="skillCloud">{skills.map((s,i) => <span className={i===0||i===3?'accent':''} key={s}>{s}</span>)}</div>
      </section>

      <section className="journey" id="journey">
        <div className="heading compact"><p className="eyebrow"><i/>The journey so far</p><h2>Learning, leading, <em>doing.</em></h2></div>
        <div className="timeline">
          <article><time>2023 — Present</time><div><small>Education</small><h3>BSc in Computer Science &amp; Engineering</h3><b>American International University-Bangladesh</b><p>CGPA 3.83 / 4.00 · Three-time Dean&apos;s List honoree</p></div></article>
          <article><time>2022 — 2023</time><div><small>Leadership</small><h3>Secretary of Gaming &amp; Affairs</h3><b>Govt. Science College Science Club</b><p>Coordinated events, workshops, and Rubik&apos;s Cube sessions.</p></div></article>
          <article><time>2022</time><div><small>Achievement</small><h3>Bronze Medalist</h3><b>Cube Milao Bangladesh · WCA</b><p>A milestone built on focus, practice, and persistence.</p></div></article>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow light"><i/>Have an opportunity or an idea?</p>
        <h2>Let&apos;s turn questions<br/>into <em>answers.</em></h2>
        <a className="button limeBtn" href="mailto:muntasirulhoque7@gmail.com">Start a conversation <Arrow/></a>
        <div className="foot"><a className="brand" href="#top">MH<span>.</span></a><div><a href="mailto:muntasirulhoque7@gmail.com">Email</a><a href="tel:+8801791471601">Call</a><a href="/assets/muntasirul-hoque-cv.pdf" target="_blank">Résumé</a></div><p>Designed &amp; built with curiosity · Dhaka</p></div>
      </footer>
    </main>
  )
}
