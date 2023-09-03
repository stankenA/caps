import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

import logo from '../assets/images/caps-logo.svg';
import OrderButton from './OrderButton';

export default function HeaderMenu() {
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
      link: '/contacts'
    },
  ]

  return (
    <Fade direction='up' triggerOnce>
      <div className="header__menu">
        <Link className="header__link" to='/'>
          <img src={logo} alt="CAPS logo" className="header__logo" />
        </Link>
        <ul className="header__menu-list list">
          {menuList.map((el) => (
            <li key={el.title} className="header__menu-item">
              <Link className="header__menu-link link" to={el.link}>
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
        <OrderButton type={'button'} />
      </div>
    </Fade>
  )
}
