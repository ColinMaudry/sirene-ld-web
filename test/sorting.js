var request = require("supertest");
var app = require("./../server");

//
// Sorting testing
//

describe("## Sorting", function() {
  it("/api/decp/marches?sort=dureeMois&limit=1 returns a marché with dureeMois=1", function(done) {
    request(app)
      .get("/api/decp/marches?sort=dureeMois&limit=1")
      .expect(function(res) {
        if (res.body[0].dureeMois === 1) {
          return "dureeMois = 1!";
        } else {
          throw new Error("dureeMois != 1 (" + res.body[0].dureeMois + ").");
        }
      })
      .expect(200, done);
  });
  it("/api/decp/marches?sort=+dureeMois&limit=1 returns a marché with dureeMois=1", function(done) {
    request(app)
      .get("/api/decp/marches?sort=+dureeMois&limit=1")
      .expect(function(res) {
        if (res.body[0].dureeMois === 1) {
          return "dureeMois = 1!";
        } else {
          throw new Error("dureeMois != 1 (" + res.body[0].dureeMois + ").");
        }
      })
      .expect(200, done);
  });
  it("/api/decp/marches?sort=-dureeMois&limit=1 returns a marché with dureeMois >= 48", function(done) {
    request(app)
      .get("/api/decp/marches?sort=-dureeMois&limit=1")
      .expect(function(res) {
        if (res.body[0].dureeMois >= 48) {
          return "dureeMois >= 48 !";
        } else {
          throw new Error("dureeMois < 48 (" + res.body[0].dureeMois + ").");
        }
      })
      .expect(200, done);
  });
});
