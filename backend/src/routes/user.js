const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// creando
router.post("/users", (req, res) => {
  try{
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


// obteniendo todos los usuarios
router.get("/users", (req, res) => {
  try{
    userSchema
      .find() 
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//obteniendo por id
router.get("/users/:id", (req, res) => {
  try{
    const { id } = req.params;
    userSchema
      .findById(id) 
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//actualizando usuario por id
router.put("/users/:id", (req, res) => {
  try{
    const { id } = req.params;
    const { name, age, email, auth, rol, sucursal} = req.body;
    userSchema
      .updateOne({ _id: id}, {$set: {name,age,email,auth,rol,sucursal} }) 
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});


//borrando usuario
router.delete("/users/:id", (req, res) => {
  try{
    const { id } = req.params;
    userSchema
      .remove({ _id: id})
      .then((data) => res.json(data))
  }catch(error){
    res.json({message: error});
  }
});

module.exports = router;