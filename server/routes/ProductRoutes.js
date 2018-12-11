const express = require('express');
const router = express.Router();

const { getProducts } = require("../controllers/OrderController");

// @route   /
// @desc    get products to display in store
// @access  Public
// router.get('/', getProducts);

module.exports = router;