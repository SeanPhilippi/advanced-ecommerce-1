const express = require('express');
const router = express.Router();
const Order = require('../../models/OrderModel');

// const { createOrder } = require("../../controllers/OrderController");

// @route   POST api/orders
// @desc    submit/save order
// @access  Public
router.post('/orders', (req, res) => {
  const newOrder = new Order({
    req.body.map()
    order: []

  })
  console.log(newOrder)
  newOrder.save().then(res => res.json())
    .catch(err => console.log(err));
});

module.exports = router;