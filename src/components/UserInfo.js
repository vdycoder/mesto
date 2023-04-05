export default class UserInfo {
  constructor(userNameSelector, userAboutSelector, userAvatarSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
    this._userId = '';
  }

  getUserInfo() {
    const userInfo = {};
    userInfo['name'] = this._userName.textContent;
    userInfo['about'] = this._userAbout.textContent;
    userInfo['_id'] = this._userId;
    return userInfo;
  }
  setUserInfo( { name, about, avatar, _id } ) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    this._userAvatar.src = avatar;
    this._userId = _id;
  }
}
