import './Skills.css';
import { skills } from '../data/resumeData';
import { useInView } from 'react-intersection-observer';
import {
  SiCplusplus, SiPython, SiMysql,
  SiHtml5, SiJavascript, SiCss3, SiReact, SiNodedotjs,
  SiGithub, SiFigma, SiTensorflow, SiPytorch,
  SiNumpy, SiVisualstudiocode, SiCanva,
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';

// Only include icons that are verified to exist in react-icons/si
const iconMap = {
  'C++': SiCplusplus,
  Python: SiPython,
  MySQL: SiMysql,
  HTML: SiHtml5,
  JavaScript: SiJavascript,
  CSS: SiCss3,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  GitHub: SiGithub,
  Figma: SiFigma,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  NumPy: SiNumpy,
  'VS Code': SiVisualstudiocode,
  Canva: SiCanva,
};

const categories = [
  { label: 'Languages', key: 'languages', color: '#7c3aed', emoji: '💻' },
  { label: 'Frameworks & Web', key: 'frameworks', color: '#06b6d4', emoji: '🌐' },
  { label: 'Data Science & ML', key: 'dataScience', color: '#10b981', emoji: '🧪' },
  { label: 'Tools', key: 'tools', color: '#f59e0b', emoji: '🔧' },
  { label: 'Concepts', key: 'concepts', color: '#ec4899', emoji: '🧠' },
];

function SkillBadge({ name, color }) {
  const Icon = iconMap[name] || null;
  return (
    <div className="skill-badge" style={{ '--skill-color': color }}>
      {Icon ? <Icon size={16} className="skill-icon" /> : <FiCode size={14} className="skill-icon" />}
      <span>{name}</span>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-tag">// technical skills</span>
          <h2 className="section-title">My <span>Toolkit</span></h2>
          <p className="section-subtitle">Technologies and tools I use to build production-ready solutions.</p>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.key}
              className={`skill-category glass-card fade-in ${inView ? 'visible' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="category-header">
                <span className="category-emoji">{cat.emoji}</span>
                <h3 className="category-label">{cat.label}</h3>
              </div>
              <div className="skill-badges">
                {skills[cat.key].map((s) => (
                  <SkillBadge key={s} name={s} color={cat.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
