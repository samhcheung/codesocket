import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const navstyle = {
  mainheader: {
    //height:'60px',
    padding:'15px',
    background:'rgb(244, 244, 244)'
  },
  navbuttons: {
    padding:'15px',
    "border-style": 'solid',
    "border-width": '0.5px',
    "border-color":'rgb(199, 199, 199)',
    "margin-bottom": '10px'
  }
}
const NavPresentation = (props) => {
    return (
      <div className='loadingscreen'>
        <div className="row" style={navstyle.mainheader}>
          <div className="text-center" >Code Socket</div>
        </div>
        <div className="row" style={navstyle.navbuttons}>
          <div className="col-sm-3 text-center"><Link >Rooms</Link></div>
          <div className="col-sm-3 text-center" onClick={e=>props.addDoc(e)}>Add New Doc</div>
          <div className="col-sm-3 text-center">History</div>
          <div className="col-sm-3 text-center"> {props.userName}</div>
        </div>
      </div>
      )
}

export default NavPresentation;