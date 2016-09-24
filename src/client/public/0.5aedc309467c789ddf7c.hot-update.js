webpackHotUpdate(0,{

/***/ 512:
/*!*******************************************!*\
  !*** ./src/client/app/home/container.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 394);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 480);
	
	var _container = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../nav/container\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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
	
	  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/eggie/codesocket/src/client/app/home/container.jsx');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/home/container.jsx');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.5aedc309467c789ddf7c.hot-update.js.map