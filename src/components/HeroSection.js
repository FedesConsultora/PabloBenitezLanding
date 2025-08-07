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
          Soy Pablo Benítez, asesor financiero matriculado.  
          Mi propósito es ayudarte a proteger y hacer crecer tu patrimonio  
          con la atención personalizada que te merecés.
        </motion.p>

        <motion.button
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Agendar una reunión sin costo
        </motion.button>
      </div>
    </section>
  );
}
