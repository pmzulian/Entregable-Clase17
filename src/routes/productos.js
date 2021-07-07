const express = require("express");
const { listarTodos } = require("../api/producto");
const router = express.Router();

const productos = require("../api/producto");

const service = require("../models/consultas")

//=====================================================================
router.post("/productos/guardar", (req, res) => {
  service
    .guardar({...req.body})
    .then(() => res.json({...req.body}))
    .catch((error) => res.json({ error }));
});


router.get("/productos/listar", (req, res) => {
  service
  .listarTodos()
  .then(response => {response.length > 0
    ? res.json(response)
    : res.send("No hay productos cargados")})
  .catch(error => res.json({error}))
});


router.get("/productos/listar/:id", (req, res) => {
  service
  .listarIndividual(req.params.id)
  .then(response => {response.length > 0 ? res.json(response) : res.send(`No existe produto con id ${req.params.id}`)})
  .catch(error => res.json({error}))
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
