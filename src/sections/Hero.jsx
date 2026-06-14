import profilePhoto from '../assets/images/profile-photo.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__noise" aria-hidden="true" />

      <nav className="hero__nav">
        <span className="hero__logo">MEL<span className="hero__logo-dot">●</span></span>
        <div className="hero__nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero__content">
        <p className="hero__eyebrow">
          <span className="hero__pulse" /> open for collabs · Bandung, ID
        </p>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--outline">DESIGN</span>
          <span className="hero__title-line hero__title-line--fill">
            MELVIN
            <span className="hero__star" aria-hidden="true">✦</span>
          </span>
          <span className="hero__title-line hero__title-line--outline">MAKES IT</span>
        </h1>

        <div className="hero__sub">
          <p className="hero__tagline">
            UI/UX Designer &amp; Graphic Designer crafting interfaces and visuals
            that feel as good as they look.
          </p>
          <div className="hero__badges">
            <span className="hero__badge hero__badge--coral">UI/UX Design</span>
            <span className="hero__badge hero__badge--violet">Graphic Design</span>
            <span className="hero__badge hero__badge--yellow">ITB '24</span>
          </div>
        </div>
      </div>

      <div className="hero__photo-frame">
        <img src={profilePhoto} alt="Melvin" className="hero__photo" />
        <span className="hero__photo-tag">that's me!</span>
      </div>

      <div className="hero__scroll">
        <span>scroll</span>
        <span className="hero__scroll-arrow">↓</span>
      </div>
    </section>
  );
}
