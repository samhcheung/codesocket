import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import NavContainer from '../nav/container'
import SideNav from '../sidenav/container'

const Home = (props) => {

  return (
    <div>
    	<div>
      <NavContainer/>
      </div>
      <div className="row">
        <div className="col-sm-2">
        <SideNav />
        </div>
        <div className="col-sm-10">
        	<main>

    	     {props.children}
          
    		  </main>
          </div>
        </div>

    </div>
    )
}

export default Home;
