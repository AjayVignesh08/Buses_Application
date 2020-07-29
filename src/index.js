const express = require("express");
const bodyparser = require("body-parser");
const expressHBS = require("express-handlebars");
const seatsplit = require("./views/helpers/seatsplit");
const path = require("path");
const bus = require("./models/busModel");
const seats = require("./models/seatModel");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const getAllBus = async () => {
  const result = await bus.findAll();

  // TODO: Find a better way to get plain json
  return JSON.parse(JSON.stringify(result));
};

const getAllseat = async () => {
  const result = await seats.findAll();

  // TODO: Find a better way to get plain json
  return JSON.parse(JSON.stringify(result));
};

//creating handlebars engine
const hbs = expressHBS.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: { seatsplit }
});

//let express know to use handlebars
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.status(200).send("Server is Running  ROute = /buses");
});

app.get("/login", async (req, res) => {
  res.status(200).render("login.hbs", {
    layout: "hero.hbs",
    title: "Login Page",
    action: "/adduser",
    method: "POST"
  });
});

app.get("/buses", async (req, res) => {
  res.status(200).render("buspage.hbs", {
    layout: "hero.hbs",
    title: "Bus List",
    data: await getAllBus()
  });
});

app.get("/buses/seats/:seatid", async (req, res) => {
  res.status(200).render("seats.hbs", {
    layout: "hero.hbs",
    data: await getAllseat()
  });
});

app.post("/adduser", async (req, res) => {
  const userlist = await login_detail.create(req.body);

  login_detail.findAll({
    attributes: ["email", "password"]
  });
});

app.listen(8080, () => {
  console.log("server is running fine");
});
