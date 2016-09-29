import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const NavPresentation = (props) => {
    return (
      <div className='loadingscreen'>
        <div className="row">
          <div className="col-sm-3"><Link >Rooms</Link></div>
          <div className="col-sm-3" onClick={e=>props.addDoc(e)}>Add New Doc</div>
          <div className="col-sm-3">History</div>
          <div className="col-sm-3"> {props.userName}</div>
        </div>
      </div>
      )
}

export default NavPresentation;