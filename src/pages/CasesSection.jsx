import React, { useState } from "react";
import { observerOptions } from "../utils/constants";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import firstCaseImg from "../assets/images/cases-img-1.png";
import secondCaseImg from "../assets/images/cases-img-2.png";
import jsIcon from "../assets/images/js-icon.svg";
import CasesContent from "../components/CasesContent";

const casesArr = [
  {
    title: "Eagle Flight",
    txt: "Аренда частного самолета для бизнес поездок и путешествий",
    img: firstCaseImg,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "Eagle Fl",
    txt: "Аренда частного самолета для бизнес поездок и путешествий",
    img: secondCaseImg,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "Eagle",
    txt: "Аренда частного самолета для бизнес поездок и путешествий",
    img: firstCaseImg,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "Ea",
    txt: "Аренда частного самолета для бизнес поездок и путешествий",
    img: firstCaseImg,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
];

export default function CasesSection({ setIsPopupOpened }) {
  const [activeCard, setActiveCard] = useState(0);
  const [isRendered, setIsRendered] = useState(false);
  const { ref, inView } = useInView(observerOptions);

  useEffect(() => {
    if (inView) {
      setIsRendered(true);
    }
  }, [inView]);

  function handlePopupOpen() {
    setIsPopupOpened(true);
  }

  return (
    <section
      className={`${isRendered ? "cases cases_shown" : "cases"}`}
      id="cases"
      ref={ref}
    >
      <div className="cases__card">
        <div className="cases__left">
          <div className="cases__left-container">
            <h2 className="cases__title">Кейсы</h2>
            <p className="cases__title-txt">
              Ознакомьтесь с примерами наших проектов
            </p>
          </div>
          <button
            type="button"
            className="cases__contact"
            onClick={handlePopupOpen}
          >
            свяжитесь с нами
          </button>
        </div>
        <div className="cases__right">
          {casesArr.map((item, i) => (
            <CasesContent
              caseObj={item}
              activeCard={activeCard}
              index={i}
              key={item.title}
            />
          ))}
        </div>
      </div>
      <ul className="cases__navigation">
        {casesArr.map((_, i) => (
          <li className="cases__nav-item" key={i}>
            <button
              type="button"
              className={`cases__nav-btn ${
                i === activeCard ? `cases__nav-btn_${i + 1}` : ""
              }`}
              onClick={() => setActiveCard(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li className="cases__nav-item">
          <button type="button" className="cases__nav-btn"></button>
        </li>
      </ul>
    </section>
  );
}
