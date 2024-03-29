import React, { useState, memo } from 'react';
import ServicesMain from '../components/Services/ServicesMain';
import ServicesCard from '../components/Services/ServicesCard';
import CompleteCard from '../components/Services/CompleteCard';

import { useForm } from '../hooks/useForm';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import promotionBackground from '../assets/images/bg-promotion.jpg';
import botsBackground from '../assets/images/bg-bots.jpg';
import developmentBackground from '../assets/images/bg-development.jpg';
import designBackground from '../assets/images/bg-design.jpg';
import productionBackground from '../assets/images/bg-production.jpg';
import mobileBackground from '../assets/images/bg-mobile.jpg';

import {
  botsArr,
  botsTitles,
  designArr,
  designTitles,
  developmentArr,
  developmentTitles,
  mobileArr,
  mobileTitles,
  observerOptions,
  productionArr,
  productionTitles,
  promotionArr,
  promotionTitles
} from '../utils/constants';

const ServicesSection = memo(function ServicesSection() {

  const [isRendered, setIsRendered] = useState(false);
  const { ref, inView } = useInView(observerOptions);

  useEffect(() => {
    if (inView) {
      setIsRendered(true);
    }
  }, [inView]);

  // Собираем данные инпутов с помощью кастомного хука
  const { values, handleChange, setValues } = useForm({
    type: '',
    context: [],
  });

  // Стейт для раскрытия выбранной карточки
  const [activeCard, setActiveCard] = useState('');
  const [isCardComplete, setIsCardComplete] = useState(false);

  const threeSlides = [0, 1, 2];
  const fourSlides = [0, 1, 2, 3];

  function handleServiceClick(service) {
    setActiveCard(service);
    setValues({ ...values, type: service });
  }

  return (
    <section className={`services ${isRendered ? 'services_shown' : ''}`} id="services" ref={ref}>
      <ServicesMain
        onServiceClick={handleServiceClick}
      />
      <ServicesCard
        activeCard={activeCard}
        cardBackground={developmentBackground}
        cardType={'development'}
        title={'Разработка сайтов'}
        slides={fourSlides}
        titlesArr={developmentTitles}
        itemsArr={developmentArr}
        onLastBack={() => setActiveCard('')}
        onSubmit={() => setIsCardComplete(true)}
        handleChange={handleChange}
        values={values}
        setValues={setValues}
      />
      <ServicesCard
        activeCard={activeCard}
        cardBackground={promotionBackground}
        cardType={'promotion'}
        title={'Продвижение'}
        slides={threeSlides}
        titlesArr={promotionTitles}
        itemsArr={promotionArr}
        onLastBack={() => setActiveCard('')}
        onSubmit={() => setIsCardComplete(true)}
        handleChange={handleChange}
        values={values}
        setValues={setValues}
      />
      <ServicesCard
        activeCard={activeCard}
        cardBackground={designBackground}
        cardType={'design'}
        title={'Дизайн'}
        slides={threeSlides}
        titlesArr={designTitles}
        itemsArr={designArr}
        onLastBack={() => setActiveCard('')}
        onSubmit={() => setIsCardComplete(true)}
        handleChange={handleChange}
        values={values}
        setValues={setValues}
      />
      <ServicesCard
        activeCard={activeCard}
        cardBackground={productionBackground}
        cardType={'production'}
        title={'Продакшн'}
        slides={threeSlides}
        titlesArr={productionTitles}
        itemsArr={productionArr}
        onLastBack={() => setActiveCard('')}
        onSubmit={() => setIsCardComplete(true)}
        handleChange={handleChange}
        values={values}
        setValues={setValues}
      />
      <ServicesCard
        activeCard={activeCard}
        cardBackground={botsBackground}
        cardType={'bots'}
        title={'Мессенджер боты'}
        slides={threeSlides}
        titlesArr={botsTitles}
        itemsArr={botsArr}
        onLastBack={() => setActiveCard('')}
        onSubmit={() => setIsCardComplete(true)}
        handleChange={handleChange}
        values={values}
        setValues={setValues}
      />
      <ServicesCard
        activeCard={activeCard}
        cardBackground={mobileBackground}
        cardType={'mobile'}
        title={'Мобильные приложения'}
        slides={threeSlides}
        titlesArr={mobileTitles}
        itemsArr={mobileArr}
        onLastBack={() => setActiveCard('')}
        onSubmit={() => setIsCardComplete(true)}
        handleChange={handleChange}
        values={values}
        setValues={setValues}
      />
      <CompleteCard
        isCardComplete={isCardComplete}
        onClose={() => setActiveCard('')}
        setIsCardComplete={() => setIsCardComplete(false)}
      />
    </section>
  )
});

export default ServicesSection;
