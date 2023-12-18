export const showSuccesFubmitFormMessage = () => {
  const subscribeForm = document.getElementById('subscribe-form');
  const successMessageElement = subscribeForm.querySelector('.subscribe-form__success-message');
  const emailInputElement = subscribeForm.querySelector('.subscribe-form__input-box');

  const removeMessage = () => {
    successMessageElement.classList.add('subscribe-form__success-message--hidden');
    setTimeout(() => emailInputElement.classList.remove('subscribe-form__input-box--hidden'), 300);
  };

  const displayMessage = () => {
    successMessageElement.classList.remove('subscribe-form__success-message--hidden');
    setTimeout(removeMessage, 3000);
  };

  emailInputElement.classList.add('subscribe-form__input-box--hidden');
  setTimeout(displayMessage, 300);
};
