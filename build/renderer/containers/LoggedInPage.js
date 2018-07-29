'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _redux = require('redux');

var _LoggedIn = require('../components/LoggedIn');

var _LoggedIn2 = _interopRequireDefault(_LoggedIn);

var _user = require('../actions/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  const user = (0, _redux.bindActionCreators)(_user2.default, dispatch);
  return {
    onLogout: data => {
      user.logout(data);
      dispatch((0, _reactRouterRedux.push)('/'));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoggedIn2.default);