"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function Modal(props) {
  if (props.isOpen) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      class: "modal-background"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: props.closeModal
    }, "X"), /*#__PURE__*/React.createElement("p", null, " Employee added"))));
  } else {
    return null;
  }
}

var _default = Modal;
exports.default = _default;