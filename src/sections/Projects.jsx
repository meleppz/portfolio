import { ArrowUpRight } from 'lucide-react';
import projectGdgoc from '../assets/images/project-gdgoc.png';
import projectArkavidia from '../assets/images/project-arkavidia.png';
import projectLockin from '../assets/images/project-lockin.png';
import './Projects.css';

const projects = [
  {
    id: 'gdgoc',
    title: 'GDGoC ITB',
    tag: 'Brand & Visual System',
    desc: 'Visual identity and design direction for Google Developer Groups on Campus ITB.',
    img: projectGdgoc,
    color: 'coral',
    rotate: -3,
  },
  {
    id: 'arkavidia',
    title: 'Arkavidia 10.0',
    tag: 'Event Graphics',
    desc: 'Graphic design suite for ITB\'s flagship tech & business competition.',
    img: projectArkavidia,
    color: 'violet',
    rotate: 2,
  },
  {
    id: 'lockin',
    title: 'LockIn',
    tag: 'UI/UX Case Study',
    desc: 'Award-winning UI/UX concept — 1st place at Telkom University\'s design competition.',
    img: projectLockin,
    color: 'cyan',
    rotate: -2,
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__heading">
        <span className="projects__eyebrow">selected work</span>
        <h2 className="projects__title">
          Things I've <span className="projects__title-accent">made</span>
        </h2>
      </div>

      <div className="projects__grid">
        {projects.map((p) => (
          <a
            key={p.id}
            href="#"
            className={`projects__card projects__card--${p.color}`}
            style={{ '--rotate': `${p.rotate}deg` }}
          >
            <div className="projects__thumb">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="projects__info">
              <span className="projects__tag">{p.tag}</span>
              <h3 className="projects__name">{p.title}</h3>
              <p className="projects__desc">{p.desc}</p>
            </div>
            <span className="projects__arrow">
              <ArrowUpRight size={20} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
