'use strict';

const Order = require('../models/OrderModel');

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

// create products collection on mlab
// send list of ids to back-end from client side upon checkout click
// get request with those ids and save