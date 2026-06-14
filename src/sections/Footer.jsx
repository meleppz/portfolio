import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__content">
        <span className="footer__eyebrow">say hi</span>
        <h2 className="footer__title">
          Let's build something <span className="footer__title-accent">cool</span> together
        </h2>
        <a href="mailto:18224048@std.stei.itb.ac.id" className="footer__cta">
          18224048@std.stei.itb.ac.id <ArrowUpRight size={22} />
        </a>
      </div>

      <div className="footer__bottom">
        <span>© 2026 Melvin. Designed &amp; built with care.</span>
        <span className="footer__tag">made in Bandung ✦</span>
      </div>
    </footer>
  );
}
