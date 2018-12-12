const express = require('express');
const router = express.Router();
const Product = require('../../models/ProductModel');

// const { getProducts } = require("../../controllers/OrderController");

// @route   GET api/products/test
// @desc    Tests products route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Products Works" }));

// @route   /
// @desc    get products to display in store
// @access  Public
router.get('/products', (req, res) => {
  Product.find({}).then(data => {
    res.json(data);
  })
});

module.exports = router; 