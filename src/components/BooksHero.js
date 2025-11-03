// src/components/BooksHero.jsx
import fondoMobile from '../assets/img/fondoLibros.webp';
import fondoDesktop from '../assets/img/fondoLibrosDesktop.webp';

export default function BooksHero() {
  return (
    <section
      className="books-hero"
      style={{
        // variables CSS para swap en media-queries
        '--hero-mobile': `url(${fondoMobile})`,
        '--hero-desktop': `url(${fondoDesktop || fondoMobile})`,
      }}
      aria-label="Biblioteca financiera"
    >
      <div className="books-hero__inner">
        <h1>Biblioteca financiera</h1>
        <p>Aprender es parte del camino. Estoy acá para guiarte.</p>
      </div>
    </section>
  );
}
