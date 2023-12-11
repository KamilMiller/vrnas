import {gsap} from '../../vendor/gsap.min.js';

const parallaxItems = document.querySelectorAll('[data-parallax-mouse]');
const parallaxElements = document.querySelectorAll('[data-parallax-box]');

let mouseCords = {
  x: 0,
  y: 0,
}; // задаем изначальные координаты

const getMouseCordsInParralaxBox = (evt, element) => {
  const mouseCordX = evt.pageX;
  const mouseCordY = evt.pageY;
  const mouseCordInParralaxBoxX = mouseCordX - element.offsetLeft;
  const mouseCordInParralaxBoxY = mouseCordY - element.offsetTop;
  if (mouseCordInParralaxBoxX > 0 && mouseCordInParralaxBoxX <= element.offsetWidth && mouseCordInParralaxBoxY > 0 && mouseCordInParralaxBoxY <= element.offsetHeight) {
    return true;
  } else {
    return false;
  }
};

const handleMouseMove = (evt, element) => { // обновляет наши координаты
  if (getMouseCordsInParralaxBox(evt, element)) {
    mouseCords.x = evt.clientX - window.innerWidth / 2; // ставим координаты мыши относительно центра экрана
    mouseCords.y = evt.clientY - window.innerHeight / 2;
  }
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
  parallaxElements.forEach((element) => {
    element.addEventListener('mousemove', (evt) => {
      handleMouseMove(evt, element);
    }); // добавляем обработчик по движению мыши
  });
};
