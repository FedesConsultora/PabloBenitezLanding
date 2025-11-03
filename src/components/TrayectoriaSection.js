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
        Después de años como ejecutivo de cuenta en uno de los bancos mas importantes de Argentina pase a Balanz Capital, aprendí que la gestión patrimonial no es solo un tema de números, sino de <strong>confianza innegociable. </strong><br />
        Decidí crear <strong>ValorAR Finanzas</strong> para romper con el servicio tradicional y ofrecer algo diferente: una asesoría donde tu estrategia se construye a medida, con el rigor de mi trayectoria y la cercanía que merecés. Mi misión es que delegues tu dinero con total tranquilidad.
      </motion.p>
    </section>
  );
}
