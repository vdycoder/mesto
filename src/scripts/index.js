import '../pages/index.css'

import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const btnProfileEdit = document.querySelector('.profile__btn-edit');
const btnProfileAddCard = document.querySelector('.profile__btn-add');

const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const popupTypeShowImage = document.querySelector('.popup_type_show-image');

const inputPopupName = document.querySelector('.popup__input_el_name');
const inputPopupAbout = document.querySelector('.popup__input_el_about');
const inputPopupCaption = document.querySelector('.popup__input_el_caption');
const inputPopupImage = document.querySelector('.popup__input_el_image');

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const cardTemplate = document.querySelector("#element_template").content;
const cardsList = document.querySelector('.elements__list');

/* forms */
const formsConfig = {
  formSelector: '.popup__form',
  fieldSelector: '.popup__input',
  submitSelector: '.popup__btn-save',
  invalidFieldClass: 'popup__input_invalid',
  errorSelectorPrefix: 'popup__input-error_field_',
};

const formProfile = document.forms.profile;
const formPlace = document.forms.place;
const formValidators = {};

const enableValidation = (formsConfig) => {
  const formList = Array.from(document.querySelectorAll(formsConfig.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(formsConfig, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(formsConfig);

/* popup functions */
function closePopup (popup) {
  document.removeEventListener('keydown', handleEscape);
  popup.classList.remove('popup_opened');
}

function openPopup (popup) {
  document.addEventListener('keydown', handleEscape);
  popup.classList.add('popup_opened');
}

function handleEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopupProfile (evt) {
  evt.preventDefault();
  formValidators['profile'].resetForm({ disable: true });
  inputPopupName.value = profileName.textContent;
  inputPopupAbout.value = profileAbout.textContent;
  formProfile.name.focus();
  openPopup(popupTypeEditProfile);
}

function openPopupAddPlace (evt) {
  evt.preventDefault();
  formValidators['place'].resetForm({ disable: false });
  formPlace.caption.focus();
  openPopup(popupTypeAddCard);
}

const popups = Array.from(document.querySelectorAll('.popup'));
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
  const closeButton = popup.querySelector('.popup__btn-close');
  closeButton.addEventListener('click', () => closePopup(popup));
});

/* handlers */
function handleOpenCardPopup(name, link) {
  popupImage.src = link;
  popupImage.alt = link;
  popupCaption.textContent = name;
  openPopup(popupTypeShowImage);
}

function handleFormEditProfileSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputPopupName.value;
  profileAbout.textContent = inputPopupAbout.value;
  closePopup(popupTypeEditProfile);
}

function handleFormAddCardSubmit (evt) {
  evt.preventDefault();
  const inputData = {
    name: inputPopupCaption.value,
    link: inputPopupImage.value
  };
  cardsList.prepend(renderCard(inputData));
  closePopup(popupTypeAddCard);
}

btnProfileEdit.addEventListener('click', openPopupProfile);
btnProfileAddCard.addEventListener('click', openPopupAddPlace);

formProfile.addEventListener('submit', handleFormEditProfileSubmit);
formPlace.addEventListener('submit', handleFormAddCardSubmit);

const selectors = {
  item: '.elements__item',
  caption: '.elements__caption',
  image: '.elements__image',
  buttonTrash: '.elements__trash-button',
  buttonLike: '.elements__like-button',
  buttonLike_active: 'elements__like-button_active'
};

function renderCard(item) {
  const cardElement = new Card({
    item,
    cardTemplate,
    handleOpenCardPopup
  }, selectors);
  return cardElement.createCard();
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
initialCards.forEach(((item) => {
  cardsList.append(renderCard(item));
}));
