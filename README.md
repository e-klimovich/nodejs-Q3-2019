# nodejs-Q3-2019
node.js mentoring program

## First of all
- install `node.js`
- install dependencies with `npm install`
- install postgres DB from `https://postgresapp.com/`
- config DB in `src/db/config.json`
- use `sequelize db:seed:all` command to run seeds (two tables should be created with mock data)

## Run project
- use `npm start` to start project

## API

POST `/auth` - get jwt authorization token  

#### Users
GET `/users` - get all users  
GET `/users/{id}` - get user by id  
POST `/users` - add user  

#### Products
GET `/products` - get all products  
GET `/products/{id}` - get product by id  
GET `/products/{id}/reviews` - get products's reviews  
POST `/products` - add product  