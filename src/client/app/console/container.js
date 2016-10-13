import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import ConsolePresentation from './presentation'
import axios from 'axios'

export class ConsoleContainer extends React.Component {

  static propTypes = {
  }

  render() {
    return(
      <div>
        <div className="body-container">
          <ConsolePresentation userName={this.props.userName} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userName: state.userReducer.userName,
    quill: state.sessionReducer.quill
  }
}

export default connect(mapStateToProps)(ConsoleContainer)
