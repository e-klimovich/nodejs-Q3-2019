module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.INTEGER,
    options: DataTypes.ARRAY(DataTypes.STRING),
    reviews: DataTypes.ARRAY(DataTypes.STRING),
  }, {});

  product.associate = function(models) {};

  return product;
};
