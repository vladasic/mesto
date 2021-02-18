export class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;
    // this._containerSelector = containerSelector;
    this._container = container;
  }

  renderItems() {
    this._renderer();
  }

  addItems(element) {
    this._container.prepend(element);
  }
}
