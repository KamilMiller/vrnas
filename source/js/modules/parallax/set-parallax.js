import {gsap} from '../../vendor/gsap.min.js';

const parallaxItems = document.querySelectorAll('[data-parallax-mouse]');
const parallaxElements = document.querySelectorAll('[data-parallax-box]');

let mouseCords = {
  x: 0,
  y: 0,
}; // задаем изначальные координаты

const handleMouseMove = (evt) => { // обновляет наши координаты
  mouseCords.x = evt.clientX - window.innerWidth / 2; // ставим координаты мыши относительно центра экрана
  mouseCords.y = evt.clientY - window.innerHeight / 2;
};


const updateParallax = () => {
  parallaxItems.forEach((item) => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      const movement = item.dataset.movement ? item.dataset.movement : 1; // определяем коэффициент смещения по дата атрибуту

      gsap.to(item, { // добавляем смещение через gsap
        x: mouseCords.x / movement,
        y: mouseCords.y / movement,
        duration: item.dataset.duration ? item.dataset.duration : 0.5,
        ease: 'power1.out',
      });
    } else {
      item.style.transform = 'none';
    }
  });
};

gsap.ticker.add(updateParallax); // вместо нового requestAnimationFrame используем rAF гсапа

export const setParallax = () => {
  parallaxElements.forEach((element) => {
    element.addEventListener('mousemove', (evt) => {
      handleMouseMove(evt, element);
    }); // добавляем обработчик по движению мыши
  });
};
