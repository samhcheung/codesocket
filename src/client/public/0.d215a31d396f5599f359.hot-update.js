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
	
	var _container3 = __webpack_require__(/*! ./doc/container */ 510);
	
	var _container4 = _interopRequireDefault(_container3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var routes = _react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.hashHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _container2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: '/doc', component: _container4.default })
	  )
	); //File contains the route setup to be exported to be used by App.js
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
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 394);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 480);
	
	var _container = __webpack_require__(/*! ../nav/container */ 508);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Home = function Home(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_container2.default, null),
	    _react2.default.createElement(
	      'main',
	      null,
	      props.children
	    )
	  );
	};
	
	var _default = Home;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/eggie/codesocket/src/client/app/home/container.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/home/container.js');
	}();

	;

/***/ },

/***/ 508:
/*!*****************************************!*\
  !*** ./src/client/app/nav/container.js ***!
  \*****************************************/
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
	
	var _presentation = __webpack_require__(/*! ./presentation */ 509);
	
	var _presentation2 = _interopRequireDefault(_presentation);
	
	var _axios = __webpack_require__(/*! axios */ 457);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavContainer = function (_React$Component) {
	  _inherits(NavContainer, _React$Component);
	
	  function NavContainer() {
	    _classCallCheck(this, NavContainer);
	
	    return _possibleConstructorReturn(this, (NavContainer.__proto__ || Object.getPrototypeOf(NavContainer)).apply(this, arguments));
	  }
	
	  _createClass(NavContainer, [{
	    key: 'componentDidMount',
	
	
	    // componentWillMount() {
	    // } 
	
	    value: function componentDidMount() {
	      //console.log('it hit componentDidMount =====>', this.state.user, this.props);
	    }
	  }, {
	    key: 'addDoc',
	    value: function addDoc() {
	      console.log('==================props', this.props);
	      var name = prompt('What\'s your name?');
	      this.props.dispatch({
	        type: 'UPDATE_USER',
	        userName: name
	      });
	
	      // axios.get()
	      _reactRouter.hashHistory.push('/doc');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'body-container' },
	          _react2.default.createElement(_presentation2.default, { addDoc: this.addDoc.bind(this), userName: this.props.userName })
	        )
	      );
	    }
	  }]);
	
	  return NavContainer;
	}(_react2.default.Component);
	
	NavContainer.propTypes = {};
	
	
	function mapStateToProps(state) {
	  return {
	    userName: state.userReducer.userName //<=== shouldnt have to do this...? 
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(NavContainer);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(NavContainer, 'NavContainer', '/Users/eggie/codesocket/src/client/app/nav/container.js');
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/eggie/codesocket/src/client/app/nav/container.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/nav/container.js');
	}();

	;

/***/ },

/***/ 509:
/*!********************************************!*\
  !*** ./src/client/app/nav/presentation.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 394);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavPresentation = function NavPresentation(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'loadingscreen' },
	    _react2.default.createElement(
	      'ul',
	      null,
	      _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          null,
	          'Rooms'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        { onClick: function onClick(e) {
	            return props.addDoc(e);
	          } },
	        _react2.default.createElement(
	          'button',
	          null,
	          'Add New Doc'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        null,
	        props.userName
	      ),
	      _react2.default.createElement(
	        'li',
	        null,
	        'History'
	      )
	    )
	  );
	};
	
	var _default = NavPresentation;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(NavPresentation, 'NavPresentation', '/Users/eggie/codesocket/src/client/app/nav/presentation.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/nav/presentation.js');
	}();

	;

/***/ },

/***/ 510:
/*!*****************************************!*\
  !*** ./src/client/app/doc/container.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 394);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 480);
	
	var _container = __webpack_require__(/*! ../editor/container */ 514);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DocContainer = function DocContainer(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'body-container' },
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_container2.default, null)
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_container2.default, null)
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_container2.default, null)
	      )
	    )
	  );
	};
	
	var _default = DocContainer;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(DocContainer, 'DocContainer', '/Users/eggie/codesocket/src/client/app/doc/container.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/doc/container.js');
	}();

	;

/***/ },

/***/ 514:
/*!********************************************!*\
  !*** ./src/client/app/editor/container.js ***!
  \********************************************/
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
	
	var _presentation = __webpack_require__(/*! ./presentation */ 515);
	
	var _presentation2 = _interopRequireDefault(_presentation);
	
	var _axios = __webpack_require__(/*! axios */ 457);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EditorContainer = function (_React$Component) {
	  _inherits(EditorContainer, _React$Component);
	
	  function EditorContainer() {
	    _classCallCheck(this, EditorContainer);
	
	    return _possibleConstructorReturn(this, (EditorContainer.__proto__ || Object.getPrototypeOf(EditorContainer)).apply(this, arguments));
	  }
	
	  _createClass(EditorContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'body-container' },
	          _react2.default.createElement(_presentation2.default, { userName: this.props.userName })
	        )
	      );
	    }
	  }]);
	
	  return EditorContainer;
	}(_react2.default.Component);
	
	EditorContainer.propTypes = {};
	
	
	function mapStateToProps(state) {
	  return {
	    userName: state.userReducer.userName //<=== shouldnt have to do this...? 
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(EditorContainer);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(EditorContainer, 'EditorContainer', '/Users/eggie/codesocket/src/client/app/editor/container.js');
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/eggie/codesocket/src/client/app/editor/container.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/editor/container.js');
	}();

	;

/***/ },

/***/ 515:
/*!***********************************************!*\
  !*** ./src/client/app/editor/presentation.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 394);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EditorPresentation = function EditorPresentation(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'loadingscreen' },
	    _react2.default.createElement('textarea', { rows: '10', cols: '50' })
	  );
	};
	
	var _default = EditorPresentation;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(EditorPresentation, 'EditorPresentation', '/Users/eggie/codesocket/src/client/app/editor/presentation.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/editor/presentation.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.d215a31d396f5599f359.hot-update.js.map