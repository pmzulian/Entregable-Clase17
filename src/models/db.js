const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "pmzulian",
    password: "30212506",
    database: "productos",
  },
  pool: { min: 0, max: 7 },
});

module.exports = knex