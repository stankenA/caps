import React, { useState } from 'react'

export default function CardContent({ contentArr }) {

  const [activeItems, setActiveItems] = useState([]);

  function toggleActiveItems(el) {
    if (activeItems.includes(el)) {
      setActiveItems([...activeItems.filter((item) => item !== el)]);
    } else {
      setActiveItems([...activeItems, el]);
    }
  }

  return (
    <ul className="services__card-content list">
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
  )
}
