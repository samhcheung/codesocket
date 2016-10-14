import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import NavContainer from '../nav/container'
import SideNav from '../sidenav/container'

const HomePresentation = (props) => {
    return (
      <div>
        <div>
        <NavContainer/>
        </div>

        {
          props.user ?
          <div className="row">
            <div className="col-sm-2" style={{padding:0}}>
            <SideNav />
            </div>

            <div className="col-sm-10">
              <main>
               {props.children}
              </main>
            </div>
          </div> :
          
          <div>
            <main>
             {props.children}
            </main>
          </div>
        }

      </div>
    )
}

export default HomePresentation;