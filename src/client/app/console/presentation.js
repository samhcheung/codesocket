import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const ConsolePresentation = (props) => {
    //<textarea cols="20" rows="10" id="editor"></textarea>
    return (
      <div className='loadingscreen'>
      <button onClick={e=>props.runCode(e)} id="run">Run the code!</button>
      <button id="save">Save the code!</button>
      <div id="test"></div>
      </div>
      )
}

export default ConsolePresentation;