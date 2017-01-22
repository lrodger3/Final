var passport = require('passport'),
    SpotifyStrategy = require('passport-spotify').Strategy,
    User = require('../models/user');

passport.serializeUser((user, next)=>{
    next(null, user.id)
})

passport.deserializeUser((id, next)=>{
    // Find user in DB
    User.findOne({_id : id}, (err, user)=>{
        next(null, user)
    })
})


passport.use(
    // How we are defining a successful login
    new SpotifyStrategy({
        clientID : "dfe4fc58ae814cb0a818ee3c4e95c6e6",
        clientSecret : "5a024a089c34483e8be54189f53d4c86",
        callbackURL : "/auth/spotify/callback"
    }, (accessToken, refreshToken, profile, next)=>{
      console.log(profile);
      console.log(accessToken);
      console.log(refreshToken);

      // Find or Create user in DB
      User.findOne({spotifyid : profile.id}, (err, user)=>{
          if(!user){
              var newuser = new User({
                name        : profile.username,
                email       : profile.emails[0].value,
                spotifyid   : profile.id,
                token       : accessToken,
                mixDetails  : {},
                playlists   : []
              })
              newuser.save((err, doc)=>{
                  next(null, doc)
              })
          }
          else{
              user.token = accessToken;
              user.save();
              next(null, user);
          }
      })

    })

)
