import React, { useEffect, useState } from 'react'

export default function CardContent({ contentArr, values, setValues }) {

  // Стейт выбранных пользователем опции услуг
  const [activeItems, setActiveItems] = useState([]);

  useEffect(() => {
    setActiveItems(values.context);
  }, [values.context])

  // Отобразить выбранный элемент и добавить его значение в итоговый объект
  function toggleActiveItems(el) {
    if (activeItems.includes(el)) {
      setActiveItems([...activeItems.filter((item) => item !== el)]);
      setValues({ ...values, context: [...values.context].filter((item) => item !== el) });
    } else {
      setActiveItems([...activeItems, el]);
      setValues({ ...values, context: [...values.context, el] });
    }
  }

  return (
    <fieldset className="services__fieldset fieldset">
      <ul className="services__card-content list">
        {/* Отрисовываем соответствующие плитки в зависимости от количества элементов контента */}
        {contentArr.length > 3
          ? contentArr.map((el) => (
            <li
              key={el}
              className={`services__card-item button ${activeItems.includes(el) ? 'services__card-item_active' : ''}`}
              onClick={() => toggleActiveItems(el)}
            >
              {el}
            </li>
          ))
          : contentArr.map((el) => (
            <li
              key={el.name}
              className={`services__card-item-big button ${activeItems.includes(el.name) ?
                'services__card-item-big_active' : ''}`}
              onClick={() => toggleActiveItems(el.name)}
            >
              <img
                src={el.img}
                alt={el.name}
                className="services__icon-img"
              />
            </li>
          ))
        }
      </ul>
    </fieldset>
  )
}
