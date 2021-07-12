const express = require("express");

const router = express.Router();

const MensajeController = require("../api/mensaje");

router.post("/mensajes", async (req, res) => {
    try {
        let mensaje = MensajeController.guardar(req.body);
        res.send(mensaje)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.get("/mensajes", async (req, res) => {
  try {
    let mensajes = await MensajeController.buscar(req.query);
    res.send(mensajes);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;