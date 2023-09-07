import React from 'react';
import { useInView } from 'react-intersection-observer';

import logoIcon from '../assets/images/caps-logo.svg';
import { useState } from 'react';
import { observerOptions } from '../utils/constants';
import { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Footer({ setIsPopupOpened }) {

  const [isRendered, setIsRendered] = useState(false);
  const { ref, inView } = useInView(observerOptions);

  useEffect(() => {
    if (inView) {
      setIsRendered(true);
    }
  }, [inView]);

  return (
    <footer className={`footer ${isRendered ? 'footer_shown' : ''}`} id="contacts" ref={ref}>
      <AnchorLink className="footer__logo-link" href="#home">
        < img src={logoIcon} alt="CAPS logo" className="footer__logo" />
      </AnchorLink >
      <ul className="footer__container footer__container_nav-1 list">
        <li className="footer__item">
          <AnchorLink className="footer__link link" href="#services">
            Услуги
          </AnchorLink>
        </li>
        <li className="footer__item">
          <AnchorLink className="footer__link link" href='#contacts'>
            Контакты
          </AnchorLink>
        </li>
        <li className="footer__item">
          <button type="button" className="footer__link button" onClick={() => setIsPopupOpened(true)}>
            Заказать
          </button>
        </li>
      </ul>
      <ul className="footer__container footer__container_nav-2 list">
        <li className="footer__item footer__item_icons">
          <a className="footer__icon-link link">
            <span className="footer__icon footer__icon_whatsapp"></span>
          </a>
          <a className="footer__icon-link link">
            <span className="footer__icon footer__icon_telegram"></span>
          </a>
          <a className="footer__icon-link link">
            <span className="footer__icon footer__icon_vk"></span>
          </a>
        </li>
        <li className="footer__item">
          <AnchorLink className="footer__link link" href="#cases">
            Кейсы
          </AnchorLink>
        </li>
        <li className="footer__item">
          <AnchorLink className="footer__link link" href="#about">
            О нас
          </AnchorLink>
        </li>
      </ul>
      <ul className="footer__container footer__container_info list">
        <li className="footer__item">
          <a className="footer__link footer__link_contacts link" href="mailto:caps@suka.nahuy">
            caps@dam.tati
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link footer__link_contacts link" href="tel:+7(999)999-99-99">
            +7 (999) 999-99-99
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link footer__link_contacts link" href="#">
            адрес
          </a>
        </li>
      </ul>
      <div className="footer__map">
        Я КАРТА
      </div>
    </footer >
  )
}
