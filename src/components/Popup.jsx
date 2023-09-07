import React from 'react';
import capsLogo from '../assets/images/caps-logo-white.svg';

const Popup = ({ isOpened, setIsOpened }) => {

  function closeOnBg(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      setIsOpened(false);
    }
  }

  return (
    <div className={`popup ${isOpened ? 'popup_opened' : ''}`} onClick={closeOnBg}>
      <div className="popup__wrapper">
        <div className="popup__txt-block">
          <h2 className="popup__title">
            Мы свяжемся с вами!
          </h2>
          <p className="popup__txt">
            {` Мы позвоним вам и проконсультируем по любому вопросу, просто оставьте свой номер и подскажите, как вас зовут :) тексткгкпщзяшыгивпа яфжыв пжча впрфжыфп гавржп фщаж ыов рпжфпы щвпр фжыжвпр щфжы `}
          </p>
        </div>
        <form className="popup__form">
          <img src={capsLogo} alt="CAPS лого" className="popup__img" />
          <fieldset className="popup__fieldset fieldset">
            <input type="text" className="popup__input input" placeholder="Имя Фамилия" />
            <input type="tel" className="popup__input input" placeholder="+7 (999) 999-99-99" />
          </fieldset>
          <button type="submit" className="popup__submit button">
            <p className="popup__txt popup__txt_black">
              отправить
            </p>
          </button>
        </form>
        <button
          type="button"
          className="popup__close button"
          onClick={() => setIsOpened(false)}
        ></button>
      </div>
    </div>
  )
}

export default Popup
