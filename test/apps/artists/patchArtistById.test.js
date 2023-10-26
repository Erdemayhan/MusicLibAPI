const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#PATCH /artist/:artistId", () => {
  const artistId = 1;

  it("should update artist detail", async () => {
    const response = await request(router)
      .patch(`/artist/${artistId}`)
      .send({
        artistName: "50 Cent",
        artistGenre: "Hip Hop"
      });
    expect(response.statusCode).to.equal(201);
    expect(response.body).to.eql({
      artist: {
        affectedRows: 1,
        changedRows: 1,
        fieldCount: 0,
        insertId: 0,
        message: "(Rows matched: 1  Changed: 1  Warnings: 0",
        protocol41: true,
        serverStatus: 2,
        warningCount: 0
      }
    });
  });
});
