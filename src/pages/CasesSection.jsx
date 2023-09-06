import React, { useState } from 'react';
import { casesArr, observerOptions } from '../utils/constants';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

export default function CasesPage() {

  const isRendered = useRef(false);
  const { ref, inView } = useInView(observerOptions);
  useEffect(() => {
    if (inView) {
      isRendered.current = true;
    }
  }, [inView]);

  console.log(inView)

  const [activeCard, setActiveCard] = useState(0);
  function handleNextBtn() {
    if (casesArr.length - 1 === activeCard) {
      setActiveCard(0)
    } else {
      setActiveCard(activeCard + 1);
    }
  }

  if (!isRendered) {
    return '...'
  }

  return (
    <section className="cases" id="cases" ref={ref}>
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
    </section>
  )
}
