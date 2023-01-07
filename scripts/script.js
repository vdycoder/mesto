let profile__btn_edit = document.querySelector('.profile__btn-edit');
let popup__btn_close = document.querySelector('.popup__btn-close');
let popup_type_edit_profile = document.querySelector('.popup_type_edit-profile');
let profile_edit_form = document.getElementsByName('profile_edit_form')[0];
let popup__input_el_name = document.querySelector('.popup__input_el_name');
let popup__input_el_about = document.querySelector('.popup__input_el_about');
let profile__name = document.querySelector('.profile__name');
let profile__about = document.querySelector('.profile__about');

function toggle_popup_type_edit_profile (evt) {
  evt.preventDefault();
  popup__input_el_name.value = profile__name.textContent;
  popup__input_el_about.value = profile__about.textContent;
  popup_type_edit_profile.classList.toggle('popup_opened');
}

function handle_profile_edit_form_submit (evt) {
  evt.preventDefault();
  profile__name.textContent = popup__input_el_name.value;
  profile__about.textContent = popup__input_el_about.value;
  popup_type_edit_profile.classList.toggle('popup_opened');
}

profile__btn_edit.addEventListener('click', toggle_popup_type_edit_profile);
popup__btn_close.addEventListener('click', toggle_popup_type_edit_profile);
profile_edit_form.addEventListener('submit', handle_profile_edit_form_submit);
