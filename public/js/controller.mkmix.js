angular.module("M34S")
       .controller('TheMix', mixCtrller);

mixCtrller.$inject = ['Auth','MixCenter','$location','$sce'];

function mixCtrller (Auth,MixCenter,$location,$sce){// Open the main controller function
  var TheMix = this;
  TheMix.$sce = $sce;
  TheMix.Auth = Auth;

  Auth.checkAuth()
      .then(function(returnData){
      console.log(returnData);

      if(!returnData.data){
        // kick them out
        $location.url('/'); // take them to angular home route
      }
      else{

        // User is logged in, set them in the service and fetch plylist data

        Auth.user = returnData.data // store in Auth service so we can access it anywhere we inject Auth
      }

    })

  TheMix.greeting = "Make My Mix for Spotify";
  TheMix.instructions1="Use a total of five options to make your mix playlist:";
  TheMix.instructions2="Example 1: Artist, Song, Genre, Genre, Genre";
  TheMix.instructions3="Example 2: Artist, Artist, Song, Song, Genre";
  TheMix.instructions4="Example 3: Artist, Artist, Song, Genre, Genre";

  TheMix.getMix = function(){
  MixCenter.FinalMix(TheMix.artist1,
                     TheMix.artist2,
                     TheMix.artist3,
                     TheMix.artist4,
                     TheMix.artist5,
                     TheMix.song1,
                     TheMix.song2,
                     TheMix.song3,
                     TheMix.song4,
                     TheMix.song5,
                     TheMix.genre1,
                     TheMix.genre2,
                     TheMix.genre3,
                     TheMix.genre4,
                     TheMix.genre5,
                     TheMix.nSongs
        )
    .then(function(resp){
      console.log('Playlists : ', resp.data)
      TheMix.mixDetails = resp.data.mixDetails;
      TheMix.playlists = resp.data.tracks;

      $location.url('/mixer'); // take them to angular mixer route


    });
}
    TheMix.saveMix = function(){
    MixCenter.saveMix(TheMix.namePlaylist,TheMix.Auth.user.playlists)
             .then(function(respPL){
                  console.log('Playlists : ', respPL.data)
                  // TheMix.mixDetails = respPL.data.mixDetails;
                  TheMix.finalresult = respPL.data;

                  // $location.url('www.spotify.com/'); // take them to spotify playlist 'play' page mixer route

      });
   }
}  //Closes the main controller call
