var Sequelize = require('sequelize');
var db = new Sequelize('codesocket', '', '', {
  dialect: 'postgres',
  port: 5432
});

var Dev = db.define('devs', {
	username: Sequelize.STRING
});

var Doc = db.define('docs', {
  doc_name: Sequelize.STRING,
  doc_content: Sequelize.TEXT,
});

var DevDoc = db.define('devdocs', {
	user_id: Sequelize.INTEGER,
	doc_id: Sequelize.INTEGER
});

Dev.belongsToMany(Doc, {through: 'DevDoc'});
Doc.belongsToMany(Dev, {through: 'DevDoc'});

Dev.sync();
Doc.sync();
DevDoc.sync();

module.exports.Dev = Dev;
module.exports.Doc = Doc;
