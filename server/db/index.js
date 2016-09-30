var Sequelize = require('sequelize');
var db = new Sequelize('codesocket', '', '', {
 dialect: 'postgres',
 port: 5432
});

var User = db.define('users', {
    username: Sequelize.STRING
});

var Doc = db.define('docs', {
 doc_name: Sequelize.STRING,
 doc_content: Sequelize.TEXT,
});

var UserDoc = db.define('userdocs', {
	user_id: Sequelize.INTEGER,
	doc_id: Sequelize.INTEGER
});

User.belongsToMany(Doc, {through: 'UserDoc', foreignKey: 'user_id'});
Doc.belongsToMany(User, {through: 'UserDoc', foreignKey: 'doc_id'});



User.sync();
Doc.sync();
UserDoc.sync();

module.exports.User = User;
module.exports.Doc = Doc;
module.exports.UserDoc = UserDoc;
