require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/swagger.yaml');

const initAuth = require('./auth');

mongoose.connect(
  `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  { useUnifiedTopology: true, useNewUrlParser: true }
)
  .then(() => console.log(`Connected to db: ${process.env.DB_NAME}`))
  .catch((err) => console.log(err))

const app = express();

app.use(express.json());
app.use(session({ secret: 'dfcg123vhbn', resave: false, saveUninitialized: true, }))

app.use(passport.initialize());
app.use(passport.session());
initAuth(passport);

app.use(cors());

app.use('/products', passport.authenticate('jwt'), require('./routes/products'));
app.use('/users', passport.authenticate('jwt'), require('./routes/user'));
app.use('/auth', require('./routes/auth'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is listening on ${process.env.APP_PORT}`)
  console.log(`Defined city is ${require('./defineCity')().name}`)
});
