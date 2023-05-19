import React from 'react';

export default function OrderButton({ type }) {
  return (
    <button type={type} className="header__button button">
      <p className="header__button-txt">Заказать</p>
    </button>
  )
}
