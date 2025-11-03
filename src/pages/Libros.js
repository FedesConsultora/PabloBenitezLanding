// src/pages/Libros.js
import AnimatedPage from '../components/AnimatedPage';
import BooksHero from '../components/BooksHero';
import BookCard from '../components/BookCard';
import './libros.scss';

// ===== Helpers webpack (CRA) =====
function importAllAsMap(req) {
  const out = Object.create(null);
  req.keys().forEach((key) => {
    const fileName = key.replace(/^.\//, '');
    const mod = req(key);
    out[fileName] = mod?.default ?? mod;
  });
  return out;
}

// Archivos
const pdfMap = importAllAsMap(require.context('../assets/pdf', false, /\.(pdf)$/i));
const coverMap = importAllAsMap(require.context('../assets/img/libros', false, /\.(png|jpe?g|webp)$/i));

// Catálogo (slugs = nombre de archivo sin extensión)
const BOOKS = [
  { slug: 'deshacer-la-ansiedad',                    title: 'Deshacer la ansiedad' },
  { slug: 'el-hombre-mas-rico-de-babilonia',         title: 'El hombre más rico de Babilonia' },
  { slug: '18-patrones-de-velas-que-debes-conocer',  title: '18 Patrones de velas que debes conocer' },
  { slug: 'un-fontanero-en-wall-street',             title: 'Un fontanero en Wall Street' },
  { slug: 'un-trader-de-la-calle',                   title: 'Un trader de la calle' },
  { slug: 'profits-in-the-stock-market',             title: 'Profits in the Stock Market' },
  { slug: 'manual-de-candlestick',                   title: 'Manual de Candlestick (Velas Japonesas)' },
  { slug: 'vida-de-los-estoicos',                    title: 'Vida de los estoicos' },
  { slug: 'trading-en-la-zona',                      title: 'Trading en la zona' },
  { slug: 'libertad-inmobiliaria',                   title: 'Libertad inmobiliaria' },
  { slug: 'un-paso-por-delante-de-wall-street',      title: 'Un paso por delante de Wall Street' },
  { slug: 'modelo-de-analisis-de-inversion',         title: 'Modelo de Análisis de Inversión' },
];

function resolveAssets(b) {
  const cover =
    coverMap[`${b.slug}.webp`] || coverMap[`${b.slug}.jpg`] || coverMap[`${b.slug}.jpeg`] || coverMap[`${b.slug}.png`] || null;
  const file =
    pdfMap[`${b.slug}.pdf`] || pdfMap[`${b.slug}.PDF`] || null;
  return { ...b, cover, file };
}

export default function Libros() {
  const rows = BOOKS.map(resolveAssets);

  return (
    <AnimatedPage>
      <BooksHero />
      <section className="books-wrap container">
        <h2 className="books-title">Biblioteca financiera</h2>

        <div className="books-grid">
          {rows.map((b) => (
            <BookCard key={b.slug} title={b.title} cover={b.cover} href={b.file} />
          ))}
        </div>

      </section>
    </AnimatedPage>
  );
}
