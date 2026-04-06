import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
}

const achievements = [
  {
    medal: '🏆',
    title: 'TN WISE (TN Women in Science & Engineering)',
    desc: 'Got into Top 14 and Secured 4th Place & Special Prize ₹10,000',
    year: '2026'
  },
  {
    medal: '🥇',
    title: 'Silicon Labs Edge Intelligence Challenge',
    desc: 'Top 10 with a grant cash of ₹10,000 & development kit',
    year: '2026'
  },
  {
    medal: '🏅',
    title: 'National Entrepreneurship Challenge E-Summit 21st Edition',
    desc: 'Grand Finalist — IIT Bombay',
    year: '2025'
  },
  {
    medal: '🎯',
    title: 'MSME Idea Hackathon 5.0',
    desc: 'Got Shortlisted as Finalist',
    year: '2025'
  },
  {
    medal: '🚀',
    title: 'Startup TN MSME AI Grand Challenge',
    desc: 'Got Shortlisted and Participated in Finale',
    year: '2025'
  },
  {
    medal: '🥇',
    title: 'FRESHATHON (Project Expo)',
    desc: 'Secured 1st Place in AIML Dept, 2nd Place in overall 1st years (SECE College)',
    year: '2025'
  },
  {
    medal: '🥉',
    title: 'GLOBAL LEE',
    desc: 'Secured 3rd Place in Leetcode Competition (SECE College)',
    year: '2024'
  },
  {
    medal: '🥇',
    title: 'IRISH 2K25',
    desc: 'Secured 1st Place in Paper Presentation (PACET College)',
    year: '2024'
  },
  {
    medal: '🏆',
    title: 'Great Learning',
    desc: 'Python for Machine Learning, Prompt Engineering on ChatGPT',
    year: '2025'
  },
  {
    medal: '🥇',
    title: 'CREATHON (Project Expo)',
    desc: 'Secured 1st Place in creating an E-COMMERCE WEBSITE (SECE College)',
    year: '2024'
  }
]

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section" id="achievements" ref={ref}>
      <div className="section-container">
        <motion.div className="section-header" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="section-label">// Recognition</div>
          <h2 className="section-title">Achievements & Awards</h2>
          <p className="section-subtitle">National-level recognitions and hackathon victories</p>
          <div className="section-divider" />
        </motion.div>

        <motion.div className="achievements-list" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {achievements.map((a, i) => (
            <motion.div className="achievement-item" key={i} variants={fadeUp}>
              <span className="achievement-medal">{a.medal}</span>
              <div className="achievement-content">
                <div className="achievement-title">{a.title}</div>
                <div className="achievement-desc">{a.desc}</div>
              </div>
              <span className="achievement-year">{a.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
