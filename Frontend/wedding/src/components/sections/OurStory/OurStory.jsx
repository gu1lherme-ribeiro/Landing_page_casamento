import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './OurStory.css'

const timeline = [
  {
    year: '2019',
    title: 'Onde Tudo Comecou',
    text: 'Um encontro inesperado que mudou nossas vidas para sempre. O destino nos uniu e desde entao nunca mais nos separamos.',
  },
  {
    year: '2021',
    title: 'Nosso Primeiro Lar',
    text: 'Decidimos construir nossa historia juntos, unindo sonhos e criando um lar cheio de amor e cumplicidade.',
  },
  {
    year: '2025',
    title: 'O Pedido',
    text: 'Um momento magico e emocionante que selou nosso compromisso de caminhar juntos para o resto da vida.',
  },
  {
    year: '2026',
    title: 'O Grande Dia',
    text: 'Chegou o momento de celebrar nosso amor perante todos aqueles que sao especiais em nossas vidas.',
  },
]

export default function OurStory() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="our-story" id="our-story" ref={ref}>
      <div className="our-story-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="section-subtitle">Um pouco sobre nos</p>
          <h2 className="section-title">Nossa Historia</h2>
          <p className="section-description">
            Cada capitulo da nossa historia foi escrito com amor, respeito e a certeza
            de que estavamos destinados a viver juntos.
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-text">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
