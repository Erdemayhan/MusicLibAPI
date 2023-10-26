const { submitQuery, camelKeys } = require("~root/lib/database");

const selectArtistById = ({ artistId }) => submitQuery`
    SELECT artistName, artistGenre FROM artists WHERE artist_id = ${artistId}
    `;
module.exports = camelKeys(selectArtistById);
