const { Sequelize } = require("sequelize");

//Create connection to data base
const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "Chamanquin12",
  database: "backend1",
  logging: false,
});

module.exports = { db };
