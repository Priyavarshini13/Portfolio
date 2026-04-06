import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com/Priyavarshini13" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/priyavarshini-v" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:priyavarshini.v2024aiml@sece.ac.in" aria-label="Email">
            <FiMail />
          </a>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} <span>Priyavarshini V</span>. Built with React & ❤️
        </p>
      </div>
    </footer>
  )
}
