const Mensaje = require("../models/consultasMensajes");

class MensajeController{

    constructor(){};

    async guardar(mensaje){
        try {
            return await Mensaje.guardarMensaje(mensaje);
        } catch (error) {
            throw error
        }
    }

    async listar() {
        try {
            return await Mensaje.listarTodos();
        } catch (error) {
            throw "No hay mensajes en el servidor";
        }
    }


    async buscar() {
        try {
            return await Mensaje.buscarIndividual();
        } catch (error) {
            throw error
        }
    }

}


module.exports = new MensajeController();