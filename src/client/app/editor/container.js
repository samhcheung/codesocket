import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import EditorPresentation from './presentation'
import axios from 'axios'

var Quill = require('quill');
var ReactQuill = require('react-quill');

var arr = [];

class EditorContainer extends React.Component {

  static propTypes = {
  }

  componentWillMount() {
    hljs.configure({   // optionally configure hljs
      languages: ['javascript']
    });
  }
  componentDidMount() {
    console.log('didmount woohooo');
    var socket = io();
    var quill = new Quill('#editor', {
        modules: {
        syntax: true,              // Include syntax module
        toolbar: [['code-block']]  // Include button in toolbar
      },
      formats: ['code-block'],
      theme: 'snow'

      });
    document.getElementsByClassName('ql-code-block')[0].click();
    document.getElementsByClassName('ql-code-block')[0].remove();
    hljs.configure({   // optionally configure hljs
      languages: ['javascript']
    });
    
    socket.on('receive', function(delta) {
      console.log('receive', delta);
      var parsedDelta = JSON.parse(delta);
      if( arr.length > 0 ) {
        var arrSnapshot = arr.slice();
        console.log('conflict', arrSnapshot, parsedDelta);
        console.log('ifcheck', arrSnapshot[0][0].retain, parsedDelta[0].retain);
        for(var i = 0; i < arrSnapshot.length; i++) {
          if(arrSnapshot[i][0].retain <= parsedDelta[0].retain) {
            console.log('ever gets here?')
            parsedDelta[0].retain += arrSnapshot[i][1].insert.length;
            console.log('transformed', parsedDelta);
          }
        }
      }
      quill.updateContents(parsedDelta, 'api');
    });
    var socketcontext = socket;
    socket.on('serverokay', function(delta) {
      console.log('serverokay');
      arr.splice(0,1);
      console.log(arr);
      socketcontext.emit('removedfromarr', delta);
    });


    quill.on('text-change', function(delta,olddelta,source) {
      //console.log('get delta', delta.ops[0],delta.ops[1])
      var newestchange = [];
      console.log(source);
      if(source !== 'api') {
        for(var i = 0; i < 2; i++) {
          if(delta.ops[i] !== undefined) {
            console.log(delta.ops[i])
            newestchange.push(delta.ops[i])
          }
        }
        arr.push(newestchange);
        socket.emit('typed', JSON.stringify(newestchange));
        

        // if(arr.length % 10 === 0 || arr.length % 11 === 0) {
        //   var temp = [{ insert: 'Quill' }];
        //   var currentplace = quill.getSelection();
        //   quill.updateContents(temp, 'api');
        //   console.log(temp);
        //   if(temp) {
        //     quill.setSelection(currentplace.index+temp.insert.length)
        //   }
        // }
      }
      

    });


  }


  render() {
    return(
      <div>
        <div className="body-container">
          <div id="editor">
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userName: state.userReducer.userName //<=== shouldnt have to do this...? 
  }
}

export default connect(mapStateToProps)(EditorContainer)
