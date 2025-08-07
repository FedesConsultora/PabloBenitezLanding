// src/components/ObjetivoCard.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ObjetivoCard({ icon, title, text }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { amount: 0.3, once: false });

  const cardVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <motion.article
      ref={cardRef}
      className="objetivo-card"
      variants={cardVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="icon-wrap">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.article>
  );
}