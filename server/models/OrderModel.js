const mongoose = require('mongoose'),
  Shema = mongoose.Schema;

const OrderSchema = new Schema({
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
});

module.exports = mongoose.model('models', ModelSchema);