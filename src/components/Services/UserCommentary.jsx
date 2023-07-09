import React, { useState } from 'react';

export default function UserCommentary({ onChange, values }) {

  const [commentary, setCommentary] = useState(values.commentary || '');

  function changeCommentary(evt) {
    onChange(evt);
    setCommentary(evt.target.value);
  }

  return (
    <fieldset className="services__fieldset fieldset">
      <textarea
        className="services__textarea input"
        placeholder="Здесь вы можете поделиться референсами, кратко описать ваш проект или написать смешной анекдот, как вариант"
        name="commentary"
        onChange={changeCommentary}
        value={commentary}
      ></textarea>
    </fieldset>
  )
}
