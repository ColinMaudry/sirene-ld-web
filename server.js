var express = require("express");
var morgan = require("morgan");
var path = require("path");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Require configuration file defined in app/Config.js
var config = require("./server/config");

// Connect to database
mongoose.connect(
  config.DB,
  { useNewUrlParser: true }
);

// Use morgan to log request in dev mode
app.use(morgan("dev"));

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, "/dist")));

app.use(express.static("dist"));

module.exports = app;
