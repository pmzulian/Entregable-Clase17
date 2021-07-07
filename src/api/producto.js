class Producto {
  constructor() {
    this.productos = [];
  }

  getId() {
    return this.productos.length + 1;
  }

  guardar(producto) {
    this.productos.push(producto);
  }

  listarTodos() {
    return this.productos.length > 0 ? this.productos : "No hay productos cargados"
  }

  listarIndividual(id) {
    return this.productos[id - 1]
      ? this.productos[id - 1]
      :`No existe producto con el id ${id}`;
  }

  borrar(id) {
    const index = this.productos.findIndex((prod) => prod.id == id);
    return this.productos.splice(index, 1);
  }
}

const nuevosProductos = new Producto();

nuevosProductos.guardar({
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
});

// nuevosProductos.listarIndividual(2)
// nuevosProductos.productos.forEach(index => console.log(index))

// nuevosProductos.borrar(1)

// console.log(nuevosProductos.listarTodos())

// export default GenerarProductos;

module.exports = new Producto();
