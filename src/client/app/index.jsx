import React from 'react';
import {render} from 'react-dom';
import routes from './routes.jsx';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/userreducer';
import sessionReducer from './reducers/sessionreducer';

const reducers = combineReducers({
 userReducer,
 sessionReducer
});

const store = createStore(reducers);


render(
	  <Provider store={store}>
	    {routes}
	  </Provider>
	  , document.getElementById('app')
	);

console.log('Hello World');
export default store