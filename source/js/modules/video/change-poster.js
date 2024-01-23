const videoSection = document.querySelector('.video');

export const changeVideoPoster = () => {
  if (!videoSection) {
    return;
  }

  const video = videoSection.querySelector('.video__content');
  const mobileWidth = window.matchMedia('(max-width: 768px)');

  const videoPosterToggle = () => mobileWidth.matches ? video.setAttribute('poster', 'img/content/video-poster-mobile.webp') : video.setAttribute('poster', 'img/content/video-poster.webp');

  window.addEventListener('load', videoPosterToggle);
  window.addEventListener('resize', videoPosterToggle);
};
