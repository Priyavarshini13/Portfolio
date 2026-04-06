import './Contact.css';
import { personal } from '../data/resumeData';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from 'react-icons/fi';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post(`${API_BASE}/contact`, form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${inView ? 'visible' : ''}`}>
          <span className="section-tag">// contact</span>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <p className="section-subtitle">
            Open for internships, collaboration, hackathons, and exciting opportunities!
          </p>
        </div>

        <div className="contact-layout">
          {/* Left info */}
          <div className={`contact-info fade-in ${inView ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
            <h3>Reach Out Directly</h3>
            <p>
              Whether you're looking for a passionate AI/ML developer, want to collaborate on a project,
              or just want to say hi — my inbox is always open.
            </p>

            <div className="contact-links">
              <a href={`mailto:${personal.email}`} className="contact-link">
                <div className="contact-link-icon"><FiMail size={20} /></div>
                <div>
                  <div className="link-label">Email</div>
                  <div className="link-value">{personal.email}</div>
                </div>
              </a>
              <a href={`tel:${personal.phone}`} className="contact-link">
                <div className="contact-link-icon"><FiPhone size={20} /></div>
                <div>
                  <div className="link-label">Phone</div>
                  <div className="link-value">{personal.phone}</div>
                </div>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon"><FiLinkedin size={20} /></div>
                <div>
                  <div className="link-label">LinkedIn</div>
                  <div className="link-value">Connect with me</div>
                </div>
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon"><FiGithub size={20} /></div>
                <div>
                  <div className="link-label">GitHub</div>
                  <div className="link-value">View my code</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className={`contact-form-wrap glass-card fade-in ${inView ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            {status === 'success' ? (
              <div className="form-success">
                <span className="success-icon">✅</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon!</p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="I'd like to discuss..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                {status === 'error' && (
                  <p className="form-error">Something went wrong. Please try emailing directly.</p>
                )}
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : <><FiSend size={16} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
