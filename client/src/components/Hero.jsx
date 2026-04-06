import './Hero.css';
import { personal } from '../data/resumeData';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Animated background orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Available for opportunities</span>
        </div>

        <h1 className="hero-name">
          Hi, I'm <span className="gradient-text">{personal.name}</span>
        </h1>

        <div className="hero-typewriter">
          <TypeAnimation
            sequence={[
              'AI/ML Engineer', 2000,
              'Full-Stack Developer', 2000,
              'Edge Computing Enthusiast', 2000,
              'Problem Solver', 2000,
              'Open Source Contributor', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typewriter-text"
          />
        </div>

        <p className="hero-description">
          B.E. CSE (AIML) student at <strong>{personal.college}</strong> — building intelligent systems
          at the intersection of <span className="highlight">Edge AI</span>, <span className="highlight">Full-Stack Development</span>,
          and <span className="highlight">Data Science</span>.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <span>→</span>
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>

        <div className="hero-socials">
          <a href={personal.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href={`mailto:${personal.email}`} className="social-link" aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Problems Solved</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">8.14</span>
            <span className="stat-label">CGPA</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">9+</span>
            <span className="stat-label">Achievements</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-wheel" />
      </div>
    </section>
  );
}
