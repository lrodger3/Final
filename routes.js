// Require controller files
var API = require('./controllers/mmmAPI.js');

module.exports = (app) =>{
  
  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });
 
//   Initial Test to make sure everything is working
//   app.get('/test', (req, res)=>{
//     res.send('its working!');
//   });
  
// Routes to collect information from Spotify API  
  
  app.get('/api/album', API.album);
  
}

//     Client ==REQ==> Server ==REQ==> API
//     Client ==REQ==> Server ==REQ==> DB
// 
//     Client <RES===  Server  <RES===   API/DB
