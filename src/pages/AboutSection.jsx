import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';

import AudioMessage from '../components/AudioMessage';
import { aboutArr, aboutNavArr, observerOptions } from '../utils/constants';
import { useEffect } from 'react';

export default function AboutPage() {

  const [isRendered, setIsRendered] = useState(false);
  const { ref, inView } = useInView(observerOptions);

  useEffect(() => {
    if (inView) {
      setIsRendered(true);
    }
  }, [inView]);

  const [activeSlide, setActiveSlide] = useState(0);
  function handleNextBtn() {
    if (aboutArr.length - 1 === activeSlide) {
      setActiveSlide(0)
    } else {
      setActiveSlide(activeSlide + 1);
    }
  }

  return (
    <section className={`about ${isRendered ? 'about_shown' : ''}`} id="about" ref={ref}>
      <div className="about__card">
        <div className="about__left">
          <h2 className="about__title">
            О нас
          </h2>
          <p className="about__txt">
            Узнайте о том, как группа друзей, воплощая мечты клиентов, воплотила свою. В 4-х актах рассказываем о себе и о том, как на свет появилось агентство CAPS.
          </p>
        </div>
        <ul className="about__list list">
          {aboutArr.map((item, i) => (
            <li className={`about__item ${i === activeSlide ? 'about__item_active' : ''}`} key={item.title}>
              <img src={item.img} alt="Фото пориджа" className="about__img" />
              <div className="about__item-content">
                <h3 className="about__item-title">
                  {item.title}
                </h3>
                <p className="about__item-subtitle">
                  {item.subtitle}
                </p>
                <p className="about__item-txt">
                  {item.txt}
                </p>
                <AudioMessage audio={item.audio} />
              </div>
            </li>
          ))}
        </ul>
        <button type="button" className="about__button button" onClick={handleNextBtn}>
          <span className="about__button-bg"></span>
          <span className="about__arrow"></span>
        </button>
      </div>
      <ul className="about__nav list">
        {aboutNavArr.map((item, i) => (
          <li className="about__nav-item" key={item}>
            <button
              type="button"
              className={`about__nav-btn button ${i === activeSlide ? 'about__nav-btn_active' : ''}`}
              onClick={() => setActiveSlide(i)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
