import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiCpu, FiDatabase, FiAward } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section" id="about" ref={ref}>
      <div className="section-container">
        <motion.div className="section-header" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="section-label">// About Me</div>
          <h2 className="section-title">Turning Ideas Into Intelligent Solutions</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div className="about-grid" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div className="about-content" variants={fadeUp}>
            <p>
              I'm a passionate AI/ML enthusiast and Full-Stack Developer currently pursuing my B.E. in
              Computer Science and Engineering (AI & ML) at Sri Eshwar College of Engineering. With a
              strong foundation in machine learning, data science, and web development, I love
              building end-to-end solutions that make a real impact.
            </p>
            <p>
              As an Adobe Student Campus Ambassador, I represent Adobe on campus by leading creative workshops
              and building community engagement in digital design. I've also worked on real-world projects
              involving edge AI, NLP-driven systems, and credit scoring models.
            </p>

            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">🤖</div>
                <div className="highlight-title">AI & ML</div>
                <div className="highlight-value">TensorFlow, PyTorch, Scikit-learn</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🌐</div>
                <div className="highlight-title">Full Stack</div>
                <div className="highlight-value">React, Node.js, Java, MySQL</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">📊</div>
                <div className="highlight-title">Data Science</div>
                <div className="highlight-value">Pandas, NumPy, Matplotlib</div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🏆</div>
                <div className="highlight-title">Competitions</div>
                <div className="highlight-value">10+ National-Level Awards</div>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-image-area" variants={fadeUp}>
            <div className="about-visual">
              <div className="about-education">
                <div className="edu-item">
                  <div className="edu-degree">B.E. CSE (AI & ML)</div>
                  <div className="edu-school">Sri Eshwar College of Engineering</div>
                  <div className="edu-score">CGPA: 8.14 | 2024-2028</div>
                </div>
                <div className="edu-item">
                  <div className="edu-degree">HSC (Higher Secondary)</div>
                  <div className="edu-school">Bharathi Vidhyalaya Matric Hr. Sec. School</div>
                  <div className="edu-score">94.0% | 2022-2024</div>
                </div>
                <div className="edu-item">
                  <div className="edu-degree">SSLC (10th Standard)</div>
                  <div className="edu-school">Bharathi Vidhyalaya Matric Hr. Sec. School</div>
                  <div className="edu-score">97.6% | 2021-2022</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
