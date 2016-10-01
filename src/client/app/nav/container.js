import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import NavPresentation from './presentation'
import axios from 'axios'
import Modal from 'react-modal';

class NavContainer extends React.Component {

  static propTypes = {
  };

  constructor (props) {
    super(props);
  }
  // componentWillMount() {
  // } 

  componentDidMount() {
    //console.log('it hit componentDidMount =====>', this.state.user, this.props);
  }
  addDoc() {
    var context = this;
    console.log('==================props', this.props)
    var name = prompt('What\'s your name?');
    var room = prompt('Enter a room name.');

    this.checkDocExist(room, function(exists){
      if(exists){
        alert('Cannot create room because room already exists. Try another name or join the existing room!');
      } else {
        context.props.dispatch({
          type: 'UPDATE_USER', 
          userName: name
        });

        context.props.dispatch({
          type: 'UPDATE_ROOM', 
          room: room
        });

        hashHistory.push('/doc');

      } 


    })
  }

  checkDocExist(room, callback) {
    axios.get('/roomExists', {params: {room: room}})
    .then(function(roomExists){
      console.log('client found rom', roomExists)
      callback(roomExists.data);
    })
  }

  joinDoc(e) {
    e.preventDefault();
    var docname = e.target.textContent;
    console.log('docname', docname)
    var username = prompt('What\'s your name?');
    this.props.dispatch({
      type: 'DOC_SELECTION_MODAL', 
      modalopen: false
    });  
    
    this.props.dispatch({
      type: 'UPDATE_USER', 
      userName: username
    });

    this.props.dispatch({
      type: 'UPDATE_ROOM', 
      room: docname
    })
    // .then(function(room){
      hashHistory.push('/doc');
    // })

    
  }

  openModal() { 
    var context = this;
    this.props.dispatch({
      type: 'DOC_SELECTION_MODAL', 
      modalopen: true
    });  

    //fetch list of rooms
    ('fetch rooms', 'get existing rooms');
    axios.get('/doclist')
    .then(function(docs){
      console.log('docs', docs);
      context.props.dispatch({
        type: 'UPDATE_DOC_LIST', 
        doclist: docs.data
      });
    })


  }

  closeModal() { 
    this.props.dispatch({
      type: 'DOC_SELECTION_MODAL', 
      modalopen: false
    });
  }


  render() {
    return(
      <div>
        <div className="body-container">
          <NavPresentation doclist={this.props.doclist} isOpen={this.props.modalopen} openModal= {this.openModal.bind(this)} closeModal= {this.closeModal.bind(this)} addDoc={this.addDoc.bind(this)} joinDoc={this.joinDoc.bind(this)} userName={this.props.userName}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userName: state.userReducer.userName,
    room: state.sessionReducer.room,
    socket: state.sessionReducer.socket,
    modalopen: state.sessionReducer.modalopen,
    doclist: state.groupReducer.doclist
  }
}

export default connect(mapStateToProps)(NavContainer)
