const { DataTypes } = require("sequelize");
const { db } = require("../Conectdb/dataBase");

const Repair = db.define("repair", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "EN REPARACIÓN",
  },
  userId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = { Repair };
