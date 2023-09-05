import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Fade } from 'react-awesome-reveal';

import logo from '../assets/images/caps-logo.svg';
import OrderButton from './OrderButton';

export default function HeaderMenu() {

  const [isOpened, setIsOpened] = useState(false);
  const [isShown, setIsShown] = useState(true);

  const menuList = [
    {
      title: 'Услуги',
      link: '/services'
    },
    {
      title: 'Кейсы',
      link: '/cases'
    },
    {
      title: 'О нас',
      link: '/about'
    },
    {
      title: 'Контакты',
      link: '#contacts'
    },
  ]

  return (
    <div className={`header__menu ${isOpened ? 'header__menu_opened' : ''} ${isShown ? 'header__menu_shown' : ''}`}>
      <Link className="header__link" to='/'>
        <img src={logo} alt="CAPS logo" className="header__logo" />
      </Link>
      <ul className="header__menu-list list">
        {menuList.map((el) => (
          <li key={el.title} className="header__menu-item" onClick={() => setIsOpened(false)}>
            <Link className="header__menu-link link" to={el.link}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
      <OrderButton type={'button'} />
      <button type="button" className="header__hamburger" onClick={() => setIsOpened(!isOpened)}></button>
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
