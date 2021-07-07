const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "pmzulian",
    password: "30212506",
    database: "coderhouse",
  },
  pool: { min: 0, max: 8 },
});

module.exports = knex;