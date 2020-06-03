'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search(_ref) {
    var url = _ref.url;

    return _react2.default.createElement(_Layout2.default, null, '\uB2F9\uC2E0\uC774 \uAC80\uC0C9\uD55C \uD0A4\uC6CC\uB4DC\uB294 "', url.query.keyword, '" \uC785\uB2C8\uB2E4.');
};

exports.default = Search;