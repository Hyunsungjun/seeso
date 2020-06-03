"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index() {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement("title", null, "Index \uD398\uC774\uC9C0")), _react2.default.createElement("h1", null, "\uC548\uB155, Next.js"), _react2.default.createElement("h2", null, _react2.default.createElement(_link2.default, { href: "/about" }, _react2.default.createElement("a", { style: { background: "black", color: "white" } }, "\uC18C\uAC1C"))));
};

exports.default = Index;