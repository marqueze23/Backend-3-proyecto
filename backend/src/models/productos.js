const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  sucursal: {
    type: String, 
    required: true
  },
  precio: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Producto', productoSchema);