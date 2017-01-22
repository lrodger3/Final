var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name        : {type : String},
  email       : {type : String, required : true, unique : true},
  spotifyid   : {type : String},
  token       : {type : String},
  initialDate : {
                   type : Number,
                default : () => {return Date.now()}
                },
  mixDetails  : {type : Object},              
  playlists   : {type : Array}
})

module.exports = mongoose.model("User", userSchema);
