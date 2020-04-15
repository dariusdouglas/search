const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const cardRoutes = require('./routes/cards');
const cartRoutes = require('./routes/cart');

// connect to express
const app = express();
app.use(cors());
app.use(express.json());
app.use('/cards', cardRoutes);
app.use('/cart', cartRoutes);

// get mongoURI to connect to later
const db = config.get('mongoURI');

// The arguments useNewURLParser: true , useCreateIndex: true and useFindAndModify: false are
// necessary to get around several deprecated features in the MongoDB Node.js driver.
// connect to database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//   start the server on port 5000
const port = 5000;
app.listen(port, () => console.log(`Server started on port: http:localhost:${port}`));
