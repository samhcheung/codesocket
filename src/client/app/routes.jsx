//File contains the route setup to be exported to be used by App.js
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import axios from 'axios';
import Home from './home/container';
import DocContainer from './doc/container';
import { connect } from 'react-redux'
import LoadingContainer from './loading/container';


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
      <IndexRoute />
      <Route path='/doc' />
      <Route path='/doc/:roomname' component={DocContainer} />
      <Route path='/loading' component={LoadingContainer}/>
    </Route>
  </Router>
)

export default routes;