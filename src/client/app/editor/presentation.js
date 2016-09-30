import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';


const editorstyle = {
  savebutton: {
    "borderStyle": 'solid',
    "borderWidth": '1.5px',
    "borderColor":'rgb(199, 199, 199)',
    "padding": '5px',
    "margin": '10px'
  },
  editor: {
    "margin": '5px'
  }
}

const EditorPresentation = (props) => {
    return (
      <div>
        <div className="row">
          <div className="text-center col-sm-4"></div>
          <div style={editorstyle.savebutton} className="text-center col-sm-4">Save</div>
          <div className="text-center col-sm-4"></div>
        </div>
        <div id="editor" style={editorstyle.editor} className="row"></div>
        <textarea cols="40" rows="5" id="test-editor"></textarea>
      </div>
      )
}

export default EditorPresentation;