import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'

const DocContainer = (props) => {
  return(
    <div>
      <div className="body-container">
        <div><DocPresentation /></div>
        <div><DocPresentation /></div>
        <div><DocPresentation /></div>
      </div>
    </div>
  )
}

export default DocContainer;
