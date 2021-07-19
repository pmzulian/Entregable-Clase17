const socket = io.connect();
// const mensajes = require("../../api/mensaje");
/* Si recibo productos, los muestro usando handlebars */
socket.on("productos", function (productos) {
  console.log("productos socket client");
  document.getElementById("datos").innerHTML = data2TableHBS(productos);
});

/* Obtengo el formulario */
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {
    title: form[0].value,
    price: form[1].value,
    thumbnail: form[2].value,
  };

  fetch("/api/productos/guardar", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((respuesta) => respuesta.json())
    .then((productos) => {
      form.reset();
      socket.emit("update", "ok");
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
});

function data2TableHBS(productos) {
  const plantilla = `
        <style>
            .table td,
            .table th {
                vertical-align: middle;
            }
        </style>
        {{#if productos.length}}
        <div class="table-responsive">
            <table class="table table-dark">
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Foto</th>
                </tr>
                {{#each productos}}
                <tr>
                    <td>{{this.title}}</td>
                    <td>$ {{ this.price }}</td>
                    <td><img width="50" src={{this.thumbnail}} alt="not found"></td>
                </tr>
                {{/each}}
            </table>
        </div>
        {{/if}}
    `;

  console.log(productos);
  var template = Handlebars.compile(plantilla);
  let html = template({ productos: productos, hayProductos: productos.length });
  return html;
}

//*====================================================================================
//* Código correspondiente al socket de mensajes

/**
 * Recibimos mensajes en el cliente (del lado del navegador)
 * El parámetro data representa el array de mensajes que envía el servidor
 */
// socket.on("messages", (data) => {
//   console.log(data);
// });

/**
 * Generamos una función que renderice los mensajes recibidos
 */
function render(data) {
  let html = data
    .map(function (elem, index) {
      return `
              <li class="list-group-item d-flex justify-content-between align-items-start fst-italic">
                <div class="ms-2 me-auto">
                  <div class="badge badge-pill badge-primary">${elem.email}</div><br/>
                  ${elem.mensaje}
                </div>
                <span class="text-monospace">${elem.fecha}</span>
              </li>  
              `;
    })
    .join(" ");
  document.getElementById("messages").innerHTML = html;
}

socket.on("messages", function (data) {
  console.log(data);
  render(data);
});

/**
 * Escribimos la función para añadir mensajes desde el formulario
 * de index.html, onsubmit="return addMessage(this)"
 */
function addMessage(e) {
  let mensaje = {
    email: document.getElementById("username").value,
    mensaje: document.getElementById("texto").value,
    fecha: new Date(),
  };

  socket.emit("new-message", mensaje);
  return false;
}
