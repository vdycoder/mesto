import './index.css';

import Api from '../components/Api.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import {
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

/* init api */
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: 'd5678923-2b42-42e3-bf9c-7ef2ba66b460',
    'Content-Type': 'application/json'
  }
});

/* init popups */
const userProfile = new UserInfo(
  profileSelectors.name,
  profileSelectors.about,
  profileSelectors.avatar
  );

api.getUserInfo()
  .then((result) => {
    userProfile.setUserInfo({
      userName: result.name,
      userAbout: result.about,
      userAvatar: result.avatar,
      userId: result._id,
      });
  })
  .catch((err) => {
    console.log(err);
  });

const profilePopup = new PopupWithForm(
  popupSelectors.editProfile,
  handleEditProfileFormSubmit
  );
profilePopup.setEventListeners();

const addCardPopup = new PopupWithForm(
  popupSelectors.addCard,
  handleAddCardFormSubmit
  );
addCardPopup.setEventListeners();

const showCardPopup = new PopupWithImage(
  popupSelectors.showImage
  );
showCardPopup.setEventListeners();

const deleteCardPopup = new PopupWithConfirmation(
  popupSelectors.deleteCard,
  handleDeleteCardFormSubmit
);
deleteCardPopup.setEventListeners();


/* init cards section */
function renderCard(item) {
  const cardElement = new Card({
    item,
    cardTemplate,
    handleCardClick,
    handleTrashButtonClick
  }, cardSelectors);
  return cardElement.createCard(userProfile.getUserInfo()['_id']);
}

const cardsList = new Section(
  renderCard,
  cardSelectors.list
  );

api.getInitialCards()
  .then((result) => {
    cardsList.renderItems(result);
  })
  .catch((err) => {
    console.log(err);
  });

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

function handleTrashButtonClick (evt, item) {
  evt.preventDefault();
  deleteCardPopup.open(item);
}

function handleDeleteCardFormSubmit(evt, item) {
  evt.preventDefault();

  api.deleteCard(item)
    .then((result) => {
      console.log(result.message);
      deleteCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      document.getElementById(item).remove();
    });
}

function handleLikeButtonClick(evt, item) {

}

function handleEditProfileFormSubmit (evt, inputValues) {
  evt.preventDefault();
  profilePopup.renderLoading(true);
  api.updateUserInfo({
    userName: inputValues.name,
    userAbout: inputValues.about
    })
    .then((result) => {
      userProfile.setUserInfo({
        userName: result.name,
        userAbout: result.about,
        userAvatar: result.avatar,
        userId: result._id,
      });
      profilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profilePopup.renderLoading(false);
    });
}

function handleAddCardFormSubmit (evt, inputValues) {
  evt.preventDefault();
  addCardPopup.renderLoading(true);
  const item = {
    name: inputValues.caption,
    link: inputValues.image
  };
  api.postCard(item)
    .then((result) => {
      cardsList.addItem(renderCard(result));
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addCardPopup.renderLoading(false);
    });


}

/* listners */
profileEditButton.addEventListener('click', handleEditProfileClick);
profileAddCardButton.addEventListener('click', handleAddCardClick);
