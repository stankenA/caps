import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Fade } from 'react-awesome-reveal';

import logo from '../assets/images/caps-logo.svg';
import { useEffect } from 'react';

export default function HeaderMenu({ isHomeVisible, setIsPopupOpened }) {

  const [isOpened, setIsOpened] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const menuList = [
    {
      title: 'Услуги',
      link: '#services'
    },
    {
      title: 'Кейсы',
      link: '#cases'
    },
    {
      title: 'О нас',
      link: '#about'
    },
    {
      title: 'Контакты',
      link: '#contacts'
    },
  ];

  useEffect(() => {
    if (!isHomeVisible) {
      setIsShown(true)
    } else {
      setIsShown(false)
    }
  }, [isHomeVisible])

  return (
    <div className={`header__menu ${isOpened ? 'header__menu_opened' : ''} ${isShown ? 'header__menu_shown' : ''}`}>
      <AnchorLink className="header__link" href="#home">
        <img src={logo} alt="CAPS logo" className="header__logo" />
      </AnchorLink>
      <ul className="header__menu-list list">
        {menuList.map((el) => (
          <li key={el.title} className="header__menu-item" onClick={() => setIsOpened(false)}>
            <AnchorLink className="header__menu-link link" href={el.link}>
              {el.title}
            </AnchorLink>
          </li>
        ))}
      </ul>
      <button type="button" className="header__button button" onClick={() => setIsPopupOpened(true)}>
        <p className="header__button-txt">Заказать</p>
      </button>
      <button type="button" className={`header__hamburger ${isOpened ? 'header__hamburger_opened' : ''}`} onClick={() => setIsOpened(!isOpened)}></button>
      <div className="header__info">
        <Fade direction='up'>
          <Link className="header__info-link link" to='mailto:caps@suka.nahuy'>
            caps@dam.tati
          </Link>
          <Link className="header__info-link link" to='tel:+7-999-999-99-99'>
            +7 (999) 999-99-99
          </Link>
          <div className="header__socials">
            <Link className="header__socials-link header__socials-link_whatsapp link">
            </Link>
            <Link className="header__socials-link header__socials-link_telegram link">
            </Link>
            <Link className="header__socials-link header__socials-link_vk link">
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  )
}
