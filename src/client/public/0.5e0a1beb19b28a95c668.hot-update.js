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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 255);
	
	var _routes = __webpack_require__(/*! ./routes.jsx */ 393);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _redux = __webpack_require__(/*! redux */ 487);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 480);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var userInitialState = {
		userID: ''
	};
	
	function userReducer() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? userInitialState : arguments[0];
		var action = arguments[1];
	
		switch (action.type) {
			case 'WATSON_QUERY_PERSONALITY':
				{
					return _extends({}, state, {
						query: action.query
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
	
	var App = function (_React$Component) {
		_inherits(App, _React$Component);
	
		function App() {
			_classCallCheck(this, App);
	
			return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
		}
	
		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'p',
					null,
					'Hello React!'
				);
			}
		}]);
	
		return App;
	}(_react2.default.Component);
	
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
	
		__REACT_HOT_LOADER__.register(App, 'App', '/Users/eggie/codesocket/src/client/app/index.jsx');
	
		__REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/index.jsx');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.5e0a1beb19b28a95c668.hot-update.js.map