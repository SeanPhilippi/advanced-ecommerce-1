const express = require('express');
const router = express.Router();
const Order = require('../../models/OrderModel');

// const { createOrder } = require("../../controllers/OrderController");

// @route   POST api/orders
// @desc    submit/save order
// @access  Public
router.post('/orders', (req, res) => {
  const newOrder = new Order();
  req.body.map(item => {
    const product = {};
    product.id = item.id;
    product.name = item.name;
    product.price = item.price;
    newOrder.order.push(product);
  })
  newOrder.save()
    .catch(err => console.log('error', err));
})


// order:[{
//   id: req.body.id,
//   name: req.body.name,
//   price: req.body.price
// }]

module.exports = router;