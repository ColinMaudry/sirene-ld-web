module.exports = function(req, res, next) {
  if (!req.custom) {
    req.custom = {};
  }
  //Cloning req.query in a way that it won't be affected by operations on clone
  // Thanks https://stackoverflow.com/a/10869248/3929804
  var params = JSON.parse(JSON.stringify(req.query));

  const toRemove = ["limit", "page", "sort", "per_page"];

  Object.keys(params).forEach(function(key) {
    if (toRemove.indexOf(key) > -1) {
      delete params[key];
    }
  });

  req.custom.searchParams = params;

  // Limit param as number
  req.query.limit = parseInt(req.query.limit) || undefined;

  next();
};