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

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      // eslint-disable-next-line
      timer = setTimeout(() => func.apply(this, args), timeout);
    };
  }

  const headerHeightCalcOnResize = debounce(() => headerHeightCalc());

  window.addEventListener('resize', () => {
    if (!header.classList.contains('is-open')) {
      headerHeightCalcOnResize();
    }
  });
};
