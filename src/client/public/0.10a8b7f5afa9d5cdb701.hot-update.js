webpackHotUpdate(0,{

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
	    _react2.default.createElement('textarea', { cols: '20', rows: '10', id: 'editor' }),
	    _react2.default.createElement(
	      'button',
	      { onClick: function onClick(e) {
	          return props.runCode(e);
	        }, id: 'run' },
	      'Run the code!'
	    ),
	    _react2.default.createElement(
	      'button',
	      { id: 'save' },
	      'Save the code!'
	    ),
	    _react2.default.createElement('div', { id: 'test' })
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
//# sourceMappingURL=0.10a8b7f5afa9d5cdb701.hot-update.js.map