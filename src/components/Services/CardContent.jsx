import React, { useState } from 'react'

export default function CardContent({ contentArr }) {

  // Стейт выбранных пользователем опции услуг
  const [activeItems, setActiveItems] = useState([]);

  function toggleActiveItems(el) {
    if (activeItems.includes(el)) {
      setActiveItems([...activeItems.filter((item) => item !== el)]);
    } else {
      setActiveItems([...activeItems, el]);
    }
  }

  return (
    <fieldset className="services__fieldset fieldset">
      <ul className="services__card-content list">
        {/* Отрисовываем соответствующие плитки в зависимости от количества элементов контента */}
        {contentArr.length === 6
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
              className={`services__card-item-big button ${activeItems.includes(el) ? 'services__card-item-big_active' : ''}`}
              onClick={() => toggleActiveItems(el)}
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
