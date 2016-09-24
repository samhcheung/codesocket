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
	
	var _container5 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../container/container\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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

/***/ 516:
/*!*******************************************!*\
  !*** ./src/client/app/video/container.js ***!
  \*******************************************/
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
	
	var _presentation = __webpack_require__(/*! ./presentation */ 517);
	
	var _presentation2 = _interopRequireDefault(_presentation);
	
	var _axios = __webpack_require__(/*! axios */ 457);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var VideoContainer = function (_React$Component) {
	  _inherits(VideoContainer, _React$Component);
	
	  function VideoContainer() {
	    _classCallCheck(this, VideoContainer);
	
	    return _possibleConstructorReturn(this, (VideoContainer.__proto__ || Object.getPrototypeOf(VideoContainer)).apply(this, arguments));
	  }
	
	  _createClass(VideoContainer, [{
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
	
	  return VideoContainer;
	}(_react2.default.Component);
	
	VideoContainer.propTypes = {};
	
	
	function mapStateToProps(state) {
	  return {
	    userName: state.userReducer.userName //<=== shouldnt have to do this...? 
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(VideoContainer);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(VideoContainer, 'VideoContainer', '/Users/eggie/codesocket/src/client/app/video/container.js');
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/eggie/codesocket/src/client/app/video/container.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/video/container.js');
	}();

	;

/***/ },

/***/ 517:
/*!**********************************************!*\
  !*** ./src/client/app/video/presentation.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 394);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VideoPresentation = function VideoPresentation(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'loadingscreen' },
	    _react2.default.createElement('img', { alt: 'HAPPY VIDEO' })
	  );
	};
	
	var _default = VideoPresentation;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(VideoPresentation, 'VideoPresentation', '/Users/eggie/codesocket/src/client/app/video/presentation.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/video/presentation.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.dfbed99d31dfc58147ee.hot-update.js.map