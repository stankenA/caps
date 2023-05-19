import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

import logoIcon from '../images/caps-logo.svg';

export default function Footer() {

  return (
    <Fade direction='down' triggerOnce>
      <footer className="footer">
        <Link className="footer__logo-link" to='/'>
          <img src={logoIcon} alt="CAPS logo" className="footer__logo" />
        </Link>
        <ul className="footer__container list">
          <li className="footer__item">
            <Link className="footer__link link" to='/services'>
              Услуги
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link link" to='/contacts'>
              Контакты
            </Link>
          </li>
          <li className="footer__item">
            <button type="button" className="footer__link button">
              Заказать
            </button>
          </li>
        </ul>
        <ul className="footer__container list">
          <li className="footer__item footer__item_icons">
            <Link className="footer__icon-link link">
              <span className="footer__icon footer__icon_whatsapp"></span>
            </Link>
            <Link className="footer__icon-link link">
              <span className="footer__icon footer__icon_telegram"></span>
            </Link>
            <Link className="footer__icon-link link">
              <span className="footer__icon footer__icon_vk"></span>
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link link" to='/cases'>
              Кейсы
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link link" to='/about'>
              О нас
            </Link>
          </li>
        </ul>
        <ul className="footer__container list">
          <li className="footer__item">
            <Link className="footer__link footer__link_contacts link" to='mailto:caps@suka.nahuy'>
              caps@suka.nahuy
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link footer__link_contacts link" to='tel:+7(999)999-99-99'>
              +7 (999) 999-99-99
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link footer__link_contacts link">
              адрес
            </Link>
          </li>
        </ul>
        <div className="footer__map">
          Я КАРТА
        </div>
      </footer>
    </Fade>
  )
}
