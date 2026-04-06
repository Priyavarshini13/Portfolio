import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

const profiles = [
  {
    name: 'SkillRack',
    icon: '🏅',
    iconBg: 'rgba(108, 99, 255, 0.15)',
    stat: '1000+ Problems Solved',
    detail: '283 Bronze Coins',
    url: '#'
  },
  {
    name: 'LeetCode',
    icon: '🧩',
    iconBg: 'rgba(245, 158, 11, 0.15)',
    stat: '100 Problems Resolved',
    detail: 'Data Structures & Algorithms',
    url: '#'
  },
  {
    name: 'CodeChef',
    icon: '👨‍🍳',
    iconBg: 'rgba(0, 212, 170, 0.15)',
    stat: '50 Problems Finished',
    detail: 'Bronze Badge',
    url: '#'
  },
  {
    name: 'HackerRank',
    icon: '💚',
    iconBg: 'rgba(59, 130, 246, 0.15)',
    stat: 'C Language Badge',
    detail: 'Certified',
    url: '#'
  }
]

export default function CodingProfiles() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section" id="coding" ref={ref}>
      <div className="section-container">
        <motion.div className="section-header" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="section-label">// Competitive Coding</div>
          <h2 className="section-title">Coding Profiles</h2>
          <p className="section-subtitle">Consistently solving problems across competitive coding platforms</p>
          <div className="section-divider" />
        </motion.div>

        <motion.div className="profiles-grid" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {profiles.map((p, i) => (
            <motion.div className="profile-card" key={i} variants={fadeUp}>
              <div className="profile-icon" style={{ background: p.iconBg }}>
                {p.icon}
              </div>
              <h3 className="profile-name">{p.name}</h3>
              <div className="profile-stat">{p.stat}</div>
              <div className="profile-detail">{p.detail}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
