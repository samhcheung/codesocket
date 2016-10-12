import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';


const editorstyle = {
  savebutton: {
    "borderStyle": 'solid',
    "borderWidth": '1.5px',
    "borderColor":'rgb(199, 199, 199)',
    "padding": '5px',
    "margin": '10px',
  },
  editor: {
    "margin": '5px',
    "color": 'white',
    "background": '#222',
    "fontFamily": "courier"
  }
}

const EditorPresentation = (props) => {
    return (
      <div>
        <div className="row">
          <div className="text-center col-sm-4"></div>
          <div style={editorstyle.savebutton} id="savebutton" className="text-center col-sm-4" onClick={e=>props.saveCode(e)}>Save</div>
          <div className="text-center col-sm-4"></div>
        </div>
        <div id="editor" spellCheck="false" style={editorstyle.editor} className="row"></div>
      </div>
      )
}

export default EditorPresentation;