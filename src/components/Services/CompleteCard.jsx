import React from 'react';

import capsLogo from '../../assets/images/caps-logo-white.svg';

export default function CompleteCard({ isCardComplete, onClose, setIsCardComplete }) {

  function closeCard() {
    onClose();
    setIsCardComplete();
  }

  return (
    <div className={`services__complete ${isCardComplete ? 'services__complete_active' : ''}`}>
      <div className="services__complete-left">
        <h2 className="services__title">Готово!</h2>
        <p className="services__txt services__txt_complete">
          Спасибо за оставленную заявку! В скором времени мы с вами свяжемся, а пока предлагаем сыграть в игру: <br />
          <br />
          На нашем сайте спрятан промокод, который даст вам <span className="services__complete-discount">скидку 10%</span>  на ваш заказ. Удачи ;&#41;
        </p>
        <button type="button" className="services__complete-btn button" onClick={closeCard}>
          закрыть
        </button>
      </div>
      <img src={capsLogo} alt="logo" className="services__complete-logo" />
    </div>
  )
}
