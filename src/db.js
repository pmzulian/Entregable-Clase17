const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017/ecommerce";
const mensajesCollection = "mensajes";
const productosCollection = "productos";

async function conexion() {
    try {
        
        /* Conexión hacia la base de datos */
        await mongoose.connect(MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        });
        console.log("Conexión con Mongoose exitosa")

    } catch (error) {
        console.log(error);
    }
}

conexion();

//Creamos esquemas y los guardamos en variables
const mensajesSchema = new mongoose.Schema({
  mensaje: { type: String, required: true },
  email: { type: String, required: true },
  fecha: { type: String, default: Date.now },
});

const productosSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  stock: { type: Number, required: true },
});

//Generamos y guardamos ambos modelos
const mensajesModel = mongoose.model(mensajesCollection, mensajesSchema);
const productosModel = mongoose.model(productosCollection, productosSchema);

module.exports = {mensajesModel, productosModel};