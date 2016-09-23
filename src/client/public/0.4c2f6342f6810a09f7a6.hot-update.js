webpackHotUpdate(0,{

/***/ 77:
/*!**********************************!*\
  !*** ./src/client/app/index.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 78);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 110);
	
	var _routes = __webpack_require__(/*! ./routes.jsx */ 275);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _redux = __webpack_require__(/*! redux */ 248);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 262);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reducers = (0, _redux.combineReducers)({});
	
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
	
		__REACT_HOT_LOADER__.register(reducers, 'reducers', '/Users/eggie/codesocket/src/client/app/index.jsx');
	
		__REACT_HOT_LOADER__.register(store, 'store', '/Users/eggie/codesocket/src/client/app/index.jsx');
	
		__REACT_HOT_LOADER__.register(App, 'App', '/Users/eggie/codesocket/src/client/app/index.jsx');
	
		__REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/index.jsx');
	}();

	;

/***/ },

/***/ 275:
/*!***********************************!*\
  !*** ./src/client/app/routes.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 78);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _axios = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"axios\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _container = __webpack_require__(/*! ./home/container */ 276);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//File contains the route setup to be exported to be used by App.js
	var routes = _react2.default.createElement(_reactRouter.Route, { path: '/', component: _container2.default });
	
	var _default = routes;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(routes, 'routes', '/Users/eggie/codesocket/src/client/app/routes.jsx');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/routes.jsx');
	}();

	;

/***/ },

/***/ 276:
/*!******************************************!*\
  !*** ./src/client/app/home/container.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 78);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-router\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 262);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HomeContainer = function (_React$Component) {
	  _inherits(HomeContainer, _React$Component);
	
	  function HomeContainer() {
	    _classCallCheck(this, HomeContainer);
	
	    return _possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).apply(this, arguments));
	  }
	
	  _createClass(HomeContainer, [{
	    key: 'componentDidMount',
	
	
	    // componentWillMount() {
	    //   console.log(this.props, 'will mount props');
	    // } 
	
	    value: function componentDidMount() {
	      //console.log('it hit componentDidMount =====>', this.state.user, this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        'Heyyy'
	      );
	    }
	  }]);
	
	  return HomeContainer;
	}(_react2.default.Component);
	
	HomeContainer.propTypes = {};
	
	
	function mapStateToProps(state) {
	  return {
	    // isLoggedIn: state.userReducer.isLoggedIn //<=== shouldnt have to do this...? 
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(HomeContainer);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(HomeContainer, 'HomeContainer', '/Users/eggie/codesocket/src/client/app/home/container.js');
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/eggie/codesocket/src/client/app/home/container.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/home/container.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.4c2f6342f6810a09f7a6.hot-update.js.map