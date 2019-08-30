import express from 'express';
import passport from 'passport';
import cors from 'cors';
import session from 'express-session';

import { productsRouter, usersRouter, authRouter } from './routes';
import initialDB from './__mock';
import initAuth from './auth';

global.db = initialDB;

const app = express();

app.use(express.json());
app.use(session({ secret: 'dfcg123vhbn', resave: false, saveUninitialized: true, }))

app.use(passport.initialize());
app.use(passport.session());
initAuth(passport);

app.use(cors());

app.use('/products', productsRouter);
app.use('/users', passport.authenticate('jwt'), usersRouter);
app.use('/auth', authRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
});
