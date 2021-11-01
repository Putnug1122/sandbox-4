var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var indexRouter = require("./src/routes/index");
// var usersRouter = require("./src/routes/users");

//Sequelize
const { sequelize, Sequelize } = require("./src/models");
// sequelize.sync({ force: true });
var app = express();
const routes = require("./src/routes");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use(routes);
module.exports = app;
