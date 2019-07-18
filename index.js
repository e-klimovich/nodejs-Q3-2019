const models = require('./src/models');

const { User, Product } = models;

const user = new User('Valera');
const product = new Product('pistolet', 228);

console.log('Create user methid result:', user.create());
console.log('Save product method result:', product.save());