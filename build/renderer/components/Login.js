'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Login = (_temp2 = _class = class Login extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      username: ''
    }, this.handleLogin = () => {
      this.props.onLogin({
        username: this.state.username,
        loggedIn: true
      });
    }, this.handleChange = e => {
      this.setState({
        username: e.target.value
      });
    }, _temp;
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Login'
      ),
      _react2.default.createElement('input', { onChange: this.handleChange, type: 'text', value: this.state.username }),
      _react2.default.createElement(
        'button',
        { onClick: this.handleLogin },
        'Log In'
      )
    );
  }
}, _class.propTypes = {
  onLogin: _propTypes2.default.func.isRequired
}, _temp2);
exports.default = Login;