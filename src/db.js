const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017/ecommerce";

async function CRUD() {
    try {
        
        /* Conexión hacia la base de datos */
        await mongoose.connect(MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Conexión con Mongoose exitosa")

    } catch (error) {
        console.log(error);
    }
}


CRUD();