import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import ConsolePresentation from './presentation'
import axios from 'axios'

export class ConsoleContainer extends React.Component {

  static propTypes = {
  }

  componentDidMount() {
    
  }
  runCode(e) {

    // Grab the code from the current editor to be run.
    // Will switch to the Quill editor when it is refactored to live in the
    // Redux Store.
    var theCode = this.props.quill.getText();
    // Save reference to the default console.log function.
    var oldLog = console.log;

    // Hijack the console.log function to append the console output to the DOM.
    console.log = function (message) {
      // Display the console output as a list of P tags.
      var messageNode = document.createElement("pre");
      messageNode.className+= "ql-syntax";
      var text = document.createTextNode(" " + message);
      messageNode.appendChild(text);

      // Each time the editor code is run, clear console first.
      document.getElementById('console').innerHTML = "";

      // SetTimeout is used to cause a small flash to let the user
      // know the code is being run even if the output is identical.
      // Without this, clicking run repeatedly looks like nothing
      // is happening.
      setTimeout(function() {
        document.getElementById('console').appendChild(messageNode);
      }, 50);

      // Also display the console.logged items in the real console.
      oldLog.apply(console, arguments);
    };

    // If there is an error running the code, append error to DOM.
    window.onerror = function(message, url, linenumber, x, y) {
      console.log(" " + message + " on line " + 
        linenumber);
      
        // Restore normal console.log behavior.  This prevents system console.log
        // from showing up on the DOM.
        console.log = oldLog;
    };

    // Run the code from the editor.
    eval(theCode);

    // Restore normal console.log behavior.  This prevents system console.log
    // from showing up on the DOM.
    console.log = oldLog;
  }

  render() {
    return(
      <div>
        <div className="body-container">
          <ConsolePresentation userName={this.props.userName} runCode={this.runCode.bind(this)}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userName: state.userReducer.userName,
    quill: state.sessionReducer.quill
  }
}

export default connect(mapStateToProps)(ConsoleContainer)
