import eagleQR from '../assets/images/qr-eagle.png';
import plane from '../assets/images/plane.png';

import train from '../assets/images/train.png';
import rzdLogo from '../assets/images/rzd-logo.svg';

import maleFace from '../assets/images/cases-male-face.png';
import womanFace from '../assets/images/cases-woman-face.png';
import granny from '../assets/images/cases-granny.png';
import planet from '../assets/images/cases-planet.png';
import berry from '../assets/images/cases-berry.png';
import rocket from '../assets/images/cases-rocket.png';

import capsLogo from '../assets/images/caps-logo-white.svg';

import whatsappIcon from '../assets/images/whatsapp-icon.svg';
import vkIcon from '../assets/images/vk-icon.svg';
import telegramIcon from '../assets/images/telegram-icon.svg';
import appleIcon from '../assets/images/apple.svg';
import androidIcon from '../assets/images/android.svg';
import androidAndAppleIcon from '../assets/images/androidandapple.svg';

import audioManagement from '../assets/voices/Jain_-_Makeba_51573353.mp3';
import poridgeImg from '../assets/images/about-img.jpg';


export const casesArr = [
  {
    title: 'Eagle Flight',
    brief: 'Аренда частного самолета для бизнес поездок и путешествий',
    type: 'Многостраничный сайт описание продукта',
    img: [{ url: plane, name: 'plane' }],
    qr: eagleQR,
    action: 'ознакомиться',
    link: '#',
    modifier: 'eagle',
  },
  {
    title: 'РЖД СЗППК',
    brief: 'Сайт РЖД блин че еще тут говорить',
    type: 'Многостраничный сайт описание продукта',
    img: [{ url: train, name: 'train' }, { url: rzdLogo, name: 'rzd-logo' }],
    qr: eagleQR,
    action: 'ознакомиться',
    link: '#',
    modifier: 'rzd',
  },
  {
    title: 'Хоккейный Пятачок',
    brief: 'Сайт РЖД блин че еще тут говорить',
    type: 'Многостраничный сайт описание продукта',
    qr: eagleQR,
    action: 'ознакомиться',
    link: '#',
    modifier: 'hockey',
  },
  {
    title: 'Ваш новый сайт',
    brief: 'Такой, каким вы его полюбите',
    type: 'Многостраничный сайт описание продукта',
    img: [
      { url: maleFace, name: 'male' },
      { url: womanFace, name: 'woman' },
      { url: granny, name: 'granny' },
      { url: planet, name: 'planet' },
      { url: berry, name: 'berry' },
      { url: rocket, name: 'rocket' },
    ],
    qr: capsLogo,
    action: 'заказать',
    link: '#',
    modifier: 'final',
  },
];

// Информация, передаваемая в карточки
export const promotionTitles = ['1. выберите желаемый продукт', '2. Оставьте свои данные', '3. Оставьте комментарий (опционально)'];
export const promotionArr = ['SEO', 'контекст', 'таргет', 'SMM', 'Email', 'комплекс'];

export const botsTitles = ['1. выберите платформу', '2. Оставьте свои данные', '3. Оставьте комментарий (опционально)'];
export const botsArr = [
  {
    img: whatsappIcon,
    name: 'whatsapp'
  },
  {
    img: vkIcon,
    name: 'vk'
  },
  {
    img: telegramIcon,
    name: 'telegram'
  },
];

export const developmentTitles = ['1. выберите тип сайта', '2. Если сайт уже есть - поделитесь', '3. Оставьте свои данные', '4. Оставьте комментарий (опционально)'];
export const developmentArr = ['лендинг', 'магазин', 'инфо-сайт', 'другое'];

export const designTitles = ['1. выберите желаемый продукт', '2. Оставьте свои данные', '3. Оставьте комментарий (опционально)'];
export const designArr = ['афиша/баннер', 'веб-сайт', 'логотип', 'приложение', 'бренд бук', 'айдентика'];

export const productionTitles = ['1. выберите желаемый продукт', '2. Оставьте свои данные', '3. Оставьте комментарий (опционально)'];
export const productionArr = ['монтаж', '2D анимация', 'саунд дизайн', 'джингл', 'озвучка', 'съемка'];

export const mobileTitles = ['1. выберите платформу', '2. Оставьте свои данные', '3. Оставьте комментарий (опционально)'];
export const mobileArr = [
  {
    img: appleIcon,
    name: 'apple'
  },
  {
    img: androidIcon,
    name: 'android'
  },
  {
    img: androidAndAppleIcon,
    name: 'apple/android'
  },
];

// About

export const aboutArr = [
  {
    img: poridgeImg,
    title: 'Сандерс',
    subtitle: 'Директор по отстатию',
    txt: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime cumque magnam porro dolorem, recusandae est? Necessitatibus”',
    audio: audioManagement,
  },
  {
    img: poridgeImg,
    title: 'Никита',
    subtitle: 'Директор по развитию, CEO',
    txt: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime cumque magnam porro dolorem, recusandae est? Necessitatibus”',
    audio: audioManagement,
  },
  {
    img: poridgeImg,
    title: 'Ноунейм',
    subtitle: 'Местный поридж',
    txt: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime cumque magnam porro dolorem, recusandae est? Necessitatibus”',
    audio: audioManagement,
  },
  {
    img: poridgeImg,
    title: 'Артём',
    subtitle: 'Местный кринж',
    txt: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime cumque magnam porro dolorem, recusandae est? Necessitatibus”',
    audio: audioManagement,
  },
];

export const aboutNavArr = ['management', 'design', 'smm', 'programming'];
