const popupButton = document.querySelector('[data-popup]');
const popupMenu = document.querySelector('[data-menu]');

const disableScroll = () => {
  if (popupMenu.classList.contains('is-closed')) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
};

const openPopup = () => {
  popupMenu.classList.toggle('is-closed');
  disableScroll();
};

const onPopupButtonClick = () => {
  popupMenu.classList.add('is-closed');
  popupButton.addEventListener('click', openPopup);
};

export {onPopupButtonClick};
