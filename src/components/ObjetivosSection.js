// src/components/ObjetivosSection.jsx
import { motion } from 'framer-motion';
import { HiUserGroup, HiLightningBolt, HiLightBulb } from 'react-icons/hi';
import ObjetivoCard from './ObjetivoCard';

const items = [
  {
    icon: <HiUserGroup />,
    title: 'ATENCIÓN PERSONALIZADA',
    text: 'Olvidate de los intermediarios. Mi trato es cercano y directo, enfocado 100 % en tus metas.'
  },
  {
    icon: <HiLightningBolt />,
    title: 'RESPUESTAS RÁPIDAS',
    text: 'Tu tranquilidad es mi prioridad. Ofrezco soluciones ágiles a tus consultas y problemas financieros.'
  },
  {
    icon: <HiLightBulb />,
    title: 'VISIÓN ESTRATÉGICA',
    text: 'Mi experiencia me permite simplificar lo complejo y diseñar la estrategia adecuada para que alcances tus metas.'
  }
];

export default function ObjetivosSection() {
  return (
    <section id="servicios" className="objetivos-section">
      <motion.h2
        className="objetivos-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        MI COMPROMISO ES CON TUS OBJETIVOS.
      </motion.h2>

      {/* Intro */}
      <motion.p
        className="objetivos-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Vengo de una larga carrera en la banca y en uno de los brokers más grandes de Argentina.
        Hoy, como asesor independiente, combino esa experiencia con lo que más valoro: estar cerca
        de mis clientes.
      </motion.p>

      {/* Tarjetas */}
      <div className="objetivos-grid">
        {items.map((item) => (
          <ObjetivoCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
