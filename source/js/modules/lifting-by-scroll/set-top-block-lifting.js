import {gsap} from '../../vendor/gsap.min.js';

const liftingBlocks = document.querySelectorAll('[data-top-block]');

export const setTopBlockLifting = () => {
  if (!liftingBlocks) {
    return;
  }

  const tl = gsap.timeline();

  liftingBlocks.forEach((block) => {
    tl.to(block, {y: 0, opacity: 1, duration: 2});
  });

};
