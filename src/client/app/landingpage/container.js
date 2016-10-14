import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
// import ConsoleContainer from '../console/container';
import axios from 'axios'

export class LandingContainer extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
  	if(!this.props.userName){
      this.type(['Real-time collaborative coding', 'for your engineering team']);
    } else {
      this.type(['Welcome to CodeSocket,', this.props.userName])
    }
  }

  type(text) {
  	console.log('in type')
  	var context = this;
    context.tagline1.textContent = '|';
    var text1 = text[0];
    var text2 = text[1];
    var i = 0;
    var j = 0;

    function next1() {
      //console.log('context', context.tagline1)
      if(context.tagline1) {
  		context.tagline1.textContent = context.tagline1.textContent.slice(0, context.tagline1.textContent.length - 1);
  	  if(i !== text1.length - 1){
  	  	context.tagline1.textContent += text1[i] + '|';
  	  } else {
		context.tagline1.textContent += text1[i];
  	  }

  	  if(i === 10){
        var parent = document.getElementById("taglineParent");
        var child = document.getElementById("filler");
        parent.removeChild(child);
	  	  context.tagline2.textContent = '|';
  	  	next2();
  	  }

  	  i++;

  	  if (i < text1.length ) {
  	    var typing = setTimeout(next1, 100);
  	  }
  	  }
  	}

  	function next2() {
  		context.tagline2.textContent = context.tagline2.textContent.slice(0, context.tagline2.textContent.length - 1);
  	  if(j !== text2.length - 1){
  	  	context.tagline2.textContent += text2[j] + '|';
  	  } else {
		    context.tagline2.textContent += text2[j];
  	  }

  	  j++;

  	  if (j < text2.length ) {
  	    var typing = setTimeout(next2, 100);
  	  }
  	}
  	next1();
  }

  render () {

  	const style = {
  	  body: {
	    "color": "white",
    	logo:{
	    	"fontSize": 28,
		    "fontFamily": "Fredoka One",
		    "letterSpacing": 1.5,
		    "fontWeight": 300,
		    "margin": 40
    	},
    	tagline: {
        "margin": 80,
	    	"fontSize": 44,
		    "fontWeight": 300,
		    "fontFamily": "Ubuntu",
    		"color": "rgb(225, 225, 225)",
    	},
    	cta: {
        "padding": 10,
		    "margin": 40,
		    "fontFamily": "Ubuntu",
	    	"fontSize": 24,
    	},
    	github: {
    		// height:"1.5em",
    		// margin: 10
    		"marginRight": '10px'
    	},
    	valueprops: {
    		"backgroundColor": "rgb(198, 61, 43)",
    		"padding": 40,
	    	"fontSize": 20,
		    "fontWeight": 300,
		    "fontFamily": "Ubuntu",
    		"color": "rgb(225, 225, 225)",
    	}
  	  },
  	}

		// {!this.props.userName ? <div className="text-center">
  //         <a href="" className="btn btn-default" style={style.body.cta}>
  //           <i className="fa fa-github fa-1x" style={style.body.github}/>Sign in with GitHub</a>
  //       </div>: <div></div>}

    return (
    	<div style={style.body}>
			<div id="taglineParent" className="text-center" ref={(c) => this.tagline = c}  style={style.body.tagline}>
				<div ref={(c) => this.tagline1 = c}></div>
				<div ref={(c) => this.tagline2 = c}></div>
        <br id="filler"></br>
			</div>

      {!this.props.userName && 
        <div>
    			<div className="text-center">
    				<a href="auth/github" className="btn btn-default" style={style.body.cta}>
    					<i className="fa fa-github fa-1x" style={style.body.github}/>Sign in with GitHub
            </a>
    			</div>
       

    			<div>
    				<div className="row" style={style.body.valueprops}>

    					<div className="col-md-4 text-center">
    						<i className="fa fa-keyboard-o fa-5x" aria-hidden="true"/>
    						<br></br>
    						Robust real-time collaborative editing
    					</div>

    					<div className="col-md-4 text-center">
    						<i className="fa fa-video-camera fa-5x" aria-hidden="true"/>
    						<br></br>
    						Video chat with your coding partner
    					</div>

    					<div className="col-md-4 text-center">
    						<i className="fa fa-laptop fa-5x" aria-hidden="true"/>
    						<br></br>
    						Execute the code in the same view
    					</div>

    				</div>
    			</div>
        </div>

         } 
         </div>
    );

  }
}


function mapStateToProps(state){
  return {
    userName: state.userReducer.userName,//<=== shouldnt have to do this...? 
    // myInserts: state.userReducer.myInserts, //<=== shouldnt have to do this...? 
    // socket: state.sessionReducer.socket 
  }
}

 export default connect(mapStateToProps)(LandingContainer)