import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import HomePresentation from './presentation.js'
import NavContainer from '../nav/container.js'

class HomeContainer extends React.Component {

  static propTypes = {
  };

  // componentWillMount() {
  //   console.log(this.props, 'will mount props');
  // } 

  componentDidMount() {
    //console.log('it hit componentDidMount =====>', this.state.user, this.props);
  }

  render() {
    return(
      <div>
        <NavContainer/>
        <div className="body-container">
          <HomePresentation />
          {this.props.children}
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
