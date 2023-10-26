const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET /artist/:artistId", () => {
  const artistId = 1;

  it("should show an  artist", async () => {
    const response = await request(router)
      .get(`/artist/${artistId}`)
      .send();
    expect(response.statusCode).to.equal(201);
    expect(response.body).to.eql({
      artist: [
        {
          artistName: "Kanye West",
          artistGenre: "Hip Hop"
        }
      ]
    });
  });
});
