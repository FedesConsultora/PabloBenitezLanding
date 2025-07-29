// src/components/Header.jsx
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/img/logo.webp'; // Ajustá la ruta de tu logo

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { label: 'Servicios', to: 'servicios', smooth: true },
    { label: 'Sobre mí', to: 'sobre-mi', smooth: true },
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header-container">
        <RouterLink to="/" className="logo">
          <img src={logo} alt="ValorAR Finanzas" />
        </RouterLink>

        <nav>
          <ul>
            {isHome &&
              navItems.map((item) => (
                <li key={item.to}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={600}
                    offset={-60}
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}

            <li>
              <RouterLink to="/prensa">Prensa</RouterLink>
            </li>
            <li>
              <RouterLink to="/contacto">Contacto</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
