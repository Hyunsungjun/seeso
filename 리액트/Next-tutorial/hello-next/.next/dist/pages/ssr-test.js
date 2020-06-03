"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("next/node_modules/babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("next/node_modules/babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("next/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SSRTest = function (_React$Component) {
  (0, _inherits3.default)(SSRTest, _React$Component);

  function SSRTest() {
    (0, _classCallCheck3.default)(this, SSRTest);

    return (0, _possibleConstructorReturn3.default)(this, (SSRTest.__proto__ || (0, _getPrototypeOf2.default)(SSRTest)).apply(this, arguments));
  }

  (0, _createClass3.default)(SSRTest, [{
    key: "render",
    value: function render() {
      var users = this.props.users;

      var userList = users.map(function (user) {
        return _react2.default.createElement("li", { key: user.id }, user.username);
      });

      return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement("ul", null, userList));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios2.default.get("https://jsonplaceholder.typicode.com/users");

              case 2:
                response = _context.sent;
                return _context.abrupt("return", {
                  users: response.data
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return SSRTest;
}(_react2.default.Component);

exports.default = SSRTest;