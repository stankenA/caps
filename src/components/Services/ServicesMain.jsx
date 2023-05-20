import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesMain() {
  return (
    <>
      <div className="services__info">
        <h1 className="services__title">Услуги</h1>
        <p className="services__txt">
          Узнайте о том, как группа друзей, воплощая мечты клиентов, воплотила свою. В 4-х актах рассказываем о себе и о том, как на свет появилось агентство CAPS.
        </p>
      </div>
      <ul className="services__content list">
        <li className="services__item">
          <Link className="services__link services__link_development link" to='/services/development'>
            <p className="services__link-txt">
              Разра <br />
              ботка
              сай <br />
              тов
            </p>
          </Link>
        </li>
        <li className="services__item">
          <Link className="services__link services__link_promotion link">
            <p className="services__link-txt">
              Прод <br />
              ви <br />
              же <br />
              ние
            </p>
          </Link>
        </li>
        <li className="services__item">
          <Link className="services__link services__link_design link">
            <p className="services__link-txt">
              Ди <br />
              за <br />
              йн
            </p>
          </Link>
        </li>
        <li className="services__item">
          <Link className="services__link services__link_production link">
            <p className="services__link-txt">
              Про <br />
              дак <br />
              шн
            </p>
          </Link>
        </li>
        <li className="services__item">
          <Link className="services__link services__link_bots link">
            <p className="services__link-txt">
              Месс <br />
              енд <br />
              жер <br />
              боты
            </p>
          </Link>
        </li>
        <li className="services__item">
          <Link className="services__link services__link_mobile link">
            <p className="services__link-txt">
              Моби <br />
              льные <br />
              прило <br />
              жения
            </p>
          </Link>
        </li>
      </ul>
    </>
  )
}
