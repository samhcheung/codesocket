import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import DocPresentation from './presentation.js'

class DocContainer extends React.Component {

  static propTypes = {
  };

  componentDidMount() {
    console.log('in doc container')
    //console.log('it hit componentDidMount =====>', this.state.user, this.props);
  }

  render() {
    return(
      <div>
        <div className="body-container">heyyyyyy
          <DocPresentation />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    // isLoggedIn: state.userReducer.isLoggedIn //<=== shouldnt have to do this...? 
  }
}

export default connect(mapStateToProps)(DocContainer)
