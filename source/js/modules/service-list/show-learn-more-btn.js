const serviceLists = document.querySelectorAll('.services__list--cards');

export const showLearnMoreButton = () => {
  if (!serviceLists) {
    return;
  }

  let serviceCards;

  serviceLists.forEach((item) => {
    serviceCards = item.querySelectorAll('.services__item');
  });

  const activeServiceCardTogle = (card, evt) => {
    const target = evt.target;
    if (target.closest('.services__item')) {
      if (card.classList.contains('is-active')) {
        return;
      } else {
        evt.preventDefault();
        serviceCards.forEach((item) => item.classList.remove('is-active'));
      }
    }
    card.classList.add('is-active');
  };

  serviceCards.forEach((card) => {
    card.addEventListener('touchstart', (evt) => {
      activeServiceCardTogle(card, evt);
    });
  });
};
