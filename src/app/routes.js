const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const postArtist = require("./controllers/artists/postArtist");
const getAllArtists = require("./controllers/artists/getAllArtist");
const getArtistById = require("./controllers/artists/getArtistById");
const patchArtistById = require("./controllers/artists/patchArtistById");
const deleteArtistById = require("./controllers/artists/deleteArtistById");
const getAllAlbums = require("./controllers/albums/getAllAlbums");
const getAlbumById = require("./controllers/albums/getAlbumById");
const postAlbum = require("./controllers/albums/postAlbum");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

// Artists
router.post("/artist", postArtist);

router.get("/artists", getAllArtists);

router.get("/artist/:artistId", getArtistById);

router.patch("/artist/:artistId", patchArtistById);

router.delete("/artist/:artistId", deleteArtistById);

// Albums

router.get("/albums", getAllAlbums);

router.get("/album/:albumId", getAlbumById);

router.post("/album", postAlbum);

module.exports = router;
