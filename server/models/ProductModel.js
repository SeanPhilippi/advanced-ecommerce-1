const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ProductSchema = new Schema({

  product: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  }
});

module.exports = mongoose.model('Product', ProductSchema);