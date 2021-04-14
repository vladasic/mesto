export class Section{
  constructor({items,renderer},containerSelector){
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector)
  }
  
  renderItems(){
    this._renderer()
  }
  
  addItems(element,isArray){
    if(isArray){
      this._container.append(element);
    }else{
      this._container.prepend(element);
    }
    
  }
}