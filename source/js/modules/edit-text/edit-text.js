const windowSize = document.documentElement.clientWidth;
const headerAllInclusive = document.querySelector('[data-header-all-inclusive]');
const paragraphAddress = document.querySelector('[data-paragraph-address]');

const editText = () => {

  if (windowSize <= '1022') {
    if (headerAllInclusive !== null) {
      headerAllInclusive.innerHTML = 'Система<br> все включено';
    }
    if (paragraphAddress !== null) {
      paragraphAddress.innerHTML = 'г. Санкт Петербург,<br> ул. Большая Конюшенная, 19/8';
    }
  } else {
    if (headerAllInclusive !== null) {
      headerAllInclusive.innerHTML = 'Система все включено';
    }
    if (paragraphAddress !== null) {
      paragraphAddress.innerHTML = 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8';
    }
  }
};

export {editText};
