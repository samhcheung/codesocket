var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var GithubCreds = require('../config/auth.keys');

var User = require('../db/index.js').User;
var init = require('./init');

passport.use(new GitHubStrategy({
  clientID: GithubCreds.clientID,
  clientSecret: GithubCreds.clientSecret,
  callbackURL: GithubCreds.callbackURL
},
function(accessToken, refreshToken, profile, cb) {

  var searchQuery = {
    where: {
      github_id: profile.id
      //user_name: profile.displayName
    }
  };

   // update the user if s/he exists or add a new user
  User.findOrCreate({where: {github_id: profile.id}}).then(function(user) {
    //console.log('user inside github.js====', user);
    //console.log('the cb is: ', cb);
    return cb(null, user);
  });
}

));

// serialize user into the session
passport.serializeUser(function(user, done) {
  console.log('calling done in serializeUser.  user is: ', user);
  done(null, user);
});

passport.deserializeUser(function(id, done) {

  console.log('in desriakdjize user.  id is ', id);

  User.findOne({
    where: {github_id: id.id}
  }).then(function(user) {

    console.log('deserializeUser user is: ', user)

    done(null, user);
  }).catch(function (err) {
    done(err);
    console.log(err);    
  });
});


//init();

module.exports = passport;
