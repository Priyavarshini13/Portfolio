import './Projects.css';
import { projects } from '../data/resumeData';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';

function ProjectCard({ project, index, inView }) {
  return (
    <div
      className={`project-card glass-card fade-in ${inView ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s`, '--project-color': project.color }}
    >
      <div className="project-top">
        <div className="project-icon-wrap">
          <span className="project-icon">{project.icon}</span>
        </div>
        <div className="project-header-right">
          <span className="project-duration">{project.duration}</span>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link-btn">
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>

      <div className="project-accent" />
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-tag">// projects</span>
          <h2 className="section-title">What I've <span>Built</span></h2>
          <p className="section-subtitle">
            A showcase of projects spanning Edge AI, NLP, ML, and Full-Stack Development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <ProjectCard key={proj.title} project={proj} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
