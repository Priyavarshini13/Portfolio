import './About.css';
import { education, personal } from '../data/resumeData';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-tag">// about me</span>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <p className="section-subtitle">
            Passionate AI/ML student on a mission to build smarter, faster, and cleaner solutions.
          </p>
        </div>

        <div className="about-layout">
          {/* Left — bio card */}
          <div className={`about-bio glass-card fade-in ${inView ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
            <div className="bio-avatar">
              <span className="avatar-initials">PV</span>
              <div className="avatar-ring" />
            </div>

            <h3>{personal.name}</h3>
            <p className="bio-role">{personal.title}</p>

            <p className="bio-description">
              I'm a 2nd-year B.E. CSE (AIML) student at <strong>{personal.college}</strong> with a passion for
              solving real-world problems through Artificial Intelligence, Machine Learning, and Full-Stack Development.
              I've competed in national-level hackathons, won multiple project expos, and hold certifications from
              IIT Bombay, IBM, Oracle, and Cisco.
            </p>

            <div className="bio-meta">
              <div className="meta-item">
                <span className="meta-icon">📍</span>
                <span>Coimbatore, Tamil Nadu</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🎓</span>
                <span>{personal.degree} — CGPA {personal.cgpa}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📧</span>
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
            </div>
          </div>

          {/* Right — education */}
          <div className={`about-edu fade-in ${inView ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="edu-heading">Education</h3>
            <div className="edu-timeline">
              {education.map((edu, i) => (
                <div className="edu-card glass-card" key={i}>
                  <div className="edu-icon">{edu.icon}</div>
                  <div className="edu-details">
                    <h4>{edu.level}</h4>
                    <p className="edu-institution">{edu.institution}</p>
                    <div className="edu-meta-row">
                      <span className="edu-score">{edu.score}</span>
                      <span className="edu-year badge">{edu.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
