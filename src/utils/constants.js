const cardSelectors = {
  template: '#element_template',
  list: '.elements__list',
  item: '.elements__item',
  caption: '.elements__caption',
  image: '.elements__image',
  buttonTrash: '.elements__trash-button',
  buttonLike: '.elements__like-button',
  buttonLike_active: 'elements__like-button_active',
  likesCount: '.elements__likes-count'
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
  avatarButton: '.profile__btn-avatar',
  name: '.profile__name',
  about: '.profile__about',
  avatar: '.profile__avatar'
};

const popupSelectors = {
  editProfile: '.popup_type_edit-profile',
  addCard: '.popup_type_add-card',
  showImage: '.popup_type_show-image',
  deleteCard: '.popup_type_delete-card',
  editAvatar: '.popup_type_edit-avatar',
  image: '.popup__image',
  caption: '.popup__caption',
  cardId: '.popup__input_el_cardId'
};

const formProfile = document.forms.profile;
const formPlace = document.forms.place;
const formAvatar = document.forms.avatar;
const profileEditButton = document.querySelector(profileSelectors.editButton);
const profileAddCardButton = document.querySelector(profileSelectors.addButton);
const profileEditAvatarButton = document.querySelector(profileSelectors.avatarButton);
const cardTemplate = document.querySelector(cardSelectors.template).content;

export {
  cardSelectors,
  formsConfig,
  profileSelectors,
  profileEditButton,
  profileAddCardButton,
  profileEditAvatarButton,
  popupSelectors,
  cardTemplate,
  formProfile,
  formPlace,
  formAvatar
}
