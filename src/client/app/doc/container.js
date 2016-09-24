import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import EditorContainer from '../editor/container';

const DocContainer = (props) => {
  return(
    <div>
      <div className="body-container">
        <div><EditorContainer /></div>
        <div><EditorContainer /></div>
        <div><EditorContainer /></div>
      </div>
    </div>
  )
}

export default DocContainer;
