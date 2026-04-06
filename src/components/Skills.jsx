import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    iconBg: 'rgba(108, 99, 255, 0.15)',
    skills: ['C', 'C++', 'Python', 'Java', 'MySQL', 'Intermediate']
  },
  {
    title: 'Frameworks & Web',
    icon: '🌐',
    iconBg: 'rgba(0, 212, 170, 0.15)',
    skills: ['HTML', 'JavaScript', 'CSS', 'React.js', 'Node.js', 'Basic']
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    iconBg: 'rgba(255, 107, 157, 0.15)',
    skills: ['VS Code', 'Canva', 'Dev C++', 'PowerPoint', 'GitHub', 'Jupyter Notebooks', 'Figma']
  },
  {
    title: 'Data Science & ML',
    icon: '📊',
    iconBg: 'rgba(245, 158, 11, 0.15)',
    skills: ['Pandas', 'NumPy', 'SciPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'TensorFlow', 'PyTorch']
  },
  {
    title: 'Core Concepts',
    icon: '🧠',
    iconBg: 'rgba(59, 130, 246, 0.15)',
    skills: ['DSA (Intermediate)', 'OOPS (Intermediate)', 'Machine Learning', 'NLP', 'Edge AI']
  }
]

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="section-container">
        <motion.div className="section-header" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="section-label">// Tech Stack</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies and tools I work with to build intelligent solutions</p>
          <div className="section-divider" />
        </motion.div>

        <motion.div className="skills-grid" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {skillCategories.map((cat) => (
            <motion.div className="skill-category" key={cat.title} variants={fadeUp}>
              <div className="skill-category-header">
                <div className="skill-category-icon" style={{ background: cat.iconBg }}>
                  {cat.icon}
                </div>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
