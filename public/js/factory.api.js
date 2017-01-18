angular.module('M34S')
       .factory('MixCenter', mixFactory);

mixFactory.$inject = ['$http']

function mixFactory ($http) { //Open factory function
  var baseURI = "https://api.spotify.com"; // Since all of the endpoints in the Spotify API use this url as a base, we store it in a variable 
  
  function getArtist1 (artist1) { //Open fetch to Spotify to get Artist 1 ID
    
    return $http({
      method : 'GET',
      url    : baseURI + '/v1/search',
      params : {
      q      : artist1,
      type   : "artist"
      }
    })
    
  } //Close fetch to Spotify to get Artist 1 ID
  
  function getArtist2 (artist2) { //Open fetch to Spotify to get Artist 2 ID
    
    return $http({
      method : 'GET',
      url    : baseURI + '/v1/search',
      params : {
      q      : artist2,
      type   : "artist"
      }
    })
    
  } //Close fetch to Spotify to get Artist 2 ID
  
  function getArtist3 (artist3) { //Open fetch to Spotify to get Artist 3 ID
    
    return $http({
      method : 'GET',
      url    : baseURI + '/v1/search',
      params : {
      q      : artist3,
      type   : "artist"
      }
    })
    
  } //Close fetch to Spotify to get Artist 3 ID
  
  function getArtist4 (artist4) { //Open fetch to Spotify to get Artist 4 ID
    
    return $http({
      method : 'GET',
      url    : baseURI + '/v1/search',
      params : {
      q      : artist4,
      type   : "artist"
      }
    })
    
  } //Close fetch to Spotify to get Artist 4 ID
  
  function getArtist5 (artist5) { //Open fetch to Spotify to get Artist 5 ID
    
    return $http({
      method : 'GET',
      url    : baseURI + '/v1/search',
      params : {
      q      : artist5,
      type   : "artist"
      }
    })
    
  } //Close fetch to Spotify to get Artist 5 ID
  
  function getTrack1 (song1) { //Open fetch to Spotify to get Track 1 ID
    return $http({
      method  : 'GET',
      url     : baseURI + '/v1/search',
      params  : {
      q       : song1,
      type    : "track"
    }
    })
  } //Close fetch to Spotify to get Track 1 ID
  
  function getTrack2 (song2) { //Open fetch to Spotify to get Track 2 ID
    return $http({
      method  : 'GET',
      url     : baseURI + '/v1/search',
      params  : {
      q       : song2,
      type    : "track"
    }
    })
  } //Close fetch to Spotify to get Track 2 ID

 function getTrack3 (song3) { //Open fetch to Spotify to get Track 3 ID
    return $http({
      method  : 'GET',
      url     : baseURI + '/v1/search',
      params  : {
      q       : song3,
      type    : "track"
    }
    })
  } //Close fetch to Spotify to get Track 3 ID
  
  function getTrack4 (song4) { //Open fetch to Spotify to get Track 4 ID
    return $http({
      method  : 'GET',
      url     : baseURI + '/v1/search',
      params  : {
      q       : song4,
      type    : "track"
    }
    })
  } //Close fetch to Spotify to get Track 4 ID
  
 function getTrack5 (song5) { //Open fetch to Spotify to get Track 5 ID
    return $http({
      method  : 'GET',
      url     : baseURI + '/v1/search',
      params  : {
      q       : song5,
      type    : "track"
    }
    })
  } //Close fetch to Spotify to get Tracks IDs    
  
  function getRecoms (numSongs,artSeeds,gnrSeeds,sngSeeds) { //Open fetch to Spotify to get Recommendation Seeds
    return $http({
      method  : 'GET',
      url     : baseURI + '/v1/recommendations',
      headers : { Authorization : "Bearer BQAcczt_I5erE_oAx-sw93Qh9ZgJPy5c4yjxNk06lCBNLcLSU-y0pkZo7OdlcVlOZuCuJLGN_iqNcTqReQb5E2IQraYPw7QbDzdG7P0g1RmLmV8OVqLySbfkeIrTbx4HZoxpA6jt9v0"
      }, 
      params  : {
      limit        : numSongs,  
      seed_artists : artSeeds,
      seed_genres  : gnrSeeds,
      seed_tracks  : sngSeeds
      }
    })
  } //Close fetch to Spotify to get Recommendations Seeds
  
  return { //Open the factory return call
    
    getArtist1 : getArtist1,
    getArtist2 : getArtist2,
    getArtist3 : getArtist3,
    getArtist4 : getArtist4,
    getArtist5 : getArtist5,
    getTrack1 : getTrack1,
    getTrack2 : getTrack2,
    getTrack3 : getTrack3,
    getTrack4 : getTrack4,
    getTrack5 : getTrack5,
    getRecoms : getRecoms

  } //Close the factory return call
} //Close factory function