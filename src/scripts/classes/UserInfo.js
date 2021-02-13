export class UserInfo{
  constructor(nameSelector, infoSelector) {
    this._userName = document.querySelector(`.${nameSelector}`); //принимает тайтл
    this._userInfo = document.querySelector(`.${infoSelector}`); //принмиает сабтайтл
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent, //показываем что от них нам требуется текст контент
      userDescription: this._userInfo.textContent
    }
  }

  setUserInfo(newName, newInfo) {
    this._userName.textContent = newName;  //newName это должны быть инпуты, ю
    this._userInfo.textContent = newInfo;
  } 
}