import { motion } from 'framer-motion'
import './Loader.css'

export default function Loader() {
  return (
    <motion.div
      className="loader-overlay"
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="loader-content">
        <motion.div
          className="loader-ornament top"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.p
          className="loader-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Celebre conosco
        </motion.p>
        <motion.h1
          className="loader-names"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Camila <span className="loader-amp">&</span> Guilherme
        </motion.h1>
        <motion.div
          className="loader-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          20 . 09 . 2026
        </motion.div>
        <motion.div
          className="loader-ornament bottom"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <motion.div
          className="loader-ring-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="loader-rings">
            <span className="ring ring-left" />
            <span className="ring ring-right" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
