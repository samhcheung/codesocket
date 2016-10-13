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

  componentWillReceiveProps(newProps) {

  }
  componentDidMount() {
   
  }

  componentWillUnmount() {
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
		    "margin": 40

    	},
    	github: {
    		height:"1.5em",
    	},
    	valueprops: {
	    	"fontSize": 20,
		    "fontWeight": 300,
		    "fontFamily": "Ubuntu",
    		"color": "rgb(225, 225, 225)",
    	}
  	  },
  	}
    return (
    	<div style={style.body}>
			<div className="text-center" style={style.body.logo}>CodeSocket</div> 
			<div className="text-center" style={style.body.tagline}>Real-time collaborative coding 
			<br></br>
			for your engineering team
			</div>

			<div className="text-center">
				<a href="" className="btn btn-default" style={style.body.cta}><span><img src={'../../public/assets/GitHub.png'} alt="img" className="img-responsive" style={style.body.github}/></span><span>Sign in with GitHub</span></a>
			</div>

			<div>
			<div className="row" style={style.body.valueprops}>

			<div className="col-md-4 text-center"><i className="fa fa-keyboard-o fa-5x" aria-hidden="true"/>
			<br></br>Robust real-time collaborative editing</div>
			<div className="col-md-4 text-center"><i className="fa fa-video-camera fa-5x" aria-hidden="true"/>
			<br></br>Video chat with your coding partner</div>
			<div className="col-md-4 text-center"><i className="fa fa-laptop fa-5x" aria-hidden="true"/>
			<br></br>
			Execute the code in one click</div>

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