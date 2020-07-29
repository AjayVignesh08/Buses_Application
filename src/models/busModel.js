const { DataTypes } = require("sequelize");
const Bus = require("../config/dataBase");

const BusStructure = Bus.define("bus_detail", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  busName: {
    type: DataTypes.STRING,
    unique: true,
    field: "bus_name",
    allownull: "false"
  },
  busdesc: {
    type: DataTypes.STRING,
    unique: true,
    field: "bus_desc"
  },
  rating: {
    type: DataTypes.INTEGER,
    unique: true,
    field: "rating"
  },
  price: {
    type: DataTypes.INTEGER,
    unique: true,
    allownull: "false"
  },
  starttime: {
    type: DataTypes.DATEONLY,
    unique: true,
    field: "departure"
  },
  endtime: {
    type: DataTypes.DATEONLY,
    unique: true,
    field: "arrival"
  },
  seats: {
    type: DataTypes.INTEGER,
    unique: true,
    field: "seats"
  },
  toljourtime: {
    type: DataTypes.INTEGER,
    unique: true,
    field: "journey_time"
  },
  tolrateno: {
    type: DataTypes.INTEGER,
    unique: true,
    field: "rating_no"
  }
});

module.exports = BusStructure;
