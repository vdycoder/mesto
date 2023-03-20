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

const cardSelectors = {
  template: '#element_template',
  list: '.elements__list',
  item: '.elements__item',
  caption: '.elements__caption',
  image: '.elements__image',
  buttonTrash: '.elements__trash-button',
  buttonLike: '.elements__like-button',
  buttonLike_active: 'elements__like-button_active'
};

const formsConfig = {
  formSelector: '.popup__form',
  fieldSelector: '.popup__input',
  submitSelector: '.popup__btn-save',
  invalidFieldClass: 'popup__input_invalid',
  errorSelectorPrefix: 'popup__input-error_field_',
};

const profileSelectors = {
  editButton: '.profile__btn-edit',
  addButton: '.profile__btn-add',
  name: '.profile__name',
  about: '.profile__about'
};

const popupSelectors = {
  editProfile: '.popup_type_edit-profile',
  addCard: '.popup_type_add-card',
  showImage: '.popup_type_show-image'
};

const formProfile = document.forms.profile;
const formPlace = document.forms.place;
const profileEditButton = document.querySelector(profileSelectors.editButton);
const profileAddCardButton = document.querySelector(profileSelectors.addButton);
const cardTemplate = document.querySelector(cardSelectors.template).content;

export {
  initialCards,
  cardSelectors,
  formsConfig,
  profileSelectors,
  profileEditButton,
  profileAddCardButton,
  popupSelectors,
  cardTemplate,
  formProfile,
  formPlace
}
