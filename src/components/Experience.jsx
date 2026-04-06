import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
}

const experiences = [
  {
    title: 'Adobe Student Campus Ambassador',
    company: 'Adobe',
    date: '2025 - 2026',
    description:
      'Representing Adobe on campus by leading creative workshops, promoting Adobe Express tools, and building community engagement in digital design.'
  },
  {
    title: 'Data Analytics Intern',
    company: 'Tata GenAI',
    date: '2025',
    description:
      'Used Data Analytics and GenAI to identify delinquency risk patterns and propose actionable AI-powered business solutions. Completed the internship with certification.'
  }
]

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="section-container">
        <motion.div className="section-header" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="section-label">// Experience</div>
          <h2 className="section-title">Internships & Roles</h2>
          <p className="section-subtitle">Real-world experience through industry internships and ambassadorships</p>
          <div className="section-divider" />
        </motion.div>

        <motion.div className="timeline" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {experiences.map((exp, i) => (
            <motion.div className="timeline-item" key={i} variants={fadeUp}>
              <div className="timeline-dot" />
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-card">
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-subtitle">{exp.company}</div>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
