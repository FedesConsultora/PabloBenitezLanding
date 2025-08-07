import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import logo from '../assets/img/logo.webp';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true); // Siempre fondo blanco en páginas internas
      return;
    }

    const hero = document.querySelector('.hero-section');
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 } // cambia estado cuando Hero casi sale de vista
    );

    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  const navItems = [
    { label: 'Servicios', to: 'servicios', smooth: true },
    { label: 'Sobre mí', to: 'sobre-mi', smooth: true },
  ];

  return (
    <>
      <motion.header
        className={`header ${scrolled ? 'scrolled' : 'transparent'}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="header-container">
          <RouterLink to="/" className="logo">
            <img src={logo} alt="ValorAR Finanzas" />
          </RouterLink>

          <nav className="desktop-nav">
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

          <button
            className="menu-button"
            aria-label="Abrir menú"
            onClick={toggleMenu}
          >
            <HiOutlineMenu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Overlay Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="close-button"
              aria-label="Cerrar menú"
              onClick={toggleMenu}
            >
              <HiX size={32} />
            </button>
            <ul className="mobile-menu">
              {isHome &&
                navItems.map((item) => (
                  <li key={item.to}>
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={600}
                      offset={-60}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </ScrollLink>
                  </li>
                ))}
              <li>
                <RouterLink to="/prensa" onClick={toggleMenu}>Prensa</RouterLink>
              </li>
              <li>
                <RouterLink to="/contacto" onClick={toggleMenu}>Contacto</RouterLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
