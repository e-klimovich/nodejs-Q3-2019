# nodejs-Q3-2019
node.js mentoring program

## First of all
- install `node.js`
- install dependencies with `npm install`
- install mongo DB from `https://www.mongodb.com/`
- config DB in `.env`
- use `npm run seed` command to run seeds (two collections should be created with mock data)
- go to `src/db` folder and use `migrate-mongo up` command to run migration (in collection users mocked user name shoud be changed)

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