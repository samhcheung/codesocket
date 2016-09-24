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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 394);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 480);
	
	var _presentation = __webpack_require__(/*! ./presentation.js */ 511);
	
	var _presentation2 = _interopRequireDefault(_presentation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DocContainer = function (_React$Component) {
	  _inherits(DocContainer, _React$Component);
	
	  function DocContainer() {
	    _classCallCheck(this, DocContainer);
	
	    return _possibleConstructorReturn(this, (DocContainer.__proto__ || Object.getPrototypeOf(DocContainer)).apply(this, arguments));
	  }
	
	  _createClass(DocContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //console.log('it hit componentDidMount =====>', this.state.user, this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(DocContainer, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'body-container' },
	          _react2.default.createElement(HomePresentation, null),
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return DocContainer;
	}(_react2.default.Component);
	
	DocContainer.propTypes = {};
	
	
	function mapStateToProps(state) {
	  return {
	    // isLoggedIn: state.userReducer.isLoggedIn //<=== shouldnt have to do this...? 
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(DocContainer);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(DocContainer, 'DocContainer', '/Users/eggie/codesocket/src/client/app/doc/container.js');
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/eggie/codesocket/src/client/app/doc/container.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/eggie/codesocket/src/client/app/doc/container.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=0.c4e5c064f4c295e226ff.hot-update.js.map