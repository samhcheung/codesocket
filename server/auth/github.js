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
      github_id: profile.id,
      user_name: profile.username
    }
  };

   // update the user if s/he exists or add a new user
  User.findOrCreate(searchQuery).then(function(user) {
    return cb(null, {github_id: profile.id, user_name: profile.username});
  });
}

));

// Call serialize/deserialize
init();

module.exports = passport;
