import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/caps-home-logo.svg';
import whatsappIcon from '../images/whatsapp-icon.svg';
import telegramIcon from '../images/telegram-icon.svg';
import vkIcon from '../images/vk-icon.svg';
import OrderButton from './OrderButton';

export default function Main() {
  return (
    <div className="home">
      <Link className="home__logo link" to='/'>
        <img src={logo} alt="logo" className="home__logo-img" />
      </Link>
      <Link className="home__link link" to='/services'>
        <p className="home__link-txt home__link-txt_services">
          Услуги
        </p>
      </Link>
      <Link className="home__link link" to='/cases'>
        <p className="home__link-txt home__link-txt_cases">
          Кейсы
        </p>
      </Link>
      <Link className="home__link link" to='/about'>
        <p className="home__link-txt home__link-txt_about">
          О нас
        </p>
      </Link>
      <div className="home__info">
        <Link className="home__info-link link" to='mailto:caps@suka.nahuy'>
          caps@suka.nahuy
        </Link>
        <Link className="home__info-link link" to='tel:+7-999-999-99-99'>
          +7 (999) 999-99-99
        </Link>
        <div className="home__socials">
          <Link className="home__socials-link link">
            <img src={whatsappIcon} alt="whatsapp icon" className="home__socials-icon" />
          </Link>
          <Link className="home__socials-link link">
            <img src={telegramIcon} alt="telegram icon" className="home__socials-icon" />
          </Link>
          <Link className="home__socials-link link">
            <img src={vkIcon} alt="vk icon" className="home__socials-icon" />
          </Link>
        </div>
      </div>
      <Link className="home__link link" to='/contacts'>
        <p className="home__link-txt">
          Контакты
        </p>
      </Link>
      <form className="home__form">
        <div className="home__form-left">
          <h2 className="home__form-title">
            Консуль- <br />
            тация
          </h2>
          <p className="home__form-txt">
            {`Мы позвоним вам и проконсультируем по любому вопросу, просто оставьте свой номер и подскажите, как вас зовут :)`}
          </p>
        </div>
        <fieldset className="home__form-right">
          <input type="text" className="home__form-input" placeholder="Имя Фамилия" />
          <input type="tel" className="home__form-input" placeholder="+7 (999) 999-99-99" />
          <OrderButton type={'submit'} />
          <p className="home__form-politics">
            *Оставляя свои данные, вы соглашаетесь с политикой персональных данных
          </p>
        </fieldset>
      </form>
    </div>
  )
}
