const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET artists", () => {
  it("should show all artists", async () => {
    const response = await request(router)
      .get("/artists")
      .send();
    expect(response.statusCode).to.equal(201);
    // expect(response.body).to.eql({
    //   artists: [
    //     {
    //       artistId: 1,
    //       artistName: "Kanye West",
    //       artistGenre: "Hip Hop"
    //     },
    //     {
    //       artistId: 2,
    //       artistName: "FireBoy DML",
    //       artistGenre: "Afro Pop"
    //     },
    //     {
    //       artistId: 3,
    //       artistName: "Frank Ocean",
    //       artistGenre: "Rnb"
    //     }
    //   ]
    // });
  });
});
