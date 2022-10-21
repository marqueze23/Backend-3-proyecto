const mongoose = require("mongoose");

const sucursalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  codigo: {
    type: Number,
    required: true
  },
  tlf: {
    type: Number,
    required: true
  },
  adress: {
    type: String, 
    required: true
  },
  adresspace: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Sucursales', sucursalSchema);