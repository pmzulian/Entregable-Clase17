const service = require("../models/consultas")

class Producto {
  constructor() {
    this.productos = [];
  }

  getId() {
    return this.productos.length + 1;
  }

  async guardar(producto) {
    let id = await service.guardar(producto);
    return await service.listarIndividual(id[0])
  }



  async listarTodos() {
    let prods = await service.listarTodos();
    return prods.length > 0 ? await prods : "No hay productos cargados"
  }



  async listarIndividual(id) {
    let prod = await service.listarIndividual(id)
    if(prod[0]){
      return await prod[0]
    }else{
      return `No existe producto con el id ${id}`
    }
  }



  borrar(id) {
    const index = this.productos.findIndex((prod) => prod.id == id);
    return this.productos.splice(index, 1);
  }
}

// const nuevosProductos = new Producto();

/* nuevosProductos.guardar({
  id: nuevosProductos.getId(),
  title: "Computadora Desktop",
  price: 120000,
  thumbnail:
    "https://www.flaticon.es/icono-gratis/ordenador-de-sobremesa_1792525",
});

nuevosProductos.guardar({
  id: nuevosProductos.getId(),
  title: "Televisor SmarTV",
  price: 90000,
  thumbnail: "https://www.flaticon.es/icono-gratis/televisor_4384367",
}); */

// nuevosProductos.listarIndividual(2)
// nuevosProductos.productos.forEach(index => console.log(index))

// nuevosProductos.borrar(1)

// console.log(nuevosProductos.listarTodos())

// export default GenerarProductos;

module.exports = new Producto();
