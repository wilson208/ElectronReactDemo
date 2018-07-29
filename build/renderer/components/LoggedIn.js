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

let LoggedIn = (_temp2 = _class = class LoggedIn extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleLogout = () => {
      this.props.onLogout({
        username: '',
        loggedIn: false
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
        'Logged in as ',
        this.props.user.username
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.handleLogout },
        'Logout'
      )
    );
  }
}, _class.propTypes = {
  onLogout: _propTypes2.default.func.isRequired
}, _temp2);
exports.default = LoggedIn;