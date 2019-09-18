require('dotenv').config();

const seeder = require('mongoose-seed');

seeder.connect(`mongodb://localhost:${process.env.DB_PORT || 27017}/${process.env.DB_NAME || 'node'}`, () => {
  seeder.loadModels([
    'src/models/user.js',
    'src/models/product.js'
  ]);

  seeder.clearModels(['User', 'Product'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    })
  })
})
 
const data = [
  {
    model: 'User',
    documents: [
      {
        name: 'Jon Snow',
        email: 'john.snow@host.ext',
        age: 66
      }
    ]
  },
  {
    model: 'Product',
    documents: [
      {
        name: 'Supreme T-Shirt',
        brand: 'Supreme',
        price: 99.99,
        options: '[{ "color": "blue" }, { "size": "XL" }]',
        reviews: '[{ "id": "1.1" }, { "message": "cool color" }]'
      },
      {
        name: 'Nike T-Shirt',
        brand: 'Nike',
        price: 60.00,
        options: '[{ "color": "black" }, { "size": "XL" }]',
        reviews: '[{ "id": "2.1", "message": "like this brand and it\'s products" }, { "id": "2.2", "message": "fair price" }'
      }
    ]
  }
]