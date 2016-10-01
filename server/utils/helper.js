var db = require('../db/index.js');


function docExists(user, docname, callback){
	console.log()
	db.Doc.findOne({
		where: {
			doc_name: docname
		}
	}).then(function(doc){
		console.log('found doc', doc)
		if(doc === null){
			//room does not exist
			addDocToDB(user, docname)
			callback(false);
			//create room in db
		} else {
			callback(true);
		}
	})
}

function addDocToDB(user, docname){
	console.log('in addDocToDB', user, docname)
	db.Doc.create({
		doc_name: docname,
		doc_content: '',
	})
	.then(function(newDoc) {
		console.log('user', user)
		addDoctoUser(user, newDoc)
	})
}

function addDoctoUser(user, doc){
	db.User.findOne({where: {
		username: user
	}})
	.then(function(foundUser){
		console.log('doc added', newDoc, foundUser)
		return newDoc.addUser(foundUser);
	})
}

function fetchDocContent(room, socket) {
	var users = socket.rooms[room];
	console.log('users', users);
	if(users.length > 1) {
		//get their stuff
		console.log('more than one user!')
	} else {
		//ask db for latest;
	}
//if anyone connected? 
//if connected, get their stuff

//if no one is connected
//ask db for latest

}
function fetchrooms(callback){
	db.Doc.findAll()
	.then(function(docs){
		console.log('found docs', docs)
		if(docs === null){
			callback(null);
		} else {
			console.log('docs', docs);
			//docs {}?
			callback(docs);
		}
	})
}

module.exports.docExists = docExists;
module.exports.fetchDocContent = fetchDocContent;
module.exports.fetchrooms = fetchrooms;
