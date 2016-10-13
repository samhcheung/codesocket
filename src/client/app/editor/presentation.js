import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';


const editorstyle = {
  runButton: {
    borderStyle: 'solid',
    borderWidth: '1.5px',
    //borderColor:'rgb(199, 199, 199)',
    padding: '10px',
    borderRadius: '4px',
    margin: '0px 5px 5px 5px',
    //background: '#262626',
  },
  saveButton: {
    borderStyle: 'solid',
    borderWidth: '1.5px',
    borderColor: 'rgb(199, 199, 199)',
    padding: '10px',
    borderRadius: '4px',
    margin: '0px 5px 5px 5px',
    backgroundColor: '#262626',
    color: 'white'
    // 'zIndex': 5
  },
  editor: {
    margin: '5px',
    color: 'white',
    //background: '#222',
    fontFamily: 'courier',
    borderRadius: '4px',
    fontSize: '1.25em'

  },
  room: {
    color: 'white',
    fontSize: '1.25em',
    margin: '8px 0px 0px 0px'
  }
}

// <div className="text-center col-sm-3"></div>
const EditorPresentation = (props) => {
  return (
    <div>
      <div className="row" style={{paddingTop: '20px'}}>
        <div style={editorstyle.runButton} 
          className="btn btn-success text-center col-sm-2" 
          onClick={e=>props.runCode(e)} 
          id="run" >
          <i className="fa fa-play fa-1x"></i>
          <span> Run</span>
        </div>
        <div style={editorstyle.saveButton} 
          className="btn btn-success text-center col-sm-2" 
          onClick={e=>props.saveCode(e)} 
          id="savebutton" >
          <i className="fa fa-floppy-o fa-1x"></i>
          <span> Save</span>
        </div>
        <div style={editorstyle.room} className="text-center col-sm-7">
          <span>
            You are in room: {props.room}
          </span>
        </div>
      </div>
      <div id="editor" spellCheck="false" style={editorstyle.editor} className="row"></div>
    </div>
  );
};

export default EditorPresentation;
