import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

import logo from '../assets/images/caps-home-logo.svg';
import whatsappIcon from '../assets/images/whatsapp-icon.svg';
import telegramIcon from '../assets/images/telegram-icon.svg';
import vkIcon from '../assets/images/vk-icon.svg';

export default function Main() {
  return (
    <section className="home">
      <Link className="home__logo link" to='/'>
        <img src={logo} alt="logo" className="home__logo-img" />
      </Link>
      <Link className="home__link home__link_services link" to='/services'>
        <p className="home__link-txt">
          Услуги
        </p>
      </Link>
      <Link className="home__link home__link_cases link" to='/cases'>
        <p className="home__link-txt">
          Кейсы
        </p>
      </Link>
      <Link className="home__link home__link_about link" to='/about'>
        <p className="home__link-txt">
          О нас
        </p>
      </Link>
      <div className="home__info">
        <Fade direction='up' cascade={true} triggerOnce>
          <Link className="home__info-link link" to='mailto:caps@suka.nahuy'>
            caps@dam.tati
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
        </Fade>
      </div>
      <Link className="home__link home__link_contacts link" to='/contacts'>
        <p className="home__link-txt">
          Контакты
        </p>
      </Link>
      <form className="home__form">
        <div className="home__form-left">
          <h2 className="home__form-title">
            Консуль&shy;<wbr />тация
          </h2>
          <p className="home__form-txt">
            {`Мы позвоним вам и проконсультируем по любому вопросу, просто оставьте свой номер и подскажите, как вас зовут :)`}
          </p>
        </div>
        <fieldset className="home__form-right">
          <input type="text" className="home__form-input" placeholder="Имя Фамилия" />
          <input type="tel" className="home__form-input" placeholder="+7 (999) 999-99-99" />
          <button type="button" className="home__button button">
            <p className="header__button-txt">Заказать</p>
          </button>
          <p className="home__form-politics">
            *Оставляя свои данные, вы соглашаетесь с политикой персональных данных
          </p>
        </fieldset>
      </form>
    </section>
  )
}
