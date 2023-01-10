const links = document.querySelector('.footer__links-container');
const contacts = document.querySelector('.footer__contacts-container');
const linksButton = document.querySelector('[data-open-links]');
const contactsButton = document.querySelector('[data-open-contacts]');
const paragraph = document.querySelector('#paragraph');
const detailsButton = document.querySelector('[data-open-full]');

const initLinks = () => {
  links.classList.toggle('is-closed');
  if (contacts.classList.contains('is-closed') !== true) {
    contacts.classList.add('is-closed');
  }
};

const initContacts = () => {
  contacts.classList.toggle('is-closed');
  if (links.classList.contains('is-closed') !== true) {
    links.classList.add('is-closed');
  }
};

const initDetails = () => {
  if (detailsButton.textContent === 'ПОДРОБНЕЕ') {
    detailsButton.textContent = 'СВЕРНУТЬ';
    paragraph.classList.toggle('is-open');
  } else {
    detailsButton.textContent = 'ПОДРОБНЕЕ';
    paragraph.classList.toggle('is-open');
  }
};

const onLinkButtonClick = () => {
  linksButton.classList.add('is-closed');
  linksButton.addEventListener('click', initLinks);
};
const onContactsButtonClick = () => {
  contactsButton.classList.add('is-closed');
  contactsButton.addEventListener('click', initContacts);
};

const onDetailsButtonClick = () => {
  detailsButton.addEventListener('click', initDetails);
};

export {onLinkButtonClick, onContactsButtonClick, onDetailsButtonClick};
