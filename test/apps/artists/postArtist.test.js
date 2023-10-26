const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#POST artist", () => {
  it("should add an artist to the db", async () => {
    const response = await request(router)
      .post("/artist")
      .send({
        artistName: "Eminem",
        artistGenre: "Hip Hop"
      });
    expect(response.statusCode).to.equal(201);
  });
});
