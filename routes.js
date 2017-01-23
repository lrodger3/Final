// Require controller files
var API = require('./controllers/m34sAPI.js');
var passport = require('passport');

module.exports = (app) =>{

  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });
  app.get('/auth/spotify', passport.authenticate('spotify', { scope: ['playlist-read-private', 'playlist-modify-public', 'playlist-modify-private', 'user-read-email'],showDialog: true}));

  app.get('/auth/spotify/callback', passport.authenticate('spotify', { failureRedirect: '/' }), function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/#/makemix');
  });

  app.get('/api/me', (req, res)=>{
      res.send(req.user);
  });

// CatchAll
  app.get('*', (req, res)=>{
   res.sendFile('index.html', {root : './public/html'});
 });


  // Initial Test to make sure everything is working
  // app.get('/', (req, res)=>{
  //   res.send('its working!');
  // });

// Routes to collect information from Spotify API

  app.post('/myServer/toSpotify/mix', API.FinalMix);
  app.post('/myServer/toSpotify/createPL', API.CreatePL);
  app.post('/myServer/toSpotify/addToPL', API.AddToPL);
}
