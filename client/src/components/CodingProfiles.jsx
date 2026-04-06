import './CodingProfiles.css';
import { codingProfiles } from '../data/resumeData';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';

export default function CodingProfiles() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="coding" className="section coding-section" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-tag">// coding profiles</span>
          <h2 className="section-title">Where I <span>Code</span></h2>
          <p className="section-subtitle">Competitive programming and problem-solving across platforms.</p>
        </div>

        <div className="coding-grid">
          {codingProfiles.map((profile, i) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className={`coding-card glass-card fade-in ${inView ? 'visible' : ''}`}
              style={{ animationDelay: `${i * 0.1}s`, '--platform-color': profile.color }}
            >
              <div className="coding-top">
                <span className="coding-icon">{profile.icon}</span>
                <FiExternalLink size={16} className="coding-arrow" />
              </div>
              <h3 className="coding-platform">{profile.platform}</h3>
              <p className="coding-stats">{profile.stats}</p>
              <div className="coding-bar" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
