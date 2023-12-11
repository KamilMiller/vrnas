const videoSection = document.querySelector('.video');

export const setCustomVideoControl = () => {
  if (!videoSection) {
    return;
  }

  const video = videoSection.querySelector('.video__content');
  const mainPlayButton = videoSection.querySelector('.video__main-play-btn');
  const playPauseButton = videoSection.querySelector('.video__play-btn');
  const seekBar = videoSection.querySelector('.video__seek-bar');
  const videoInfo = videoSection.querySelector('.video__info-box');

  const resetVideoControl = () => {
    seekBar.value = 0;
    mainPlayButton.classList.remove('video__main-play-btn--hidden');
    playPauseButton.classList.remove('is-active');
    videoInfo.classList.remove('video__info-box--hidden');
    video.removeEventListener('ended', resetVideoControl);
  };

  const videoPlay = () => {
    video.play();
    mainPlayButton.classList.add('video__main-play-btn--hidden');
    playPauseButton.classList.add('is-active');
    videoInfo.classList.add('video__info-box--hidden');
    video.addEventListener('ended', resetVideoControl);
  };

  const videoPause = () => {
    video.pause();
    mainPlayButton.classList.remove('video__main-play-btn--hidden');
    playPauseButton.classList.remove('is-active');
    video.removeEventListener('ended', resetVideoControl);
  };

  const onPlayBtnClick = () => video.paused === true ? videoPlay() : videoPause();

  playPauseButton.addEventListener('click', onPlayBtnClick);
  mainPlayButton.addEventListener('click', onPlayBtnClick);

  seekBar.addEventListener('change', () => {
    let time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
  });

  video.addEventListener('timeupdate', () => {
    let value = (100 / video.duration) * video.currentTime;
    seekBar.value = value;
  });

  seekBar.addEventListener('mousedown', videoPause);
  seekBar.addEventListener('mouseup', videoPlay);
};
