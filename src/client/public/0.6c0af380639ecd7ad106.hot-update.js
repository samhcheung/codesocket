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
	
	var _container5 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../console/container\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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

/***/ }

})
//# sourceMappingURL=0.6c0af380639ecd7ad106.hot-update.js.map