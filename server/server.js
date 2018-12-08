const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const orderRouter = require("./routes/OrderRoutes");
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
router.post('/orders', createOrder);


// PRODUCTS
app.use(productRouter);



app.listen(port, (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log(`Server started on port ${port}`);
   }
})

