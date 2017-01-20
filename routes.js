// Require controller files
var API = require('./controllers/m34sAPI.js');

module.exports = (app) =>{

  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });
  app.get('/login', (req, res)=>{
    res.sendFile('login.html', {root : './public/html'});
  });
  app.get('/mixer', (req, res)=>{
    res.sendFile('mixer.html', {root : './public/html'});
  });
  app.get('/finalmix', (req, res)=>{
    res.sendFile('hearmix.html', {root : './public/html'});
  });
  // Initial Test to make sure everything is working
  // app.get('/', (req, res)=>{
  //   res.send('its working!');
  // });

// Routes to collect information from Spotify API

  app.post('/myServer/toSpotify', API.FinalMix);

}
