import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';


const editorstyle = {
  buttons: {
    'borderStyle': 'solid',
    'borderWidth': '1.5px',
    'borderColor':'rgb(199, 199, 199)',
    'padding': '10px',
    'borderRadius': '4px',
    'margin': '0px 5px 5px 5px',
    // 'zIndex': 5
  },
  editor: {
    'margin': '5px',
    'color': 'white',
    'background': '#222',
    'fontFamily': 'courier',
    'borderRadius': '4px',
    fontSize: '1.5em'
  }
}
// 
// <div className="text-center col-sm-3"></div>
const EditorPresentation = (props) => {
    return (
      <div>
        <div className="row" style={{marginLeft: '-25px'}}>
          <div className="text-center col-sm-2"></div>
          <div style={editorstyle.buttons} className="btn btn-default text-center col-sm-4" onClick={e=>props.runCode(e)} id="run" >Run</div>
          <div style={editorstyle.buttons} className="btn btn-default text-center col-sm-4" onClick={e=>props.saveCode(e)} id="savebutton" >Save</div>
          <div className="text-center col-sm-2"></div>
        </div>
        <div id="editor" spellCheck="false" style={editorstyle.editor} className="row"></div>
      </div>
      )
}

export default EditorPresentation;