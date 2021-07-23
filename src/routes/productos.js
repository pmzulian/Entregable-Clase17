const express = require("express");

const router = express.Router();

const productos = require("../api/producto");

const fakes = require("../api/faker");

// const service = require("../models/consultas")

//=====================================================================
router.post("/productos/guardar", async (req, res) => {
  try {
    const prods = await productos.guardar(req.body);
    console.log(prods[0]);
    res.json(prods[0]);
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
    let prod = await productos.actualizar(ubicacion, actualizar);
    res.json(prod)
  } catch (error) {
    res.send(error)
  }
  
});


//=====================================================================
router.delete("/productos/borrar/:id", async (req, res) => {
  try {
    const prod = await productos.borrar(req.params.id);
    res.json(prod)
  } catch (error) {
    res.send(error)
  }
});


//=====================================================================
router.get("/productos/vista", (req, res) => {
  let prods = productos.listarTodos();
  res.render("lista.hbs", { productos: prods, hayProductos: prods.length });
});


//=====================================================================
router.get("/productos/vista-test/:cant", async (req, res) => {
  try {
    res.send(await fakes(req.params.cant));
  } catch (error) {
    res.send(error)
  }
  
})


module.exports = router;