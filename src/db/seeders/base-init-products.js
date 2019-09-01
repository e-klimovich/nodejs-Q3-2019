module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      options: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      reviews: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      queryInterface.bulkInsert('products', [{
        name: 'Supreme T-Shirt',
        brand: 'Supreme',
        price: 99.99,
        options: [
          '{ "color": "blue" }',
          '{ "size": "XL" }'
        ],
        reviews: [
          '{ "id": "1.1" }',
          '{ "message": "cool color" }',
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Nike T-Shirt',
        brand: 'Nike',
        price: 60.00,
        options: [
          '{ "color": "black" }',
          '{ "size": "XL" }',
        ],
        reviews: [
          '{ "id": "2.1", "message": "like this brand and it\'s products" }',
          '{ "id": "2.2", "message": "fair price" }',
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    })
  },

  down: (queryInterface, Sequelize) => {}
};
