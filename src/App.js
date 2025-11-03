import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Links from './pages/Links';
import Libros from './pages/Libros'; // 👈 nuevo

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/libros" element={<Libros />} /> 
        </Route>

        {/* Linktree “sueltito”, sin header/footer */}
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}
