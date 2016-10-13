import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
// import ConsoleContainer from '../console/container';
import axios from 'axios'

export class LandingContainer extends React.Component {

  constructor (props) {
    super(props);
  }

  componentWillMount() {
  	// document.body.style.backgroundColor = 'rgb(30,30,30)'
  	// document.body.style.backgroundColor = 'rgb(13,1132,12)'
  	document.body.style.backgroundColor = 'rgb(38, 38, 38)'
  }
  componentDidMount() {
  	this.type();
  }

  type() {
  	console.log('in type')
  	var context = this;
	  	context.tagline1.textContent = '|';
	  	var text1 = 'Real-time collaborative coding';
	  	var text2 = 'for your engineering team';
  	var i = 0;
  	var j = 0;

  	function next1() {
  		context.tagline1.textContent = context.tagline1.textContent.slice(0, context.tagline1.textContent.length - 1);
  	  if(i !== text1.length - 1){
  	  	context.tagline1.textContent += text1[i] + '|';
  	  } else {
		context.tagline1.textContent += text1[i];
  	  }

  	  if(i === 5){
	  	context.tagline2.textContent = '|';
  	  	next2();
  	  }

  	  i++;

  	  if (i < text1.length ) {
  	  	console.log('i', i)
  	    var typing = setTimeout(next1, 100);
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
  	  	console.log('j', j)
  	    var typing = setTimeout(next2, 100);
  	  }
  	  
  	}

  	next1();

	  	// clearTimeout(typing);


  	  //   window.counter++;
  	  //   var char = Math.floor(Math.random()*10) + '';
  	  //   var index = Math.floor(Math.random() * (this.props.quill.getText().length -2)) + 1;
  	  //   console.log('=================GET TEXT', this.props.quill.getText(), this.props.quill.getText().length)
  	  //   var op = [{retain: index}, {insert: char}];
  	  //   if(window.counter=== 10) {
  	  //     window.counter = 0;
  	  //   }
  	  //   var op = [{retain: 2}, {insert: ''+window.counter}];

  	  //   console.log('op', op)

  	  //   this.props.quill.updateContents({ops: op}, 'user');
  	  // }
  	  // var freq = Math.floor(Math.random()*500 + 300)
  	  // this.typenow = setInterval(starttyping.bind(this), freq);
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
	    	"fontSize": 44,
		    "fontWeight": 300,
		    "fontFamily": "Ubuntu",
    		"color": "rgb(225, 225, 225)",
    	},
    	cta: {
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
  	// Real-time collaborative coding
  	// for your engineering team
    return (
    	<div style={style.body}>
			<div className="text-center" style={style.body.logo}>CodeSocket</div> 
			<div className="text-center" ref={(c) => this.tagline = c}  style={style.body.tagline}>
				<div ref={(c) => this.tagline1 = c}></div>
				<div ref={(c) => this.tagline2 = c}></div>
			
			</div>

			<div className="text-center">
				<a href="" className="btn btn-default" style={style.body.cta}>
					<i className="fa fa-github fa-1x" style={style.body.github}/>Sign in with GitHub</a>
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
						Execute the code in one click
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
    // userName: state.userReducer.userName,//<=== shouldnt have to do this...? 
    // myInserts: state.userReducer.myInserts, //<=== shouldnt have to do this...? 
    // socket: state.sessionReducer.socket 
  }
}

 export default connect(mapStateToProps)(LandingContainer)