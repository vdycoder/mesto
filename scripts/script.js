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
