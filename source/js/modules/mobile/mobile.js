const windowSize = document.documentElement.clientWidth;
const feedbackButton = document.querySelector('[get-feedback]');
const goodsParagraph = document.querySelector('[goods-paragraph]');
const aboutParagraph = document.querySelector('[about-paragraph]');

const editText = () => {

  if (windowSize <= '767') {
    if (feedbackButton !== null) {
      feedbackButton.innerHTML = 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ';
    }
    if (goodsParagraph !== null) {
      goodsParagraph.innerHTML = 'Товары и услуги Smart Device';
    }
    if (aboutParagraph !== null) {
      aboutParagraph.innerHTML = 'Мы&nbsp;поставляем электронные комплектующие, производим печатные платы и&nbsp;предоставляем мировые технологии с 1997&nbsp;года. Выполняем срочные заказы и&nbsp;пилотные образцы до&nbsp;10&nbsp;дней. <br><br> Наши поставщики&nbsp;&mdash; мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND.';
    }
  } else {
    if (feedbackButton !== null) {
      feedbackButton.innerHTML = 'ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ';
    }
    if (goodsParagraph !== null) {
      goodsParagraph.innerHTML = 'Smart Device предлагает следующие товары и&nbsp;услуги';
    }
    if (aboutParagraph !== null) {
      aboutParagraph.innerHTML = 'Мы&nbsp;поставляем электронные комплектующие, производим печатные платы и&nbsp;предоставляем мировые технологии с 1997&nbsp;года. Выполняем срочные заказы и&nbsp;пилотные образцы до&nbsp;10&nbsp;дней. <br><br> Наши поставщики&nbsp;&mdash; мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и&nbsp;комплектующие Service Devices применяются на&nbsp;предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.';
    }
  }
};

export {editText};
