var passport = require('passport');
var User = require('../db/index.js').User;

module.exports = function() {

  passport.serializeUser(function(user, done) {
    console.log('calling done in serializeUser', done);
    done(null, user);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id.id, function (err, user) {
      console.log(err, 'between err and user', user);
      if (err) {
        console.log('there was an error deserializing in init.js');
      }
      done(err, user);
    });
  });


  // passport.deserializeUser(function(id, done) {
  //   console.log(id);
  //   User.findById(id.github_id, function(err, user) {
  //     done(err, user);
  //   });
  // });
  // passport.deserializeUser(function(id, done) {
  //   User.findOne({
  //     where: {github_id: id}
  //   }).then(function(user) {
  //     done(user);
  //   }).catch(function (err) {
  //     console.log(err);    
  //   });

  // });

};