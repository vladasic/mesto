export class UserInfo{
  constructor(name, info){
    name = document.querySelector('.popup__input_type_name')
    this._name = name;
    info = document.querySelector('.popup__item_user-position_bottom')
    this._info = info;
  }

  setUserInfo(profileTitle,profileSubttitle){
    profileTitle.textContent = this._name.value;
    profileSubttitle.textContent = this._info.value;
  }

  getUserInfo(){
    return this._name.value = profileTitle.textContent,
    this._info.value = profileSubttitle.textContent;
  }
}