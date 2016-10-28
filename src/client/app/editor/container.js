import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import EditorPresentation from './presentation'
import axios from 'axios'
var Quill = require('quill');
var {oTransform} = require('../utils/otransform.js')

export class EditorContainer extends React.Component {

  constructor(props) {
    super(props);
    // console.log('in constructor');
    // this.myInserts = [];
  }

  componentWillMount() {
    // hljs.configure({   // optionally configure hljs
    //   languages: ['javascript']
    // });
  }

  componentWillUnmount() {
    // console.log('does editor unmount');
  }

  componentDidMount() {
    var context = this; 
    // console.log('----------context', context, context.props.myInserts);
    var socket = this.props.socket;
    // var socket = io.connect();

    // console.log('socket inside editor container', socket);
    // console.log('didmount woohooo');
    // var socket = io();
    var quill = new Quill('#editor', {
        modules: {
        // syntax: true,              // Include syntax module
          toolbar: false
        // toolbar: [['code-block']]  // Include button in toolbar
      },
      formats: ['code-block']
      // theme: 'snow'

      });

    var serverquill = new Quill('#serverEditor')
    // console.log('serverquill', serverquill);

    // document.getElementsByClassName('ql-code-block')[0].click();
    // document.getElementsByClassName('ql-toolbar')[0].remove();
    // hljs.configure({   // optionally configure hljs
    //   languages: ['javascript']
    // });

    socket.on('fetched live', function(latest){
      quill.setContents(latest, 'api');
      serverquill.setContents(latest, 'api');
      context.props.dispatch({
        type: 'UPDATE_SERVERSTATE', 
        serverState: serverquill.getText()
      });

    });

    socket.on('found latest doc', function(doc){
      // console.log('latest doc', doc);
      // var delta = {
      //   ops: [{insert: doc['doc_content']}]
      // }
      var docContent = JSON.parse(doc['doc_content']);
      if (docContent) {
        quill.setContents(docContent, 'api');
        serverquill.setContents(docContent, 'api');
        context.props.dispatch({
          type: 'UPDATE_SERVERSTATE', 
          serverState: serverquill.getText()
        });
      }
    })

    socket.on('fetch live version', function(requestId){
      // console.log('in fetch latest')
      var delta = quill.getContents();
      // console.log('fetchd', delta)
      var response = {
        delta: delta,
        requestId: requestId
      }
      socket.emit('live version', response);
      // context.props.myInserts = [];
      context.props.dispatch({
        type: 'UPDATE_EDITOR_INSERTS',
        myInserts: []
      })
    })

    socket.on('done', function(index) {
      index= JSON.parse(index).oldIndex;
      var removeIndex = context.props.myInserts.indexOf(index);
      context.props.myInserts.splice(removeIndex, 1);
    });

    quill.on('text-change', function(delta,olddelta,source) {
      // console.log('get delta', delta.ops[0],delta.ops[1])
      console.log('omg-------------', delta)
      // console.log('delta decompose', delta.transform())

      var arr = [];

      console.log('user-------------', source)
      if(source === 'user') {
        var opPackage = {
          history: context.props.quillHistory,
          id: socket.id,
          op: delta.ops,
          room: context.props.room
        }
        console.log('serverquill:', context.props.serverState);
        console.log('my change history:',context.props.quillHistory);
        console.log('are they equal?:', context.props.serverState === context.props.quillHistory);

        console.log('inflight Op:', context.props.inFlightOp);

        if(context.props.serverState === context.props.quillHistory 
          && context.props.inFlightOp.length === 0
          && context.props.buffer.length === 0){
          //send change to server
          
          if(delta.ops[0].retain === undefined){
            delta.ops.unshift({retain:0});
          }

          // console.log('my current room', context.props.room)
          // console.log('woo new delta', delta)
          var inFlightOp = opPackage;
          context.props.dispatch({
            type: 'UPDATE_INFLIGHTOP',
            inFlightOp: [inFlightOp]
          })
          console.log('a inFlightOp', inFlightOp)
          console.log('calling---------------------------------------')
          socket.emit('add inflight op', JSON.stringify(inFlightOp))

        } else {

          var newBufferString = JSON.stringify(context.props.buffer);
          var newBufferObj = JSON.parse(newBufferString);
          newBufferObj.push(opPackage);
          console.log('server state:', context.props.serverState);
          console.log('buffer:', newBufferObj);

          context.props.dispatch({
            type: 'UPDATE_BUFFER',
            buffer: newBufferObj
          })
        }
      };

      context.props.dispatch({
        type: 'UPDATE_QUILLHISTORY',
        quillHistory: context.props.quill.getText()
      })
      
    });

    context.props.socket.on('clear inflight', function(inFlightOp){
      console.log('in clear inflight!!------', inFlightOp)
      //console.log('context.props.inFlight is: ', context.props.inFlightOp);

      if (JSON.stringify(inFlightOp.op) !== JSON.stringify(context.props.inFlightOp[0].op)) {
        console.error('what? clearing a different inflight?', inFlightOp, context.props.inFlightOp);
        // context.props.dispatch({
        //   type: 'UPDATE_INFLIGHTOP', 
        //   inFlightOp: inFlightOp
        // });
      } else {

        context.props.dispatch({
          type: 'UPDATE_INFLIGHTOP', 
          inFlightOp: []
        });
      }
    })

    context.props.socket.on('newOp', function(transformedOp){
      console.log('got transformation:', transformedOp);
      console.log('got transformation op:', transformedOp.op);
      console.log('got new thing! ==========================')
      console.log('got transformation:', transformedOp.id, socket.id);
      if(transformedOp.op[0].retain === 0){
        console.log('delete retains 0');
        var serverOpRetain = 0;
        var serverOp = null;
        //This changes retain 0 inserts and deletes to just be [{insert: 'x'}] or [{delete: 'x'}]
        //
        if( transformedOp.op[1].insert !== undefined) {
          var serverOpInsert = transformedOp.op[1].insert;
          serverOp = [{insert: serverOpInsert}]
        } else if ( transformedOp.op[1].delete !== undefined ) {
          var serverOpDelete = transformedOp.op[1].delete;
          serverOp = [{delete: serverOpDelete}]
        }
        if( transformedOp.op[2] !== undefined ) {
          serverOp = [{insert: transformedOp.op[1].insert}, {delete: transformedOp.op[2].delete} ]
        }

      } else {
        // If retain > 0, just pass it along
        //
        var serverOpRetain = transformedOp.op[0].retain;
        var serverOp = null;
        if(transformedOp.op[1].insert !== undefined) {
          var serverOpInsert = transformedOp.op[1].insert;
          serverOp = [{retain: serverOpRetain}, {insert: serverOpInsert}]
        } else if (transformedOp.op[1].delete !== undefined) {
          var serverOpDelete = transformedOp.op[1].delete;
          serverOp = [{retain: serverOpRetain}, {delete: serverOpDelete}]
        } 
        if( transformedOp.op[2] !== undefined ) {
          serverOp = [{retain: serverOpRetain}, {insert: transformedOp.op[1].insert}, {delete: transformedOp.op[2].delete} ]
        }
      }

      if(transformedOp.id !== socket.id){
        console.log('not mine! ---------------------')

        context.props.dispatch({
          type: 'UPDATE_INCOMINGOP', 
          incomingOp: transformedOp
        });
        console.log('my buffer ', context.props.buffer)
        
          if(context.props.inFlightOp.length){
            console.log('getting transformed by inflight ', context.props.inFlightOp)
            //ot
            var transformedOpString = JSON.stringify(transformedOp);
            var transformedOp = JSON.parse(transformedOpString)

            var inflightString = JSON.stringify(context.props.inFlightOp);
            var inflight = JSON.parse(inflightString)

            oTransform(transformedOp, inflight, function(newTransformedOp, newBridge){

              context.props.dispatch({
                type: 'UPDATE_INCOMINGOP', 
                incomingOp: newTransformedOp
              });
              console.log('new inflightop', newBridge)
              context.props.dispatch({
                type: 'UPDATE_INFLIGHTOP', 
                inFlightOp: newBridge
              });
            })
          }

          if(context.props.buffer.length){
            //ot
            console.log('getting transformed by buffer', context.props.buffer)
            var incomingString = JSON.stringify(context.props.incomingOp);
            var incoming = JSON.parse(incomingString);

            var bufferString = JSON.stringify(context.props.buffer);
            var buffer = JSON.parse(bufferString);

            oTransform(incoming, buffer, function(newTransformedOp, newBridge){
              context.props.dispatch({
                type: 'UPDATE_INCOMINGOP', 
                incomingOp: newTransformedOp
              });

              context.props.dispatch({
                type: 'UPDATE_BUFFER', 
                buffer: newBridge
              });
            })
          }
          console.log('before finding 0 context.props.incomingOp.op', context.props.incomingOp.op)

          if(context.props.incomingOp.op[0].retain === 0){
             context.props.incomingOp.op.shift();
          }

          console.log('after finding 0 context.props.incomingOp.op', context.props.incomingOp.op)
          quill.updateContents({ops:context.props.incomingOp.op}, 'api');
          // apply result to 
      } 
      //update server quill
      console.log('serverOP before updating serverquill', serverOp[0], serverOp[1])
      serverquill.updateContents({ops:serverOp}, 'api');
      context.props.dispatch({
        type: 'UPDATE_SERVERSTATE', 
        serverState: serverquill.getText()
      });

      //flush buffer
      var bufferString = JSON.stringify(context.props.buffer);
      var buffer = JSON.parse(bufferString);

      console.log('before flushing buffer:', context.props.buffer, buffer)
      console.log('buffer length:', context.props.buffer.length, buffer.length)
      console.log('inFlightOp length:', context.props.inFlightOp.length)
      if(buffer.length && context.props.inFlightOp.length === 0){
        console.log('flushing buffer--------------')
        var inFlightOp = buffer[0];

        context.props.dispatch({
          type: 'UPDATE_INFLIGHTOP',
          inFlightOp: [inFlightOp]
        })
        console.log('emit after flush buffer', inFlightOp)
        console.log('calling---------------------------------------')

        socket.emit('add inflight op', JSON.stringify(inFlightOp));

        context.props.dispatch({
          type: 'UPDATE_BUFFER',
          buffer: buffer.slice(1)
        })
      }
    })

    socket.on('rejected op', function(operation){
      //add to buffer and update

      //console.log('in rejected op ===================', operation)
      //console.log('inflightop---------->', context.props.inFlightOp)

      if(context.props.inFlightOp.length){
        //Check if it is an insert or delete operation and adjust the opPackage as necessary
        //
        var insert = context.props.inFlightOp[0].op[1].insert;
        var deleteop = context.props.inFlightOp[0].op[1].delete;
        var retain = context.props.inFlightOp[0].op[0].retain;
        var history = context.props.inFlightOp[0].history;
        if(insert !== undefined) {
          var op = [{retain: retain}, {insert: insert}]
        } else if (deleteop !== undefined) {
          var op = [{retain: retain}, {delete: deleteop}]
        }
        if(context.props.inFlightOp[0].op[2]) {
          deleteop = context.props.inFlightOp[0].op[2].delete;
          var op = [{retain: retain}, {insert: insert}, {delete: deleteop}]
        }

        var opPackage = {
          history: history,
          id: socket.id,
          op: op,
          room: context.props.room
        }
        context.props.dispatch({
          type: 'UPDATE_REJECTEDOP',
          rejectedOp: opPackage
        })
        //console.log('opPackage', opPackage);
        // console.log('opPackage', context.props.opPackage);
        socket.emit('add inflight op', JSON.stringify(opPackage));
      }
    })

    context.quill = quill;

    context.props.dispatch({
      type: 'UPDATE_QUILL', 
      quill: quill
    });    
    // console.log('before setting serverquill', serverquill, this.props.serverquill)
    context.props.dispatch({
      type: 'UPDATE_SERVERQUILL', 
      serverquill: serverquill
    });  
    // console.log('--------------------------i am reloaded')  
    context.props.dispatch({
      type: 'UPDATE_QUILLHISTORY', 
      quillHistory: quill.getText()
    });
    context.props.dispatch({
      type: 'UPDATE_SERVERSTATE', 
      serverState: serverquill.getText()
    }); 
    console.log('---serverquill text', context.props.quillHistory)
    console.log('---serverquill text', context.props.serverState)
    console.log('---serverquill text', context.props.serverState === context.props.quillHistory)
  } // ComponentDidMount

  
  saveCode() {
    var contents = this.props.quill.getContents();
    var gettext = this.props.quill.getText();
    
    console.log('contents',contents);
    console.log('gettext',gettext);
    console.log('serverquill', this.props.serverquill)
    var serverquilltext =  this.props.serverquill.getText();
    console.log('compare server to client', serverquilltext === gettext)

    $.ajax({
      url: '/savedoc',
      type: "POST",
      data: {'room': this.props.room, 'contents': JSON.stringify(contents.ops)},
      success: function(response) {
        console.log((response));
      }
    });
  }

  runCode(e) {

    // Grab the code from the current editor to be run.
    // Will switch to the Quill editor when it is refactored to live in the
    // Redux Store.
    var theCode = this.props.quill.getText();
    // Save reference to the default console.log function.
    var oldLog = console.log;

    // Hijack the console.log function to append the console output to the DOM.
    console.log = function (message) {
      // Display the console output as a list of P tags.
      var messageNode = document.createElement("li");
      // messageNode.className+= "ql-syntax";
      var text = document.createTextNode(message);
      messageNode.appendChild(text);

      // Each time the editor code is run, clear console first.
      document.getElementById('console').innerHTML = "";

      // SetTimeout is used to cause a small flash to let the user
      // know the code is being run even if the output is identical.
      // Without this, clicking run repeatedly looks like nothing
      // is happening.
      setTimeout(function() {
        document.getElementById('console').appendChild(messageNode);
      }, 50);

      // Also display the console.logged items in the real console.
      oldLog.apply(console, arguments);
    };

    // If there is an error running the code, append error to DOM.
    window.onerror = function(message, url, linenumber, x, y) {
      console.log(message + " on line " + 
        linenumber);
      
        // Restore normal console.log behavior.  This prevents system console.log
        // from showing up on the DOM.
        console.log = oldLog;
    };

    // Run the code from the editor.
    eval(theCode);

    // Restore normal console.log behavior.  This prevents system console.log
    // from showing up on the DOM.
    console.log = oldLog;
  }

  type() {
    window.clearInterval(this.typenow);
    window.counter = 0;
    if(this.props.quill.getText().length < 3){
      this.props.quill.updateContents({ops: [{insert: 'abcdefghijk'}]}, 'user');
    }
    var starttyping = function(){
      window.counter++;
      var char = Math.floor(Math.random()*10) + '';
      var index = Math.floor(Math.random() * (this.props.quill.getText().length -2)) + 1;
      console.log('=================GET TEXT', this.props.quill.getText(), this.props.quill.getText().length)
      var op = [{retain: index}, {insert: char}];
      if(window.counter=== 10) {
        window.counter = 0;
      }
      var op = [{retain: 2}, {insert: ''+window.counter}];

      console.log('op', op)

      this.props.quill.updateContents({ops: op}, 'user');
    }
    var freq = Math.floor(Math.random()*500 + 300)
    this.typenow = setInterval(starttyping.bind(this), freq);
    // var inject = [{retain:2}, {insert: 'DANI'}, {retain: 1}, {insert: 'SAM'}]
    // this.props.quill.updateContents({ops: inject}, 'user');
  }

  stopTyping() {
    window.clearInterval(this.typenow);
  }

  // <button onClick={e=>this.type()}>start typing </button>
  // <button onClick={e=>this.stopTyping()}>stop typing </button>
  render() {
    return(
      <div className="body-container">
        <EditorPresentation 
          saveCode={this.saveCode.bind(this)} 
          runCode={this.runCode.bind(this)}
          room = {this.props.room} 
        />
        <div style={{"display": "none"}} id='serverEditor' >
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userName: state.userReducer.userName,
    myInserts: state.userReducer.myInserts,
    socket: state.sessionReducer.socket,
    room: state.sessionReducer.room,
    quill: state.sessionReducer.quill,
    quillHistory: state.sessionReducer.quillHistory,
    serverquill: state.sessionReducer.serverquill,
    buffer: state.sessionReducer.buffer,
    inFlightOp: state.sessionReducer.inFlightOp,
    incomingOp: state.sessionReducer.incomingOp,
    serverState: state.sessionReducer.serverState,
    rejectedOp: state.sessionReducer.rejectedOp
  }
}

export default connect(mapStateToProps)(EditorContainer)
