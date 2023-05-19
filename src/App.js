import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './blocks/app.scss';

import Header from './components/Header';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductionPage from './pages/ProductionPage';

import Footer from './components/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="wrapper">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services'>
            <Route index element={<ServicesPage />} />
            <Route path='production' element={<ProductionPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
