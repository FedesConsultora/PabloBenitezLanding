// src/components/HeroSection.jsx
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          INVERSIONES BASADAS EN LA CONFIANZA.  
          RESULTADOS PENSADOS PARA VOS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Soy Pablo Benitez, asesor financiero matriculado. Mi propósito es ayudarte a proteger y hacer crecer tu patrimonio con la atención personalizada que te merecés.
        </motion.p>

        <motion.a
          href="https://wa.me/5491122837774?text=Hola%20Pablo%2C%20quiero%20agendar%20una%20reunión%20sin%20costo%20como%20ofrecés%20en%20la%20web.%20Gracias%21"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Agendar una reunión sin costo
        </motion.a>
      </div>
    </section>
  );
}
