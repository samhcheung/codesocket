import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import Modal from 'react-modal';

const navstyle = {
  logo:{
        "fontSize": 20,
        "fontFamily": "Fredoka One",
        "letterSpacing": 1.5,
        "fontWeight": 300,
      },
  navbuttons: {
    'padding':'20px',
    'backgroundColor': 'rgb(38, 38, 38)',
    'borderBottom': '1.5px solid',
    'borderColor' : 'rgb(80, 80, 80)',
    "fontFamily": "Ubuntu, sans-serif",
    "color": "rgb(225, 225, 225)",
    "fontSize": 14,
    "fontWeight": 300
  },
  loginbutton: {
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 15
  }
}
export const NavPresentation = (props) => {
    return (
      <div className='loadingscreen'>
        <div className="row" style={navstyle.navbuttons}>
          <div className="col-sm-2 text-center" style={navstyle.logo}><i className="fa fa-code"/> CodeSocket</div>
          <div className="col-sm-2 text-center"></div>
          <div className="col-sm-2 text-center" onClick={e=>props.addDoc(e)}>Add New Doc</div>
          <div className="col-sm-2 text-center" id="openModal" onClick={e=>props.openModal(e)}>Work on Existing Doc</div>
          <div className="col-sm-2 text-center">{props.userName}</div>
          <div className="col-sm-2 text-center"><a href="auth/github" className="" style={navstyle.loginbutton}>Login</a></div>
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