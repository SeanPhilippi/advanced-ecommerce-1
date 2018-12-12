const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const OrderSchema = new Schema({

  order: [
    {
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
    }]
});

module.exports = mongoose.model('Order', OrderSchema);