var express = require("express");
var morgan = require("morgan");
var app = express();
var mongoose = require("mongoose");
var models = require("./server/models");
var paginate = require("./server/middlewares/custom-paginate");
var cors = require("cors");
var history = require("connect-history-api-fallback");
var injectPaginate = require("./server/middlewares/inject-paginate");
var searchParams = require("./server/middlewares/search-params");
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

app.use(cors());

// Use morgan to log request in dev mode
//app.use(morgan("dev"));

app.use(paginate.middleware(10, 50));

// Extract search params from URL parameters in req.custom.searchParams
app.use(searchParams);

app.get("/api/decp/sources", async (req, res, next) => {
  if (!req.custom) {
    req.custom = {};
  }
  try {
    const [results, totalCount] = await Promise.all([
      models.Source.find(res.locals.searchParams)
        .limit(req.query.per_page || req.query.limit)
        .skip(req.skip)
        .lean()
        .exec(),
      models.Source.countDocuments(res.locals.searchParams)
    ]);

    res.locals.results = results;
    res.locals.totalCount = totalCount;

    next();
  } catch (err) {
    next(err);
  }
});

app.get("/api/decp/marches", async (req, res, next) => {
  if (!req.custom) {
    req.custom = {};
  }

  try {
    const [results, totalCount] = await Promise.all([
      models.Marche.find(res.locals.searchParams)
        .sort(req.query.sort)
        .limit(req.query.per_page || req.query.limit)
        .skip(req.skip)
        .lean()
        .exec(),
      models.Marche.countDocuments(res.locals.searchParams)
    ]);

    res.locals.results = results;
    res.locals.totalCount = totalCount;

    next();
  } catch (err) {
    next(err);
  }
});
app.use(injectPaginate);
app.use(
  history({
    verbose: false
  })
);
// Sends static files  from the public path directory
app.use(express.static("dist"));

module.exports = app;
