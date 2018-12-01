const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const config = require('./config/main');
const port = config.port;

mongoose.Promise = global.Promise;

mongoose.connect(config.database);

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

const orderRouter = require("./routes/OrderRoutes");
const productRouter = require("./routes/ProductRoutes");

// get routes

// app.get('/express_backend/products', (req, res) => {

// })

app.get('/express_backend', (req, res) => {
   res.send({ express: 'Your express backend is connected to React!' });
})


app.use(orderRouter);
app.use(productRouter);

app.listen(port, (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log(`listening on port ${port}`);
   }
})

