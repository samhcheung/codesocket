import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import Modal from 'react-modal';


const style = {
  "height":'93%',
  "fontFamily": "Ubuntu",
  //"backgroundColor": "rgb(198, 61, 43)",
  "backgroundColor": "rgb(50, 50, 50)",
  "margin": 0,
  "padding": 0,
  "color": "white",
  "borderRight": '1px solid',
  "borderColor": 'rgb(80, 80, 80)',
  title: {
    "marginTop": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "marginRight": 0,
    "fontSize": '1em',
    "paddingLeft": 15 ,
    "paddingRight": 15 ,
    "paddingBottom": 10 ,
    "paddingTop": 10 ,
    // "borderLeft": '3px solid',
    //"borderColor": 'rgb(198, 61, 43)',
    "color": "rgb(155, 155, 155)",
    "backgroundColor": 'rgb(80, 80, 80)',
  },
  list: {
    "listStyleType": "none",
    "backgroundColor": 'rgb(50, 50, 50)',
    margin: 0,
    marginTop: 10,
    paddingLeft: 15
  },
  doclistitem: {
    "cursor": 'pointer',
    "paddingTop": "5px",
    "paddingBottom": "5px",
    "color": "rgb(225, 225, 225)",
    overflow: 'auto'
  },
  button: {
    "border": "none",
    // "backgroundColor": "rgb(198, 61, 43)",
    "backgroundColor": "rgb(80, 80, 80)",
    "color": "rgb(225, 225, 225)",
  }
}

export const SidePresentation = (props) => {
  console.log("i am in SidePresentation")
    return (
      <div className='loadingscreen' style={style}>
  
          <div className="" style={style.title}>Your Projects  <button onClick={(e)=>{props.addDoc(e)}} style={style.button}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>

          </div>
          {props.doclist && props.doclist.length === 0 && <div>You do not have any projects. Click Create New Doc button below to get started.</div>}
          
          <ul style={style.list}>
            {props.doclist && props.doclist.length && props.doclist.map((doc, index) => <li style={style.doclistitem} className="doclist" key={index} ><span onClick={e=>props.joinDoc(e)}>#{doc['doc_name']}</span></li>)}
          </ul>

      </div>
    )
}

export default SidePresentation;