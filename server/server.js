// run server using 'node server.js' from server folder
// fix routes, have them in server.js and remove importing of route files? 
// currently app.using them twice...



const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const orderRouter = require("./routes/OrderRoutes");
const Order = require('./models/OrderModel');
const productRouter = require("./routes/ProductRoutes");
const app = express();
// DB config
const db = require('./config/keys').mongoURI;
app.set('port', 8080);
const port = 3002;

// Body Parser middleware
app.use(bodyParser.json());

// Connect to Mongo
mongoose.connect(db)
   .then(() => console.log('MongoDB connected...'))
   .catch(err => console.log(err));

// Use routes
app.use('/products', productRouter);
app.use('/orders', orderRouter);


app.get('/express_backend', (req, res) => {
   res.send({ express: 'Your express backend is connected to React!' });
})

// ORDERS
app.use(orderRouter);
// submit order, post to mlab
app.post('/orders', (req, res) => {
   console.log('req body', req.body)
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

