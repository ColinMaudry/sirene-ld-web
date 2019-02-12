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

  // Replacing the "text" URL param with a Mongo text query (https://docs.mongodb.com/manual/reference/operator/query/text/#op._S_text)
  if (params.text && params.text !== "") {
    params["$text"] = {
      $search: params.text,
      $diacriticSensitive: true
    };
    delete params.text;
  } else {
    delete params.text;
  }
  res.locals.searchParams = params;

  // "Limit" param as number
  req.query.limit = parseInt(req.query.limit) || undefined;

  // Adjust the "sort" param value
  if (req.query.sort && req.query.sort.charAt(0) === "+") {
    req.query.sort = [req.query.sort.substring(1)];
  }

  next();
};
