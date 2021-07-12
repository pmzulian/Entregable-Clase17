const express = require("express");

const router = express.Router();

const MensajeController = require("../api/mensaje");

router.post("/mensajes", async (req, res) => {
    try {
        let mensaje = await MensajeController.guardar(req.body);
        let msg = await MensajeController.buscar({id: mensaje[0]})
        res.json(msg)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.get("/mensajes", async (req, res) => {
  try {
    let mensajes = await MensajeController.listar();
    res.json(mensajes);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;