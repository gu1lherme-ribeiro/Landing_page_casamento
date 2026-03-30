import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <footer className="footer" id="contact" ref={ref}>
      <div className="footer-bg" />
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="footer-script">Com todo nosso amor</p>
          <h2 className="footer-names">Camila & Guilherme</h2>
          <p className="footer-date">20 de Setembro de 2026</p>

          <div className="footer-divider" />

          <div className="footer-contact">
            <p className="footer-contact-label">Entre em Contato</p>
            <div className="footer-social">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/camilaeguilherme"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:camila.guilherme@email.com"
                className="social-link"
                title="E-mail"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-divider" />

          <p className="footer-hashtag">#CamilaEGuilherme2026</p>

          <p className="footer-copyright">
            Feito com amor para o nosso grande dia
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
