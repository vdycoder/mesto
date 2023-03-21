import './index.css';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
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
} from '../utils/constants.js';

/* init forms validation */
const formValidators = {};
const enableFormsValidation = (formsConfig) => {
  const formList = Array.from(document.querySelectorAll(formsConfig.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(formsConfig, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableFormsValidation(formsConfig);

/* init popups */
const userProfile = new UserInfo(profileSelectors.name, profileSelectors.about);

const profilePopup = new PopupWithForm(popupSelectors.editProfile, handleEditProfileFormSubmit);
profilePopup.setEventListeners();

const addCardPopup = new PopupWithForm(popupSelectors.addCard, handleAddCardFormSubmit);
addCardPopup.setEventListeners();

const showCardPopup = new PopupWithImage(popupSelectors.showImage);
showCardPopup.setEventListeners();

/* init cards section */
function renderCard(item) {
  const cardElement = new Card({
    item,
    cardTemplate,
    handleCardClick
  }, cardSelectors);
  return cardElement.createCard();
}

const cardsList = new Section(initialCards, renderCard, cardSelectors.list);
cardsList.renderItems();

/* handlers */
function handleEditProfileClick (evt) {
  evt.preventDefault();
  formValidators['profile'].resetFormErrors({ disable: true });
  profilePopup.setInputValues(userProfile.getUserInfo());
  formProfile.name.focus();
  profilePopup.open();
}

function handleAddCardClick (evt) {
  evt.preventDefault();
  formValidators['place'].resetFormErrors({ disable: false });
  formPlace.caption.focus();
  addCardPopup.open();
}

function handleCardClick(name, link) {
  showCardPopup.open(name, link);
}

function handleEditProfileFormSubmit (evt, inputValues) {
  evt.preventDefault();
  userProfile.setUserInfo({
    userName: inputValues.name,
    userAbout: inputValues.about
    });
  profilePopup.close();
}

function handleAddCardFormSubmit (evt, inputValues) {
  evt.preventDefault();
  const item = {
    name: inputValues.caption,
    link: inputValues.image
  };
  cardsList.addItem(renderCard(item));
  addCardPopup.close();
}

/* listners */
profileEditButton.addEventListener('click', handleEditProfileClick);
profileAddCardButton.addEventListener('click', handleAddCardClick);
