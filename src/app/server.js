import express from 'express';
import { productsRouter, usersRouter } from './routes';

global.db = {
  products: [
    {
      id: '0',
      reviews: ['good', 'bad', 'ok'],
    }
  ],
  users: [
    {
      id: '0',
      name: 'John Doe',
    }
  ],
}

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/products', productsRouter);
app.use('/users', usersRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
  return false;
});
