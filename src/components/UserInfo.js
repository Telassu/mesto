export class UserInfo {
  constructor (nameElement, jobElement, avatarElement) {
    this._nameElement = nameElement;
    this._jobElement = jobElement;
    this._avatarElement = avatarElement;
  };

  getUserInfo () {
    return {
      name: this._nameElement.textContent,
      about: this._jobElement.textContent,
      avatar: this._avatarElement.src
    }
  };

  setUserInfo (data) {
    this._nameElement.textContent = data.name;
    this._jobElement.textContent = data.about;
  }

  setUserAvatar (data) {
    this._avatarElement.src = data.avatar;
  }
}