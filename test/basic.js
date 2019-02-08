var request = require("supertest");
var app = require("./../server");

//
// Basic testing
//

describe("Basic tests", function() {
  it("Root path (/) returns HTML Web app.", function(done) {
    request(app)
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
