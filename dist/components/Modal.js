"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(props) {
  if (props.isOpen) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-background"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: props.closeModal
    }, "X"), /*#__PURE__*/_react.default.createElement("p", null, " Employee added"))));
  } else {
    return null;
  }
}

var _default = Modal;
exports.default = _default;