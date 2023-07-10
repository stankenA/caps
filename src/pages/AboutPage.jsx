import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import poridgeImg from '../images/about-img.jpg';
import meImg from '../images/about-me.jpg'

export default function AboutPage() {

  const [activeSlide, setActiveSlide] = useState(0);

  function handleNextBtn() {
    if (aboutArr.length - 1 === activeSlide) {
      setActiveSlide(0)
    } else {
      setActiveSlide(activeSlide + 1);
    }
  }

  const aboutArr = [
    {
      img: poridgeImg,
      title: 'Сандерс',
      subtitle: 'Директор по отстатию',
      txt: '“Короче, все что вам Саня будет говорить, можете спокойно делить на 5 на 10, так какон пиздабол, НО! Если речь идет о цене в нашей смете - тут он прав, вы уж извините.”',
    },
    {
      img: poridgeImg,
      title: 'Никита',
      subtitle: 'Директор по развитию, CEO',
      txt: '“Короче, все что вам Саня будет говорить, можете спокойно делить на 5 на 10, так какон пиздабол, НО! Если речь идет о цене в нашей смете - тут он прав, вы уж извините.”',
    },
    {
      img: poridgeImg,
      title: 'Ноунейм',
      subtitle: 'Местный поридж',
      txt: '“Короче, все что вам Саня будет говорить, можете спокойно делить на 5 на 10, так какон пиздабол, НО! Если речь идет о цене в нашей смете - тут он прав, вы уж извините.”',
    },
    {
      img: meImg,
      title: 'Артём',
      subtitle: 'Местный кринж',
      txt: '“👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎”',
    },
  ];

  const aboutNavArr = ['management', 'design', 'smm', 'programming'];

  return (
    <Fade direction="left">
      <section className="about">
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
                  <div className="about__voice">

                  </div>
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
    </Fade>
  )
}
