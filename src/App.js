import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './blocks/app.scss';

import Header from './components/Header';
import NotFound from './pages/NotFound';
import Loader from './components/Loader';
import { useInView } from 'react-intersection-observer';
import { observerOptions } from './utils/constants';

const HomeSection = lazy(() => import('./pages/HomeSection'));
const AboutSection = lazy(() => import('./pages/AboutSection'));
const ServicesSection = lazy(() => import('./pages/ServicesSection'));
const CasesSection = lazy(() => import('./pages/CasesSection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const { ref, inView } = useInView(observerOptions);

  return (
    <div className="page">
      <Header isHomeVisible={inView} />
      <main className="wrapper">
        <Routes>
          <Route path='/' element={
            <>
              <Suspense fallback={<Loader />}>
                <HomeSection reference={ref} />
                <AboutSection />
                <CasesSection />
                <ServicesSection />
              </Suspense>
            </>
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
