const express = require("express");
const rolSchema = require("../models/rol");

const router = express.Router();

//crear
router.post("/roles", (req,res) => {
    try{
    const rol = rolSchema(req.body);
    rol
        .save()
        .then((data) => res.json(data))
    }catch(error){
        res.json({message: error});
    }
});


//obtener roles
router.get("/roles", (req, res) => {
    try{
    rolSchema
        .find()
        .then((data) => res.json(data))
    }catch(error){
        res.json({message: error});
    }
});


module.exports = router;