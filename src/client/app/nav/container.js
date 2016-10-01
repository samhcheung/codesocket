import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import NavPresentation from './presentation'
import axios from 'axios'
import Modal from 'react-modal';
import querystring from 'querystring';

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
//    this.saveuser(name);
    console.log('in save user', name)
    axios.post('/adduser',{username: name})
    .then(function(user){
      console.log('new user saved');
    

      context.checkDocExist(name, room, function(exists){
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



      
    })

  }

  checkDocExist(user, room, callback) {
    axios.get('/roomExists', {params: {user: user, room: room}})
    .then(function(roomExists){
      console.log('client found rom', roomExists)
      callback(roomExists.data);
    })
  }
  // saveuser(username){
  //   console.log('in save user', username)
  //   axios.post('/adduser',{username: username})
  //   .then(function(user){
  //     console.log('new user saved');
  //   })
  // }

  joinDoc(e) {
    e.preventDefault();
    var context = this;
    var docname = e.target.textContent;
    console.log('=====================docname', docname)
    var username = prompt('What\'s your name?');
    //this.saveuser(username);
    console.log('in save user', username)
    axios.post('/adduser',{username: username})
    .then(function(user){
      console.log('new user saved');
    

      context.props.dispatch({
        type: 'DOC_SELECTION_MODAL', 
        modalopen: false
      });  
      
      context.props.dispatch({
        type: 'UPDATE_USER', 
        userName: username
      });

      context.props.dispatch({
        type: 'UPDATE_ROOM', 
        room: docname
      })

      // .then(function(room){
      console.log('omg', docname, username)
      var postPackage = {
        room: docname, 
        user: username
      }
      // axios.post('/addroomtouser', {params: postPackage})
      // .then(function(userroom){
      //   console.log('user room successfully posted')
      // })
      console.log('before add room', postPackage)
      axios.post('/addroomtouser', postPackage)
      .then(function(response) {
          console.log('====', response);
      });

      hashHistory.push('/doc');

      
    })
    // })

  //   axios.post('/user', {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // })


  }

  openModal() { 
    var context = this;
    this.props.dispatch({
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
