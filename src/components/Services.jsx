import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className="services">
      <div className="services__info">
        <h1 className="services__title">Ууслуги</h1>
        <p className="services__txt">
          Узнайте о том, как группа друзей, воплощая мечты клиентов, воплотила свою. В 4-х актах рассказываем о себе и о том, как на свет появилось агентство CAPS.
        </p>
      </div>
      <ul className="services__content list">
        <li className="services__item">
          <Link className="services__link link" to='/services/production'>
            Разра <br />
            ботка
            сай <br />
            тов
          </Link>
        </li>
        <li className="services__item">
          <Link className="services__link link">
            Прод <br />
            ви <br />
            же <br />
            ние
          </Link>
        </li>
        <li className="services__item">
          <Link className="services__link link">
            Ди <br />
            за <br />
            йн
          </Link>
        </li>
        <li className="services__item">
          <Link className="services__link link">
            Про <br />
            дак <br />
            шн
          </Link>
        </li>
        <li className="services__item">
          <Link className="services__link link">
            Месс <br />
            енд <br />
            жер <br />
            боты
          </Link>
        </li>
        <li className="services__item">
          <Link className="services__link link">
            Моби <br />
            льные <br />
            прило <br />
            жения
          </Link>
        </li>
      </ul>
    </section>
  )
}
