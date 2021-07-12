const {sqlite} = require("../db");

class Mensaje {
  constructor() {}

  static async guardarMensaje(mensaje) {
    try {
      let resultado = await sqlite("mensajes").insert(mensaje);
      return resultado;
    } catch (error) {
      throw error;
    }
  }

  static async buscarMensaje(condicion) {
    try {
      let mensajes = await sqlite("mensajes").where(condicion);
      return mensajes;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Mensaje();