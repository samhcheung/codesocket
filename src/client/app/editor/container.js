import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import EditorPresentation from './presentation'
import axios from 'axios'

var ReactQuill = require('react-quill');

    // var quill = new Quill('#editor', {
    //   modules: {
    //     syntax: true,              // Include syntax module
    //     toolbar: [['code-block']]  // Include button in toolbar
    //   },
    //   formats: ['code-block'],
    //   theme: 'snow'
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



class EditorContainer extends React.Component {

  _quillModules: {
      toolbar: [ 
          ['code-block']
      ]
  }

  _quillFormats: [['code-block']]

  static propTypes = {
  }

  componentWillMount() {
    hljs.configure({   // optionally configure hljs
      languages: ['javascript']
    });
  }
  componentDidMount() {
    console.log('hi');
    document.getElementsByClassName('ql-code-block')[0].click();
    document.getElementsByClassName('ql-code-block')[0].remove();
  }

  componentOnMount() {
  }

  onTextChange(content,delta,source,editor) {
    //console.log('quillobj',this.refs.quillobj);
    console.log(delta.ops[0],delta.ops[1])
    // document.getElementsByClassName('ql-code-block')[0].click();
    // document.getElementsByClassName('ql-code-block')[0].remove();
  }

  render() {
    return(
      <div>
        <div className="body-container">
          <div className='_quill' >
                  <ReactQuill ref ='quillobj' theme='snow' 
                              toolbar={false} // Let Quill manage toolbar
                              modules={{toolbar: [['code-block']]}}
                              formats={[['code-block']]}
                              bounds={'._quill'}
                              onChange={this.onTextChange.bind(this)}
                              >
                    
                  </ReactQuill>
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
