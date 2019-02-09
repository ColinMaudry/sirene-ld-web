var express = require("express");
var morgan = require("morgan");
var path = require("path");
var app = express();
var mongoose = require("mongoose");
var models = require("./server/models");
var paginate = require("express-paginate");
var cors = require("cors");

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
app.use(morgan("dev"));

app.use(paginate.middleware(10, 50));

app.get("/api/decp/sources", async (req, res, next) => {
  try {
    const [results, itemCount] = await Promise.all([
      models.Source.find({})
        .limit(req.query.limit)
        .skip(req.skip)
        .lean()
        .exec(),
      models.Source.countDocuments({})
    ]);

    const pageCount = Math.ceil(itemCount / req.query.limit);
    const pagesBefore = req.query.page - 1;
    const firstItem = pagesBefore * req.query.limit + 1;
    const lastItem =
      req.query.page === pageCount
        ? itemCount
        : req.query.page * req.query.limit;
    const prevPageHref = req.query.page > 1 ? paginate.href(req)(true) : null;

    res.json({
      links: {
        pagination: {
          next_page_url: paginate.href(req)(false),
          prev_page_url: prevPageHref,
          current_page: req.query.page,
          last_page: pageCount,
          total: itemCount,
          from: firstItem,
          to: lastItem,
          per_page: req.query.limit
        }
      },
      data: results
    });
  } catch (err) {
    next(err);
  }
});

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, "/dist")));

app.use(express.static("dist"));

module.exports = app;
