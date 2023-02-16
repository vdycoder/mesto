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

const cardTemplate = document.querySelector('#element_template').content;
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
  resetForm(formsConfig, formProfile);
  inputPopupName.value = profileName.textContent;
  inputPopupAbout.value = profileAbout.textContent;
  toggleFormSubmit(formProfile.submit, { disable: true });
  formProfile.name.focus();
  openPopup(popupTypeEditProfile);
}

function openPopupAddPlace (evt) {
  evt.preventDefault();
  resetForm(formsConfig, formPlace);
  toggleFormSubmit(formPlace.submit, { disable: false });
  formPlace.caption.focus();
  openPopup(popupTypeAddCard);
}

function createCard(item) {
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  cardElement.querySelector('.elements__caption').textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardElement.querySelector('.elements__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like-button_active');
  });
  cardElement.querySelector('.elements__trash-button').addEventListener('click', () => {
    cardElement.remove();
  });
  cardImage.addEventListener('click', (evt) => {
    popupImage.alt = evt.target.alt;
    popupImage.src = evt.target.src;
    popupCaption.textContent = evt.target.alt;
    openPopup(popupTypeShowImage);
  });
  return cardElement;
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
  cardsList.prepend(createCard(inputData));
  closePopup(popupTypeAddCard);
}

btnProfileEdit.addEventListener('click', openPopupProfile);
btnProfileAddCard.addEventListener('click', openPopupAddPlace);

formProfile.addEventListener('submit', handleFormEditProfileSubmit);
formPlace.addEventListener('submit', handleFormAddCardSubmit);

const popups = Array.from(document.querySelectorAll('.popup'));
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
  const closeButton = popup.querySelector('.popup__btn-close');
  closeButton.addEventListener('mousedown', () => closePopup(popup));
});

initialCards.forEach(((item) => {
  cardsList.append(createCard(item));
}));
