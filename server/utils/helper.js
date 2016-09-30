var db = require('../db/index.js');


function docExists(docname, callback){
	db.Doc.findOne({
		where: {
			doc_name: docname
		}
	}).then(function(doc){
		console.log('found doc', doc)
		if(doc === null){
			callback(false);
		} else {
			callback(true);
		}
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
		if(doc === null){
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
