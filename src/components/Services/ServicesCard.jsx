import React, { useState } from 'react';
import CheckList from './CheckList';
import CardContent from './CardContent';

export default function ServicesCard({ activeCard, cardType, cardBackground, title, slides, titlesArr, itemsArr, onLastBack }) {

  const [activeSlide, setActiveSlide] = useState(slides[0]);
  const [activatedSlides, setActivatedSlides] = useState([]);

  function showNextSlide() {
    setActivatedSlides([...activatedSlides, activeSlide]);
    setActiveSlide(activeSlide + 1);
  }

  function showPreviousSlide() {
    if (activeSlide === slides[0]) {
      onLastBack();
      setActivatedSlides([]);
    } else {
      activatedSlides.pop();
      setActiveSlide(activeSlide - 1);
    }
  }

  return (
    <div className={`services__card ${activeCard === cardType ? 'services__card_active' : ''}`}>
      <div className="services__card-left">
        <h2 className="services__title services__title_white">
          {title}
        </h2>
        <p className="services__txt services__txt_white">
          Узнайте о том, как группа друзей, воплощая мечты клиентов, воплотила свою. В 4-х актах рассказываем о себе и о том, как на свет появилось агентство CAPS.
        </p>
      </div>
      <div className="services__card-right">
        <span
          className="services__card-background"
          style={{ backgroundImage: `url(${cardBackground})` }}
        >
        </span>
        <div className="services__card-wrapper">
          {titlesArr.map((el, i) => (
            <p
              key={el}
              className={`services__choose ${activeSlide === i ? 'services__choose_active' : ''}`}
            >
              {el}
            </p>
          ))}
          <CheckList slides={slides} activatedSlides={activatedSlides} />
          {/* <CardContent contentArr={itemsArr} /> */}
          <CardContent contentArr={itemsArr} />
          <div className="services__nav-buttons">
            <button
              type="button"
              className="services__back button button_black"
              onClick={() => showPreviousSlide()}
            >
            </button>
            {activeSlide === slides.length - 1
              ? <button
                type="submit"
                className="services__next button button_black"
              >
                отправить
              </button>
              : <button
                type="button"
                className="services__next button button_black"
                onClick={() => showNextSlide()}
              >
                далее
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
