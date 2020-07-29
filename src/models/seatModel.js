const { DataTypes } = require("sequelize");
const seat = require("../config/dataBase");

const Seats = seat.define("seat_detail", {
  seatid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  busid: {
    type: DataTypes.INTEGER
    // references: {
    //   model: "bus_detail",
    //   key: "id"
    // }
  },
  seatno: {
    type: DataTypes.INTEGER
  },
  busName: {
    type: DataTypes.STRING,
    field: "bus_name",
    allownull: "false"
  },
  availability: {
    type: DataTypes.STRING,
    field: "avalability",
    allownull: "false"
  }
});
module.exports = Seats;
