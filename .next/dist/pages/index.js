'use strict';

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require("semantic-ui-react");

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