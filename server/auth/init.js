var passport = require('passport');
var User = require('../db/index.js').User;

module.exports = function() {

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(id, done) {
    User.findOne({
      where: {github_id: id.github_id}
    }).then(function(user) {

      done(null, user);
    }).catch(function (err) {
      done(err);
      console.log(err);    
    });
  });

};