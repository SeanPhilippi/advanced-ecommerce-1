const express = require('express');
const router = express.Router();

const { list, show } = require("../controllers/ProductController");

router.get("/products", list);
router.get("/products/:id", show);

module.exports = router;