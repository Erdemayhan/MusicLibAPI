const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateArtistById = ({
  artistId,
  artistName = null,
  artistGenre = null
}) => {
  const updates = [];

  if (artistName !== null) {
    updates.push(sql`artistName = ${artistName}`);
  }

  if (artistGenre !== null) {
    updates.push(sql`artistGenre = ${artistGenre}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
   UPDATE
     Artists
   SET
     ${updates.reduce(sqlReduce)}
   WHERE
     artist_id = ${artistId};
 `;
  }
  return Promise.resolve();
};

module.exports = updateArtistById;
