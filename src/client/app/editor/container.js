import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import EditorPresentation from './presentation'
import axios from 'axios'

var Quill = require('quill');
var ReactQuill = require('react-quill');

    // var quill = new Quill('#editor', {
      // modules: {
      //   syntax: true,              // Include syntax module
      //   toolbar: [['code-block']]  // Include button in toolbar
      // },
      // formats: ['code-block'],
      // theme: 'snow'
    // });
    // var something = function () {
    //   console.log('TEXT',quill.getText());
    //   console.log('OPS',quill.getContents().ops);
    //   quill.updateContents([{retain:5},{insert:"hello"}])
    // }

    // quill.on('text-change', update);
    // function update(delta) {
    //   console.log(delta.ops);
    // }
    // <div className='_quill' >
    //         <ReactQuill ref ='quillobj' theme='snow' 
    //                     styles={false}
    //                     toolbar={false} // Let Quill manage toolbar
    //                     modules={{syntax:true, toolbar: [['code-block']]}}
    //                     formats={[['code-block']]}
    //                     bounds={'._quill'}
    //                     onChange={this.onTextChange}>
                    
    //         </ReactQuill>
    //       </div>

var arr = [];

class EditorContainer extends React.Component {

  // _quillModules: {
  //     toolbar: [ 
  //         ['code-block']
  //     ]
  // }

  // _quillFormats: [['code-block']]

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
          quill.updateContents(JSON.parse(delta), 'api');
        })



    quill.on('text-change', function(delta,olddelta,source) {
      //console.log('get delta', delta.ops[0],delta.ops[1])
      console.log(source);
      if(source !== 'api') {
        for(var i = 0; i < 2; i++) {
          if(delta.ops[i] !== undefined) {
            console.log(delta.ops[i])
            arr.push(delta.ops[i])
          }
        }
        socket.emit('typed', JSON.stringify(arr));
        arr = [];      

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


  // onTextChange(content,delta,source,editor) {
  //   //console.log('quillobj',this.refs.quillobj);
  //   console.log(source,editor);
  //   console.log(delta.ops[0],delta.ops[1])
  // }

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
