const expect = require('chai').expect;
const {io} = require('../server/server.js');
// const {User, Room} = require('../../../server/database/db-config');
const ioClient = require('socket.io-client');
const socketURL = 'http://0.0.0.0:3000';

const options = {
  transports: ['websocket'],
  'force new connection': true
};


describe('Socket.io', () => {
  var socket;
  var socket2;
  beforeEach(function(done) {
    // Setup
    socket = ioClient.connect('https://localhost:3000', {
        'reconnection delay' : 0
        , 'reopen delay' : 0
        , 'force new connection' : true
    });
    socket.on('connect', function() {
        console.log('worked...');
        done();
    });
    socket.on('disconnect', function() {
        console.log('disconnected...');
    })
  });

  afterEach(function(done) {
       // Cleanup
       if(socket.connected) {
           console.log('disconnecting...');
           socket.disconnect();
       } else {
           // There will not be a connection unless you have done() in beforeEach, socket.on('connect'...)
           console.log('no connection to break...');
       }
  done()
   });

  describe('Room Creation', () => {

    it('should create rooms', (done) => {
      socket.emit('create or join', 'testRoom');
      socket.on('ready', () => {
        console.log('in ready')
        expect(io.sockets.adapter.rooms).to.have.property('testRoom');
        done();
      });
    });
  })
  
})