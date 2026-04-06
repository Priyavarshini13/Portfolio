import './Certifications.css';
import { certifications } from '../data/resumeData';
import { useInView } from 'react-intersection-observer';
import { FiAward } from 'react-icons/fi';

const providerColors = {
  Cisco: '#1c6ef3',
  Oracle: '#cc0000',
  IBM: '#1c6ef3',
  Udemy: '#a435f0',
  Infosys: '#007cc3',
  'Great Learning': '#e74c3c',
  'IIT Bombay': '#ff6b35',
};

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="certifications" className="section certs-section" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-tag">// certifications</span>
          <h2 className="section-title">Certified <span>Expertise</span></h2>
          <p className="section-subtitle">Validated skills from world-class institutions and platforms.</p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className={`cert-card glass-card fade-in ${inView ? 'visible' : ''}`}
              style={{
                animationDelay: `${i * 0.08}s`,
                '--cert-color': providerColors[cert.provider] || '#7c3aed',
              }}
            >
              <div className="cert-icon-wrap">
                <FiAward size={22} />
              </div>
              <div className="cert-info">
                <p className="cert-name">{cert.name}</p>
                <div className="cert-meta">
                  <span className="cert-provider">{cert.provider}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
