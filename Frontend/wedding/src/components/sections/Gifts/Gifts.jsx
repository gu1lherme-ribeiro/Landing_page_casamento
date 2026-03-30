import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGift, FiCreditCard, FiCopy } from 'react-icons/fi'
import { useState } from 'react'
import './Gifts.css'

export default function Gifts() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copied, setCopied] = useState(false)

  const pixKey = 'camila.guilherme@email.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="gifts" id="gifts" ref={ref}>
      <div className="gifts-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="section-subtitle">Com carinho</p>
          <h2 className="section-title">Lista de Presentes</h2>
          <p className="section-description">
            Sua presenca e o nosso maior presente! Mas se desejar nos presentear,
            ficaremos muito gratos.
          </p>
        </motion.div>

        <div className="gifts-grid">
          <motion.div
            className="gift-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="gift-icon-wrapper">
              <FiCreditCard className="gift-icon" />
            </div>
            <h3 className="gift-card-title">PIX</h3>
            <p className="gift-card-text">
              Contribua com qualquer valor atraves da nossa chave PIX
            </p>
            <div className="pix-key-container">
              <span className="pix-key">{pixKey}</span>
              <button className="pix-copy-btn" onClick={handleCopy}>
                <FiCopy />
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
          </motion.div>

          <motion.div
            className="gift-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="gift-icon-wrapper">
              <FiGift className="gift-icon" />
            </div>
            <h3 className="gift-card-title">Lista de Presentes</h3>
            <p className="gift-card-text">
              Acesse nossa lista de presentes e escolha o que desejar
            </p>
            <a href="#" className="gift-list-btn">
              Ver Lista Completa
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
