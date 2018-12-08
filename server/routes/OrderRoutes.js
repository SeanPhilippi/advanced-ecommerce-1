const express = require('express');
const router = express.Router();

// Order Model
const Order = require('../models/OrderModel');

const { createOrder } = require("../controllers/OrderController");

// @route   /order
// @desc    subit order
// @access  Public
router.post('/', (req, res) => {
  const newOrder = new Order({
    // create object from cart data here
  })
});

module.exports = router;