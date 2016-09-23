import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'

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
        Heyyy
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    // isLoggedIn: state.userReducer.isLoggedIn //<=== shouldnt have to do this...? 
  }
}

export default connect(mapStateToProps)(HomeContainer)
