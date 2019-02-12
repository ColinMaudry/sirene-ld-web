var request = require("supertest");
var app = require("./../server");

//
// Full text search testing
//

describe("## Full text search", function() {
  it("/api/decp/marches?text=200030195001152019NCA19004400 returns this marché and only this one.", function(done) {
    request(app)
      .get("/api/decp/marches?text=200030195001152019NCA19004400")

      .expect(function(res) {
        if (
          res.body.length === 1 &&
          res.body[0].uid === "200030195001152019NCA19004400"
        ) {
          return "The search returned marché 200030195001152019NCA19004400";
        } else {
          throw new Error(
            "Search did not return the right marché (" +
              res.body[0].uid +
              ")\n(" +
              res.body.length +
              ")."
          );
        }
      })
      .expect(200, done);
  });
  it("/api/decp/marches?text=&limit=50 returns all marchés up to the limit and ignores 'text'.", function(done) {
    request(app)
      .get("/api/decp/marches?text=&limit=50")
      .expect(function(res) {
        if (res.body.length === 50) {
          return "The search returned 50 marchés";
        } else {
          throw new Error(
            "Search did not return the right number of marché (" +
              res.body.length +
              ")."
          );
        }
      })
      .expect(200, done);
  });
});
