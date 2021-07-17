const {productosModel} = require("../db");

function listarTodos() {
    return productosModel.find({}); 
}
//========================================================================


function listarIndividual(param) {
    return productosModel.find({_id: param});
}
//========================================================================


function ultimoEntrado(){
    return productosModel.find({}).sort({_id: -1}).limit(1);
}
//========================================================================

function guardar(producto) {
   return productosModel(producto).save();
}
//========================================================================


function actualizar(id, body) {
    return productosModel.findByIdAndUpdate(id, body, {new: true});
}
//========================================================================


function borrar(id) {
    return productosModel.findByIdAndDelete(id)
}
//========================================================================


module.exports = {
    listarTodos,
    listarIndividual,
    guardar,
    actualizar,
    borrar,
    ultimoEntrado
}