// src/components/BookCard.jsx
import { motion } from 'framer-motion';

export default function BookCard({ title, cover, href }) {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, download: true, rel: 'noopener', className: 'book-card__link' }
    : { className: 'book-card__link is-disabled', 'aria-disabled': true };

  return (
    <motion.article
      className="book-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <Wrapper {...wrapperProps}>
        <div className="book-card__media">
          <div className="book-card__cover">
            {cover ? (
              <img src={cover} alt={title} loading="lazy" />
            ) : (
              <div className="book-thumb__ph" />
            )}
          </div>
        </div>

        <h3 className="book-card__title">{title}</h3>
      </Wrapper>
    </motion.article>
  );
}
