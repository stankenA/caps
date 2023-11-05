import React, { useState } from "react";
import { observerOptions } from "../utils/constants";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import firstCaseImg from "../assets/images/cases-img-1.png";
import secondCaseImg from "../assets/images/cases-img-2.png";
import thirdCaseImg from "../assets/images/cases-img-3.png";
import fourthCaseImg from "../assets/images/cases-img-4.png";
import fifthCaseImg from "../assets/images/cases-img-5.png";
import sixthCaseImg from "../assets/images/cases-img-6.png";
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
    title: "Хоккейный Пятачок",
    txt: "Магазин хоккейной экипировки",
    img: secondCaseImg,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "РЖД",
    txt: "Многостраничный информационный сайт",
    img: thirdCaseImg,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "Zoome",
    txt: "Танцевальная студия",
    img: fourthCaseImg,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "Unickate",
    txt: "Магазин цветов, букетов и подарков",
    img: fifthCaseImg,
    techs: [jsIcon, jsIcon, jsIcon, jsIcon, jsIcon, jsIcon],
    link: "#",
  },
  {
    title: "TERAI",
    txt: "Магазин цветов, букетов и подарков",
    img: sixthCaseImg,
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cases__nav-btn-star"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.7143 1.63475C11.2973 0.66602 12.7018 0.666021 13.2847 1.63475L16.1155 6.33852C16.325 6.68653 16.6666 6.93474 17.0623 7.02638L22.4106 8.26506C23.5121 8.52016 23.9461 9.85587 23.2049 10.7097L19.6061 14.8554C19.3398 15.1622 19.2093 15.5638 19.2445 15.9684L19.7191 21.4377C19.8169 22.5641 18.6807 23.3897 17.6396 22.9486L12.5847 20.8071C12.2107 20.6486 11.7884 20.6486 11.4144 20.8071L6.35945 22.9486C5.3184 23.3897 4.18218 22.5641 4.27994 21.4377L4.7546 15.9684C4.78972 15.5638 4.65923 15.1622 4.39297 14.8554L0.794176 10.7097C0.0530134 9.85587 0.487011 8.52016 1.58848 8.26506L6.93678 7.02638C7.33249 6.93474 7.67411 6.68653 7.88355 6.33852L10.7143 1.63475Z"
                fill="white"
              />
            </svg>
          </button>
        </li>
      </ul>
    </section>
  );
}
