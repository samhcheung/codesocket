import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const EditorPresentation = (props) => {
    return (
      <div>
        <div id="editor">
          </div>
        <textarea cols="40" rows="5" id="test-editor"></textarea>
      </div>
    )
}

export default EditorPresentation;