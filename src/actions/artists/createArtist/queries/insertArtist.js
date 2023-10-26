const { submitQuery, getInsertId } = require("~root/lib/database");

const insertArtist = async ({ artistName, artistGenre }) => submitQuery`
    INSERT INTO artists (artistName, artistGenre)
    VALUES (${artistName}, ${artistGenre});
`;

module.exports = getInsertId(insertArtist);
