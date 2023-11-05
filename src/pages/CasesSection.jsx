import React, { useState } from "react";
import { observerOptions } from "../utils/constants";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import firstCaseImg from "../assets/images/cases-img-1.png";
import firstCaseMob from "../assets/images/cases-mob-img-1.png";
import secondCaseImg from "../assets/images/cases-img-2.png";
import secondCaseMob from "../assets/images/cases-mob-img-2.png";
import thirdCaseImg from "../assets/images/cases-img-3.png";
import thirdCaseMob from "../assets/images/cases-mob-img-3.png";
import fourthCaseImg from "../assets/images/cases-img-4.png";
import fourthCaseMob from "../assets/images/cases-mob-img-4.png";
import fifthCaseImg from "../assets/images/cases-img-5.png";
import fifthCaseMob from "../assets/images/cases-mob-img-5.png";
import sixthCaseImg from "../assets/images/cases-img-6.png";
import sixthCaseMob from "../assets/images/cases-mob-img-6.png";
import jsIcon from "../assets/images/js-icon.svg";
import CasesContent from "../components/CasesContent";

const casesArr = [
  {
    title: "Eagle Flight",
    txt: "Аренда частного самолета для бизнес поездок и путешествий",
    img: firstCaseImg,
    mobImg: firstCaseMob,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "Хоккейный Пятачок",
    txt: "Магазин хоккейной экипировки",
    img: secondCaseImg,
    mobImg: secondCaseMob,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "РЖД",
    txt: "Многостраничный информационный сайт",
    img: thirdCaseImg,
    mobImg: thirdCaseMob,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "Zoome",
    txt: "Танцевальная студия",
    img: fourthCaseImg,
    mobImg: fourthCaseMob,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "Unickate",
    txt: "Магазин цветов, букетов и подарков",
    img: fifthCaseImg,
    mobImg: fifthCaseMob,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "TERAI",
    txt: "Магазин цветов, букетов и подарков",
    img: sixthCaseImg,
    mobImg: sixthCaseMob,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
];

const lastCaseObj = {
  title: "Eagle Flight",
  txt: "Аренда частного самолета для бизнес поездок и путешествий",
  img: firstCaseImg,
  techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
  link: "#",
};

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
          <CasesContent
            caseObj={lastCaseObj}
            activeCard={activeCard}
            index={casesArr.length}
          />
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
          <button
            type="button"
            className={`cases__nav-btn ${
              casesArr.length === activeCard
                ? `cases__nav-btn_${casesArr.length + 1}`
                : ""
            }`}
            onClick={() => setActiveCard(casesArr.length)}
          >
            <span
              className={`cases__nav-btn-star cases__nav-btn-star_${
                activeCard + 1
              }`}
            ></span>
          </button>
        </li>
      </ul>
    </section>
  );
}
