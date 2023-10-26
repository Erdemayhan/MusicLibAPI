const { submitQuery, getInsertId } = require("~root/lib/database");

const insertAlbum = async ({ artistId, albumName, albumYear }) => submitQuery`
    INSERT INTO albums (artist_id, albumName, albumYear)
    VALUES (${artistId}, ${albumName}, ${albumYear});
`;

module.exports = getInsertId(insertAlbum);
