import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './RSVP.css'

export default function RSVP() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    dietary: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="rsvp" id="rsvp" ref={ref}>
      <div className="rsvp-bg-pattern" />
      <div className="rsvp-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="rsvp-script">Esperamos por voce</p>
          <h2 className="rsvp-title">Confirme sua Presenca</h2>
          <p className="rsvp-description">
            Sua presenca e o maior presente que podemos receber.
            Por favor, confirme ate 20 de Agosto de 2026.
          </p>
        </motion.div>

        {!submitted ? (
          <motion.form
            className="rsvp-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Numero de Convidados</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="1">1 pessoa</option>
                  <option value="2">2 pessoas</option>
                  <option value="3">3 pessoas</option>
                  <option value="4">4 pessoas</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Voce ira comparecer?</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === 'yes'}
                      onChange={handleChange}
                    />
                    <span className="radio-custom" />
                    Sim, com alegria!
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === 'no'}
                      onChange={handleChange}
                    />
                    <span className="radio-custom" />
                    Infelizmente nao
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Restricoes Alimentares</label>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="form-input"
                placeholder="Alguma restricao alimentar? (opcional)"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Mensagem para os Noivos</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="Deixe uma mensagem carinhosa... (opcional)"
                rows={4}
              />
            </div>

            <button type="submit" className="rsvp-submit">
              Confirmar Presenca
            </button>
          </motion.form>
        ) : (
          <motion.div
            className="rsvp-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="success-icon">&#10003;</div>
            <h3 className="success-title">Obrigado, {formData.name}!</h3>
            <p className="success-text">
              {formData.attending === 'yes'
                ? 'Estamos muito felizes em saber que voce estara conosco neste dia especial!'
                : 'Sentiremos sua falta, mas agradecemos por nos informar.'}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
