'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reduxActions = require('redux-actions');

var _user = require('../actions/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxActions.handleActions)({
  [_user2.default.login]: (state, action) => {
    return (0, _extends3.default)({}, state, action.payload);
  },
  [_user2.default.logout]: (state, action) => {
    return (0, _extends3.default)({}, state, action.payload);
  }
}, {});