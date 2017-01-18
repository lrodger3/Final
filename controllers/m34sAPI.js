var request = require('request-promise');
// Since all of the endpoints in the Spotify API use this url as a base, we store it in a variable 
var baseURI = "https://api.spotify.com"; 

module.exports = {
  album : (req, res) =>{
    // We need to make a request to the Spotify API
    
//     The request statement below needs to be modified for the Spotify API (still set up for KanyeREST)
//     Artist 1 Requests from Spotify
    request({
      method : 'GET',
      url    : '${baseURI}/v1/search/${req.body.artists.items[0].id}',
      params : {
                  q      : artist1,
                  type   : "artist"
               }
//       url : `${baseURI}/api/album/${req.query.albumName}`
    })
    request({
      method : 'GET',
      url    : '${baseURI}/v1/search/${req.body.artists.items[0].id}',
      params : {
                  q      : artist2,
                  type   : "artist"
               }
//       url : `${baseURI}/api/album/${req.query.albumName}`
    })
      .then((resp)=>{
        console.log('FULL RESPONSE FROM SPOTIFY : ', resp);
        res.send(resp);
      });
    
  },
}
