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
  
  //getMix generates the main Mix based upon the user input
  TheMix.getMix = function(artist1,
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
                           nSongs 
                           ){ // Open the function to manage Mix                            

var bld_seeds=[]; //Initialize the empty array to capture the seeds
    
if(artist1){ //Artist 1 case test
  bld_seeds.push(function(callback){
     
    MixCenter
      .getArtist1(artist1)
      .then(function(response){ // Open the Manage Artist 1 response call
        
//         TheMix.artist1_ID = response.data.artists.items[0].id;
        
        // response is the response from the server.  The data you care about lives at the data property (response.data).
        console.log('RESPONSE Artists!', response);  
        
        TheMix.arts1 = response.data.artists.items[0]; // Attach it to the controller object so we can use it in HTML
        console.log('Artist:', TheMix.arts1.name, 'ArtistID:', TheMix.artist1_ID);
        callback(null,TheMix.arts1); //Push the Artist 1 Object into the bld_seeds array
       }); // Close the .then Manage Artist 1 response function call        
   }) // Close the bld_seeds array push function for Artist 1
} //Close the if case (when testing for Artist 1 info)
    
if(artist2){ //Artist 2 case test
  bld_seeds.push(function(callback){
    
    MixCenter
      .getArtist2(artist2)
      .then(function(response){ // Open the Manage Artist 1 response call
        
        TheMix.artist2_ID = response.data.artists.items[0].id;
        
        console.log('RESPONSE Artists!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)
        
        TheMix.arts2 = response.data.artists.items[0]; // Attach it to the controller object so we can use it in HTML
        console.log('Artist:', TheMix.arts2.name, 'ArtistID:', TheMix.artist2_ID);
        callback(null,TheMix.arts2); //Push the Artist 2 Object into the bld_seeds array
       }); // Close the .then Manage Artist 2 response function call        
   }) // Close the bld_seeds array push function for Artist 2      
} //Close the if case (when testing for Artist 2 info)
    
if(artist3){ //Artist 3 case test
  bld_seeds.push(function(callback){
    
    MixCenter
      .getArtist3(artist3)
      .then(function(response){ // Open the Manage Artist 3 response call
        
        TheMix.artist3_ID = response.data.artists.items[0].id;
        
        console.log('RESPONSE Artists!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)
        
        TheMix.arts3 = response.data.artists.items[0]; // Attach it to the controller object so we can use it in HTML
        console.log('Artist:', TheMix.arts3.name, 'ArtistID:', TheMix.artist3_ID);
        callback(null,TheMix.arts3); //Push the Artist 3 Object into the bld_seeds array
       }); // Close the .then Manage Artist 3 response function call        
   }) // Close the bld_seeds array push function for Artist 3       
} //Close the if case (when testing for Artist 3 info) 
    
if(artist4){ //Artist 4 case test
   bld_seeds.push(function(callback){
     
    MixCenter
      .getArtist4(artist4)
      .then(function(response){ // Open the Manage Artist 4 response call
        
        TheMix.artist4_ID = response.data.artists.items[0].id;
        
        console.log('RESPONSE Artists!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)
        
        TheMix.arts4 = response.data.artists.items[0]; // Attach it to the controller object so we can use it in HTML
        console.log('Artist:', TheMix.arts4.name, 'ArtistID:', TheMix.artist4_ID);
        callback(null,TheMix.arts4); //Push the Artist 4 Object into the bld_seeds array
       }); // Close the .then Manage Artist 4 response function call        
   }) // Close the bld_seeds array push function for Artist 4               
} //Close the if case (when testing for Artist 4 info) 
    
if(artist5){ //Artist 5 case test
   bld_seeds.push(function(callback){
     
    MixCenter
      .getArtist5(artist5)
      .then(function(response){ // Open the Manage Artist 5 response call
        
        TheMix.artist5_ID = response.data.artists.items[0].id;
        
        console.log('RESPONSE Artists!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)
        
        TheMix.arts5 = response.data.artists.items[0]; // Attach it to the controller object so we can use it in HTML
        console.log('Artist:', TheMix.artist5.name, 'ArtistID:', TheMix.artist5_ID);
        callback(null,TheMix.arts5); //Push the Artist 5 Object into the bld_seeds array
       }); // Close the .then Manage Artist 5 response function call        
   }) // Close the bld_seeds array push function for Artist 5      
} //Close the if case (when testing for Artist 5 info)    
    
if(song1){ // Song 1 case test
   bld_seeds.push(function(callback){
     
    MixCenter
       .getTrack1(song1)
       .then(function(response){ //Open the Manage Song 1 response call
    
        TheMix.song1_ID = response.data.tracks.items[0].id;   
        
        console.log('RESPONSE Songs!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)
      
        TheMix.sng1 = response.data.tracks.items[0]; // Attach it to the controller object we can use it in HTML

        console.log('Song1 Name:', TheMix.sng1.name, 'Song1_ID:', TheMix.song1_ID);
        callback(null,TheMix.sng1); //Push the Song 1 Object into the bld_seeds array
       }); // Close the .then Manage Song 1 response function call        
   }) // Close the bld_seeds array push function for Song 1
}//Close the if case (when testing for Song 1 info)
    
if(song2){ // Song 2 case test
  bld_seeds.push(function(callback){
    
    MixCenter
       .getTrack2(song2)
       .then(function(response){ //Open the Manage Song 2 response call
    
        TheMix.song2_ID = response.data.tracks.items[0].id;   
        
        console.log('RESPONSE Songs!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)

      
        TheMix.sng2 = response.data.tracks.items[0]; // Attach it to the controller object we can use it in HTML

        console.log('Song2 Name:', TheMix.sng2.name, 'Song2_ID:', TheMix.song2_ID);
        callback(null,TheMix.sng2); //Push the Song 2 Object into the bld_seeds array
       }); // Close the .then Manage Song 2 response function call        
   }) // Close the bld_seeds array push function for Song 2
}//Close the if case (when testing for Song 2 info)
    
if(song3){ // Song 3 case test
  bld_seeds.push(function(callback){
    
    MixCenter
       .getTrack3(song3)
       .then(function(response){ //Open the Manage Song 3 response call
    
        TheMix.song3_ID = response.data.tracks.items[0].id;   
        
        console.log('RESPONSE Songs!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)
      
        TheMix.sng3 = response.data.tracks.items[0]; // Attach it to the controller object we can use it in HTML

        console.log('Song3 Name:', TheMix.sng3.name, 'Song3_ID:', TheMix.song3_ID);
        callback(null,TheMix.sng3); //Push the Song 3 Object into the bld_seeds array
       }); // Close the .then Manage Song 3 response function call        
   }) // Close the bld_seeds array push function for Song 3
}//Close the if case (when testing for Song 3 info)
    
if(song4){ // Song 4 case test
  bld_seeds.push(function(callback){
    
    MixCenter
       .getTrack4(song4)
       .then(function(response){ //Open the Manage Song 4 response call
    
        TheMix.song4_ID = response.data.tracks.items[0].id;   
        
        console.log('RESPONSE Songs!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)
      
        TheMix.sng4 = response.data.tracks.items[0]; // Attach it to the controller object we can use it in HTML
      
        console.log('Song4 Name:', TheMix.sng4.name, 'Song4_ID:', TheMix.song4_ID);
        callback(null,TheMix.sng4); //Push the Song 4 Object into the bld_seeds array
       }); // Close the .then Manage Song 4 response function call        
   }) // Close the bld_seeds array push function for Song 4
}//Close the if case (when testing for Song 4 info)
    
if(song5){ // Song 5 case test
  bld_seeds.push(function(callback){
    
    MixCenter
       .getTrack5(song5)
       .then(function(response){ //Open the Manage Song 5 response call
    
        TheMix.song5_ID = response.data.tracks.items[0].id;   
        console.log('RESPONSE Songs!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)

        TheMix.sng5 = response.data.tracks.items[0]; // Attach it to the controller object we can use it in HTML

        console.log('Song5 Name:', TheMix.sng5.name, 'Song5_ID:', TheMix.song5_ID);
        callback(null,TheMix.sng5); //Push the Song 5 ID into the bld_seeds array
       }); // Close the .then Manage Song 5 response function call        
   }) // Close the bld_seeds array push function for Song 5
}//Close the if case (when testing for Song 5 info) 
    
if(genre1){ // Genre 1 case test
  bld_seeds.push(function(callback){
        TheMix.Genre1f = genre1.toUpperCase();
        
        console.log('Genre 1:', TheMix.Genre1f);
        callback(null,TheMix.Genre1f); //Push the Genre 1 into the bld_seeds array
  }) // Close the bld_seeds array push function for Genre 1
}//Close the if case (when testing for Genre 1 info)   
    
if(genre2){ // Genre 2 case test
  bld_seeds.push(function(callback){
        TheMix.Genre2f = genre2.toUpperCase();
        
        console.log('Genre 2:', TheMix.Genre2f);
        callback(null,TheMix.Genre2f); //Push the Genre 2 into the bld_seeds array
  }) // Close the bld_seeds array push function for Genre 2
}//Close the if case (when testing for Genre 2 info) 
    
if(genre3){ // Genre 3 case test
  bld_seeds.push(function(callback){
        TheMix.Genre3f = genre3.toUpperCase();
        
        console.log('Genre 3:', TheMix.Genre3f);
        callback(null,TheMix.Genre3f); //Push the Genre 3 into the bld_seeds array
  }) // Close the bld_seeds array push function for Genre 3
}//Close the if case (when testing for Genre 3 info)     
    
if(genre4){ // Genre 4 case test
  bld_seeds.push(function(callback){
        TheMix.Genre4f = genre4.toUpperCase();
        
        console.log('Genre 4:', TheMix.Genre4f);
        callback(null,TheMix.Genre4f); //Push the Genre 4 into the bld_seeds array
  }) // Close the bld_seeds array push function for Genre 4
}//Close the if case (when testing for Genre 4 info)
    
if(genre5){ // Genre 5 case test
  bld_seeds.push(function(callback){
        TheMix.Genre5f = genre5.toUpperCase();
        
        console.log('Genre 5:', TheMix.Genre5f);
        callback(null,TheMix.Genre5f); //Push the Genre 5 into the bld_seeds array
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
    
     TheMix.mixTitle="Make My Mix Playlist:"; 
     
      MixCenter
        .getRecoms(nSongs,artSeeds,gnrSeeds,sngSeeds)
        .then(function(response){ //Open the Manage Recommendations response call
    
        console.log('RESPONSE Recommendations!', response);  // response is the response from the server.  The data you care about lives at the data property (response.data)

        TheMix.mix = response.data.tracks; // Attach it to the controller object we can use it in HTML
        
       }); // Close the .then Recommendations response function call
   });  //Closes the async.parallel function call 
    
    
 } //Closes the main getMix function call
}  //Closes the main controller call
