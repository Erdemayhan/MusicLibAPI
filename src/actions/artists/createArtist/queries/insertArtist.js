const { submitQuery, getInsertId } = require("~root/lib/database");

const insertArtist = async ({ artistName, artistGenre }) => submitQuery`
    INSERT INTO Artists (artistName, artistGenre)
    VALUES (${artistName}, ${artistGenre});
`;

module.exports = getInsertId(insertArtist);
