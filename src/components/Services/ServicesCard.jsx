import React, { useState } from 'react';
import CheckList from './CheckList';
import CardContent from './CardContent';
import PersonalData from './PersonalData';
import UserCommentary from './UserCommentary';
import DevelopmentContent from './DevelopmentContent';

export default function ServicesCard({
  activeCard,
  cardType,
  cardBackground,
  title,
  slides,
  titlesArr,
  itemsArr,
  onLastBack,
  onSubmit,
  handleChange,
  values,
  setValues
}) {

  // Показывает текущий активный слайд контента в карточке
  const [activeSlide, setActiveSlide] = useState(slides[0]);
  // Массив для хранения данных об уже активных слайдах
  const [activatedSlides, setActivatedSlides] = useState([]);

  // Показывает следующий слайд
  function showNextSlide() {
    setActivatedSlides([...activatedSlides, activeSlide]);
    setActiveSlide(activeSlide + 1);
  }

  // Возвращается к предыдущему слайду.
  // Если это первый слайд, закрывает карточку вовсе.
  function showPreviousSlide() {
    if (activeSlide === slides[0]) {
      onLastBack();
      setActivatedSlides([]);
      setValues({ context: [], type: '' })
    } else {
      activatedSlides.pop();
      setActiveSlide(activeSlide - 1);
    }
  }

  function submitForm(evt) {
    evt.preventDefault();
    onSubmit();
    console.log(values);
    setValues({ context: [], type: '' });
  }

  return (
    <div className={`services__card ${activeCard === cardType ? 'services__card_active' : ''}`}>
      <div className="services__card-left">
        <h2 className="services__title services__title_white">
          {title}
        </h2>
        <p className="services__txt services__txt_white">
          Узнайте о том, как группа друзей, воплощая мечты клиентов, воплотила свою. В 4-х актах рассказываем о себе и о том, как на свет появилось агентство CAPS.
        </p>
      </div>
      <form className="services__card-right">
        <span
          className="services__card-background"
          style={{ backgroundImage: `url(${cardBackground})` }} // передаём нужную крутяшку на фон контента
        >
        </span>
        <div className="services__card-wrapper">
          {/* Отображаем все заголовки для слайдов карточки, пришедшие из массива */}
          {titlesArr.map((el, i) => (
            <p
              key={el}
              className={`services__choose ${activeSlide === i ? 'services__choose_active' : ''}`}
            >
              {el}
            </p>
          ))}
          {/* Компонент с галочками */}
          <CheckList slides={slides} activatedSlides={activatedSlides} />
          { //Если активен первый слайд, показываем переданный контент
            activeSlide === 0 ? (<CardContent contentArr={itemsArr} values={values} setValues={setValues} />)
              // Если активен предпоследний слайд, показываем форму для личных данных
              : activeSlide === slides.length - 2 ? (<PersonalData onChange={handleChange} values={values} />)
                // Если активен последний слайд, показываем форму для комментария
                : activeSlide === slides.length - 1 ? (<UserCommentary onChange={handleChange} values={values} />)
                  // Нужен для второго слайда, если в сумме их 4
                  : (<DevelopmentContent contentArr={itemsArr} values={values} onChange={handleChange} />)
          }
          {/* Кнопки навигации по слайдам */}
          <div className="services__nav-buttons">
            <button
              type="button"
              className="services__back button button_black"
              onClick={() => showPreviousSlide()}
            >
            </button>
            {activeSlide === slides.length - 1
              ? <button
                type="submit"
                className="services__next button button_black"
                onClick={submitForm}
              >
                отправить
              </button>
              : <button
                type="button"
                className="services__next button button_black"
                onClick={(evt) => {
                  evt.preventDefault();
                  showNextSlide()
                }}
              >
                далее
              </button>
            }
          </div>
        </div>
      </form>
    </div>
  )
}
