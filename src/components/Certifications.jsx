import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
}

const certifications = [
  { name: 'Networking Basics', issuer: 'CCNA', year: '2026' },
  { name: 'Java Certification', issuer: 'Oracle', year: '2025' },
  { name: 'Introduction to Generative AI', issuer: 'IBM SkillsBuild', year: '2025' },
  { name: 'Data Structures in C and C++', issuer: 'Udemy', year: '2025' },
  { name: 'ServiceNow ITOM, Business Communication, Intro to UI/UX', issuer: 'Infosys Springboard', year: '2025' },
  { name: 'Python for ML, Prompt Engineering on ChatGPT', issuer: 'Great Learning', year: '2025' },
  { name: 'C Certification, C++ Certification', issuer: 'IIT Bombay', year: '2024' },
]

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section" id="certifications" ref={ref}>
      <div className="section-container">
        <motion.div className="section-header" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="section-label">// Credentials</div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Industry certifications validating my expertise</p>
          <div className="section-divider" />
        </motion.div>

        <motion.div className="certs-grid" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {certifications.map((cert, i) => (
            <motion.div className="cert-card" key={i} variants={fadeUp}>
              <div className="cert-icon">
                <FiAward />
              </div>
              <div className="cert-info">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
              <span className="cert-year">{cert.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
