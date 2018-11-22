const express = require('express');
const port = 3003;
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://kesto:password1@ds161018.mlab.com:61018/advanced-ecommerce-1");

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

const orderRouter = require("./routes/OrderRoutes");
const productRouter = require("./routes/ProductRoutes");

//

app.use(orderRouter);
app.use(productRouter);

app.listen(port, (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log(`listening on port ${port}`);
   }
})
