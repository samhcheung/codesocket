import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import EditorContainer from '../editor/container';
import VideoContainer from '../video/container';
import ConsoleContainer from '../console/container';

class DocContainer extends React.Component {

  constructor (props) {
    super(props);
  }

  componentWillMount() {
    console.log('ever comes here')
    var socket = io();
    this.props.dispatch({
      type: 'UPDATE_SOCKET',
      socket: socket
    });
  }

  render () {

    return (
      <div>
        <div className="body-container">
          <div><VideoContainer /></div>
          <div><EditorContainer /></div>
          <div><ConsoleContainer /></div>
        </div>
      </div>
    );

  }
}

//export default DocContainer;

function mapStateToProps(state){
  return {
    // userName: state.userReducer.userName,//<=== shouldnt have to do this...? 
    // myInserts: state.userReducer.myInserts, //<=== shouldnt have to do this...? 
    // socket: state.sessionReducer.socket 
  }
}

 export default connect()(DocContainer)