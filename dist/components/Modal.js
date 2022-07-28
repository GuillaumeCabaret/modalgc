"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _employeeReducer = require("./app/employeeReducer");

var _store = require("./app/store");

function Modal() {
  const modal = (0, _reactRedux.useSelector)(state => state.modalVisibility);

  function closeModal() {
    _store.store.dispatch((0, _employeeReducer.modal_visibility)(false));
  }

  if (modal) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      class: "modal-background"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: closeModal
    }, "X"), /*#__PURE__*/React.createElement("p", null, " Employee added"))));
  } else {
    return null;
  }
}

var _default = Modal;
exports.default = _default;