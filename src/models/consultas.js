const db = require("../db");

function listarTodos() {
    return db("productos").select("*"); 
}

// listarTodos().then(response => console.log(response))
//========================================================================


function listarIndividual(param) {
   
    return db("productos").select("*").where({ id: param });
}

/* listarIndividual(1).then(res => {
    res.length > 0 ? console.log(res) : console.log("No existe producto")
}) */
//========================================================================

function guardar(producto) {
    
}




module.exports = {
    listarTodos,
    listarIndividual
}