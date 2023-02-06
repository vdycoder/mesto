let profileBtnEdit = document.querySelector('.profile__btn-edit');
let popupBtnClose = document.querySelector('.popup__btn-close');
let popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
let profileEditForm = document.getElementsByName('profile_edit_form')[0];
let popupInputElName = document.querySelector('.popup__input_el_name');
let popupInputElAbout = document.querySelector('.popup__input_el_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

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

profileBtnEdit.addEventListener('click', togglePopupTypeEditProfile);
popupBtnClose.addEventListener('click', togglePopupTypeEditProfile);
profileEditForm.addEventListener('submit', handleProfileEditFormSubmit);

/*sprint 5*/
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

initialCards.forEach(((item) => {
  // клонируем содержимое тега template
  const singleElement = elementTemplate.querySelector('.elements__item').cloneNode(true);

  // наполняем содержимым
  singleElement.querySelector('.elements__image').src = item.link;
  singleElement.querySelector('.elements__image').alt = item.name;
  singleElement.querySelector('.elements__caption').textContent = item.name;

  // отображаем на странице
  elementsList.append(singleElement);
}));
