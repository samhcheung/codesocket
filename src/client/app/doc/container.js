import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import EditorContainer from '../editor/container';
import VideoContainer from '../video/container';
import ConsoleContainer from '../console/container';
import axios from 'axios'

export class DocContainer extends React.Component {

  constructor (props) {
    super(props);
  }

  componentWillMount() {
    console.log('ever comes here')
    var socket = io();//{'forceNew':true}
    this.props.dispatch({
      type: 'UPDATE_SOCKET',
      socket: socket
    });
    this.props.dispatch({
      type: 'UPDATE_ROOM',
      room: this.props.params.roomname
    });

  }
  componentWillReceiveProps(newProps) {
    var context = this;
    console.log(newProps)
    console.log(this.props.params.roomname, newProps.params.roomname)
    if(this.props.params.roomname !== newProps.params.roomname) {
      this.props.dispatch({
        type: 'UPDATE_ROOM',
        room: newProps.params.roomname
      });
      hashHistory.push('/loading');
      //console.log('after', newProps.params.roomname)
    }
    axios.get('/access')
    .then( function(obj) {
      console.log('axios success in doc')
      if(!obj.data.user_name) {
          hashHistory.push('/');
      }
      context.props.dispatch({
          type: 'UPDATE_USER', 
          userName: obj.data.user_name
        });
      
    })
  }
  componentDidMount() {
    console.log(this.props.params.roomname);
    var context = this;
    axios.get('/roomExists', {params: {user: this.props.userName, room: this.props.params.roomname}})
    .then(function(roomExists){
      console.log('does room exist???', roomExists.data)
      if(roomExists.data) {
        context.props.dispatch({
          type: 'UPDATE_ROOM',
          room: context.props.params.roomname
        });
      } else {
        hashHistory.push('/');
      }
    });
  }

  componentWillUnmount() {
    console.log('does doc unmount');
    // console.log(this.props.socket);
    // this.props.socket.disconnect();
    // this.props.dispatch({
    //   type: 'UPDATE_SOCKET',
    //   socket: null
    // });
  }

  render () {

    return (
      <div>
        <div className="body-container">
          <div className="row">
            <div className="col-sm-6"><EditorContainer /></div>
            <div className="col-sm-6">
              <VideoContainer />
              <ConsoleContainer /> 
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center"></div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

//export default DocContainer;

function mapStateToProps(state){
  return {
    userName: state.userReducer.userName,//<=== shouldnt have to do this...? 
    // myInserts: state.userReducer.myInserts, //<=== shouldnt have to do this...? 
    socket: state.sessionReducer.socket 
  }
}

 export default connect(mapStateToProps)(DocContainer)