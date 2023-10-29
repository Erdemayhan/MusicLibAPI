const updateSongById = require("./queries/updateSongById");

const modifySongById = async ({
  songId,
  artistId,
  albumId,
  songName,
  songGenre,
  songYear
}) => {
  const song = await updateSongById({
    songId,
    artistId,
    albumId,
    songName,
    songGenre,
    songYear
  });

  return { song };
};

module.exports = modifySongById;
