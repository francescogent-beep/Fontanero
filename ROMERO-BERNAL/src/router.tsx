import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';

// Pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Blog } from './pages/Blog';
import { Reviews } from './pages/Reviews';
import { Contact } from './pages/Contact';

const NotFound = () => (
  <Layout>
    <div className="py-32 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-zinc-600 mb-8">Página no encontrada</p>
      <a href="/" className="text-blue-600 font-bold hover:underline">Volver al inicio</a>
    </div>
  </Layout>
);

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/servicios" element={<Layout><Services /></Layout>} />
      <Route path="/servicios/:slug" element={<Layout><ServiceDetail /></Layout>} />
      <Route path="/blog" element={<Layout><Blog /></Layout>} />
      <Route path="/reseñas" element={<Layout><Reviews /></Layout>} />
      <Route path="/contacto" element={<Layout><Contact /></Layout>} />
      
      {/* Redirects for SEO if needed */}
      <Route path="/services" element={<Navigate to="/servicios" replace />} />
      <Route path="/reviews" element={<Navigate to="/reseñas" replace />} />
      <Route path="/contact" element={<Navigate to="/contacto" replace />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
