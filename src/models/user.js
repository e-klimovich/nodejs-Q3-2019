module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.NUMBER
  }, {});

  user.associate = function(models) {};

  return user;
};
