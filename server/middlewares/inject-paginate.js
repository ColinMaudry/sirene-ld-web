var paginate = require("express-paginate");

module.exports = function(req, res, next) {
  let payload = {};

  if (res.locals.results) {
    if (res.locals.paginate) {
      const results = res.locals.results;
      const itemCount = results.length;
      const totalCount = res.locals.totalCount;
      const pageCount = req.query.per_page
        ? Math.ceil(totalCount / req.query.per_page)
        : undefined;
      const pagesBefore = req.query.page - 1;
      const firstItem = pagesBefore * req.query.per_page + 1;
      const lastItem =
        req.query.page === pageCount
          ? itemCount
          : req.query.page * req.query.per_page;
      const prevPageHref = req.query.page > 1 ? paginate.href(req)(true) : null;

      payload = {
        links: {
          pagination: {
            next_page_url: paginate.href(req)(false),
            prev_page_url: prevPageHref,
            current_page: req.query.page,
            last_page: pageCount,
            total: totalCount,
            from: firstItem,
            to: lastItem,
            per_page: req.query.per_page
          }
        },
        data: results
      };
    } else {
      payload = res.locals.results;
    }
    res.json(payload);
  } else {
    next();
  }
};
