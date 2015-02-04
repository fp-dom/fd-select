"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.select = select;
var curry2 = require("fj-curry").curry2;
var isDom = _interopRequire(require("fd-isDom"));

var ifElse = _interopRequire(require("fj-ifelse"));

var and = _interopRequire(require("fj-and"));




function of(arr) {
  return Array.prototype.slice.call(arr);
}

function isString() {
  return function (obj) {
    return typeof obj === "string";
  };
}

function wrongType() {
  throw new TypeError();
}

function select(dom, selector) {
  return ifElse(isString(), function () {
    return of(document.querySelectorAll(dom));
  }, function (dom) {
    return ifElse(and(isDom(), function () {
      return !!selector;
    }), function () {
      return of(dom.querySelectorAll(selector));
    }, function (dom) {
      return ifElse(isDom(), function () {
        return curry2(select)(dom);
      }, wrongType)(dom);
    })(dom);
  })(dom);
}
exports.__esModule = true;