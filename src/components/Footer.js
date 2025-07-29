// src/components/Footer.jsx
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="footer-container">
        {/* Logo o nombre */}
        <div className="footer-brand">
          <h3>ValorAR Finanzas</h3>
          <p>Hacemos simple lo difícil</p>
        </div>

        {/* Navegación rápida */}
        <nav className="footer-nav">
          <ul>
            {isHome && (
              <>
                <li>
                  <ScrollLink to="servicios" smooth={true} duration={600} offset={-60}>
                    Servicios
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="sobre-mi" smooth={true} duration={600} offset={-60}>
                    Sobre mí
                  </ScrollLink>
                </li>
              </>
            )}
            <li>
              <RouterLink to="/prensa">Prensa</RouterLink>
            </li>
            <li>
              <RouterLink to="/contacto">Contacto</RouterLink>
            </li>
          </ul>
        </nav>

        {/* Redes sociales */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/valorar.finanzas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-benitez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} ValorAR Finanzas. Todos los derechos reservados.</p>
      </div>
    </motion.footer>
  );
}
