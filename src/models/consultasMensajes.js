const {mensajesModel} = require("../db");

// const mensajesModel = conexion.model("mensajes")

class Mensaje {
  constructor() {}

  async guardarMensaje(mensaje) {
    try {
      let resultado = await new mensajesModel(mensaje).save();
      return resultado;
    } catch (error) {
      throw error;
    }
  }

  async listarTodos() {
    try {
      let mensajes = await mensajesModel.find({});
      return mensajes;
    } catch (error) {
      throw error;
    }
  }

  async buscarIndividual(param){
    try {
      let msg = await mensajesModel.find({id: param});
      return msg;
    } catch (error) {
      throw error
    }
  }
}

module.exports = new Mensaje();