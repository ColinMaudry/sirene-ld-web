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
  it("DECP sources route (/siren/123) with HTML accept returns HTML.", function(done) {
    request(app)
      .get("/siren/123")
      .set("accept", "text/html")
      .expect("Content-Type", /html/)
      .expect(200, done);
  });
  it("DECP sources route (/siren/123) with JSON accept returns JSON.", function(done) {
    request(app)
      .get("/siren/123")
      .set("accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
