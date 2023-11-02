import React from "react";

export default function CasesContent({ caseObj, activeCard, index }) {
  const isActive = activeCard === index;
  return (
    <div
      className={`cases__content cases__content_${index + 1} ${
        isActive ? "cases__content_active" : ""
      }`}
    >
      <div className="cases__content-box">
        <img src={caseObj.img} alt="Описание кейса" className="cases__img" />
        <div className="cases__container">
          <div className="cases__txt-box">
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
          </div>
          <a href={caseObj.link} className="cases__link">
            ознакомиться
          </a>
        </div>
      </div>
    </div>
  );
}
