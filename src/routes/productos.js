const express = require("express");

const router = express.Router();

const productos = require("../api/producto");

const service = require("../models/consultas")

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
    res.json(await service.listarTodos());
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
router.put("/productos/actualizar/:id", (req, res) => {
  const ubicacion = req.params.id;
  const actualizar = req.body;

  service
    .actualizar(ubicacion, actualizar)
    .then((response) => {
      response
        ? res.json(req.body)
        : res.send(`No existe produto con id ${ubicacion}`);
    })
    .catch((error) => console.log(error));
});



router.delete("/productos/borrar/:id", (req, res) => {
  service.listarIndividual(req.params.id).then((response) => res.json(response))
  
  service
    .borrar(req.params.id)
    .then(response => response)
    .catch(error => console.log(error))
});

router.get("/productos/vista", (req, res) => {
  let prods = productos.listarTodos();
  res.render("lista.hbs", { productos: prods, hayProductos: prods.length });
});

module.exports = router;
