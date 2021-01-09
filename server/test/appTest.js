import chai from "chai";
import chaiHttp from "chai-http";
import server from "../index.js";

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Tasks API", () => {
  /**
   * Test the GET route
   */

  describe("GET /events", () => {
    it("It should get all the Events", (done) => {
      chai
        .request(server)
        .get("/events")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          done();
        });
    });
  });

  describe("GET /event", () => {
    it("It should Not get all the Events", (done) => {
      chai
        .request(server)
        .get("/event")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  /**
   * Test the GET (by id) route
   */

  /**
   * Test the POST route
   */
  describe("POST /events", async () => {
    it("It should POST a new Event", (done) => {
      const event = {
        title: "event1",
        disc: "this is a discription",
        eventDate: new Date(),
      };
      chai
        .request(server)
        .post("/events")
        .send(event)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a("object");
          done();
        });
    });
  });  
});
