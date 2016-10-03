import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const videoStyle = {
  width: '50%'
}
// <button id="stop-video">Stop Video Call</button>
// <button id="call-video">Start Video Call</button>
// <button id="answer-video">Answer</button>

const VideoPresentation = (props) => {
  return (
    <div>
      <h2 id="room-name"></h2>

      <div id="videos">
        <video id="localVideo" autoPlay muted style={videoStyle} className="row"></video>
        <video id="remoteVideo" autoPlay style={videoStyle} className="row"></video>
      </div>
    </div>
  )
}

export default VideoPresentation;