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
    console.log('==================props', this.props)
    var name = prompt('What\'s your name?');
    var room = prompt('Enter a room name.');


    this.props.dispatch({
      type: 'UPDATE_USER', 
      userName: name
    });

    this.props.dispatch({
      type: 'UPDATE_ROOM', 
      room: room
    });

    this.props.dispatch({
      type: 'DOC_SELECTION_MODAL', 
      modalopen: false
    });  

    // axios.get()
    hashHistory.push('/doc');
  }

  joinDoc(e) {
    e.preventDefault();
    var docname = e.target.value;
    //socket join room
    var name = prompt('What\'s your name?');

    this.props.dispatch({
      type: 'UPDATE_USER', 
      userName: name
    });

    this.props.dispatch({
      type: 'DOC_SELECTION_MODAL', 
      modalopen: false
    });  
    
    hashHistory.push('/doc');
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
