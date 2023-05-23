import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import ServicesMain from './Services/ServicesMain';
import ServicesCard from './Services/ServicesCard';

import whatsappIcon from '../images/whatsapp-icon.svg';
import vkIcon from '../images/vk-icon.svg';
import telegramIcon from '../images/telegram-icon.svg';

import promotionBackground from '../images/home-background-about.jpg';
import botsBackground from '../images/violet-red-background.jpg';

export default function Services() {

  const [activeCard, setActiveCard] = useState('');

  const promotionTitles = ['1. выберите желаемый продукт', '2. Оставьте свои данные', '3. Оставьте комментарий (опционально)'];
  const promotionArr = ['SEO', 'контекст', 'таргет', 'SMM', 'Email', 'комплекс'];
  const threeSlides = [0, 1, 2];

  const botsTitles = ['1. выберите платформу', '2. Оставьте свои данные', '3. Оставьте комментарий (опционально)'];
  const botsArr = [
    {
      img: whatsappIcon,
      name: 'whatsapp'
    },
    {
      img: vkIcon,
      name: 'vk'
    },
    {
      img: telegramIcon,
      name: 'telegram'
    },
  ];

  return (
    <Fade direction='left'>
      <section className="services">
        <ServicesMain
          onServiceClick={setActiveCard}
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
        />
      </section>
    </Fade>
  )
}
