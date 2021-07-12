const { sqlite } = require("../db");

sqlite.schema
  .createTable("mensajes", (table) => {
    table.increments("id");
    table.string("mensaje");
    table.string("email");
    table
      .timestamp("fecha", { useTz: true })
      .notNullable()
      .defaultTo(sqlite.fn.now());
  })
  .then(() => {
    console.log("¡Tabla mensajes creada!");
  })
  .catch((error) => {
    console.log("error:", error);
    throw error;
  })
  .finally(() => {
    console.log("Cerrando conexion...");
    process.exit(0);
  });
