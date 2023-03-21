export default class UserInfo {
  constructor(userNameSelector, userAboutSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
  }

  getUserInfo() {
    const userInfo = {};
    userInfo['name'] = this._userName.textContent;
    userInfo['about'] = this._userAbout.textContent;
    return userInfo;
  }

  setUserInfo({userName, userAbout}) {
    this._userName.textContent = userName;
    this._userAbout.textContent = userAbout;
  }
}
