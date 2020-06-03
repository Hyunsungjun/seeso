"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkStyle = {
  marginRight: "1rem"
};
var Header = function Header() {
  return _react2.default.createElement("div", null, _react2.default.createElement(_link2.default, { href: "/" }, _react2.default.createElement("a", { style: linkStyle }, "\uD648")), _react2.default.createElement(_link2.default, { href: "/about" }, _react2.default.createElement("a", { style: linkStyle }, "\uC18C\uAC1C")), _react2.default.createElement(_link2.default, { prefetch: true, href: "/ssr-test" }, _react2.default.createElement("a", { style: linkStyle }, "SSR \uD14C\uC2A4\uD2B8")));
};

exports.default = Header;