const mongoose = require("mongoose");

const pagoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Pago', pagoSchema);