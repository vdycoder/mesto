let btnEditOpen = document.querySelector('.profile__btn-edit');
let btnEditClose = document.querySelector('.popup__btn-close');
let profileEditPopup = document.querySelector('.popup');
let saveForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('#popup__input_type_name');
let aboutInput = document.querySelector('#popup__input_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function toggleProfileEditPopup (evt) {
  evt.preventDefault();
  profileEditPopup.classList.toggle('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
}

btnEditOpen.addEventListener('click', toggleProfileEditPopup);
btnEditClose.addEventListener('click', toggleProfileEditPopup);
saveForm.addEventListener('submit', handleFormSubmit);
