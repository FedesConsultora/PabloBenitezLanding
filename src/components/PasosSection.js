// src/components/PasosSection.jsx
import { motion } from 'framer-motion';

const pasos = [
  {
    paso: 'PASO 1',
    title: '',
    text: 'Reunión inicial. Nos conocemos, me contás tu historia, tus metas y resolvemos dudas. Sin compromiso.'
  },
  {
    paso: 'PASO 2',
    title: '',
    text: 'Diagnóstico y propuesta. Analizo tu situación y te presento una estrategia clara, alineada a tus objetivos.'
  },
  {
    paso: 'PASO 3',
    title: '',
    text: 'Implementación y seguimiento. Ponemos en marcha el plan y ajustamos la estrategia siempre que haga falta.'
  }
];

export default function PasosSection() {
  return (
    <section className="pasos-section">
      <motion.h2
        className="pasos-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        TU FUTURO FINANCIERO, EN 3 SIMPLES PASOS
      </motion.h2>

      <div className="pasos-grid">
        {pasos.map(({ paso, title, text }) => (
          <motion.article
            key={paso}
            className="paso-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <span className="paso-number">{paso}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
