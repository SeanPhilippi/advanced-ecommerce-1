import express from 'express';
import bodyParser from 'body-parser';
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const orderRouter = require("./routes/OrderRoutes");
const Order = require('../models/OrderModel');
const productRouter = require("./routes/ProductRoutes");
const app = express();
// DB config
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 3000;

// Body Parser middleware
app.use(bodyParser.json());

// Connect to Mongo
mongoose.connect(db)
   .then(() => console.log('MongoDB connected...'))
   .catch(err => console.log(err));

// Use routes
app.use('/products', productRouter);
app.use('/orders', orderRouter);


// app.get('/express_backend', (req, res) => {
//    res.send({ express: 'Your express backend is connected to React!' });
// })

// ORDERS
app.use(orderRouter);
// submit order, post to mlab
router.post('/orders', (req, res) => {
   console.log(req.body)
   const newOrder = new Order(req.body);
   newOrder.save()
   // .then(item => {
   //    res.send(`${item} saved to database!`)
   // })
});


// PRODUCTS
app.use(productRouter);



app.listen(port, (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log(`Server started on port ${port}`);
   }
})

