import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

const projects = [
  {
    title: 'Silicon Labs Edge Intelligence',
    icon: '🐝',
    iconBg: 'rgba(245, 158, 11, 0.15)',
    description:
      'Developing a BeeHalo — an Edge ML-based hive health monitoring system using vibro-acoustic sensing and Silicon Labs SiWx917 for real-time colony stress detection.',
    tech: ['Edge ML', 'Silicon Labs', 'IoT', 'Acoustic AI'],
    date: 'Dec 2025 - Jan 2026'
  },
  {
    title: 'Customer Feedback Analyser & Response Generator',
    icon: '💬',
    iconBg: 'rgba(108, 99, 255, 0.15)',
    description:
      'Designed and implemented an NLP-driven customer feedback analysis and response generation system to automatically classify sentiments and generate context-aware replies.',
    tech: ['NLP', 'Python', 'Sentiment Analysis', 'ML'],
    date: 'August 2025'
  },
  {
    title: 'Credit Score Classification',
    icon: '📈',
    iconBg: 'rgba(0, 212, 170, 0.15)',
    description:
      'Built using ML (Logistic Regression, Random Forest, XGBoost) with 76% accuracy and improved fairness via model optimization techniques.',
    tech: ['Scikit-learn', 'XGBoost', 'Random Forest', 'Python'],
    date: 'April 2025'
  },
  {
    title: 'Contact Book Management System',
    icon: '📇',
    iconBg: 'rgba(255, 107, 157, 0.15)',
    description:
      'A JavaFX-based Contact Book application integrated with MySQL using JDBC for CRUD operations and modular architecture design.',
    tech: ['JavaFX', 'MySQL', 'JDBC', 'Java'],
    date: 'February 2025'
  },
  {
    title: 'Vintage Vision (CREATHON)',
    icon: '🏡',
    iconBg: 'rgba(59, 130, 246, 0.15)',
    description:
      'An elegant E-commerce website offering timeless, handcrafted furniture with a rustic charm. Features seamless shopping & curated vintage collections for every home.',
    tech: ['HTML', 'CSS', 'JavaScript', 'E-Commerce'],
    date: 'December 2024'
  }
]

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="section-container">
        <motion.div className="section-header" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="section-label">// Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of projects showcasing my skills in AI/ML and full-stack development</p>
          <div className="section-divider" />
        </motion.div>

        <motion.div className="projects-grid" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {projects.map((project, i) => (
            <motion.div className="project-card" key={i} variants={fadeUp}>
              <div className="project-header">
                <div className="project-icon" style={{ background: project.iconBg }}>
                  {project.icon}
                </div>
              </div>
              <div className="project-date">{project.date}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
