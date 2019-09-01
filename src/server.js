require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const session = require('express-session');
// import { db } from './db';

const initAuth = require('./auth');

// db.authenticate()
//   .then(() => { console.log('Connection successfully...') })
//   .catch((err) => { console.error('Connecting error', err) })

const app = express();

app.use(express.json());
app.use(session({ secret: 'dfcg123vhbn', resave: false, saveUninitialized: true, }))

app.use(passport.initialize());
app.use(passport.session());
initAuth(passport);

app.use(cors());

// app.use('/products', productsRouter);
app.use('/users', passport.authenticate('jwt'), require('./routes/user'));
app.use('/auth', require('./routes/auth'));

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is listening on ${process.env.APP_PORT}`)
});
