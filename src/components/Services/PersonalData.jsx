import React from 'react';

export default function PersonalData() {
  return (
    <fieldset className="services__fieldset fieldset">
      <input type="text" className="services__input input" placeholder="Фамилия Имя Отчество" />
      <input type="tel" className="services__input input" placeholder="+7 (999) 999-99-99" />
      <input type="email" className="services__input input" placeholder="mail@yandex.ru" />
    </fieldset>
  )
}
