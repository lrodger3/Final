angular.module("M34S")
  .controller('TheMix', mixCtrller);

mixCtrller.$inject = ['MixCenter','$sce'];

function mixCtrller (MixCenter,$sce){// Open the main controller function
  var TheMix = this;
  TheMix.$sce = $sce;

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
      console.log('Mixes : ', resp.data)
      TheMix.mixes = resp.data.result;
    });
}
}  //Closes the main controller call
