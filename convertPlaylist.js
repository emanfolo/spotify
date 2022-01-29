// const replay2020 = require('../playlists/replay-2020.csv')
const csv = require('csv-parser');
const fs = require('fs');

// console.log(replay2020)

const convertPlaylist = (rootDirectory) => {

  const playlist = []

    fs.createReadStream(`${rootDirectory}`)
    .pipe(csv())
    .on('data', (row) => {
      storeSongInPlaylist(row);
    })
    .on('end', () => {
      console.log(playlist)
      console.log('CSV file successfully processed');
  });


  const storeSongInPlaylist = (songObject) => {
    playlist.push(songObject)
  }

  return playlist

}

module.exports = convertPlaylist





