const index = require("./index");
const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", index);

describe("/GET /", () => {
  it("gets index route", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect({ name: "frodo" })
      .expect(200, done);
  });
});

describe("POST /test", () => {
  it("adds item to array and returns success", (done) => {
    request(app)
      .post("/test")
      .type("form")
      .send({ item: "hey" })
      .expect(200)
      .expect("success", done);
  });
});
