import {gsap} from '../../vendor/gsap.min.js';

const parallaxElements = document.querySelectorAll('[data-parallax-box]');

class ParallaxMouseMove {
  #parallaxElement = null;
  #parallaxItems = [];
  #mouseCordsX = 0;
  #mouseCordsY = 0;

  constructor(element) {
    this.#parallaxElement = element;
  }

  #handleMouseMove = (evt) => { // обновляет наши координаты
    this.#mouseCordsX = evt.clientX - window.innerWidth / 2; // ставим координаты мыши относительно центра экрана
    this.#mouseCordsY = evt.clientY - window.innerHeight / 2;
  };

  #updateParallax = () => {
    this.#parallaxItems = this.#parallaxElement.querySelectorAll('[data-parallax-mouse]');

    this.#parallaxItems.forEach((item) => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        const movement = item.dataset.movement ? item.dataset.movement : 1; // определяем коэффициент смещения по дата атрибуту

        gsap.to(item, { // добавляем смещение через gsap
          x: this.#mouseCordsX / movement,
          y: this.#mouseCordsY / movement,
          duration: item.dataset.duration ? item.dataset.duration : 0.5,
          ease: 'power1.out',
        });
      } else {
        item.style.transform = 'none';
      }
    });
  };

  #startTicker = () => gsap.ticker.add(this.#updateParallax);

  #setMouseMoveListener = () => {
    this.#parallaxElement.addEventListener('mousemove', (evt) =>  this.#handleMouseMove(evt))
  }

  init = () => {
    this.#startTicker();
    this.#setMouseMoveListener();
  };
}

export const setParallax = () => {
  parallaxElements.forEach((element) => {
    const newParallaxElement = new ParallaxMouseMove(element);
    newParallaxElement.init();
    // добавляем обработчик по движению мыши
  });
};
