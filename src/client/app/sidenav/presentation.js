import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import Modal from 'react-modal';


const style = {
  "fontFamily": "Ubuntu",
  "backgroundColor": "rgb(198, 61, 43)",
  "margin": 0,
  "padding": 0,
  "color": "white",
  title: {
    "margin": 20,
    "fontSize": 16,
  },
  list: {
    "listStyleType": "none"  
  },
  button: {
    "border": "none",
    "backgroundColor": "rgb(198, 61, 43)"
  }
}

export const SidePresentation = (props) => {
  console.log("i am in SidePresentation")
    return (
      <div className='loadingscreen' style={style}>
  
          <h1 style={style.title}>Your Projects  <button onClick={(e)=>{props.addDoc(e)}} style={style.button}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>

          </h1>
          {props.doclist && props.doclist.length === 0 && <div>You do not have any projects. Click Create New Doc button below to get started.</div>}
          
          <ul style={style.list}>
            {props.doclist && props.doclist.length && props.doclist.map((doc, index) => <li className="doclist" key={index} ><span onClick={e=>props.joinDoc(e)}>#{doc['doc_name']}</span></li>)}
          </ul>

          <button onClick={props.addDoc}>Create New Doc</button>
      </div>
    )
}

export default SidePresentation;