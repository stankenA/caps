import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

import logoIcon from '../assets/images/caps-logo.svg';

export default function Footer() {

  return (
    <Fade direction='up' triggerOnce>
      <footer className="footer" id="contacts">
        <Link className="footer__logo-link" to='/'>
          < img src={logoIcon} alt="CAPS logo" className="footer__logo" />
        </Link >
        <ul className="footer__container footer__container_nav-1 list">
          <li className="footer__item">
            <Link className="footer__link link" to='/services'>
              Услуги
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link link" to='#'>
              Контакты
            </Link>
          </li>
          <li className="footer__item">
            <button type="button" className="footer__link button">
              Заказать
            </button>
          </li>
        </ul>
        <ul className="footer__container footer__container_nav-2 list">
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
        <ul className="footer__container footer__container_info list">
          <li className="footer__item">
            <Link className="footer__link footer__link_contacts link" to='mailto:caps@suka.nahuy'>
              caps@dam.tati
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
      </footer >
    </Fade >
  )
}
