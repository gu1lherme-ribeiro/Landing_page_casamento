import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Gallery.css'

const galleryImages = [
  { id: 1, color: '#8B6F5A', label: 'Nosso primeiro encontro' },
  { id: 2, color: '#6B4F3A', label: 'Viagem a praia' },
  { id: 3, color: '#A89080', label: 'Pedido de casamento' },
  { id: 4, color: '#C4B0A0', label: 'Nosso lar' },
  { id: 5, color: '#3D2B1F', label: 'Natal em familia' },
  { id: 6, color: '#5A4030', label: 'Ensaio pre-wedding' },
]

function PlaceholderImage({ color, label, index }) {
  return (
    <div className="gallery-placeholder" style={{ background: color }}>
      <div className="placeholder-content">
        <span className="placeholder-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="placeholder-label">{label}</span>
        <span className="placeholder-hint">Sua foto aqui</span>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="gallery-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="section-subtitle">Momentos especiais</p>
          <h2 className="section-title">Nossa Galeria</h2>
          <p className="section-description">
            Alguns dos momentos mais preciosos da nossa jornada juntos.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              className="gallery-item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              onClick={() => setSelectedImage(img)}
            >
              <PlaceholderImage color={img.color} label={img.label} index={i} />
              <div className="gallery-item-overlay">
                <span className="gallery-item-label">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <PlaceholderImage
                  color={selectedImage.color}
                  label={selectedImage.label}
                  index={galleryImages.indexOf(selectedImage)}
                />
                <button
                  className="lightbox-close"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
                <p className="lightbox-caption">{selectedImage.label}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
