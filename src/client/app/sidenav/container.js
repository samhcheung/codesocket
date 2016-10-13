import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import axios from 'axios'
import SidePresentation from './presentation.js'

export class SideContainer extends React.Component {

  constructor (props) {
    super(props);
    this.openNav();
  }
  //
  joinDoc(e) {
    console.log('join doc')
    e.preventDefault();
    var context = this;
    var room = e.target.textContent;
    context.props.dispatch({
      type: 'UPDATE_ROOM', 
      room: room
    })
    console.log('=====================room', room)
    if(!this.props.userName) {
      alert('you are not logged in');
      hashHistory.push('/');
    }
    if(this.props.userName) {
      var username = this.props.userName;
      context.props.dispatch({
        type: 'DOC_SELECTION_MODAL', 
        modalopen: false
      });  
      context.saveuser(username, function(user){
        context.props.dispatch({
          type: 'UPDATE_USER', 
          userName: username
        });
        context.saveroomtouser(username, room, function(userroom){
          hashHistory.push('/loading');
          hashHistory.push('/doc/' + room);
        })
      });
    }
  }

  openNav() { 
    var context = this;

    //fetch list of rooms
    axios.get('/doclist', {params: {user: context.props.userName}})
    .then(function(docs){
      console.log('client got docs back', docs)
      if(docs.data.length) {
        context.props.dispatch({
          type: 'UPDATE_DOC_LIST', 
          doclist: docs.data
        });
      } else {
        console.log('nothing in doclist')
      }
    })


  }
  addDoc() {
    var context = this;
    console.log('==================props', this.props)
    //var username = prompt('What\'s your name?');
    // if(username){
    //   context.props.dispatch({
    //     type: 'UPDATE_USER', 
    //     userName: username
    //   });
    context.props.dispatch({
        type: 'DOC_SELECTION_MODAL', 
        modalopen: false
      });
    if(!this.props.userName) {
      alert('you are not logged in');
      hashHistory.push('/');
    }
    if(this.props.userName) {
      var username = this.props.userName;
      var room = prompt('Enter a room name.');
      if(room){
        context.props.dispatch({
          type: 'UPDATE_ROOM', 
          room: room
        });
        context.saveuser(username, function(user){
          context.checkDocExist(username, room, function(exists){
            if(exists){
              console.log('exists', exists)
              alert('Cannot create room because room already exists. Try another name or join the existing room!');
            } else {
              context.saveroom(room, function(roomname){
                console.log('roomname',roomname.data)
                context.props.dispatch({
                  type: 'UPDATE_DOC_LIST',
                  doclist: context.props.doclist.concat(roomname.data[0])
                })
                context.saveroomtouser(username, room, function(userroom){
                  console.log('saved user room', userroom);
                  hashHistory.push('/loading');
                  hashHistory.push('/doc/' + room);
                })
                
              });
            } 
          })
        });
      }
    }
  }
  saveuser(username, callback){
    console.log('in save user', username)
    axios.post('/adduser',{user: username})
    .then(function(user){
      console.log('new user saved');
      callback(user);
    })
  }

  saveroom(room, callback){
    console.log('in save user', room)
    axios.post('/addroom',{room: room})
    .then(function(room){
      console.log('new room saved');
      callback(room);

    })
  }

  saveroomtouser(user, room, callback){
    var postPackage = {
      room: room, 
      user: user
    }
    console.log('before add room', postPackage)
    axios.post('/addroomtouser', postPackage)
    .then(function(userroom) {
        console.log('====', userroom);
        callback(userroom);
    });
  }

  checkDocExist(user, room, callback) {
    axios.get('/roomExists', {params: {user: user, room: room}})
    .then(function(roomExists){
      console.log('client found rom', roomExists)
      callback(roomExists.data);
    })
  }

  render() {
    return(
      <div>
        <div className="body-container">
          <SidePresentation doclist={this.props.doclist} joinDoc={this.joinDoc.bind(this)} addDoc={this.addDoc.bind(this)} userName={this.props.userName}/>
        </div>
        
      </div>
    )
  }
}

SideContainer.contextTypes = { store: React.PropTypes.object }

function mapStateToProps(state){
  return {
    userName: state.userReducer.userName,
    room: state.sessionReducer.room,
    socket: state.sessionReducer.socket,
    modalopen: state.sessionReducer.modalopen,
    doclist: state.groupReducer.doclist
  }
}

export default connect(mapStateToProps)(SideContainer)
