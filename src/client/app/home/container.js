import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import HomePresentation from './presentation.js'
import NavContainer from '../nav/container.js'

class HomeContainer extends React.Component {

  render() {
    return(
      <div>
        <div className="body-container">
          <HomePresentation />

          <main>
            {this.props.children}
          </main>
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

export default connect(mapStateToProps)(HomeContainer)
