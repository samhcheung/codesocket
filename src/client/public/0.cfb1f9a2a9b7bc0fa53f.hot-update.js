webpackHotUpdate(0,{

/***/ 254:
/*!**********************************!*\
  !*** ./src/client/app/index.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 255);
	
	var _routes = __webpack_require__(/*! ./routes.jsx */ 393);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _redux = __webpack_require__(/*! redux */ 487);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 480);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var userInitialState = {
		userName: 'Dani'
	};
	
	function userReducer() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? userInitialState : arguments[0];
		var action = arguments[1];
	
		switch (action.type) {
			case 'UPDATE_USER':
				{
					return _extends({}, state, {
						userName: action.userName
					});
				}
			default:
				{
					return state;
				}
		}
	}
	
	var reducers = (0, _redux.combineReducers)({
		userReducer: userReducer
	});
	
	var store = (0, _redux.createStore)(reducers);
	
	(0, _reactDom.render)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_routes2.default
	), document.getElementById('app'));
	
	console.log('Hello World');
	var _default = store;
	exports.default = _default;
	;
	
	var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
			return;
		}
	
		__REACT_HOT_LOADER__.register(userInitialState, 'userInitialState', '/Users/eggie/codesocket/src/client/app/index.jsx');
	
		__REACT_HOT_LOADER__.register(userReducer, 'userReducer', '/Users/eggie/codesocket/src/client/app/index.jsx');
	
		__REACT_HOT_LOADER__.register(reducers, 'reducers', '/Users/eggie/codesocket/src/client/app/index.jsx');
	
		__REACT_HOT_LOADER__.register(store, 'store', '/Users/eggie/codesocket/src/client/app/index.jsx');
	
		__REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/index.jsx');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.cfb1f9a2a9b7bc0fa53f.hot-update.js.map