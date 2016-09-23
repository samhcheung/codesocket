import React from 'react';
import {render} from 'react-dom';
import routes from './routes.jsx'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


const userInitialState = {
  userID: ''
}


function userReducer (state = userInitialState, action) {
	switch(action.type){
		case 'WATSON_QUERY_PERSONALITY' : {
		 return {
		   ...state, 
		   query: action.query
		 }
		}
		default : {
		 return state
		}
	}
}

const reducers = combineReducers({
 userReducer
});

const store = createStore(reducers);


class App extends React.Component {
  render () {
    return <p>Hello React!</p>;
  }
}

render(
	  <Provider store={store}>
	    {routes}
	  </Provider>
	  , document.getElementById('app')
	);

console.log('Hello World');
export default store