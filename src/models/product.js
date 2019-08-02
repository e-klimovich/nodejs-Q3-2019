module.exports = class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  save() {
    return {
      title: this.title,
      price: this.price,
    }
  }
}