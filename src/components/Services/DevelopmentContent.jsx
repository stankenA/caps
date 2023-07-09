import React, { useState } from 'react'

export default function DevelopmentContent({ onChange, values }) {

  const [firstExample, setFirstExample] = useState(values.example1 || '');
  const [secondExample, setSecondExample] = useState(values.example2 || '');

  function changeFirstExample(evt) {
    onChange(evt);
    setFirstExample(evt.target.value);
  }

  function changeSecondExample(evt) {
    onChange(evt);
    setSecondExample(evt.target.value);
  }

  return (
    <fieldset className="services__fieldset fieldset">
      <input
        name="example1"
        type="text"
        className="services__input input"
        placeholder="example.com"
        onChange={changeFirstExample}
        value={firstExample}
      />
      <input
        name="example2"
        type="text"
        className="services__input input"
        placeholder="otherexample.com"
        onChange={changeSecondExample}
        value={secondExample}
      />
    </fieldset>
  )
}
