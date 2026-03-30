import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Countdown.css'

const WEDDING_DATE = new Date('2026-09-20T16:00:00')

function calculateTimeLeft() {
  const diff = WEDDING_DATE - new Date()
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: 'Dias', value: timeLeft.dias },
    { label: 'Horas', value: timeLeft.horas },
    { label: 'Minutos', value: timeLeft.minutos },
    { label: 'Segundos', value: timeLeft.segundos },
  ]

  return (
    <section className="countdown" id="countdown" ref={ref}>
      <div className="countdown-bg-pattern" />
      <div className="countdown-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="countdown-script">Contagem regressiva</p>
          <h2 className="countdown-title">Para o Grande Dia</h2>
        </motion.div>

        <div className="countdown-units">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              className="countdown-unit"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              <span className="countdown-number">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="countdown-label">{unit.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="countdown-date-text"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          20 de Setembro de 2026 &mdash; as 16h00
        </motion.p>
      </div>
    </section>
  )
}
