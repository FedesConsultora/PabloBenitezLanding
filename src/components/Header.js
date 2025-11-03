import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink, Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import logo from '../assets/img/logo.webp';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: 'Servicios', to: 'servicios' },
    { label: 'Sobre mí', to: 'sobre-mi' },
  ];

  return (
    <>
      <motion.header
        className="header scrolled"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="header-container">
          <RouterLink to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="ValorAR Finanzas" />
          </RouterLink>

          <nav className="desktop-nav">
            <ul>
              {isHome ? (
                <>
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <ScrollLink
                        to={item.to}
                        smooth
                        duration={600}
                        offset={-60}
                      >
                        {item.label}
                      </ScrollLink>
                    </li>
                  ))}
                  <li>
                    <ScrollLink
                      to="contacto"
                      smooth
                      duration={600}
                      offset={-60}
                    >
                      Contacto
                    </ScrollLink>
                  </li>
                  <li>
                    {/* Libros siempre navega por router */}
                    <NavLink to="/libros">Libros</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/" end>Inicio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/libros">Libros</NavLink>
                  </li>
                </>
              )}
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
              {isHome ? (
                <>
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <ScrollLink
                        to={item.to}
                        smooth
                        duration={600}
                        offset={-60}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </ScrollLink>
                    </li>
                  ))}
                  <li>
                    <ScrollLink
                      to="contacto"
                      smooth
                      duration={600}
                      offset={-60}
                      onClick={closeMenu}
                    >
                      Contacto
                    </ScrollLink>
                  </li>
                  <li>
                    <RouterLink to="/libros" onClick={closeMenu}>
                      Libros
                    </RouterLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <RouterLink to="/" onClick={closeMenu}>
                      Inicio
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/libros" onClick={closeMenu}>
                      Libros
                    </RouterLink>
                  </li>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
