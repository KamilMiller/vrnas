import {gsap} from '../../vendor/gsap.min.js';

const parallaxItems = document.querySelectorAll('[data-parallax-mouse]');
const parallaxBox = document.querySelector('[data-parallax-box]');

let mouseCords = {
  x: 0,
  y: 0,
}; // задаем изначальные координаты

const handleMouseMove = (e) => { // обновляет наши координаты
  mouseCords.x = e.clientX - window.innerWidth / 2; // ставим координаты мыши относительно центра экрана
  mouseCords.y = e.clientY - window.innerHeight / 2;
};


const updateParallax = () => {
  parallaxItems.forEach((item) => {
    const movement = item.dataset.movement ? item.dataset.movement : 1; // определяем коэффициент смещения по дата атрибуту

    gsap.to(item, { // добавляем смещение через gsap
      x: mouseCords.x / movement,
      y: mouseCords.y / movement,
      duration: item.dataset.duration ? item.dataset.duration : 0.5,
      ease: 'power1.out',
    });
  });
};

gsap.ticker.add(updateParallax); // вместо нового requestAnimationFrame используем rAF гсапа

export const setParallax = () => {
  parallaxBox.addEventListener('mousemove', handleMouseMove); // добавляем обработчик по движению мыши
};
