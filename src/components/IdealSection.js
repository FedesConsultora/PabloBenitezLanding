// src/components/IdealSection.jsx
import { motion } from 'framer-motion';

const cards = [
  {
    label: 'SOS',
    text: 'Dueño/a de una PyME y querés gestionar tanto el patrimonio de la empresa como el tuyo.'
  },
  {
    label: 'TENÉS',
    text: 'más de 40 años y buscás un profesional de confianza para delegar la administración de tu dinero.'
  },
  {
    label: 'VALORÁS',
    text: 'Un trato cercano y respuestas rápidas por encima de las estructuras corporativas impersonales.'
  },
  {
    label: 'BUSCÁS',
    text: 'Confianza y seguridad para construir, proteger y hacer crecer tu patrimonio de forma sostenida y a largo plazo.'
  }
];

const cardVariant = {
  hidden : { opacity: 0, y: 60, scale: 0.92 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { type: 'spring', stiffness: 55, damping: 14 } }
};

export default function IdealSection() {
  return (
    <section className="ideal-section">
      <motion.h2
        className="ideal-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        ESTA PROPUESTA ES IDEAL<br />PARA VOS SI:
      </motion.h2>

      <div className="ideal-grid">
        {cards.map(({ label, text }) => (
          <motion.article
            key={label}
            className="ideal-card"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3>{label}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
