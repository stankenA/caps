import React, { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './blocks/app.scss';

import Header from './components/Header';
import NotFound from './pages/NotFound';
import Loader from './components/Loader';
import { useInView } from 'react-intersection-observer';
import { observerOptions } from './utils/constants';
import Popup from './components/Popup';

const HomeSection = lazy(() => import('./pages/HomeSection'));
const AboutSection = lazy(() => import('./pages/AboutSection'));
const ServicesSection = lazy(() => import('./pages/ServicesSection'));
const CasesSection = lazy(() => import('./pages/CasesSection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(true);
  const { ref, inView } = useInView(observerOptions);

  return (
    <div className="page">
      <Header isHomeVisible={inView} setIsPopupOpened={setIsPopupOpened} />
      <main className="wrapper">
        <Routes>
          <Route path='/' element={
            <>
              <Suspense fallback={<Loader />}>
                <HomeSection reference={ref} />
                <AboutSection />
                <CasesSection setIsPopupOpened={setIsPopupOpened} />
                <ServicesSection />
              </Suspense>
            </>
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Popup isOpened={isPopupOpened} setIsOpened={setIsPopupOpened} />
    </div>
  );
}

export default App;
