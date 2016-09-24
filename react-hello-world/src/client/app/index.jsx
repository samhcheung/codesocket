// import React from 'react';
// import {render} from 'react-dom';

// class App extends React.Component {
//   render () {
//     return <p> Hello Redact!</p>;
//   }
// }

// render(<App/>, document.getElementById('app'));

// console.log('Hello World');

import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import {convertFromRaw, convertToRaw} from 'draft-js';


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => { 
      return this.setState({editorState})
    };
  }
  render() {
    const {editorState} = this.state;
    convertToRaw(editorState.getCurrentContent()).blocks.map(function(block) {
      
    })
    return <div><Editor editorState={editorState} onChange={this.onChange} /></div>;
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('container')
);
