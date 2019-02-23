var request = require("supertest");
var app = require("./../server");

//
// Basic testing
//

describe("## Basic tests", function() {
  it("Root path (/) returns HTML Web app.", function(done) {
    request(app)
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200, done);
  });
  it("DECP sources route (/api/decp/sources) returns JSON.", function(done) {
    request(app)
      .get("/api/decp/sources")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
