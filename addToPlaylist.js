const convertPlaylist = require('./convertPlaylist')
const SpotifyWebApi = require('spotify-web-api-node')
require('dotenv').config()


console.log(process.env.CLIENT_ID)
console.log(process.env.CLIENT_SECRET)

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
})

spotifyApi.searchTracks('track:Alright artist:Kendrick Lamar')
  .then((data) => {
    console.log('Search results', data.body);
  }, (err) => {
    console.log('something went wrong', err);
  }); 






const addToPlaylist = (rootDirectory) => {

  const playlist = convertPlaylist(`${rootDirectory}`)

}

addToPlaylist('../playlists/replay-2020.csv')

//'../playlists/replay-2020.csv'