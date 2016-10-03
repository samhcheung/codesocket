var Sequelize = require('sequelize');
var db = new Sequelize('codesocket', '', '', {
 dialect: 'postgres',
 port: 5432
});

var User = db.define('users', {
    user_name: Sequelize.STRING
});

var Doc = db.define('docs', {
 doc_name: Sequelize.STRING,
 doc_content: Sequelize.TEXT,
});

var UserDoc = db.define('userdocs', {
    user_id: Sequelize.INTEGER,
    doc_id: Sequelize.INTEGER
});

User.belongsToMany(Doc, {through: 'userdocs', foreignKey: 'user_id', primaryKey: 'id'});
Doc.belongsToMany(User, {through: 'userdocs', foreignKey: 'doc_id', primaryKey: 'id'});



User.sync();
Doc.sync();
UserDoc.sync();

module.exports.User = User;
module.exports.Doc = Doc;
module.exports.UserDoc = UserDoc;