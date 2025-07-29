// src/components/ServiciosSection.jsx
import { motion } from 'framer-motion';

export default function ServiciosSection() {
  const variant = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.section
      id="servicios"
      className="servicios-section"
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>Nuestros Servicios</h2>

      <div className="card-grid">
        <article className="card">
          <h3>Planificación Financiera</h3>
          <p>Diseñamos un plan a medida para que alcances tus metas de forma sostenible.</p>
        </article>

        <article className="card">
          <h3>Inversiones Personalizadas</h3>
          <p>Portafolios diversificados y ajustados a tu perfil de riesgo.</p>
        </article>

        <article className="card">
          <h3>Educación Financiera</h3>
          <p>Capacitaciones 1‑a‑1 y workshops para transformar tu relación con el dinero.</p>
        </article>
      </div>
    </motion.section>
  );
}
