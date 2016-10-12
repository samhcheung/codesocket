const expect = require('chai').expect;
const {io} = require('../../server/server.js');
// const {User, Room} = require('../../../server/database/db-config');
const ioClient = require('socket.io-client');
const socketURL = 'http://0.0.0.0:3000';

const options = {
  transports: ['websocket'],
  'force new connection': true
};
var {oTransform} = require('../../src/client/app/utils/otransform.js');



describe('Socket.io', () => {
  var socket;
  var socket2;

  beforeEach(function() {
    // Setup
    socket = ioClient.connect('https://localhost:3000', {
        'reconnection delay' : 0
        , 'reopen delay' : 0
        , 'force new connection' : true
    });
    socket.on('connect', function() {
        console.log('worked...');
    });
    socket.on('disconnect', function() {
        console.log('disconnected...');
    })
  });

  afterEach(function() {
       // Cleanup
       if(socket.connected) {
           console.log('disconnecting...');
           socket.disconnect();
       } else {
           console.log('no connection to break...');
       }
   });

  describe('Operational Transformation', () => {

    beforeEach(function(done) {

      socket2 = ioClient.connect('https://localhost:3000', {
        'reconnection delay' : 0
        , 'reopen delay' : 0
        , 'force new connection' : true
      });

      socket.emit('create or join', 'testRoom');
      socket.on('ready', function(){
        socket2.emit('create or join', 'testRoom')
      })

      socket2.on('connect', function() {
          console.log('socket2 worked...');
      });
      socket2.on('disconnect', function() {
          console.log('socket2 disconnected...');
      })
      done()
    });

    afterEach(function(done) {
         // Cleanup
         if(socket2.connected) {
             console.log('disconnecting...');
             socket2.disconnect();
         } else {
             console.log('no connection to break...');
         }
         done()
     });

    it('should be able to able to do Operational Transformation', (done) => {
      // console.log('oTransform', oTransform)
      // socket2.emit('create or join', 'testRoom');
      socket2.on('ready', function(){
        console.log('i am in ready of last one')
        var opPackage = {
          history: 'h\n',
          id: socket.id,
          op: [{retain: 0}, {insert: 'i'}],
          room: 'testRoom'
        }
        var bridge = [opPackage];

        var opPackage2 = {
          history: 'h\n',
          id: socket.id,
          op: [{retain: 0}, {insert: 'o'}],
          room: 'testRoom'
        }
        var bridge2 = [opPackage2];

        socket.emit('add inflight op', JSON.stringify(opPackage))

        // socket2.emit('add inflight op', JSON.stringify(opPackage2))

        socket2.on('newOp', (opPackage) => {
          console.log('in add inflight for socket2',opPackage)
          oTransform(opPackage, bridge2, function(newObj, newBridge){
            expect(newObj.op[0].retain).to.equal(0);
            expect(newBridge[0].op[0].retain).to.equal(1);
            done();

          })
        });

      })

    })

  })
})