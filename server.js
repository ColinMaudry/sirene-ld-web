var express = require("express");
var morgan = require("morgan");
var path = require("path");
var app = express();
var mongoose = require("mongoose");
var models = require("./server/models");

//var bodyParser = require("body-parser");

// Require configuration file defined in app/Config.js
var config = require("./server/config");

// Connect to database
mongoose.connect(
  config.db.uri,
  {
    useNewUrlParser: true,
    auth: { user: config.db.username, password: config.db.password }
  }
);
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Use morgan to log request in dev mode
app.use(morgan("dev"));

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, "/dist")));

app.use(express.static("dist"));

module.exports = app;
