import React, { useState } from "react";

export default function CasesContent({
  caseObj,
  activeCard,
  index,
  isLastCase,
  handlePopupOpen,
}) {
  const [isContentOpened, setIsContentOpened] = useState(false);

  const isActive = activeCard === index;
  return (
    <div
      className={`cases__content cases__content_${index + 1} ${
        isActive ? "cases__content_active" : ""
      } ${isLastCase ? "cases__content_last" : ""}`}
    >
      <div className="cases__content-box">
        <img src={caseObj.img} alt="Превью кейса" className="cases__img" />
        <div className="cases__container">
          <div
            className={`cases__txt-box ${
              isContentOpened ? "cases__txt-box_opened" : ""
            }`}
            onClick={() => setIsContentOpened(!isContentOpened)}
          >
            <h3 className={`cases__subtitle cases__subtitle_${index + 1}`}>
              {caseObj.title}
            </h3>
            <p className="cases__txt">{caseObj.txt}</p>
            <p className="cases__txt cases__txt_bold">Технологии:</p>
            <ul className="cases__techs">
              {caseObj.techs.map((techImg, i) => (
                <li className="cases__techs-item" key={i}>
                  <img
                    src={techImg}
                    alt="JavaScript"
                    className="cases__techs-img"
                  />
                </li>
              ))}
            </ul>
            <span
              className={`cases__arrow ${
                isContentOpened ? "cases__arrow_opened" : ""
              }`}
            ></span>
          </div>
          <img
            src={caseObj.mobImg}
            alt="Превью кейса"
            className="cases__img-mobile"
          />
          {isLastCase ? (
            <button className="cases__contact" onClick={handlePopupOpen}>
              заказать
            </button>
          ) : (
            <a
              href={caseObj.link}
              target="_blank"
              rel="noreferrer"
              className="cases__link"
            >
              ознакомиться
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
