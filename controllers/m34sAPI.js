var request = require('request-promise'),
    async = require('async');
// Since all of the endpoints in the Spotify API use this url as a base, we store it in a variable
var baseURI = "https://api.spotify.com";

module.exports = {
  FinalMix : (req, xyz) =>{
    // We need to make a request to the Spotify API

  var bld_seeds=[]; //Initialize the empty array to capture the seeds

  if(req.body.artist1){ //Artist 1 case test
     bld_seeds.push(function(callback){
  //     Artist 1 Requests from Spotify
       request({
            method : 'GET',
            url    : `${baseURI}/v1/search/`,
            qs     : {
                        q      : req.body.artist1,
                        type   : "artist"
                     },
            json   : true
        })
        .then(function(response){ // Open the Manage Artist 1 response call
          // response=JSON.parse(resp);
          // response is the response from the server.  The data you care about lives at the data property (response.data).
          console.log('RESPONSE Artists!', response);

          artist1_ID = response.artists.items[0].id;

          arts1 = response.artists.items[0]; // Attach it to the controller object so we can use it in HTML
          console.log('Artist:', arts1, 'ArtistID:', artist1_ID);
          callback(null,arts1); //Push the Artist 1 Object into the bld_seeds array
         }) // Close the .then Manage Artist 1 response function call
         .catch(function(err){
           console.log(err);
           console.log('A1');
         })
     }) // Close the bld_seeds array push function for Artist 1
  } //Close the if case (when testing for Artist 1 info)

  if(req.body.artist2){ //Artist 2 case test
     bld_seeds.push(function(callback){
//     Artist 2 Requests from Spotify
       request({
            method : 'GET',
            url    : `${baseURI}/v1/search/`,
            qs     : {
                       q      : req.body.artist2,
                       type   : "artist"
                     },
            json   : true
        })
        .then(function(response){ // Open the Manage Artist 1 response call
          // response=JSON.parse(resp);
          // response is the response from the server.  The data you care about lives at the data property (response.data).
          console.log('RESPONSE Artists!', response);

          artist2_ID = response.artists.items[0].id;

          arts2 = response.artists.items[0]; // Attach it to the controller object so we can use it in HTML
          console.log('Artist:', arts2.name, 'ArtistID:', artist2_ID);
          callback(null,arts2); //Push the Artist 2 Object into the bld_seeds array
         }) // Close the .then Manage Artist 2 response function call
         .catch(function(err){
           console.log(err);
           console.log('A2');
         })
     }) // Close the bld_seeds array push function for Artist 2
  } //Close the if case (when testing for Artist 2 info)
  if(req.body.artist3){ //Artist 3 case test
    bld_seeds.push(function(callback){
//     Artist 3 Requests from Spotify
      request({
           method : 'GET',
           url    : `${baseURI}/v1/search/`,
           qs     : {
                            q      : req.body.artist3,
                            type   : "artist"
                    },
           json   : true
        })
        .then(function(response){ // Open the Manage Artist 3 response call
          // response=JSON.parse(resp);
          // response is the response from the server.  The data you care about lives at the data property (response.data).
          console.log('RESPONSE Artists!', response);

          artist3_ID = response.artists.items[0].id;

          arts3 = response.artists.items[0]; // Attach it to the controller object so we can use it in HTML
          console.log('Artist:', arts3.name, 'ArtistID:', artist3_ID);
          callback(null,arts3); //Push the Artist 3 Object into the bld_seeds array
         }) // Close the .then Manage Artist 3 response function call
         .catch(function(err){
           console.log(err);
           console.log('A3');
         })
     }) // Close the bld_seeds array push function for Artist 3
  } //Close the if case (when testing for Artist 3 info)

  if(req.body.artist4){ //Artist 4 case test
     bld_seeds.push(function(callback){
//     Artist 4 Requests from Spotify
       request({
               method : 'GET',
               url    : `${baseURI}/v1/search/`,
               qs     : {
                          q      : req.body.artist4,
                          type   : "artist"
                        },
               json   : true
        })
        .then(function(response){ // Open the Manage Artist 4 response call
          // response=JSON.parse(resp);
          // response is the response from the server.  The data you care about lives at the data property (response.data).
          console.log('RESPONSE Artists!', response);

          artist4_ID = response.artists.items[0].id;

          TheMix.arts4 = response.artists.items[0]; // Attach it to the controller object so we can use it in HTML
          console.log('Artist:', arts4.name, 'ArtistID:', artist4_ID);
          callback(null,arts4); //Push the Artist 4 Object into the bld_seeds array
         }) // Close the .then Manage Artist 4 response function call
         .catch(function(err){
           console.log(err);
           console.log('A4');
         })
     }) // Close the bld_seeds array push function for Artist 4
  } //Close the if case (when testing for Artist 4 info)

  if(req.body.artist5){ //Artist 5 case test
     bld_seeds.push(function(callback){
       //     Artist 5 Requests from Spotify
       request({
           method : 'GET',
           url    : `${baseURI}/v1/search/`,
           qs     : {
                       q      : req.body.artist5,
                       type   : "artist"
                    },
           json   : true
        })
        .then(function(response){ // Open the Manage Artist 5 response call
          // response=JSON.parse(resp);
          // response is the response from the server.  The data you care about lives at the data property (response.data).
          console.log('RESPONSE Artists!', response);

          artist5_ID = response.artists.items[0].id;

          arts5 = response.artists.items[0]; // Attach it to the controller object so we can use it in HTML
          console.log('Artist:', artist5.name, 'ArtistID:', artist5_ID);
          callback(null,arts5); //Push the Artist 5 Object into the bld_seeds array
         }) // Close the .then Manage Artist 5 response function call
         .catch(function(err){
           console.log(err);
           console.log('A5');
         })
     }) // Close the bld_seeds array push function for Artist 5
  } //Close the if case (when testing for Artist 5 info)

  if(req.body.song1){ // Song 1 case test
     bld_seeds.push(function(callback){
      request({
         method : 'GET',
         url    : `${baseURI}/v1/search/`,
         qs     : {
                     q      : req.body.song1,
                     type   : "track"
                  },
         json   : true
         })
         .then(function(response){ //Open the Manage Song 1 response call
          // response=JSON.parse(resp);
          song1_ID = response.tracks.items[0].id;

          console.log('RESPONSE Songs!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)

          sng1 = response.tracks.items[0]; // Attach it to the controller object we can use it in HTML

          console.log('Song1 Name:', sng1.name, 'Song1_ID:', song1_ID);
          callback(null,sng1); //Push the Song 1 Object into the bld_seeds array
         }) // Close the .then Manage Song 1 response function call
         .catch(function(err){
           console.log(err);
           console.log('S1');
         })
     }) // Close the bld_seeds array push function for Song 1
  }//Close the if case (when testing for Song 1 info)

  if(req.body.song2){ // Song 2 case test
    bld_seeds.push(function(callback){
      request({
        method : 'GET',
        url    : `${baseURI}/v1/search/`,
        qs     : {
                    q      : req.body.song2,
                    type   : "track"
                 },
        json   : true
         })
         .then(function(response){ //Open the Manage Song 2 response call
          // response=JSON.parse(resp);
          song2_ID = response.tracks.items[0].id;

          console.log('RESPONSE Songs!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)


          sng2 = response.tracks.items[0]; // Attach it to the controller object we can use it in HTML

          console.log('Song2 Name:', sng2.name, 'Song2_ID:', song2_ID);
          callback(null,sng2); //Push the Song 2 Object into the bld_seeds array
         }) // Close the .then Manage Song 2 response function call
         .catch(function(err){
           console.log(err);
           console.log('S2');
         })
     }) // Close the bld_seeds array push function for Song 2
  }//Close the if case (when testing for Song 2 info)

  if(req.body.song3){ // Song 3 case test
    bld_seeds.push(function(callback){
      request({
        method : 'GET',
        url    : `${baseURI}/v1/search/`,
        qs     : {
                    q      : req.body.song3,
                    type   : "track"
                 },
        json   : true
         })
         .then(function(response){ //Open the Manage Song 3 response call
          // response=JSON.parse(resp);
          song3_ID = response.tracks.items[0].id;

          console.log('RESPONSE Songs!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)

          sng3 = response.tracks.items[0]; // Attach it to the controller object we can use it in HTML

          console.log('Song3 Name:', sng3.name, 'Song3_ID:', song3_ID);
          callback(null,sng3); //Push the Song 3 Object into the bld_seeds array
         }) // Close the .then Manage Song 3 response function call
         .catch(function(err){
           console.log(err);
           console.log('S3');
         })
     }) // Close the bld_seeds array push function for Song 3
  }//Close the if case (when testing for Song 3 info)

  if(req.body.song4){ // Song 4 case test
    bld_seeds.push(function(callback){
      request({
        method : 'GET',
        url    : `${baseURI}/v1/search/`,
        qs     : {
                    q      : req.body.song4,
                    type   : "track"
                 },
        json   : true
         })
         .then(function(response){ //Open the Manage Song 4 response call
          // response=JSON.parse(resp);
          song4_ID = response.tracks.items[0].id;

          console.log('RESPONSE Songs!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)

          sng4 = response.tracks.items[0]; // Attach it to the controller object we can use it in HTML

          console.log('Song4 Name:', sng4.name, 'Song4_ID:', song4_ID);
          callback(null,sng4); //Push the Song 4 Object into the bld_seeds array
         }) // Close the .then Manage Song 4 response function call
         .catch(function(err){
           console.log(err);
           console.log('S4');
         })
     }) // Close the bld_seeds array push function for Song 4
  }//Close the if case (when testing for Song 4 info)

  if(req.body.song5){ // Song 5 case test
    bld_seeds.push(function(callback){
      request({
        method : 'GET',
        url    : `${baseURI}/v1/search/`,
        qs     : {
                    q      : req.body.song5,
                    type   : "track"
                 },
        json   : true
         })
         .then(function(response){ //Open the Manage Song 5 response call
          // response=JSON.parse(resp);
          song5_ID = response.tracks.items[0].id;
          console.log('RESPONSE Songs!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)

          sng5 = response.tracks.items[0]; // Attach it to the controller object we can use it in HTML

          console.log('Song5 Name:', sng5.name, 'Song5_ID:', song5_ID);
          callback(null,sng5); //Push the Song 5 ID into the bld_seeds array
         }) // Close the .then Manage Song 5 response function call
         .catch(function(err){
           console.log(err);
           console.log('S5');
         })
     }) // Close the bld_seeds array push function for Song 5
  }//Close the if case (when testing for Song 5 info)

  if(req.body.genre1){ // Genre 1 case test
    bld_seeds.push(function(callback){
          Genre1f = req.body.genre1.toUpperCase();

          console.log('Genre 1:', Genre1f);
          callback(null,Genre1f); //Push the Genre 1 into the bld_seeds array
    }) // Close the bld_seeds array push function for Genre 1
  }//Close the if case (when testing for Genre 1 info)

  if(req.body.genre2){ // Genre 2 case test
    bld_seeds.push(function(callback){
          Genre2f = req.body.genre2.toUpperCase();

          console.log('Genre 2:', Genre2f);
          callback(null,Genre2f); //Push the Genre 2 into the bld_seeds array
    }) // Close the bld_seeds array push function for Genre 2
  }//Close the if case (when testing for Genre 2 info)

  if(req.body.genre3){ // Genre 3 case test
    bld_seeds.push(function(callback){
          Genre3f = req.body.genre3.toUpperCase();

          console.log('Genre 3:', Genre3f);
          callback(null,Genre3f); //Push the Genre 3 into the bld_seeds array
    }) // Close the bld_seeds array push function for Genre 3
  }//Close the if case (when testing for Genre 3 info)

  if(req.body.genre4){ // Genre 4 case test
    bld_seeds.push(function(callback){
          Genre4f = req.body.genre4.toUpperCase();

          console.log('Genre 4:', Genre4f);
          callback(null,Genre4f); //Push the Genre 4 into the bld_seeds array
    }) // Close the bld_seeds array push function for Genre 4
  }//Close the if case (when testing for Genre 4 info)

  if(req.body.genre5){ // Genre 5 case test
    bld_seeds.push(function(callback){
          Genre5f = req.body.genre5.toUpperCase();

          console.log('Genre 5:', Genre5f);
          callback(null,Genre5f); //Push the Genre 5 into the bld_seeds array
    }) // Close the bld_seeds array push function for Genre 5
  }//Close the if case (when testing for Genre 5 info)



async.parallel(bld_seeds,function(err,SeedArray){
    var artSeeds="";
    var sngSeeds="";
    var gnrSeeds="";

    SeedArray.forEach(function(seedOb){
       if (seedOb.type ==="artist"){
           artSeeds += seedOb.id + ",";
       }
       else if (seedOb.type ==="track"){
           sngSeeds += seedOb.id + ",";
       }
       else{
           gnrSeeds += seedOb + ",";
       }
    })
    artSeeds = artSeeds.slice(0,-1);
    console.log("Artist Seeds:",artSeeds);

    sngSeeds = sngSeeds.slice(0,-1);
    console.log("Song Seeds:",sngSeeds);

    gnrSeeds = gnrSeeds.slice(0,-1);
    console.log("Genre Seeds:",gnrSeeds);
    request ({
         method  : 'GET',
         url     : `${baseURI}/v1/recommendations`,
         headers : { Authorization : `"Bearer ${req.user.token}"`
                   },
             qs  : {
                     limit        : req.body.nSongs,
                     seed_artists : artSeeds,
                     seed_genres  : gnrSeeds,
                     seed_tracks  : sngSeeds
                   },
             json : true
      })
      .then(function(response){ //Open the Manage Recommendations response call
      // response=JSON.parse(resp);
      console.log('RESPONSE Recommendations!', response);  // response is the response from the server.


      req.user.mixDetails= response;
      req.user.playlists = response.tracks; // Attach it to the user for storage in the local database
      req.user.save();
      xyz.send(req.user.mixDetails);

     }) // Close the .then Recommendations response function call
     .catch(function(err){
       console.log(err);
       console.log('RECS');
     })
  });  //Closes the async.parallel function call
 },


  SavePL : (req, res) =>{
  // We need to make a request to the Spotify API
  //     Playlist Requests from Spotify
       request({
            method : 'POST',
            url    : `${baseURI}/v1/users/${req.user.spotifyid}/playlists`,
            some   : {
                        name      : req.body.namePlaylist
                     },
            json   : true
        })
        .then(function(response){
          // response=JSON.parse(resp);
          // response is the response from the server.
          console.log('RESPONSE Playlists!', response);

          // playlist_id = response.artists.items[0].id;

         }) // Close the .then Manage Artist 1 response function call
         .catch(function(err){
           console.log(err);
           console.log('Playlist');
         })
  }
}
