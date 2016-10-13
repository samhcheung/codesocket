import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import Modal from 'react-modal';

const navstyle = {
  logo:{
    "fontSize": 22,
    "fontFamily": "Fredoka One",
    "color": "rgb(225, 225, 225)",
    display: 'inline-block',
    verticalAlign: 'middle',
    "letterSpacing": 1.5,
    "fontWeight": 300,
  },
  topheader:{
    'borderBottom': '1px solid',
    'borderColor' : 'rgb(80, 80, 80)',
  },
  navcontainer: {
    'lineHeight': '70px',
    'backgroundColor': 'rgb(38, 38, 38)',
    'marginLeft': 60,
    'marginRight': 60
  },
  navbuttons: {
    display: 'inline-block',
    verticalAlign: 'middle',
    "fontFamily": "Ubuntu, sans-serif",
    "color": "rgb(155, 155, 155)",
    "fontSize": 16,
    "fontWeight": 300
  },
  eachnavbutton:{
    marginLeft: '30px',
  },
  loginbutton: {
    margin: 0,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: '30px',
    border: '1px solid',
    borderRadius: '5px',
    color: 'rgb(155, 155, 155)'
  }

}
          // <div className="col-sm-2 text-center" onClick={e=>props.addDoc(e)}>Add New Doc</div>
          // <div className="col-sm-2 text-center" id="openModal" onClick={e=>props.openModal(e)}>Work on Existing Doc</div>
          // <div className="col-sm-2 text-center">{props.userName}</div>
          // <div className="col-sm-2 text-center"><a href="auth/github" className="" style={navstyle.loginbutton}>Login</a></div>


          // <div className="row" style={navstyle.navcontainer}>
          //   <div className="row" style={navstyle.navbuttons}>
          //     <div className="col-sm-2 text-center" style={navstyle.logo}><i className="fa fa-code"/> CodeSocket</div>
          //     <div className="col-sm-2 text-center"></div>
          //     <div className="col-sm-2 text-center" onClick={e=>props.addDoc(e)}>Add New Doc</div>
          //     <div className="col-sm-2 text-center" id="openModal" onClick={e=>props.openModal(e)}>Work on Existing Doc</div>
          //     <div className="col-sm-2 text-center">{props.userName}</div>
          //     <div className="col-sm-2 text-center"><a href="auth/github" className="" style={navstyle.loginbutton}>Login</a></div>
          //   </div>
          // </div>
export const NavPresentation = (props) => {
    return (
      <div className='loadingscreen'>
      <div style={navstyle.topheader} className="row">
        <div className="" style={navstyle.navcontainer}>
          <div style={navstyle.logo}><i className="fa fa-code"/> CodeSocket</div>
          <div className="pull-right" style={navstyle.navbuttons}>
            {!props.userName ? <div className="pull-right"><a href="auth/github" className="" style={navstyle.loginbutton}>Login</a></div>
            : <div className="pull-right"><a href="logout" className="" style={navstyle.loginbutton}>Logout</a></div>}
            <div className="pull-right" style={navstyle.eachnavbutton}>{props.userName}</div>
            <div className="pull-right" style={navstyle.eachnavbutton} id="openModal" onClick={e=>props.openModal(e)}>Work on Existing Doc</div>
            <div className="pull-right" style={navstyle.eachnavbutton} onClick={e=>props.addDoc(e)}>Add New Doc</div>
          </div>
        </div>
      </div>
        
        <Modal
          style={{
            content: {
              color: '#2323EE',
              "maxWidth": '50%',
              "textAlign": 'center',
              "listStyle": 'none',
              width: 'inherit',
              height: 'inherit',
              margin: '0 auto'
            }
          }}
          isOpen={props.isOpen}
          onRequestClose={props.closeModal}
        >
          <h1>Document List</h1>
          {props.doclist && props.doclist.map((doc, index) => <li className="doclist" key={index} ><span onClick={e=>props.joinDoc(e)}>{doc['doc_name']}</span></li>)}
          <button onClick={props.closeModal}>Close</button>
          <button onClick={props.addDoc}>Create New Doc</button>
        </Modal>
        </div>
      )
  
}

export default NavPresentation;