webpackHotUpdate(0,{

/***/ 393:
/*!***********************************!*\
  !*** ./src/client/app/routes.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 394);
	
	var _axios = __webpack_require__(/*! axios */ 457);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _container = __webpack_require__(/*! ./home/container */ 479);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//File contains the route setup to be exported to be used by App.js
	var routes = _react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.hashHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _container2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: GoogleMapContainer }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/user/profile', component: ProfileContainer })
	  )
	);
	
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

/***/ 479:
/*!******************************************!*\
  !*** ./src/client/app/home/container.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 394);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 480);
	
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
	        'Heyyy',
	        _react2.default.createElement(NavContainer, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'body-container' },
	          this.props.children
	        )
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
//# sourceMappingURL=0.4bbc2bcffa4850c50a2f.hot-update.js.map