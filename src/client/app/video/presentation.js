import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

const VideoPresentation = (props) => {
  return (
    <div className='loadingscreen'>
      <img alt="HAPPY VIDEOs"/>

      <div>Remote Camera:</div>
      <div id="remote-media"></div>
      <div id="controls">
        <div id="preview">
          My Camera:
          <div id="local-media"></div>
          <button id="button-preview">Preview My Camera</button>
        </div>
        <div id="invite-controls">
          <p className="instructions">Invite another Video Client</p>
          <input id="invite-to" type="text" placeholder="Identity to send an invite to" />
          <button id="button-invite">Send Invite</button>
        </div>
        <div id="log">
          <p>&gt;&nbsp;<span id="log-content">Preparing to listen</span>...</p>
        </div>
      </div>

    </div>
  )
}

export default VideoPresentation;