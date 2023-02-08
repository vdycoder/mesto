const btnProfileEdit = document.querySelector('.profile__btn-edit');
const btnProfileAddCard = document.querySelector('.profile__btn-add');

const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const popupTypeShowImage = document.querySelector('.popup_type_show-image');

const formEditProfile = document.forms['edit-profile_form'];
const formAddCard = document.forms['add-card_form'];

const inputPopupName = document.querySelector('.popup__input_el_name');
const inputPopupAbout = document.querySelector('.popup__input_el_about');
const inputPopupCaption = document.querySelector('.popup__input_el_caption');
const inputPopupImage = document.querySelector('.popup__input_el_image');

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const closeButtons = document.querySelectorAll('.popup__btn-close');

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

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function openPopupTypeEditProfile (evt) {
  evt.preventDefault();
  inputPopupName.value = profileName.textContent;
  inputPopupAbout.value = profileAbout.textContent;
  openPopup(popupTypeEditProfile);
}

function openPopupTypeAddCard (evt) {
  evt.preventDefault();
  openPopup(popupTypeAddCard);
}

function openPopupTypeShowImage (evt) {
  evt.preventDefault();
  openPopup(popupTypeShowImage);
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
  evt.target.reset();
  closePopup(popupTypeAddCard);
}

btnProfileEdit.addEventListener('click', openPopupTypeEditProfile);
btnProfileAddCard.addEventListener('click', openPopupTypeAddCard);

formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);
formAddCard.addEventListener('submit', handleFormAddCardSubmit);

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

initialCards.forEach(((item) => {
  cardsList.append(createCard(item));
}));
