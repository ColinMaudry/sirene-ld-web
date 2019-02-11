var request = require("supertest");
var app = require("./../server");

//
// Pagination testing
//

describe("Pagination", function() {
  it("/api/decp/marches returns many results (no limit)", function(done) {
    request(app)
      .get("/api/decp/marches")
      .expect("Content-Type", /json/)
      .expect(function(res) {
        if (res.body.length > 100) {
          return "More than 100 results returned!";
        } else {
          throw new Error(
            "Too few results returned (" +
              res.body.length +
              "). Limits applied?"
          );
        }
      })
      .expect(200, done);
  });
  it("/api/decp/marches?limit=2 returns 2 records", function(done) {
    request(app)
      .get("/api/decp/marches?limit=2")
      .expect("Content-Type", /json/)
      .expect(function(res) {
        if (res.body.length === 2) {
          return "2 results returned!";
        } else {
          throw new Error(
            "Wrong number of results returned (" +
              res.body.length +
              "). Limits applied?"
          );
        }
      })
      .expect(200, done);
  });
  it("Pagination is correctly configured", function(done) {
    request(app)
      .get("/api/decp/marches?per_page=2&page=2")
      .expect("Content-Type", /json/)
      .expect(function(res) {
        var pagination = res.body.links.pagination;
        if (
          res.body.data.length === 2 &&
          pagination.current_page === 2 &&
          pagination.prev_page_url === "/api/decp/marches?per_page=2&page=1" &&
          pagination.next_page_url === "/api/decp/marches?per_page=2&page=3" &&
          pagination.per_page === 2
        ) {
          return "2 results returned and pagination data OK!";
        } else {
          throw new Error(
            "Problem in the pagination configuration data.length(" +
              res.body.data.length +
              ")\n(" +
              JSON.stringify(pagination, 2) +
              ")."
          );
        }
      })
      .expect(200, done);
  });
  it("Pagination takes precedence over limitation", function(done) {
    request(app)
      .get("/api/decp/marches?per_page=2&page=2&limit=1")
      .expect("Content-Type", /json/)
      .expect(function(res) {
        var pagination = res.body.links.pagination;
        if (
          res.body.data.length === 2 &&
          pagination.current_page === 2 &&
          pagination.prev_page_url ===
            "/api/decp/marches?per_page=2&page=1&limit=1" &&
          pagination.next_page_url ===
            "/api/decp/marches?per_page=2&page=3&limit=1" &&
          pagination.per_page === 2
        ) {
          return "2 results returned and pagination data OK!";
        } else {
          throw new Error(
            "Problem in the pagination configuration data.length(" +
              res.body.data.length +
              ")\n(" +
              JSON.stringify(pagination, 2) +
              ")."
          );
        }
      })
      .expect(200, done);
  });
});
