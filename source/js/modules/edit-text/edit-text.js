const windowSize = document.documentElement.clientWidth;
const headerAllInclusive = document.querySelector('[data-header-all-inclusive]');
const paragraphLiner = document.querySelector('[data-paragraph-liner]');
const paragraphAllInclusive = document.querySelector('[data-paragraph-all]');
const paragraphDescription = document.querySelector('[data-paragraph-description]');
const paragraphAddress = document.querySelector('[data-paragraph-address]');
const headerBottom = document.querySelector('[data-header-bottom]');
const paragraphAbout = document.querySelector('[data-paragraph-about]');
const feedbackText = document.querySelector('[data-feedback-text]');
const paragraphForm = document.querySelector('[data-paragraph-form]');

const editText = () => {

  if (windowSize <= '1022') {
    if (paragraphAbout !== null) {
      paragraphAbout.innerHTML = 'Это волшебное путешествие поможет вам познакомиться поближе<br> с удивительным миром Антарктики. Наш круизный лайнер отвезет вас<br> на край Земли, где вы сможете увидеть: ледяные айсберги,<br> несколько видов пингвинов, китов, морских котиков и многое другое.';
    }
    if (headerAllInclusive !== null) {
      headerAllInclusive.innerHTML = 'Система<br> все включено';
    }
    if (paragraphLiner !== null) {
      paragraphLiner.innerHTML = 'Круизный лайнер, рассчитанный всего лишь на 300 гостей, поможет избежать шума и очередей<br> и даст возможность насладиться видами<br> и природой.';
    }
    if (paragraphAllInclusive !== null) {
      paragraphAllInclusive.innerHTML = 'Все наши круизы работают по системе “Все Включено”. Великолепные блюда и безлимитный бар доступны для вас<br> 24 часа.';
    }
    if (paragraphDescription !== null) {
      paragraphDescription.innerHTML = 'У вас ещё остались вопросы или сомнения? Приезжайте к нам<br> в офис и мы вам все расскажем.';
    }
    if (paragraphAddress !== null) {
      paragraphAddress.innerHTML = 'г. Санкт Петербург,<br> ул. Большая Конюшенная, 19/8';
    }
  } else {
    if (paragraphAbout !== null) {
      paragraphAbout.innerHTML = 'Это волшебное путешествие поможет вам познакомиться поближе с удивительным миром Антарктики. Наш круизный лайнер отвезет вас на край Земли, где вы сможете увидеть: ледяные айсберги, несколько видов пингвинов, китов, морских котиков и многое другое.';
    }
    if (headerAllInclusive !== null) {
      headerAllInclusive.innerHTML = 'Система все включено';
    }
    if (paragraphLiner !== null) {
      paragraphLiner.innerHTML = 'Круизный лайнер, рассчитанный всего лишь на 300 гостей, поможет избежать шума и очередей и даст возможность насладиться видами и природой.';
    }
    if (paragraphAllInclusive !== null) {
      paragraphAllInclusive.innerHTML = 'Все наши круизы работают по системе “Все Включено”. Великолепные блюда и безлимитный бар доступны для вас 24 часа.';
    }
    if (paragraphDescription !== null) {
      paragraphDescription.innerHTML = 'У вас ещё остались вопросы или сомнения? Приезжайте к нам в офис и мы вам все расскажем.';
    }
    if (paragraphAddress !== null) {
      paragraphAddress.innerHTML = 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8';
    }
  }
};

const editTextMobile = () => {
  if (windowSize <= '767') {
    if (headerBottom !== null) {
      headerBottom.innerHTML = 'Круизы<br> в Антарктику';
    }
    if (paragraphAbout !== null) {
      paragraphAbout.innerHTML = 'Это волшебное путешествие поможет вам познакомиться поближе с удивительным миром Антарктики. Наш круизный лайнер отвезет вас на край Земли, где вы сможете увидеть: ледяные айсберги, несколько видов пингвинов, китов, морских котиков и многое другое.';
    }
    if (paragraphLiner !== null) {
      paragraphLiner.innerHTML = 'Круизный лайнер, рассчитанный всего лишь на 300 гостей, поможет избежать шума и очередей и даст возможность насладиться видами и природой.';
    }
    if (paragraphAllInclusive !== null) {
      paragraphAllInclusive.innerHTML = 'Все наши круизы работают по системе “Все Включено”. Великолепные блюда<br> и безлимитный бар доступны для вас 24 часа.';
    }
    if (feedbackText !== null) {
      feedbackText.innerHTML = 'Забронируйте тур<br> за 3-6 месяцев до даты выезда<br> и сэкономьте до 50%';
    }
    if (paragraphForm !== null) {
      paragraphForm.innerHTML = 'Оставьте заявку<br> и мы свяжемся с вами<br> в ближайшее время';
    }
    if (paragraphDescription !== null) {
      paragraphDescription.innerHTML = 'У вас ещё остались вопросы или сомнения? Приезжайте к нам в офис и мы вам все расскажем.';
    }
  }
};

export {editText, editTextMobile};
