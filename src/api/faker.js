const faker = require("faker");
faker.locale = "es";

class generarFake{
    constructor(){
        (this.id = faker.datatype.uuid()),
        (this.title = faker.commerce.productName()),
        (this.price = parseFloat(faker.commerce.price())),
        (this.thumbnail = faker.image.business()),
        (this.stock = parseInt(faker.datatype.number(100)));
    }
}

function arregloFakes(cant) {
    let fakes = [];

    cant > 0 ? cant : cant = 10;

    for (let index = 0; index < cant; index++) {
        fakes.push(new generarFake()) 
    }
    return fakes;
}

module.exports = arregloFakes;