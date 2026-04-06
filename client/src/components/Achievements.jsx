import './Achievements.css';
import { achievements } from '../data/resumeData';
import { useInView } from 'react-intersection-observer';

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="achievements" className="section achievements-section" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-tag">// achievements</span>
          <h2 className="section-title">Awards & <span>Recognition</span></h2>
          <p className="section-subtitle">Milestones and accolades from competitions, expos, and challenges.</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((ach, i) => (
            <div
              key={ach.title}
              className={`ach-card glass-card fade-in ${inView ? 'visible' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="ach-icon">{ach.icon}</div>
              <div className="ach-body">
                <div className="ach-header">
                  <h3 className="ach-title">{ach.title}</h3>
                  <span className="ach-year">{ach.year}</span>
                </div>
                <p className="ach-detail">{ach.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
