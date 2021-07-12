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


const sqlite = requiere("knex")({
  client: "sqlite3",
  connection: {
    filename: (__dirname + "./database/db.sqlite")
  }
})


module.exports = {knex, sqlite};