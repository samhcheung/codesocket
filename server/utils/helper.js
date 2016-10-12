var db = require('../db/index.js');


function docExists(user, docname, callback){
  //console.log()
  db.Doc.findOne({
    where: {
      doc_name: docname
    }
  }).then(function(doc){
    //console.log('found doc', doc)
    if(doc === null){
      //room does not exist
      // addDocToDB(user, docname)
      callback(false);
      //create room in db
    } else {
      callback(true);
    }
  })
}

function addDocToDB(docname, callback){
  //console.log('in addDocToDB', docname)
  db.Doc.findOrCreate({
    where: {
      doc_name: docname
    }
  })
  .then(function(newDoc) {
    //console.log('callback', callback)
    // callback(newDoc);
    callback(newDoc)
  })
}

function saveuser(username, callback){
  //console.log('in helper ', username)
  db.User.findOrCreate({
    where: {
      user_name: username
    }
  })
  .then(function(user){
    //console.log('user', user);
    callback(user);
  })
}

function addDoctoUser(user, doc, callback){
  db.Doc.findOne({
    where: {
      doc_name: doc
    }
  })
  .then(function(newDoc){
    db.User.findOne({where: {
      user_name: user
    }})
    .then(function(foundUser){
      //console.log('doc added', newDoc, foundUser)
      if (foundUser) {
        foundUser.addDoc(newDoc);
        callback(foundUser);
      } else {
        callback(null);
      }
    })
  })
}

function fetchDocContent(room, socket) {
  var users = socket.rooms[room];
  //console.log('users', users);
  if(users.length > 1) {
    //get their stuff
    //console.log('more than one user!')
    socket.broadcast.to(room).emit('fetch latest version', '');
    socket.on('latest version', function(latest){
      //console.log('got latest---------', latest);
    })
  } else {
    //ask db for latest;
    db.Doc.findOne({where: {
      doc_name: room
    }})
    .then(function(doc){
      //console.log('found doc', doc)
    })
  }
//if anyone connected? 
//if connected, get their stuff

//if no one is connected
//ask db for latest

}
function fetchrooms(callback){
  db.Doc.findAll()
  .then(function(docs){
    // console.log('found docs', docs)
    if(docs === null){
      callback(null);
    } else {
      // console.log('docs', docs);
      //docs {}?
      callback(docs);
    }
  })
}

function checkLogin(req, res, next) {
  // console.log(req.session.passport,'between passport and passportuser' ,req.session.passport.user);
 //  if (req.session.passport !== undefined && req.session.passport.user !== undefined) {
 //    next();
 //  } else {
 //    res.send('you are not logged in!');
 //  }
 
 console.log('===========', req.isAuthenticated())
  if (req.isAuthenticated() || process.env.NODE_ENV === 'test' ) {
    return next();
  }
  res.redirect('/login');
}

module.exports.docExists = docExists;
module.exports.fetchDocContent = fetchDocContent;
module.exports.fetchrooms = fetchrooms;
module.exports.addDoctoUser = addDoctoUser;
module.exports.addDocToDB = addDocToDB;
module.exports.saveuser = saveuser;
module.exports.checkLogin = checkLogin;
