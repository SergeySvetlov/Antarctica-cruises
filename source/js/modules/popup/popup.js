const popupButton = document.querySelector('[data-popup]');
const popupMenu = document.querySelector('[data-menu]');
const overlay = document.querySelector('[data-overlay]');

const disableScroll = () => {
  if (popupMenu.classList.contains('is-closed')) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
};

const openPopup = () => {
  overlay.classList.toggle('is-overlay');
  popupMenu.classList.toggle('is-closed');
  disableScroll();
};

const onPopupButtonClick = () => {
  popupMenu.classList.add('is-js', 'is-closed');
  popupButton.addEventListener('click', openPopup);
};

const onOverlayClick = () => {
  document.addEventListener('click', function (e) {
    if ((e.target === overlay) && (e.target !== popupMenu) && (!popupMenu.classList.contains('is-closed'))) {
      openPopup();
    }
  });
};

export {onPopupButtonClick, onOverlayClick};
