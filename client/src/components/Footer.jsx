import './Footer.css';
import { personal } from '../data/resumeData';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">PV</span>
            <span className="logo-bracket">/&gt;</span>
          </span>
          <p className="footer-tagline">
            Building intelligent systems at the intersection of AI, ML & Full-Stack.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {['about', 'skills', 'projects', 'internships', 'achievements', 'contact'].map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-socials-col">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href={personal.github} target="_blank" rel="noreferrer" className="footer-social-link" aria-label="GitHub">
              <FiGithub size={18} /> GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <FiLinkedin size={18} /> LinkedIn
            </a>
            <a href={`mailto:${personal.email}`} className="footer-social-link" aria-label="Email">
              <FiMail size={18} /> Email
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="divider" style={{ marginBottom: '20px' }} />
        <p>
          © {year} {personal.name} · Made with <FiHeart size={12} className="heart" /> using React + Node.js
        </p>
      </div>
    </footer>
  );
}
