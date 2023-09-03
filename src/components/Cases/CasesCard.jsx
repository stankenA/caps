import React, { useState } from 'react';

import eagleQR from '../../assets/images/qr-eagle.png';
import plane from '../../assets/images/plane.png';

export default function CasesCard() {

  const [activeCard, setActiveCard] = useState(0);

  const casesArr = [
    {
      title: 'Eagle Flight',
      brief: 'Аренда частного самолета для бизнес поездок и путешествий',
      type: 'Многостраничный сайт описание продукта',
      img: plane,
      qr: eagleQR,
      link: '#',
      modifier: 'eagle',
    },
    {
      title: 'Some Case',
      brief: 'Something',
      type: 'Многостраничный сайт описание продукта',
      img: plane,
      qr: eagleQR,
      link: '#',
      modifier: 'some',
    },
    {
      title: 'Some Casesss',
      brief: 'Чё?',
      type: 'Многостраничный сайт описание продукта',
      img: plane,
      qr: eagleQR,
      link: '#',
      modifier: 'some2',
    },
    {
      title: 'Something here',
      brief: 'Чё?',
      type: 'Многостраничный сайт описание продукта',
      img: plane,
      qr: eagleQR,
      link: '#',
      modifier: 'some3',
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
            <img src={plane} alt="Самолёт" className={`cases__img cases__img_${item.modifier}`} />
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
                <a href={item.link} className="cases__link" target="_blank" rel="noreferrer">ознакомиться</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" className="cases__button button" onClick={handleNextBtn}>
        <span className={`cases__arrow ${activeCard === 1 ? 'cases__arrow_white' : ''}`}></span>
      </button>
    </div>
  )
}
