import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import EditorPresentation from './presentation'
import axios from 'axios'

var Quill = require('quill');

class EditorContainer extends React.Component {

  constructor(props) {
    super(props);
    // console.log('in constructor');
    // this.myInserts = [];
  }

  componentWillMount() {
    hljs.configure({   // optionally configure hljs
      languages: ['javascript']
    });
  }
  componentDidMount() {
    var context = this; 
    console.log('----------context', context, context.props.myInserts);
    var socket = this.props.socket;
    // var socket = io.connect();

    console.log('socket inside editor container', socket);
    // console.log('didmount woohooo');
    // var socket = io();
    var quill = new Quill('#editor', {
        modules: {
        syntax: true,              // Include syntax module
        toolbar: [['code-block']]  // Include button in toolbar
      },
      formats: ['code-block'],
      theme: 'snow'

      });
    document.getElementsByClassName('ql-code-block')[0].click();
    document.getElementsByClassName('ql-toolbar')[0].remove();
    hljs.configure({   // optionally configure hljs
      languages: ['javascript']
    });

    socket.on('fetched live', function(latest){
      console.log('fetched!!!', latest, latest.ops)
      // console.log('got last elem', latest.ops[latest.ops.length -1].insert)
      // delete latest.ops[latest.ops.length -1].insert;
      // var delta = {
      //   ops: [latest.ops[0]]
      // }
      quill.setContents(latest, 'api');
    });

    socket.on('found latest doc', function(doc){
      console.log('latest doc', doc);
      // var delta = {
      //   ops: [{insert: doc['doc_content']}]
      // }
      quill.setContents(JSON.parse(doc['doc_content']), 'api');
    })

    socket.on('fetch live version', function(requestId){
      console.log('in fetch latest')
      var delta = quill.getContents();
      console.log('fetchd', delta)
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

    socket.on('receive', function(delta) {
      console.log('-----------receive', delta);
      //do math
      var insertionIndex = JSON.parse(delta)[0].retain || 0;
      // console.log('insertionIndex', insertionIndex);
      var counter = 0;
      for(var i = 0; i < context.props.myInserts.length; i++){
        if(context.props.myInserts[i] < insertionIndex) {
          counter++;
        }
      }

      var newDelta = JSON.parse(delta);
      // console.log('newDelta', newDelta,counter)


      var oldIndex = newDelta[0].retain;
      newDelta[0].retain += counter;
      quill.updateContents(newDelta, 'api');
      // console.log('newnewDelta=====', newDelta)

      // console.log('before client emit doned', oldIndex)
      socket.emit('changesToApply', JSON.stringify({oldIndex:oldIndex}));
    });
    socket.on('done', function(index) {
      console.log('---------index', index)
      index= JSON.parse(index).oldIndex;
      // console.log('in done got index:', index)
      var removeIndex = context.props.myInserts.indexOf(index);
      // console.log('oldmyInserts', context.myInserts);

      // console.log('removeIndex', removeIndex);
      context.props.myInserts.splice(removeIndex, 1);
      // console.log('newmyInserts', context.myInserts);

    });
    console.log('omg', context)
    quill.on('text-change', function(delta,olddelta,source) {
      // console.log('get delta', delta.ops[0],delta.ops[1])
      // console.log('omg-------------', delta)
      var arr = [];
      if(source === 'user') {
        if(delta.ops[1] && delta.ops[1]['insert'] !== undefined) {
          console.log('before dispatch',context, context.props.myInserts)
          console.log('delta', delta.ops[0]['retain'])
          context.props.dispatch({
            type: 'UPDATE_EDITOR_INSERTS',
            myInserts: context.props.myInserts.concat(delta.ops[0]['retain'])
          })
          // context.myInserts.push(delta.ops[0]['retain']);
        } else {
          context.props.dispatch({
            type: 'UPDATE_EDITOR_INSERTS',
            myInserts: context.props.myInserts.concat(0)
          })
         // context.myInserts.push(0); 
        }
      };

      // console.log('myInserts', context.myInserts);


      // console.log(source);
      if(source !== 'api') {
        for(var i = 0; i < 2; i++) {
          if(delta.ops[i] !== undefined) {
            // console.log(delta.ops[i])
            arr.push(delta.ops[i])
          }
        }
        socket.emit('typed', JSON.stringify(arr));
        arr = [];

      }
      
    });

    this.quill = quill;

    this.props.dispatch({
      type: 'UPDATE_QUILL', 
      quill: quill
    });

  } // ComponentDidMount
  saveCode() {
    var contents = this.props.quill.getContents();
    var gettext = this.props.quill.getText();
    
    console.log(contents);
    $.ajax({
      url: '/savedoc',
      type: "POST",
      data: {'room': this.props.room, 'contents': JSON.stringify(contents.ops)},
      success: function(response) {
        console.log((response));
      }
    });

  }

  render() {
    return(
      <div className="body-container">
        <EditorPresentation saveCode={this.saveCode.bind(this)}/>
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
    quill: state.sessionReducer.quill
  }
}

export default connect(mapStateToProps)(EditorContainer)
