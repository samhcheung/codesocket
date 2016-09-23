//File contains the route setup to be exported to be used by App.js
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import axios from 'axios'
import HomeContainer from './home/container'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={HomeContainer}>
    </Route>
  </Router>
)

export default routes;