import React from 'react';
import Marquee from 'react-fast-marquee';

export default function Header() {

  const projectsArr = ['СЗППК СПБ/РЖД', 'DEL ARTE', 'SPARTA', 'MK STROY', 'UNIQCKATE'];

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
          <ul className="header__marquee-list list">
            {projectsArr.map((el) => (
              <>
                <li key={el} className="header__marquee-item">
                  {el}
                </li>
                <span className="header__marquee-line">/</span>
              </>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
