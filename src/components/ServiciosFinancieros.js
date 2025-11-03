// src/components/ServiciosFinancieros.jsx
import { motion } from 'framer-motion';
import { HiOfficeBuilding, HiCurrencyDollar, HiCalendar } from 'react-icons/hi';

const servicios = [
  {
    icon: <HiOfficeBuilding />,
    title: 'ASESORÍA PARA PYMES',
    text: 'Optimizamos juntos el patrimonio de tu empresa para potenciar su crecimiento.'
  },
  {
    icon: <HiCurrencyDollar />,
    title: 'GESTIÓN PATRIMONIAL INDIVIDUAL',
    text: 'Diseñamos un plan a medida para resguardar y hacer crecer el dinero que tanto te costó ganar.'
  },
  {
    icon: <HiCalendar />,
    title: 'PLANIFICACIÓN PARA EL FUTURO',
    text: 'Nos enfocamos en personas de 40 y 50 años a consolidar su patrimonio y asegurar su tranquilidad con decisiones pensadas a largo plazo.'
  }
];

export default function ServiciosFinancieros() {
  return (
    <section className="finanzas-section">
      <motion.h2
        className="finanzas-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        SIMPLIFICANDO TUS DECISIONES FINANCIERAS.
      </motion.h2>

      <motion.p
        className="finanzas-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Te ayudo a navegar el mercado para que tomes las mejores decisiones, ya seas un particular o una empresa.
      </motion.p>

      <div className="finanzas-grid">
        {servicios.map(({ icon, title, text }) => (
          <motion.article
            key={title}
            className="finanzas-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="icon-wrap">{icon}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
