import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-overlay" />
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              fontSize: `${4 + Math.random() * 6}px`,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-ornament-top"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        <motion.p
          className="hero-invite"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Temos a honra de convidar voce para o nosso casamento
        </motion.p>

        <motion.h1
          className="hero-names"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <span className="name-first">Camila</span>
          <span className="name-amp">&</span>
          <span className="name-second">Guilherme</span>
        </motion.h1>

        <motion.div
          className="hero-date-location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <span className="hero-line" />
          <p className="hero-date">20 de Setembro de 2026</p>
          <p className="hero-location">Sao Paulo, Brasil</p>
          <span className="hero-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <Link to="rsvp" smooth={true} duration={800} offset={-80}>
            <button className="hero-cta">
              Confirmar Presenca
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <Link to="our-story" smooth={true} duration={800} offset={-80}>
            <div className="scroll-mouse">
              <div className="scroll-wheel" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
