// src/components/Footer.jsx
import { Link as ScrollLink } from 'react-scroll';
import { FaInstagram, FaFacebookF } from 'react-icons/fa6';
import logo from '../assets/img/logoBlanco.webp';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-panel">
        {/* Fila superior: logo + navegación */}
        <div className="top-row">
          <a href="/" className="brand">
            <img src={logo} alt="ValorAR" />
          </a>

          <nav className="nav-links">
            <ScrollLink to="servicios" smooth={true} duration={600} offset={-60}>
              Servicios
            </ScrollLink>
            <ScrollLink to="sobre-mi" smooth={true} duration={600} offset={-60}>
              Sobre mí
            </ScrollLink>
            <ScrollLink to="contacto" smooth={true} duration={600} offset={-60}>
              Contacto
            </ScrollLink>
          </nav>
        </div>

        {/* Redes sociales */}
        <div className="social-row">
          <a href="https://instagram.com/valorar.finanzas" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://web.facebook.com/profile.php?id=61578706790219" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>

        {/* Legales */}
        <div className="legal-row">
          {/* Si no están disponibles todavía, ocultalos */}
          {/* <a href="/terminos">Términos y condiciones</a>
          <a href="/privacidad">Política de privacidad</a> */}
          <p className="copyright">© {year} ValorAR Finanzas.</p>
        </div>
      </div>
    </footer>
  );
}
