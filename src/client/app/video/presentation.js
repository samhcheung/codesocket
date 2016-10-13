import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const videoStyle = {
  //width: '50%'
}

const videoContainer = {
  
  'marginLeft': '-35px'
};
const mirrorVideo = {
  transform: 'rotateY(180deg)',
  WebkitTransform:'rotateY(180deg)', /* Safari and Chrome */
  MozTransform:'rotateY(180deg)' /* Firefox */
}
const ownVideo = {
  right: 15,
  top: 55,
  width: '30%',
  zIndex: 5,
  position: 'absolute'
};
const otherVideo = {

};
const roomLabel = {
  textAlign: 'center',
  padding: '10px',
  borderRadius: '4px',
  margin: '0px 0px 10px 0px',
  fontSize: '1.25em',
  color: 'white'

}

// <button id="stop-video">Stop Video Call</button>
// <button id="call-video">Start Video Call</button>
// <button id="answer-video">Answer</button>

const VideoPresentation = (props) => {
  return (
    <div>
      <div style={roomLabel}>
        Room: {props.room}
      </div>
      <div id="videos" className="row" style={videoContainer}>
        <video id="localVideo" autoPlay muted style={{...ownVideo, ...mirrorVideo}} className=""></video>
        <video id="remoteVideo" autoPlay style={videoStyle} className="col-sm-12" poster="public/video_photo.jpg" ></video>
      </div>
    </div>
  )
}

export default VideoPresentation;