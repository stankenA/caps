import React, { useState } from 'react';

export default function PersonalData({ onChange, values }) {

  const [nameValue, setNameValue] = useState(values.name || '');
  const [telValue, setTelValue] = useState(values.tel || '');
  const [emailValue, setEmailValue] = useState(values.email || '');

  function changeName(evt) {
    onChange(evt);
    setNameValue(evt.target.value);
  }

  function changeTel(evt) {
    onChange(evt);
    setTelValue(evt.target.value);
  }

  function changeEmail(evt) {
    onChange(evt);
    setEmailValue(evt.target.value);
  }

  return (
    <fieldset className="services__fieldset fieldset">
      <input
        name="name"
        type="text"
        className="services__input input"
        placeholder="Фамилия Имя Отчество"
        onChange={changeName}
        value={nameValue}
      />
      <input
        name="tel"
        type="tel"
        className="services__input input"
        placeholder="+7 (999) 999-99-99"
        onChange={changeTel}
        value={telValue}
      />
      <input
        name="email"
        type="email"
        className="services__input input"
        placeholder="mail@yandex.ru"
        onChange={changeEmail}
        value={emailValue}
      />
    </fieldset>
  )
}
