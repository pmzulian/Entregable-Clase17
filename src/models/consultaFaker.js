const faker = require("faker");
faker.locale = "es";

class Fake {
  constructor() {}

  async arregloFakes(cant){
    try {
        let fakes = [];
        cant > 0 ? cant : (cant = 10);

        for (let index = 0; index < cant; index++) {
            fakes.push({
              id: faker.datatype.uuid(),
              title: faker.commerce.productName(),
              price: parseFloat(faker.commerce.price()),
              thumbnail: faker.image.business(),
              stock: parseInt(faker.datatype.number(100)),
            });
        }
        return fakes;
    } catch (error) {
        throw(error)
    }
  }
}

/* function arregloFakes(cant) {
  let fakes = [];

  cant > 0 ? cant : (cant = 10);

  for (let index = 0; index < cant; index++) {
    fakes.push(new generarFake());
  }
  return fakes;
} */

module.exports = new Fake();
