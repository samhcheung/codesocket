webpackHotUpdate(0,{

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
	
	var _container3 = __webpack_require__(/*! ../video/container */ 516);
	
	var _container4 = _interopRequireDefault(_container3);
	
	var _container5 = __webpack_require__(/*! ../console/container */ 518);
	
	var _container6 = _interopRequireDefault(_container5);
	
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
	        _react2.default.createElement(_container4.default, null)
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_container2.default, null)
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_container6.default, null)
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

/***/ 518:
/*!*********************************************!*\
  !*** ./src/client/app/console/container.js ***!
  \*********************************************/
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
	
	var _presentation = __webpack_require__(/*! ./presentation */ 519);
	
	var _presentation2 = _interopRequireDefault(_presentation);
	
	var _axios = __webpack_require__(/*! axios */ 457);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ConsoleContainer = function (_React$Component) {
	  _inherits(ConsoleContainer, _React$Component);
	
	  function ConsoleContainer() {
	    _classCallCheck(this, ConsoleContainer);
	
	    return _possibleConstructorReturn(this, (ConsoleContainer.__proto__ || Object.getPrototypeOf(ConsoleContainer)).apply(this, arguments));
	  }
	
	  _createClass(ConsoleContainer, [{
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
	
	  return ConsoleContainer;
	}(_react2.default.Component);
	
	ConsoleContainer.propTypes = {};
	
	
	function mapStateToProps(state) {
	  return {
	    userName: state.userReducer.userName //<=== shouldnt have to do this...? 
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(ConsoleContainer);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(ConsoleContainer, 'ConsoleContainer', '/Users/eggie/codesocket/src/client/app/console/container.js');
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/eggie/codesocket/src/client/app/console/container.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/console/container.js');
	}();

	;

/***/ },

/***/ 519:
/*!************************************************!*\
  !*** ./src/client/app/console/presentation.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 394);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ConsolePresentation = function ConsolePresentation(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'loadingscreen' },
	    'I am the console!!!'
	  );
	};
	
	var _default = ConsolePresentation;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(ConsolePresentation, 'ConsolePresentation', '/Users/eggie/codesocket/src/client/app/console/presentation.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/console/presentation.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.2cafe29260bd443c8b44.hot-update.js.map