'use strict';

const Product = require('../models/OrderModel');

exports.createOrder = function (req, res, next) {
  const id = req.body.id;
  const name = req.body.name;
  const price = req.body.price;

  let order = new Order({
    id: id,
    name: name,
    price: price
  });

  order.save();
  // order.update() ?
}