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
	
	var _container = __webpack_require__(/*! ./home/container.jsx */ 512);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _container3 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./doc/container.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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

/***/ }

})
//# sourceMappingURL=0.2ef7818924ab25e12921.hot-update.js.map