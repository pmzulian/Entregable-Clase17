const express = require("express");

const router = express.Router();

const productos = require("../api/producto");

// const service = require("../models/consultas")

//=====================================================================
router.post("/productos/guardar", async (req, res) => {
  try {
    const prods = await productos.guardar(req.body);
    console.log(prods);
    res.json(prods);
  } catch (error) {
    res.send(error)
  } 
});


router.get("/productos/listar", async (req, res) => {
  
  try {
    res.json(await productos.listarTodos());
  } catch (error) {
    res.send(error)
  }
  
});


router.get("/productos/listar/:id", async (req, res) => {

  try {
    const prod = await productos.listarIndividual(req.params.id)
    console.log(prod);
    res.json(prod)
  } catch (error) {
    res.send(error)
  }

});



//=====================================================================
//Creamos la estructura con express.router
router.put("/productos/actualizar/:id", async (req, res) => {
  const ubicacion = req.params.id;
  const actualizar = req.body;
  try {
    await productos.actualizar(ubicacion, actualizar);
    res.json(await productos.listarIndividual(ubicacion))
  } catch (error) {
    res.send(error)
  }
  
});


//=====================================================================
router.delete("/productos/borrar/:id", async (req, res) => {
  try {
    const prod = await productos.borrar(req.params.id);
    res.json(prod[0])
  } catch (error) {
    res.send(error)
  }
});


//=====================================================================
router.get("/productos/vista", (req, res) => {
  let prods = productos.listarTodos();
  res.render("lista.hbs", { productos: prods, hayProductos: prods.length });
});

module.exports = router;