const express = require("express");
const sucursalSchema = require("../models/sucursales");

const router = express.Router();

router.post("/sucursales", (req, res) => {
  try{
    const sucursal = sucursalSchema(req.body);
    sucursal
      .save()
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});

router.get("/sucursales", (req, res) => {
  try{
    sucursalSchema
      .find() 
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


router.put("/sucursales/:id", (req, res) => {
  try{
    const { id } = req.params;
    const { name, codigo, tlf, adress, adresspace, status} = req.body;
    sucursalSchema
      .updateOne({ _id: id}, {$set: {name, codigo, tlf, adress, adresspace, status} })
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});



module.exports = router;