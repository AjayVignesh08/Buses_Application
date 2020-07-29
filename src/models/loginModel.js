const { DataTypes } = require("sequelize");
const login = require("../config/dataBase");

const logins = login.define("login_detail", {
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  }
});

module.exports = logins;
