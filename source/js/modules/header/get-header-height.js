import {debounce} from '../../utils/debounce';

const header = document.querySelector('.header');

export const getHeaderHeight = () => {
  if (!header) {
    return;
  }

  const headerHeightCalc = () => {
    const headerHeightValue = `${header.offsetHeight}px`;
    document.documentElement.style.setProperty('--header-height', headerHeightValue);
  };

  headerHeightCalc();

  const headerHeightCalcOnResize = debounce(() => headerHeightCalc());

  window.addEventListener('resize', () => {
    if (!header.classList.contains('is-open')) {
      headerHeightCalcOnResize();
    }
  });
};
