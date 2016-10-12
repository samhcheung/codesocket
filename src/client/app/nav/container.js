import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import NavPresentation from './presentation'
import axios from 'axios'
import Modal from 'react-modal';
import querystring from 'querystring';

export class NavContainer extends React.Component {

  static propTypes = {
  };

  constructor (props) {
    super(props);
  }
  // componentWillMount() {
  // } 

  componentWillMount() {
    var context = this;
    //console.log('it hit componentDidMount =====>', this.state.user, this.props);
    axios.get('/access')
    .then( function(obj) {
      console.log('axios success')
      console.log(obj);
      if(!obj.data.user_name) {
          hashHistory.push('/');
      }
      context.props.dispatch({
          type: 'UPDATE_USER', 
          userName: obj.data.user_name
        });
    })
    
    // context.props.dispatch({
    //     type: 'UPDATE_USER', 
    //     userName: 'dani'
    //   });
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

  checkDocExist(user, room, callback) {
    axios.get('/roomExists', {params: {user: user, room: room}})
    .then(function(roomExists){
      console.log('client found rom', roomExists)
      callback(roomExists.data);
    })
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

  joinDoc(e) {
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
      // .then(function(room){
      // var postPackage = {
      //   room: docname, 
      //   user: username
      // }
      // console.log('before add room', postPackage)
      // axios.post('/addroomtouser', postPackage)
      // .then(function(response) {
      //     console.log('====', response);
      // });

    }
    // })

  //   axios.post('/user', {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // })


  }

  openModal() { 
    var context = this;
    context.props.dispatch({
      type: 'DOC_SELECTION_MODAL', 
      modalopen: true
    });  

    //fetch list of rooms
    axios.get('/doclist')
    .then(function(docs){
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
