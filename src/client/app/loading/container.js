import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    hashHistory.push('/doc/' + this.props.room);
  }
  render() {
    return(
      <div>
          Loading
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    userName: state.userReducer.userName,//<=== shouldnt have to do this...? 
    room: state.sessionReducer.room
  }
}

export default connect(mapStateToProps)(Loading)
