const faker = require("../models/consultaFaker");

async function generarFakes(cant){
    try {
        console.log(faker.arregloFakes(cant))
        return faker.arregloFakes(cant)
    } catch (error) {
        throw(error)
    }
}

module.exports = generarFakes;