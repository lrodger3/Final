var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name        : {type : String},
  email       : {type : String,
                 unique : true
                },
  spotifyid   : {type : String},
  token       : {type : String},
  initialDate : {
                 type   : Number,
                default : () => {return Date.now()}
                },
  mixDetails  : {type    : Object,
                 default : {}
                },
  PLDetails   : {type    : Object,
                  default : {}
                },
  playlists   : {type    : Array,
                 default : []
               },
  PLsongs      : {type    : Array,
                  default : []
               }
})

module.exports = mongoose.model("User", userSchema);
