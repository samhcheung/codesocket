import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const videoStyle = {
  //width: '50%'
}

const roomLabel = {
  textAlign: 'center',
  padding: '10px',
  borderRadius: '4px',
  margin: '0px 0px 8px 0px',
  fontSize: '1.25em',
  color: 'white'

}
const videoContainer = {
  margin: '10px',
  paddingTop: '10px'
  //border: '2px solid gray',
  //borderRadius: '10px'
  //width: '60%'
};
const mirrorVideo = {
  transform: 'rotateY(180deg)',
  WebkitTransform:'rotateY(180deg)', /* Safari and Chrome */
  MozTransform:'rotateY(180deg)' /* Firefox */
}
const ownVideo = {
  //right: 15,
  //top: 15,
  width: '47%',
  borderRadius: '10px',
  marginRight: '5px'
  //zIndex: 5,
  //position: 'absolute'
};
const otherVideo = {
  width: '47%',
  borderRadius: '10px',
  marginLeft: '5px'
};

// <button id="stop-video">Stop Video Call</button>
// <button id="call-video">Start Video Call</button>
// <button id="answer-video">Answer</button>

const VideoPresentation = (props) => {
  return (
    <div>
      <div id="videos" className="row" style={videoContainer}>
        <video id="localVideo" autoPlay muted style={{...ownVideo, ...mirrorVideo}} className=""></video>
        <video id="remoteVideo" autoPlay style={otherVideo}  poster="public/video_photo.jpg" ></video>
      </div>
    </div>
  )
}

export default VideoPresentation;