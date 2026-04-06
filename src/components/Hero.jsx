import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="hero-content">
        <motion.div className="hero-badge" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span className="dot" />
          Open to Opportunities
        </motion.div>

        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Hi, I'm{' '}
          <span className="gradient-text">Priyavarshini V</span>
          <br />
          AI/ML Engineer &<br />
          Full-Stack Developer
        </motion.h1>

        <motion.p className="hero-description" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          B.E. CSE (AI & ML) student at Sri Eshwar College of Engineering with a passion for
          building intelligent systems, solving complex problems, and creating beautiful web experiences.
        </motion.p>

        <motion.div className="hero-buttons" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          <a href="#contact" className="btn-primary">
            <FiMail /> Get in Touch
          </a>
          <a href="#projects" className="btn-secondary">
            <FiDownload /> View Projects
          </a>
        </motion.div>

        <motion.div className="hero-stats" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Problems Solved</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8.14</div>
            <div className="stat-label">CGPA</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Achievements</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
