import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const navstyle = {
  mainheader: {
    padding:'15px'
  }
}
const NavPresentation = (props) => {
    return (
      <div className='loadingscreen'>
        <div className="row">
          <div className="col-sm-3" style={navstyle.mainheader}>Code Socket</div>
        </div>
        <div className="row">
          <div className="col-sm-3 text-center"><Link >Rooms</Link></div>
          <div className="col-sm-3 text-center" onClick={e=>props.addDoc(e)}>Add New Doc</div>
          <div className="col-sm-3 text-center">History</div>
          <div className="col-sm-3 text-center"> {props.userName}</div>
        </div>
      </div>
      )
}

export default NavPresentation;