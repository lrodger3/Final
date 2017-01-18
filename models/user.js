var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name : String,
    email : String,
    sid : String,
    mixes: Array,
    
})

module.exports = mongoose.model("User", userSchema)