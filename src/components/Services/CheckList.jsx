import React from 'react'

export default function CheckList({ slides, activatedSlides }) {
  return (
    <ul className="services__check list">
      {slides.map((el, i) => {
        if (slides.length - 1 === i) {
          return (
            <li className="services__checkbox" key={el}>
              <span
                className={`services__checkmark ${activatedSlides.includes(i) ? 'services__checkmark_checked' : ''}`}
              >
              </span>
            </li>
          )
        } else {
          return (
            <React.Fragment key={el}>
              <li className="services__checkbox">
                <span
                  className={`services__checkmark ${activatedSlides.includes(i) ? 'services__checkmark_checked' : ''}`}
                >
                </span>
              </li>
              <span className="services__dashed-line"></span>
            </React.Fragment>
          )
        }
      })}
    </ul>
  )
}
