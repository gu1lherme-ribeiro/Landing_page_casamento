import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './GoldDivider.css'

export default function GoldDivider() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <div className="gold-divider-wrapper" ref={ref}>
      <motion.div
        className="gold-divider"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="divider-line left" />
        <span className="divider-ornament">&#10047;</span>
        <span className="divider-line right" />
      </motion.div>
    </div>
  )
}
