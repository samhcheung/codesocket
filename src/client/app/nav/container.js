import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import NavPresentation from './presentation'
import axios from 'axios'
import Popup from 'react-popup';
import Modal from 'react-modal';

class NavContainer extends React.Component {

  static propTypes = {
  };

  constructor (props) {
    super(props);
    this.state = {
      open: false
    }
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

    // axios.get()
    hashHistory.push('/doc');
  }

  joinDoc() {
    console.log('==================props', this.props)
    var name = prompt('What\'s your name?');
    //see list of rooms

    var room = prompt('Enter a room name.');


    this.props.dispatch({
      type: 'UPDATE_USER', 
      userName: name
    });

    this.props.dispatch({
      type: 'UPDATE_ROOM', 
      room: room
    });

    // axios.get()
    hashHistory.push('/doc');
  }

  myFunction(e) {
    // var popup = document.getElementById('myPopup');
    // popup.classList.toggle('show');

    e.preventDefault();

        var _this = this;
        Popup.prompt('Type your name below', 'What\'s your name?', {
            placeholder: 'Placeholder yo',
            type: 'text'
        }, {
            text: 'Save',
            className: 'success',
            action: function (Box) {
                Popup.alert('Your name is: ' + Box.value);
                Box.close();
            }
        });
  }

  openModal() { 
    this.props.dispatch({
      type: 'DOC_SELECTION_MODAL', 
      modalopen: true
    });  
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
          <NavPresentation isOpen={this.props.modalopen} openModal= {this.openModal.bind(this)} closeModal= {this.closeModal.bind(this)} addDoc={this.addDoc.bind(this)} joinDoc={this.joinDoc.bind(this)} userName={this.props.userName}/>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userName: state.userReducer.userName,
    room: state.sessionReducer.room,
    modalopen: state.sessionReducer.modalopen
  }
}

export default connect(mapStateToProps)(NavContainer)
