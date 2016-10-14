import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';


const editorstyle = {
  runButton: {
    borderStyle: 'solid',
    borderWidth: '1.5px',
    //borderColor:'rgb(199, 199, 199)',
    padding: '10px',
    borderRadius: '4px',
    // margin: '0px 5px 5px 5px',
    //background: '#262626',
  },
  saveButton: {
    borderStyle: 'solid',
    borderWidth: '1.5px',
    borderColor: 'rgb(199, 199, 199)',
    padding: '10px',
    borderRadius: '4px',
    // margin: '0px 5px 5px 5px',
    backgroundColor: '#262626',
    color: 'white'
    // 'zIndex': 5
  },
  editor: {
    margin: '5px',
    color: 'white',
    //background: '#222',
    height: '75%',
    fontFamily: 'courier',
    borderRadius: '4px',
    fontSize: '1.25em'

  },
  room: {
    // 'borderBottom': '1px solid',
    // 'borderColor' : 'rgb(80, 80, 80)',
    padding:5,
    "color": "rgb(155, 155, 155)",
    fontSize: '1.25em'
  }
}

// <div className="text-center col-sm-3"></div>
const EditorPresentation = (props) => {
  return (
    <div>
      <div className="row text-center " style={editorstyle.room}>Room: {props.room}</div>
      <div className="row" style={{paddingTop: '20px'}}>
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div style={editorstyle.runButton} 
            className="btn btn-success text-center col-sm-5" 
            onClick={e=>props.runCode(e)} 
            id="run" >
            <i className="fa fa-play fa-1x"></i>
            <span> Run</span>
          </div>
          <div className="col-sm-2"></div>
          <div style={editorstyle.saveButton} 
            className="btn btn-success text-center col-sm-5" 
            onClick={e=>props.saveCode(e)} 
            id="savebutton" >
            <i className="fa fa-floppy-o fa-1x"></i>
            <span> Save</span>
          </div>
        </div>

        <div className="col-sm-3"></div>
      </div>
      <div id="editor" spellCheck="false" style={editorstyle.editor} className="row"></div>
    </div>
  );
};

export default EditorPresentation;
