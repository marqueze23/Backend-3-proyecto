const mongoose = require("mongoose");

const rolSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    codigo: {
      type: Number,
      required: true
    },
  });
  

module.exports = mongoose.model('Rol', rolSchema);