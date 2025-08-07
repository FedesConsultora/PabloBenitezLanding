// src/components/TrayectoriaSection.jsx
import { motion } from 'framer-motion';

export default function TrayectoriaSection() {
  return (
    <section className="trayectoria-section">
      <motion.h2
        className="trayectoria-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        id="sobre-mi"
      >
        Una trayectoria dedicada a tus finanzas
      </motion.h2>

      <motion.p
        className="trayectoria-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Mi nombre es Pablo Benitez. Durante años, como Oficial de Cuentas de alta renta en bancos y luego en 
        Balanza Capital, entendí que la clave de una buena asesoría no son solo los números, sino la confianza. 
        Hace poco, decidí independizarme para ofrecer un servicio diferente, donde cada cliente es único y 
        la estrategia se construye a medida. Mi misión es ser el asesor en quien puedas delegar la administración 
        de tu dinero con total seguridad.
      </motion.p>
    </section>
  );
}
