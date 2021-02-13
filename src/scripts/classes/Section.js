
export class Section{
    constructor({items,renderer},container){
        this._items = items;
        this._renderer = renderer
        // this._containerSelector = containerSelector;
        this._container = container
    }

    renderItems(){
        this._renderer()

    }

    addItems(element){
        this._container.append(...element)
    }
}






// function renderCardsWithClasses() {
//     const cardClasses = initialCards.map(({ name, link }) =>
//         (new Card(name, link, templateElement))
//     );
//     const cardElements = cardClasses.map(card => (card.createCard()))
//     //запись сверху эквивалентна записи снизу
//     //    const cardElements = cardClasses.map(card => {
//     //        return card.createCard() 
//     //     })

//     listContainerElements.append(...cardElements);
// }

// function addNewItem(event) {
//     const card = new Card(inputTitle.value, inputLink.value, templateElement);
//     event.preventDefault;
//     const cardElement = card.createCard();
//     listContainerElements.prepend(cardElement);
//     // и закрыть попап, если карточка создавалась с него
//     closeAddCardPopup()
//     addCardButton.classList.add('popup__button_invalid');
//     addCardButton.disabled = true
// }


// export class Section{
//     constructor({items},container){
//         this._items = items;
//         // this._renderer = renderer
//         // this._containerSelector = containerSelector;
//         this._container = container
//     }
//     renderer(){
//        return this._renderer
//     }
//     renderItems(){ //общая функция для карточек
//         this.cardClasses = this._items.map(({ name, link }) =>
//                 (new Card(name, link, templateElement))
//             );
//             this.cardElements = this.cardClasses.map(card => (card.createCard()))
//             //запись сверху эквивалентна записи снизу
//             //    const cardElements = cardClasses.map(card => {
//             //        return card.createCard() 
//             //     })
        
//             this.addItems(this.cardElements);
//     }

//     addItems(element){
//         this._container.append(...element)
//     }
// }