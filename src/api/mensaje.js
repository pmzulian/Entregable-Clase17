const Mensaje = require("../models/consultasProductos");

class MensajeController{

    constructor(){};

    async guardar(mensaje){
        try {
            return await Mensaje.guardarMensaje(mensaje);
        } catch (error) {
            throw error
        }
    }

    async buscar(condicion) {
        try {
            return await Mensaje.buscarMensaje(condicion);
        } catch (error) {
            throw error;
        }
    }

}


module.exports = new MensajeController();