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

  setUserInfo({userName, userAbout, userAvatar, userId}) {
    this._userName.textContent = userName;
    this._userAbout.textContent = userAbout;
    this._userAvatar.src = userAvatar;
    this._userId = userId;
  }
}
