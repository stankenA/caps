import React, { useState } from 'react';

import eagleQR from '../../assets/images/qr-eagle.png';
import plane from '../../assets/images/plane.png';

import train from '../../assets/images/train.png';
import rzdLogo from '../../assets/images/rzd-logo.svg';

import maleFace from '../../assets/images/cases-male-face.png';
import womanFace from '../../assets/images/cases-woman-face.png';
import granny from '../../assets/images/cases-granny.png';
import planet from '../../assets/images/cases-planet.png';
import berry from '../../assets/images/cases-berry.png';
import rocket from '../../assets/images/cases-rocket.png';

import capsLogo from '../../assets/images/caps-logo-white.svg';

export default function CasesCard() {

  const [activeCard, setActiveCard] = useState(0);

  const casesArr = [
    {
      title: 'Eagle Flight',
      brief: 'Аренда частного самолета для бизнес поездок и путешествий',
      type: 'Многостраничный сайт описание продукта',
      img: [{ url: plane, name: 'plane' }],
      qr: eagleQR,
      action: 'ознакомиться',
      link: '#',
      modifier: 'eagle',
    },
    {
      title: 'РЖД СЗППК',
      brief: 'Сайт РЖД блин че еще тут говорить',
      type: 'Многостраничный сайт описание продукта',
      img: [{ url: train, name: 'train' }, { url: rzdLogo, name: 'rzd-logo' }],
      qr: eagleQR,
      action: 'ознакомиться',
      link: '#',
      modifier: 'rzd',
    },
    {
      title: 'Хоккейный Пятачок',
      brief: 'Сайт РЖД блин че еще тут говорить',
      type: 'Многостраничный сайт описание продукта',
      qr: eagleQR,
      action: 'ознакомиться',
      link: '#',
      modifier: 'hockey',
    },
    {
      title: 'Ваш новый сайт',
      brief: 'Такой, каким вы его полюбите',
      type: 'Многостраничный сайт описание продукта',
      img: [
        { url: maleFace, name: 'male' },
        { url: womanFace, name: 'woman' },
        { url: granny, name: 'granny' },
        { url: planet, name: 'planet' },
        { url: berry, name: 'berry' },
        { url: rocket, name: 'rocket' },
      ],
      qr: capsLogo,
      action: 'заказать',
      link: '#',
      modifier: 'final',
    },
  ];

  function handleNextBtn() {
    if (casesArr.length - 1 === activeCard) {
      setActiveCard(0)
    } else {
      setActiveCard(activeCard + 1);
    }
  }

  return (
    <div className="cases__card">
      <div className="cases__left">
        <h2 className="cases__title">
          КЕЙСЫ
        </h2>
        <p className="cases__txt">
          Узнайте о том, как группа друзей, воплощая мечты клиентов, воплотила свою. В 4-х актах рассказываем о себе и о том, как на свет появилось агентство CAPS.
        </p>
      </div>
      <ul className="cases__list list">
        {casesArr.map((item, i) => (
          <li className={`
              cases__item
              cases__item_${item.modifier}
              ${i === activeCard ? 'cases__item_active' : ''}
              ${i < activeCard ? 'cases__item_shown' : ''}`}
            style={{ zIndex: Math.floor(100 / (i + 1)) }}
            key={item.title}
          >
            {item.img
              ? item.img.map((img) => (
                <img src={img.url} alt={img.name} className={`cases__img cases__img_${img.name}`} key={img.name} />
              ))
              : ''}
            <div className="cases__content">
              <h3 className="cases__subtitle">
                {item.title}
              </h3>
              <p className="cases__brief">
                {item.brief}
              </p>
              <p className="cases__type">
                {item.type}
              </p>
              <div className="cases__links">
                <img src={item.qr} alt="QR-код" className="cases__qr" />
                <a href={item.link} className="cases__link" target="_blank" rel="noreferrer">{item.action}</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" className="cases__button button" onClick={handleNextBtn}>
        <span className={`cases__arrow ${activeCard === 1 ? 'cases__arrow_white' : ''}`}></span>
      </button>
      <span className="cases__bg"></span>
    </div>
  )
}
