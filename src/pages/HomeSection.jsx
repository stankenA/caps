import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../assets/images/caps-home-logo.svg';

export default function HomeSection({ reference }) {

  return (
    <section className="home" id="home" ref={reference}>
      <AnchorLink className="home__logo link" href='#home'>
        <img src={logo} alt="logo" className="home__logo-img" />
      </AnchorLink>
      <AnchorLink className="home__link home__link_services link" href='#services'>
        <p className="home__link-txt">
          Услуги
        </p>
      </AnchorLink>
      <AnchorLink className="home__link home__link_cases link" href='#cases'>
        <p className="home__link-txt">
          Кейсы
        </p>
      </AnchorLink>
      <AnchorLink className="home__link home__link_about link" href='#about'>
        <p className="home__link-txt">
          О нас
        </p>
      </AnchorLink>
      <div className="home__info">
        <Fade direction='up' triggerOnce>
          <Link className="home__info-link link" to='mailto:caps@suka.nahuy'>
            caps@dam.tati
          </Link>
          <Link className="home__info-link link" to='tel:+7-999-999-99-99'>
            +7 (999) 999-99-99
          </Link>
          <div className="home__socials">
            <Link className="home__socials-link link">
              <span className="home__socials-icon home__socials-icon_whatsapp"></span>
            </Link>
            <Link className="home__socials-link link">
              <span className="home__socials-icon home__socials-icon_telegram"></span>
            </Link>
            <Link className="home__socials-link link">
              <span className="home__socials-icon home__socials-icon_vk"></span>
            </Link>
          </div>
        </Fade>
      </div>
      <AnchorLink className="home__link home__link_contacts link" href='#contacts'>
        <p className="home__link-txt">
          Контакты
        </p>
      </AnchorLink>
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
          <button type="submit" className="home__button button">
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
