webpackHotUpdate(5,{

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = __webpack_require__(609);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var FormExampleCaptureValues = function (_Component) {
  _inherits(FormExampleCaptureValues, _Component);

  function FormExampleCaptureValues(props) {
    _classCallCheck(this, FormExampleCaptureValues);

    var _this = _possibleConstructorReturn(this, (FormExampleCaptureValues.__proto__ || Object.getPrototypeOf(FormExampleCaptureValues)).call(this, props));

    _this.handleChange = function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;
      return _this.setState(_defineProperty({}, name, value));
    };

    _this.handleSubmit = function () {
      var _this$state = _this.state,
          name = _this$state.name,
          email = _this$state.email;

      _this.setState({ submittedName: name, submittedEmail: email });
    };

    _this.state = { name: '', email: '', submittedName: '', submittedEmail: '' };
    return _this;
  }

  _createClass(FormExampleCaptureValues, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          name = _state.name,
          email = _state.email,
          submittedName = _state.submittedName,
          submittedEmail = _state.submittedEmail;

      return _react2.default.createElement(_semanticUiReact.Container, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' })), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.handleSubmit }, _react2.default.createElement(_semanticUiReact.Form.Group, null, _react2.default.createElement(_semanticUiReact.Form.Input, { placeholder: 'Name', name: 'name', value: name, onChange: this.handleChange }), _react2.default.createElement(_semanticUiReact.Form.Input, { placeholder: 'Email', name: 'email', value: email, onChange: this.handleChange }), _react2.default.createElement(_semanticUiReact.Form.Button, { content: 'Submit' }))), _react2.default.createElement('strong', null, 'onChange:'), _react2.default.createElement('pre', null, JSON.stringify({ name: name, email: email }, null, 2)), _react2.default.createElement('strong', null, 'onSubmit:'), _react2.default.createElement('pre', null, JSON.stringify({ submittedName: submittedName, submittedEmail: submittedEmail }, null, 2)));
    }
  }]);

  return FormExampleCaptureValues;
}(_react.Component);

exports.default = FormExampleCaptureValues;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtRXhhbXBsZUNhcHR1cmVWYWx1ZXMiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJzZXRTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsInN0YXRlIiwiZW1haWwiLCJzdWJtaXR0ZWROYW1lIiwic3VibWl0dGVkRW1haWwiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLEE7c0NBQ0o7O29DQUFZLEFBQVosT0FBbUI7MEJBQUE7O29KQUNYLEFBRFc7O1VBS25CLEFBTG1CLGVBS0osVUFBQyxBQUFELFNBQUE7VUFBTSxBQUFOLFlBQU0sQUFBTjtVQUFZLEFBQVosYUFBWSxBQUFaO2FBQXdCLE1BQUssQUFBTCw2QkFBaUIsQUFBakIsTUFBd0IsQUFBeEIsQUFBeEI7QUFMSTs7VUFPbkIsQUFQbUIsZUFPSixZQUFNO3dCQUNLLE1BQUssQUFEVjtVQUNYLEFBRFcsbUJBQ1gsQUFEVztVQUNMLEFBREssb0JBQ0wsQUFESyxBQUduQjs7WUFBSyxBQUFMLFNBQWMsRUFBRSxlQUFlLEFBQWpCLE1BQXVCLGdCQUFnQixBQUF2QyxBQUFkLEFBQ0Q7QUFYa0IsQUFFakI7O1VBQUssQUFBTCxRQUFhLEVBQUUsTUFBTSxBQUFSLElBQVksT0FBTyxBQUFuQixJQUF1QixlQUFlLEFBQXRDLElBQTBDLGdCQUFnQixBQUExRCxBQUFiLEFBRmlCO1dBR2xCOzs7Ozs2QkFVUTttQkFDZ0QsS0FBSyxBQURyRDtVQUNDLEFBREQsY0FDQyxBQUREO1VBQ08sQUFEUCxlQUNPLEFBRFA7VUFDYyxBQURkLHVCQUNjLEFBRGQ7VUFDNkIsQUFEN0Isd0JBQzZCLEFBRDdCLEFBR1A7O2FBQ0UsZ0JBQUEsK0JBQUEsV0FDRSxzQkFBQSxxQkFBQSxTQUNFLDhDQUFNLEtBQUksQUFBVixjQUF1QixNQUFLLEFBQTVCLEFBREYsQUFERixBQUlFLDJGQUFBLCtCQUFBLFFBQU0sVUFBVSxLQUFLLEFBQXJCLEFBQ0UsZ0NBQUEsb0NBQU0sQUFBTixPQUNFLDBEQUFNLEFBQU4sU0FBWSxhQUFZLEFBQXhCLFFBQStCLE1BQUssQUFBcEMsUUFBMkMsT0FBTyxBQUFsRCxNQUF3RCxVQUFVLEtBQUssQUFBdkUsQUFERixBQUVFLHFFQUFNLEFBQU4sU0FBWSxhQUFZLEFBQXhCLFNBQWdDLE1BQUssQUFBckMsU0FBNkMsT0FBTyxBQUFwRCxPQUEyRCxVQUFVLEtBQUssQUFBMUUsQUFGRixBQUdFLHFFQUFNLEFBQU4sVUFBYSxTQUFRLEFBQXJCLEFBSEYsQUFERixBQUpGLEFBV0UsK0JBQUEsY0FBQSxVQUFBLE1BQUEsQUFYRixBQVlFLDhCQUFBLGNBQUEsT0FBTSxXQUFLLEFBQUwsVUFBZSxFQUFFLE1BQUYsTUFBUSxPQUFSLEFBQWYsU0FBZ0MsQUFBaEMsTUFBc0MsQUFBdEMsQUFBTixBQVpGLEFBYUUscUJBQUEsY0FBQSxVQUFBLE1BQUEsQUFiRixBQWNFLDhCQUFBLGNBQUEsT0FBTSxXQUFLLEFBQUwsVUFBZSxFQUFFLGVBQUYsZUFBaUIsZ0JBQWpCLEFBQWYsa0JBQWtELEFBQWxELE1BQXdELEFBQXhELEFBQU4sQUFkRixBQURGLEFBa0JEOzs7Ozs7O2tCQUdZLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovbXlQcm9qZWN0L1NlbmlvciBQcm9qZWN0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\myProject\\Senior Project\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\myProject\\Senior Project\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hM2RkZTAxMjFjZTJhYjhmZjkzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ODQwNWVmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRm9ybSwgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5jbGFzcyBGb3JtRXhhbXBsZUNhcHR1cmVWYWx1ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBuYW1lOiAnJywgZW1haWw6ICcnLCBzdWJtaXR0ZWROYW1lOiAnJywgc3VibWl0dGVkRW1haWw6ICcnIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChlLCB7IG5hbWUsIHZhbHVlIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IHZhbHVlIH0pXHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0dGVkTmFtZTogbmFtZSwgc3VibWl0dGVkRW1haWw6IGVtYWlsIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBzdWJtaXR0ZWROYW1lLCBzdWJtaXR0ZWRFbWFpbCB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4yL3NlbWFudGljLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgcGxhY2Vob2xkZXI9J05hbWUnIG5hbWU9J25hbWUnIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IHBsYWNlaG9sZGVyPSdFbWFpbCcgbmFtZT0nZW1haWwnIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5CdXR0b24gY29udGVudD0nU3VibWl0JyAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8c3Ryb25nPm9uQ2hhbmdlOjwvc3Ryb25nPlxyXG4gICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHsgbmFtZSwgZW1haWwgfSwgbnVsbCwgMil9PC9wcmU+XHJcbiAgICAgICAgPHN0cm9uZz5vblN1Ym1pdDo8L3N0cm9uZz5cclxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeSh7IHN1Ym1pdHRlZE5hbWUsIHN1Ym1pdHRlZEVtYWlsIH0sIG51bGwsIDIpfTwvcHJlPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1FeGFtcGxlQ2FwdHVyZVZhbHVlc1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9