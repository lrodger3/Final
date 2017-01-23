angular.module('M34S')
       .factory('MixCenter', mixFactory);

mixFactory.$inject = ['$http'];

function mixFactory ($http){ //Open factory function
   function FinalMix (artist1,
                      artist2,
                      artist3,
                      artist4,
                      artist5,
                      song1,
                      song2,
                      song3,
                      song4,
                      song5,
                      genre1,
                      genre2,
                      genre3,
                      genre4,
                      genre5,
                      nSongs){
    return $http({
       method : "POST",
       url    : "/myServer/toSpotify/mix",
       data   : {

         artist1 : artist1,
         artist2 : artist2,
         artist3 : artist3,
         artist4 : artist4,
         artist5 : artist5,
           song1 : song1,
           song2 : song2,
           song3 : song3,
           song4 : song4,
           song5 : song5,
          genre1 : genre1,
          genre2 : genre2,
          genre3 : genre3,
          genre4 : genre4,
          genre5 : genre5,
          nSongs : nSongs
       }
    })
  }

  function CreatePL (namePlaylist, playlists){
   return $http({
      method : "POST",
      url    : "/myServer/toSpotify/createPL",
      data   : {

      namePlaylist : namePlaylist
      // playlists    : playlists
      }
   })
  }
  function AddToPL (namePlaylist, playlists){
   return $http({
      method : "POST",
      url    : "/myServer/toSpotify/addToPL",
      data   : {

      namePlaylist : namePlaylist,
      playlists    : playlists
      }
   })
  }
  return {
     FinalMix   : FinalMix,
     CreatePL   : CreatePL,
     AddToPL    : AddToPL
  }
}
