const {sqlite} = require("../db");

class Mensaje {
  constructor() {}

  async guardarMensaje(mensaje) {
    try {
      let resultado = await sqlite("mensajes").insert(mensaje);
      return resultado;
    } catch (error) {
      throw error;
    }
  }

  async listarTodos() {
    try {
      let mensajes = await sqlite("mensajes");
      return mensajes;
    } catch (error) {
      throw error;
    }
  }

  async buscarIndividual(param){
    try {
      let msg = await sqlite("mensajes").where(param);
      return msg;
    } catch (error) {
      throw error
    }
  }
}

module.exports = new Mensaje();