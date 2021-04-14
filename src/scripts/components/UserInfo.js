export class UserInfo{
    constructor(nameSelector, infoSelector, avatarSelector){
      this._userName = document.querySelector(`.${nameSelector}`);
      this._userInfo = document.querySelector(`.${infoSelector}`);
      this._userAvatar = document.querySelector(`.${avatarSelector}`)
    }


    getUserInfo(){
      return {
        userName: this._userName.textContent,
        userDescription: this._userInfo.textContent
      }
    }
    setUserInfo(newName,newInfo, ){
      this._userName.textContent = newName;
      this._userInfo.textContent = newInfo;
     
    }

    setUserAvatar(newAvatar){
      this._userAvatar.src = newAvatar
    }
    
}