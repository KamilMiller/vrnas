import {debounce} from '../../utils/debounce';

const pricing = document.querySelector('.pricing');

export const setPricingPaddingBottom = () => {
  if (!pricing) {
    return;
  }

  const pricingInner = pricing.querySelector('.pricing__inner');

  const pricingPaddingBottomCalc = () => {
    if (window.matchMedia('(max-width: 429px)').matches) {
      return;
    }

    const pricingContentBoxBottomX = pricing.querySelector('.pricing__content-wrapper').getBoundingClientRect().bottom;
    const offerBoxBottomX = pricing.querySelector('.pricing__offer').getBoundingClientRect().bottom;
    const pricingPaddingBottomValue = `${Math.round(offerBoxBottomX - pricingContentBoxBottomX)}px`;

    if (offerBoxBottomX - pricingContentBoxBottomX > 0) {
      pricingInner.style.setProperty('--pricing-inner-padding-bottom', pricingPaddingBottomValue);
    } else {
      pricingInner.style.setProperty('--pricing-inner-padding-bottom', 0);
    }
  };

  pricingPaddingBottomCalc();

  const pricingPaddingBottomCalcOnResize = debounce(() => pricingPaddingBottomCalc());

  window.addEventListener('resize', pricingPaddingBottomCalcOnResize);
};
