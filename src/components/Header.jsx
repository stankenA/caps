import React from 'react';
import Marquee from 'react-fast-marquee';
import { Routes, Route } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

import HeaderMenu from './HeaderMenu';

export default function Header() {

  const projectsArr = ['СЗППК СПБ/РЖД', 'DEL ARTE', 'SPARTA', 'MK STROY', 'UNIQCKATE'];
  const routesPaths = ['/services', '/services/*', '/cases', '/about', '/contacts'];

  return (
    <header className="header">
      <Fade direction='down' triggerOnce>
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
      </Fade>
      <Routes>
        {routesPaths.map((path) => (
          <Route path={path} element={<HeaderMenu />} key={path} />
        ))}
      </Routes>
    </header >
  )
}
