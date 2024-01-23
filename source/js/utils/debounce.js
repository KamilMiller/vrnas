function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    // eslint-disable-next-line
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
}

export {debounce};
