import './Internships.css';
import { internships } from '../data/resumeData';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';

export default function Internships() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="internships" className="section internships-section" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-tag">// internships</span>
          <h2 className="section-title">Industry <span>Experience</span></h2>
          <p className="section-subtitle">Real-world exposure through impactful internships and programs.</p>
        </div>

        <div className="internships-list">
          {internships.map((intern, i) => (
            <div
              key={intern.title}
              className={`intern-card glass-card fade-in ${inView ? 'visible' : ''}`}
              style={{ animationDelay: `${i * 0.15}s`, '--intern-color': intern.color }}
            >
              <div className="intern-timeline-dot" />

              <div className="intern-content">
                <div className="intern-header">
                  <div>
                    <h3 className="intern-title">{intern.title}</h3>
                    <p className="intern-company">{intern.company} · {intern.duration}</p>
                  </div>
                  {intern.certificate && (
                    <a href={intern.certificate} target="_blank" rel="noreferrer" className="cert-link">
                      <FiExternalLink size={14} /> View Certificate
                    </a>
                  )}
                </div>

                <p className="intern-desc">{intern.description}</p>

                <div className="intern-tags">
                  {intern.tags.map((tag) => (
                    <span key={tag} className="intern-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
