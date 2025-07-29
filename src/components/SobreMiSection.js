// src/components/SobreMiSection.jsx
import { motion } from 'framer-motion';
import avatar from '../assets/img/instagram.jpg'; // coloca tu imagen

export default function SobreMiSection() {
  return (
    <motion.section
      id="sobre-mi"
      className="sobre-mi-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="content">
        <img src={avatar} alt="Pablo Benítez asesor financiero" />
        <div className="text">
          <h2>Sobre mí</h2>
          <p>
            Soy <strong>Pablo Benítez</strong>, asesor financiero matriculado en CNV con más de una década llevando claridad a las finanzas
            personales y corporativas. Mi misión es <em>hacer simple lo difícil</em> y acompañarte
            para que tomes decisiones inteligentes con tu dinero.
          </p>
          <p>
            Tras mi experiencia en banca y brokers, fundé <strong>ValorAR Finanzas</strong> para
            combinar cercanía humana con rigurosidad profesional.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
