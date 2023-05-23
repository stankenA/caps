import React from 'react';

export default function UserCommentary() {
  return (
    <fieldset className="services__fieldset fieldset">
      <textarea
        className="services__textarea input"
        placeholder="Здесь вы можете поделиться референсами, кратко описать ваш проект или написать смешной анекдот, как вариант"
      ></textarea>
    </fieldset>
  )
}
