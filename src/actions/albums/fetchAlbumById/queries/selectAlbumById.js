const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAlbumById = ({ albumId }) => submitQuery`
    SELECT artist_id, albumName, albumYear FROM albums WHERE album_id = ${albumId}
    `;
module.exports = camelKeys(selectAlbumById);
