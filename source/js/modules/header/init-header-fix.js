const header = document.querySelector('.header');

export const initHeaderFix = () => {
  if (!header) {
    return;
  }

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
      header.classList.add('header--blur');
    } else {
      header.classList.remove('header--blur');
    }
  });
};
