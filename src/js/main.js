// import 'jquery';
const tabs = require('./plugins/tabs'),
  sliderInit = require('./plugins/slider'),
  cards = require('./plugins/cards'),
  calc = require('./plugins/calc'),
  modal = require('./plugins/modal'),
  timer = require('./plugins/timer');

window.addEventListener("DOMContentLoaded", () => {
  tabs('.top-section__tabs', '.top-section__img', '.top-section__item', '.top-section__text');
  sliderInit('.slider', '.slider__img-wrapper', '.slider__img-inner', '.slider__img', '.slider__btn--prev', '.slider__btn--next', '.slider__slide-now', '.slider__slide-total');
  calc();
  cards();
  modal();
  timer();
})