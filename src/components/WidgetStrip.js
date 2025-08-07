// src/components/WidgetStrip.jsx
import { useState, useEffect } from 'react';
import logoMini from '../assets/img/logoChiquito.webp';

export default function WidgetStrip() {
  const [count, setCount] = useState(window.innerWidth > 800 ? 20 : 10); // 20 logos desktop, 10 mobile

  useEffect(() => {
    const handleResize = () => {
      setCount(window.innerWidth > 800 ? 20 : 10);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Array para renderizar la franja; luego lo duplicamos para bucle infinito
  const logos = Array.from({ length: count });

  return (
    <div className="widget-strip">
      <div className="strip-content">
        {logos.map((_, i) => (
          <img key={`a-${i}`} src={logoMini} alt="logo pequeños" />
        ))}
        {/* Duplicación para scroll sin fin */}
        {logos.map((_, i) => (
          <img key={`b-${i}`} src={logoMini} alt="logo pequeños" />
        ))}
      </div>
    </div>
  );
}
