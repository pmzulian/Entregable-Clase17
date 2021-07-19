const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

const puerto = 8080;

const productosRouter = require("./routes/productos");
const mensajesRouter = require("./routes/mensajes")

//? No sé si irá en este archivo
const productos = require("./api/producto.js");
const mensajes = require("./api/mensaje");

//====================================================================
//* Para añadir Socket.io
const http = require("http").Server(app);

//* Pasamos la constante http a socket.io
const io = require("socket.io")(http);

//====================================================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Espacio público del servidor
app.use(express.static(__dirname + "/public"));

//====================================================================

//* Para usar Socket.io cambiamos app por "http"
http
  .listen(puerto, () =>
    console.log(`Escuchando peticiones puerto localhost:${puerto}`)
  )
  .on("error", (error) => console.log(`Error en servidor ${error}`));

//====================================================================

//====================================================================
//Configuramos handlebars
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
  })
);

//Establecemos el motor de plantillas a utilizar
app.set("view engine", "hbs");

//Establecemos el directorio donde se encuentran las plantillas
app.set("views", "./views");

//====================================================================
//Configuramos el servidor para que a las conexiones
io.on("connection", async (socket) => {
  console.log("Nuevo usuario conectado");
  /* Envio los mensajes al cliente que se conectó */
  socket.emit("productos", productos.listarTodos());

  /* Escucho los mensajes enviado por el cliente y se los propago a todos */
  socket.on("update", (data) => {
    io.sockets.emit("productos", productos.listarTodos());
  });
});

//====================================================================

//* Protejo el servidor ante excepciones no atrapadas
app.use((err, req, res, next) => {
  console.log(err.message);
  return res.status(500).send("Error de conexión no atrapada");
});

//====================================================================

//Importo las rutas y las uso con el prefijo /api
app.use("/api", productosRouter);
app.use("/", mensajesRouter);

//====================================================================
// let messages = [];

//* Recibimos los mensajes de la función addMessage(this) de index.html
//? ¿Es necesario una nueva instancia de in.on()?
io.on("connection", async function (socket) {
  try {
      console.log("Un cliente se ha conectado");
      socket.emit("messages", await mensajes.listar());

      socket.on("new-message", async function (data) {
        // messages.push(data);
        try {
          console.log(await mensajes.guardar(data));
          io.sockets.emit("messages", await mensajes.listar());
        } catch (error) {
          console.log(error);
        }
        
      });
  } catch (error) {
    console.log(error);
  }

}); 
