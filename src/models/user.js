module.exports = class User {
  constructor(name) {
    this.name = name;
  }

  create() {
    return {
      name: this.name,
    }
  }
}