const express = require("express");
const ventaSchema = require("../models/ventas");

const router = express.Router();

// crear
router.post("/ventas", (req, res) => {
  try{
    const venta = ventaSchema(req.body);
    venta
      .save()
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


// obtener
router.get("/ventas", (req, res) => {
  try{
    ventaSchema
      .find() 
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//obtener por id
router.get("/ventas/:id", (req, res) => {
  try{
    const { id } = req.params;
    ventaSchema
      .findById(id) 
      .then((data) => res.json(data))
  }catch(error){
    res.json({ message: error });
  }
});

module.exports = router;