module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.NUMBER,
    options: DataTypes.ARRAY,
    reviews: DataTypes.ARRAY
  }, {});

  product.associate = function(models) {};

  return product;
};
