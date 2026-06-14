import { AtSign, Link2, Mail, ArrowUpRight } from 'lucide-react';
import './About.css';

const stats = [
  { value: '2nd', label: 'year Information System & Technology student @ ITB' },
  { value: '1st', label: 'place, Telkom University UI/UX comp.' },
  { value: '2', label: 'leadership roles in design teams' },
];

const roles = [
  { org: 'GDGoC ITB', role: 'Design Lead', color: 'coral' },
  { org: 'Arkavidia 11.0', role: 'Head of Graphic Design', color: 'violet' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__heading">
        <span className="about__eyebrow">who's this?</span>
        <h2 className="about__title">
          A bit <span className="about__title-accent">about me</span>
        </h2>
      </div>

      <div className="about__grid">
        <div className="about__text">
          <p>
            I'm an Information System &amp; Technology student at ITB who
            gets way too excited about pixels, grids, and the little
            interactions that make an interface feel right.
          </p>
          <p>
            Right now I lead creative direction for two student
            organizations, balancing strategy with hands-on design, from
            wireframes and prototypes to full visual identities.
          </p>

          <div className="about__roles">
            {roles.map((r) => (
              <div key={r.org} className={`about__role about__role--${r.color}`}>
                <span className="about__role-org">{r.org}</span>
                <span className="about__role-title">{r.role}</span>
              </div>
            ))}
          </div>

          <div className="about__socials">
            <a href="https://instagram.com/melvin.xrsyad" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="about__social"><AtSign size={18} /></a>
            <a href="https://www.linkedin.com/in/melvin-irsyad-kuncoro-7b3340338/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="about__social"><Link2 size={18} /></a>
            <a href="mailto:your_email@example.com" aria-label="Email" className="about__social"><Mail size={18} /></a>
            <a href="#contact" className="about__cv">
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="about__stats">
          {stats.map((s) => (
            <div key={s.label} className="about__stat">
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
