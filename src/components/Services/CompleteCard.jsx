import React from 'react';
import { Link } from 'react-router-dom';

import capsLogo from '../../assets/images/caps-logo-white.svg';

export default function CompleteCard({ isCardComplete }) {
  return (
    <div className={`services__complete ${isCardComplete ? 'services__complete_active' : ''}`}>
      <div className="services__complete-left">
        <h2 className="services__title">Готово!</h2>
        <p className="services__txt">
          Спасибо за оставленную заявку! В скором времени мы с вами свяжемся, а пока предлагаем сыграть в игру: <br />
          <br />
          На нашем сайте спрятан промокод, который даст вам <span className="services__complete-discount">скидку 10%</span>  на ваш заказ. Удачи ;&#41;
        </p>
        <Link to='/' className="services__complete-link link">
          на главную
        </Link>
      </div>
      <img src={capsLogo} alt="logo" className="services__complete-logo" />
    </div>
  )
}
