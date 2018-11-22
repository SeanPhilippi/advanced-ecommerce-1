const express = require('express');
const router = express.Router();

const { list, show } = require("../controllers/OrderController");

router.get('/orders', list);
router.get('/orders/:id', show);

module.exports = router;