const mongoose = require("mongoose");

const ventaSchema = mongoose.Schema({
  producto: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true
  },
  sucursal: {
    type: String,
    required: true
  },
  usuario: {
    type: String, 
    required: true
  },
  metodoPago: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Venta', ventaSchema);