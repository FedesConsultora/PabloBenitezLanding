// src/components/Footer.jsx
import { Link as RouterLink } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/img/logoBlanco.webp';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Panel interior con bordes redondeados (azul) */}
      <div className="footer-panel">
        {/* Fila superior: logo + navigation */}
        <div className="top-row">
          <RouterLink to="/" className="brand">
            <img src={logo} alt="ValorAR" />
          </RouterLink>

          <nav className="nav-links">
            <RouterLink to="/">Inicio</RouterLink>
            <RouterLink to="/quienes-somos">Quienes somos</RouterLink>
            <RouterLink to="/catalogo">Catalogo</RouterLink>
            <RouterLink to="/aliados">Aliados</RouterLink>
            <RouterLink to="/contacto">Contacto</RouterLink>
          </nav>
        </div>

        {/* Social row */}
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
          <RouterLink to="/terminos">Términos y condiciones</RouterLink>
          <RouterLink to="/privacidad">Política de privacidad</RouterLink>
          <p className="copyright">© {year} ValorAR Finanzas.</p>
        </div>
      </div>

    </footer>
  );
}