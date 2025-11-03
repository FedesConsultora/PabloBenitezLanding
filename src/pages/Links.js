// src/pages/Links.jsx
import { motion } from 'framer-motion';
import {
  FaArrowUpRightFromSquare,
  FaBuildingColumns,
} from 'react-icons/fa6';
import { SiGoogleanalytics } from 'react-icons/si'; // solo por un ícono extra
import logoBlanco from '../assets/img/logoBlanco.webp';

const LINKS = [
  {
    href: 'https://balanz.com/abrir-cuenta-2.aspx?reference=benitezpablod@gmail.com',
    label: 'Abrir cuenta en Balanz',
    icon: <FaBuildingColumns />,
  },
  {
    href: 'https://micuenta.invertironline.com/registrarme?codigoAsesor=valorar',
    label: 'Crear cuenta en InvertirOnline',
    icon: <SiGoogleanalytics />,
  },
  {
    href: 'https://valorarfinanzas.com/',
    label: 'Visitar sitio ValorAR Finanzas',
    icon: <FaArrowUpRightFromSquare />,
  },
];

export default function Links() {
  return (
    <section className="links-page">
      <motion.div
        className="links-panel"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="brand">
          <img src={logoBlanco} alt="ValorAR Finanzas" />
          <p>Asesoramiento para hacer simple lo difícil.</p>
        </div>

        <ul className="links-list">
          {LINKS.map((item) => (
            <li key={item.href}>
              <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="link-btn"
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="links-note">
          <small>Si tenés dudas, escribime: <strong>+54 9 11 2283-7774</strong></small>
        </div>
      </motion.div>
    </section>
  );
}
