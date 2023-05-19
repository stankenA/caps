import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

import logo from '../images/caps-logo.svg';
import OrderButton from './OrderButton';

export default function Header() {

  const projectsArr = ['СЗППК СПБ/РЖД', 'DEL ARTE', 'SPARTA', 'MK STROY', 'UNIQCKATE'];

  const menuList = [
    {
      title: 'Услуги',
      link: '/'
    },
    {
      title: 'Кейсы',
      link: '/'
    },
    {
      title: 'О нас',
      link: '/'
    },
    {
      title: 'Контакты',
      link: '/'
    },
  ]

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__live">
          <p className="header__txt">
            НАШИ КЛИЕНТЫ <br />
            LIVE:
          </p>
        </div>
        <div className="header__marquee">
          <Marquee autoFill={true}>
            <ul className="header__marquee-list list">
              {projectsArr.map((el, i) => (
                <React.Fragment key={i}>
                  <li className="header__marquee-item" >
                    {el}
                  </li>
                  <span className="header__marquee-line">/</span>
                </React.Fragment>
              ))}
            </ul >
          </Marquee>
        </div>
      </div>
      <div className="header__bottom">
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
    </header >
  )
}
