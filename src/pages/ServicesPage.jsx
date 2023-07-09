import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import ServicesMain from '../components/Services/ServicesMain';
import ServicesCard from '../components/Services/ServicesCard';
import CompleteCard from '../components/Services/CompleteCard';

import { useForm } from '../hooks/useForm';

import whatsappIcon from '../images/whatsapp-icon.svg';
import vkIcon from '../images/vk-icon.svg';
import telegramIcon from '../images/telegram-icon.svg';

import promotionBackground from '../images/bg-promotion.jpg';
import botsBackground from '../images/bg-bots.jpg';
import developmentBackground from '../images/bg-development.jpg';

export default function Services() {

  // Собираем данные инпутов с помощью кастомного хука
  const { values, handleChange, setValues } = useForm({
    type: '',
    context: [],
  });
  console.log(values);

  // Стейт для раскрытия выбранной карточки
  const [activeCard, setActiveCard] = useState('');
  const [isCardComplete, setIsCardComplete] = useState(false);

  const threeSlides = [0, 1, 2];
  const fourSlides = [0, 1, 2, 3];

  // Информация, передаваемая в карточки
  const promotionTitles = ['1. выберите желаемый продукт', '2. Оставьте свои данные', '3. Оставьте комментарий (опционально)'];
  const promotionArr = ['SEO', 'контекст', 'таргет', 'SMM', 'Email', 'комплекс'];

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

  const developmentTitles = ['1. выберите тип сайта', '2. Если сайт уже есть - поделитесь', '3. Оставьте свои данные', '4. Оставьте комментарий (опционально)'];
  const developmentArr = ['лендинг', 'магазин', 'инфо-сайт', 'другое'];

  function handleService(service) {
    setActiveCard(service);
    setValues({ ...values, type: service });
  }

  return (
    <Fade direction='left'>
      <section className="services">
        <ServicesMain
          onServiceClick={handleService}
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
        <CompleteCard
          isCardComplete={isCardComplete}
        />
      </section>
    </Fade>
  )
}
