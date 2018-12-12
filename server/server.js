// run server using 'node server.js' from server folder
// fix routes, have them in server.js and remove importing of route files? 
// currently app.using them twice...


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const orders = require("./routes/api/OrderRoutes");
const products = require("./routes/api/ProductRoutes");
const app = express();
// DB config
const db = require('./config/keys').mongoURI;
const port = 5000;

// Body Parser middleware
app.use(bodyParser.json());

// Connect to Mongo
mongoose.connect(db)
   .then(() => console.log('MongoDB connected...'))
   .catch(err => console.log(err));

// Use routes
app.use(products);
app.use(orders);


app.get('/express_backend', (req, res) => {
   res.send({ express: 'Your express backend is connected to React!' });
})



app.listen(port, (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log(`Server started on port ${port}`);
   }
})

