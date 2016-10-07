//File contains the route setup to be exported to be used by App.js
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import axios from 'axios';
import Home from './home/container';
import DocContainer from './doc/container';
import { connect } from 'react-redux'

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('hello');
    console.log(this.props.room);
    hashHistory.push('/doc/' + this.props.room);
  }
  render() {
    return(
      <div>
          hi
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

const LoadingComponent = connect(mapStateToProps)(Loading)


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
      <IndexRoute />
      <Route path='/doc' />
      <Route path='/doc/:roomname' component={DocContainer} />
      <Route path='/loading' component={LoadingComponent}/>
    </Route>
  </Router>
)

export default routes;