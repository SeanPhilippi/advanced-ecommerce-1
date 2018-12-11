const express = require('express');
const router = express.Router();
const Order = require('../../models/OrderModel');

// const { createOrder } = require("../../controllers/OrderController");

// @route   POST api/orders
// @desc    submit/save order
// @access  Public
router.post('/', (req, res) => {
  Order.create({
    order: [{
      id: req.body.id,
      name: req.body.name,
      price: req.body.price
    }]
  })
});

module.exports = router;