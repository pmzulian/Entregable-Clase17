const service = require("../models/consultasProductos")

class Producto {
  constructor() {
    this.productos = [];
  }

  getId() {
    return this.productos.length + 1;
  }

  async guardar(producto) {
    let id = await service.guardar(producto);
    return await service.ultimoEntrado();
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


  async actualizar(id, param){
    const prod = await service.listarIndividual(id)
    if (prod) {
      return await service.actualizar(id, param);
    } else {
      return `No existe el producto con el id ${id}`
    } 
  }


  async borrar(id) {
    const prod = await service.listarIndividual(id)
    if(prod){
      return await service.borrar(id);
    }else{
      return `No existe el producto con el id ${id}`;
    }    
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
