import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open mailto link as fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.open(`mailto:priyavarshini.v2024aiml@sece.ac.in?subject=${subject}&body=${body}`)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="section-container">
        <motion.div className="section-header" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="section-label">// Let's Connect</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>
          <div className="section-divider" />
        </motion.div>

        <motion.div className="contact-wrapper" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              I'm currently looking for internship opportunities and exciting projects
              to collaborate on. Whether you have a question or just want to say hi,
              my inbox is always open!
            </p>
            <div className="contact-links">
              <a href="mailto:priyavarshini.v2024aiml@sece.ac.in" className="contact-link-item">
                <FiMail className="contact-link-icon" />
                priyavarshini.v2024aiml@sece.ac.in
              </a>
              <a href="tel:+919342676486" className="contact-link-item">
                <FiPhone className="contact-link-icon" />
                +91 9342676486
              </a>
              <a href="https://linkedin.com/in/priyavarshini-v" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <FiLinkedin className="contact-link-icon" />
                LinkedIn
              </a>
              <a href="https://github.com/Priyavarshini13" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <FiGithub className="contact-link-icon" />
                GitHub
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="form-submit" disabled={submitted}>
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
