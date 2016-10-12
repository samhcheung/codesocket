
	var chai = require('chai');
	// var mocha = require('mocha');
	var expect = chai.expect;
	var request = require('supertest');
	var {app, io} = require('../../server/server.js');
	var {User, Doc} = require('../../server/db/index.js');
	// var sinon = require('sinon');
	const ioClient = require('socket.io-client');
	const socketURL = 'http://0.0.0.0:3000';
	process.env.NODE_ENV = 'test'

	console.log('I am in test file');
	// chai.use(require('chai-things'));

	var testUser = {
	  id: 100,
	  user_name: 'dadanili',
	  github_id: '10000'
	}
	var newDoc = {

	}
	var testDoc = {
	  id: 100,
	  room: 'test', 
	  contents: 'dani'
	}

	var getBody = function (res) {
	  return JSON.parse(res.text);
	};

	describe('API', function () {
	  var server;

	  describe('save doc', function () {
	    console.log('i am inside save doc');

	    var newContent = {
	      'room': 'hello', 
	      'contents': [{retain: 1}, {insert: 'neww'}]
	    }

	    it('should save doc', function(done) {
	 
	      request(app)
	        .post('/savedoc')
	        .send(JSON.stringify(newContent))
	        .expect((res) => {
	        	// console.log('res', res)
	        	expect(res.statusCode).to.not.equal(404)})
	        .end(done);
	        
	    });

	  });

	  describe('save doc', function () {
	    console.log('i am inside save doc');

	    var newContent = {
	      'room': 'hello', 
	      'contents': [{retain: 1}, {insert: 'neww'}]
	    }

	    it('should save doc', function(done) {
	  
	      request(app)
	        .post('/savedoc')
	        .send(JSON.stringify(newContent))
	        .expect((res) => {
	        	expect(res.statusCode).to.not.equal(404)})
	        .end(done);
	    });

	  });

	  describe('get list', function () {
	    console.log('i am inside get list');

	    var newContent = {
	      'room': 'hello', 
	      'contents': [{retain: 1}, {insert: 'neww'}]
	    }

	    it('should get list', function(done) {
	  
	      request(app)
	        .get('/doclist')
	        .expect((res) => {
	        	expect(res.body.length).to.not.equal(0)})
	        .end(done);
	    });

	  });
	});
