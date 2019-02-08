var mongoose = require("mongoose");

exports.sourceSchema = new mongoose.Schema({
  id: Number,
  code: String,
  description: String,
  url: String
});
exports.Source = mongoose.model("Source", exports.sourceSchema);
