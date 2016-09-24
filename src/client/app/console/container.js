import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import ConsolePresentation from './presentation'
import axios from 'axios'

class ConsoleContainer extends React.Component {

  static propTypes = {
  }

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <div className="body-container">
          <ConsolePresentation userName={this.props.userName}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userName: state.userReducer.userName //<=== shouldnt have to do this...? 
  }
}

export default connect(mapStateToProps)(ConsoleContainer)
