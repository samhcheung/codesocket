var Sequelize = require('sequelize');
var db = new Sequelize('codesocket');

var User = sequelize.define('user', {
  username: Sequelize.STRING
});

var Doc = sequelize.define('doc', {
	docname: Sequelize.STRING,
	docContent: Sequelize.TEXT,
	createAt: Sequelize.DATE
});

var Dev = sequelize.define('dev', {
	username: Sequelize.STRING
});

var DevDoc = sequelize.define('devdoc', {
	userId: Sequelize.INTEGER,
	docId: Sequelize.INTEGER
});

// Category.belongsToMany(Student, {through: 'IndividualCompetency'})
// Student.belongsToMany(Category, {as: 'Competency', through: 'IndividualCompetency'})


// Question.sync();
// Teacher.sync();
// Student.sync();
// Category.sync();

// StudentQuestion.sync();
// StudentCategory.sync();
// IndividualCompetency.sync();

// module.exports.Question = Question;
// module.exports.Teacher = Teacher;
// module.exports.Student = Student;
// module.exports.Category = Category;
// module.exports.StudentQuestion = StudentQuestion;
// module.exports.StudentCategory = StudentCategory;
// module.exports.IndividualCompetency = IndividualCompetency;


