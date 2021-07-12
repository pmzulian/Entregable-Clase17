const {knex} = require("../db");

function listarTodos() {
    return knex("productos").select("*"); 
}
//========================================================================


function listarIndividual(param) {
    return knex("productos").select("*").where({ id: param });
}
//========================================================================


function guardar(producto) {
   return knex("productos").insert(producto)
}
//========================================================================


function actualizar(id, body) {
    const ubicacion = knex("productos").where({id: id})
    const actualizar = {...body}
    return ubicacion.update(actualizar)
}
//========================================================================


function borrar(id) {
    return knex("productos").where({id: id}).del()
}
//========================================================================


module.exports = {
    listarTodos,
    listarIndividual,
    guardar,
    actualizar,
    borrar
}