import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const consoleStyle = {
  height: { 
    'maxHeight': '40%',
    overflow: 'auto'
  },
  width: {
    'marginRight': '20px'
  }
};

const ConsolePresentation = (props) => {
    return (
      <div className='loadingscreen'>
        <button onClick={e=>props.runCode(e)} id="run">Run the code!</button>
        <button id="save">Save the code!</button>
        <div>Console Output:</div>
        <div id="console" className="ql-editor" style={Object.assign(consoleStyle.height, consoleStyle.width)}></div>
      </div>
      )
}

export default ConsolePresentation;