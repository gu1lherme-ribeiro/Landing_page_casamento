import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import './Navbar.css'

const navItems = [
  { to: 'hero', label: 'Inicio' },
  { to: 'our-story', label: 'Nossa Historia' },
  { to: 'countdown', label: 'Contagem' },
  { to: 'event-details', label: 'Cerimonia' },
  { to: 'gallery', label: 'Galeria' },
  { to: 'rsvp', label: 'Confirmar' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="navbar-inner">
          <Link to="hero" smooth={true} duration={800} className="navbar-logo">
            <span className="logo-script">C</span>
            <span className="logo-amp">&</span>
            <span className="logo-script">G</span>
          </Link>

          <div className="navbar-links">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={800}
                offset={-80}
                spy={true}
                activeClass="active"
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="navbar-burger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`burger-line ${mobileOpen ? 'open' : ''}`} />
            <span className={`burger-line ${mobileOpen ? 'open' : ''}`} />
            <span className={`burger-line ${mobileOpen ? 'open' : ''}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
