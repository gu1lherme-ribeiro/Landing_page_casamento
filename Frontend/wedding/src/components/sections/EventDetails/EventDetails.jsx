import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiClock, FiCalendar, FiMusic, FiHeart } from 'react-icons/fi'
import './EventDetails.css'

const events = [
  {
    icon: FiHeart,
    title: 'Cerimonia',
    time: '16:00',
    description: 'Uma celebracao intima e emocionante do nosso amor.',
    location: 'Igreja Matriz de Sao Paulo',
    address: 'Praca da Se, 01001-000, Sao Paulo - SP',
    mapUrl: 'https://maps.google.com/?q=Praca+da+Se+Sao+Paulo',
  },
  {
    icon: FiMusic,
    title: 'Recepcao',
    time: '18:30',
    description: 'Uma noite inesquecivel de celebracao com as pessoas que amamos.',
    location: 'Espaco Villa Garden',
    address: 'Rua das Flores, 500, Sao Paulo - SP',
    mapUrl: 'https://maps.google.com/?q=Espaco+Villa+Garden+Sao+Paulo',
  },
]

export default function EventDetails() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="event-details" id="event-details" ref={ref}>
      <div className="event-details-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="section-subtitle">Onde e quando</p>
          <h2 className="section-title">Cerimonia & Recepcao</h2>
          <p className="section-description">
            Aguardamos ansiosamente a sua presenca para celebrar conosco este dia especial.
          </p>
        </motion.div>

        <div className="events-grid">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              className="event-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
            >
              <div className="event-icon-wrapper">
                <event.icon className="event-icon" />
              </div>
              <h3 className="event-card-title">{event.title}</h3>
              <p className="event-card-description">{event.description}</p>

              <div className="event-info-list">
                <div className="event-info-item">
                  <FiCalendar className="info-icon" />
                  <span>20 de Setembro de 2026</span>
                </div>
                <div className="event-info-item">
                  <FiClock className="info-icon" />
                  <span>{event.time}</span>
                </div>
                <div className="event-info-item">
                  <FiMapPin className="info-icon" />
                  <div>
                    <strong>{event.location}</strong>
                    <br />
                    <span className="event-address">{event.address}</span>
                  </div>
                </div>
              </div>

              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="event-map-btn"
              >
                <FiMapPin />
                Ver no Mapa
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="dress-code"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="dress-code-title">Dress Code</h3>
          <p className="dress-code-text">Traje Social / Black Tie Opcional</p>
          <div className="dress-code-colors">
            <span className="color-swatch" style={{ background: '#1a1a1a' }} title="Preto" />
            <span className="color-swatch" style={{ background: '#2C1810' }} title="Marrom Escuro" />
            <span className="color-swatch" style={{ background: '#C9A96E' }} title="Dourado" />
            <span className="color-swatch" style={{ background: '#8B6F5A' }} title="Nude" />
            <span className="color-swatch" style={{ background: '#1a2a3a' }} title="Azul Marinho" />
          </div>
          <p className="dress-code-note">Evite branco, pois e reservado para a noiva</p>
        </motion.div>
      </div>
    </section>
  )
}
