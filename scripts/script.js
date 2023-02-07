let profileBtnEdit = document.querySelector('.profile__btn-edit');
let profileBtnAdd = document.querySelector('.profile__btn-add');

let profileBtnClose = document.querySelectorAll('.popup__btn-close')[0];
let addCardBtnClose = document.querySelectorAll('.popup__btn-close')[1];
let showImageBtnClose = document.querySelectorAll('.popup__btn-close')[2];

let popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
let popupTypeAddCard = document.querySelector('.popup_type_add-card');
let popupTypeShowImage = document.querySelector('.popup_type_show-image');

let profileEditForm = document.getElementsByName('profile_edit_form')[0];
let addCardForm = document.getElementsByName('profile_edit_form')[1];

let popupInputElName = document.querySelector('.popup__input_el_name');
let popupInputElAbout = document.querySelector('.popup__input_el_about');

let popupInputElCaption = document.querySelector('.popup__input_el_caption');
let popupInputElImage = document.querySelector('.popup__input_el_image');

let popupImage = document.querySelector('.popup__image');
let popupCaption = document.querySelector('.popup__caption');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

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

const elementTemplate = document.querySelector('#element_template').content;
const elementsList = document.querySelector('.elements__list');


function togglePopupTypeEditProfile (evt) {
  evt.preventDefault();
  popupInputElName.value = profileName.textContent;
  popupInputElAbout.value = profileAbout.textContent;
  popupTypeEditProfile.classList.toggle('popup_opened');
}

function handleProfileEditFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = popupInputElName.value;
  profileAbout.textContent = popupInputElAbout.value;
  popupTypeEditProfile.classList.toggle('popup_opened');
}

function togglePopupTypeAddCard (evt) {
  evt.preventDefault();
  popupTypeAddCard.classList.toggle('popup_opened');
}

function togglePopupTypeShowImage (evt) {
  evt.preventDefault();
  popupTypeShowImage.classList.toggle('popup_opened');
}

function handleAddCardFormSubmit (evt) {
  evt.preventDefault();
  const singleElement = elementTemplate.querySelector('.elements__item').cloneNode(true);

  // наполняем содержимым
  singleElement.querySelector('.elements__image').src = popupInputElImage.value;
  singleElement.querySelector('.elements__image').alt = popupInputElCaption.value;
  singleElement.querySelector('.elements__caption').textContent = popupInputElCaption.value;
  singleElement.querySelector('.elements__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-button_active');
  });
  singleElement.querySelector('.elements__trash-button').addEventListener('click', ()=> {
    singleElement.remove();
  });
  singleElement.querySelector('.elements__image').addEventListener('click', (evt)=> {
    popupImage.alt = evt.target.alt;
    popupImage.src = evt.target.src;
    popupCaption.textContent = evt.target.alt;
    popupTypeShowImage.classList.toggle('popup_opened');
  });


  // отображаем на странице
  elementsList.prepend(singleElement);
  popupTypeAddCard.classList.toggle('popup_opened');
}

profileBtnEdit.addEventListener('click', togglePopupTypeEditProfile);
profileBtnClose.addEventListener('click', togglePopupTypeEditProfile);
profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);
addCardForm.addEventListener('submit', handleAddCardFormSubmit);
profileBtnAdd.addEventListener('click', togglePopupTypeAddCard);
addCardBtnClose.addEventListener('click', togglePopupTypeAddCard);
showImageBtnClose.addEventListener('click', togglePopupTypeShowImage);


/*sprint 5*/

initialCards.forEach(((item) => {
  // клонируем содержимое тега template
  const singleElement = elementTemplate.querySelector('.elements__item').cloneNode(true);

  // наполняем содержимым
  singleElement.querySelector('.elements__image').src = item.link;
  singleElement.querySelector('.elements__image').alt = item.name;
  singleElement.querySelector('.elements__caption').textContent = item.name;

  singleElement.querySelector('.elements__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like-button_active');
  });
  singleElement.querySelector('.elements__trash-button').addEventListener('click', ()=> {
    singleElement.remove();
  });
  singleElement.querySelector('.elements__image').addEventListener('click', ()=> {
    popupImage.alt = item.name;
    popupImage.src = item.link;
    popupCaption.textContent = item.name;
    popupTypeShowImage.classList.toggle('popup_opened');
  });

  // отображаем на странице
  elementsList.append(singleElement);
}));
