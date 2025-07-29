// src/components/SobreMiModal.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import avatar from '../assets/img/instagram.jpg';

export default function SobreMiModal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  const variants = {
    hidden : { opacity: 0, scale: 0.8, y: 40 },
    visible: { opacity: 1, scale: 1,   y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="sobre-mi" className="sobre-mi-wrapper">
      <motion.div
        ref={ref}
        className="sobre-mi-modal"
        variants={variants}
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="img-wrap">
          <img src={avatar} alt="Pablo Benítez asesor financiero" />
        </div>

        <div className="info">
          <h2>Sobre mí</h2>
          <p>
            Hola, soy <strong>Pablo Benítez</strong>, asesor financiero matriculado en CNV. 
            Después de más de una década en banca y brokers, fundé <strong>ValorAR Finanzas</strong> 
            para hacer <em>simple lo difícil</em> y acompañarte a tomar decisiones inteligentes con tu dinero.
          </p>
          <p>
            Mi misión es combinar cercanía humana con rigurosidad profesional para que alcances 
            tus metas financieras con seguridad y claridad.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
