webpackHotUpdate(0,{

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

/***/ }

})
//# sourceMappingURL=0.0ba798a8c9db699e12e5.hot-update.js.map