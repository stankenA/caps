import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import logoIcon from '../assets/images/caps-logo.svg';
import { useState } from 'react';
import { observerOptions } from '../utils/constants';
import { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Footer() {

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
          <AnchorLink className="footer__link link" href="#cases">
            Кейсы
          </AnchorLink>
        </li>
        <li className="footer__item">
          <Link className="footer__link link" href="#about">
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
  )
}
