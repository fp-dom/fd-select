"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _toArray = function (arr) { return Array.isArray(arr) ? arr : Array.from(arr); };

exports.select = select;
var to5 = _interopRequireWildcard(require("6to5/browser-polyfill"));

var curry2 = require("fj-curry").curry2;
var isDom = _interopRequire(require("fd-isDom"));

var ifElse = _interopRequire(require("fj-ifelse"));

var and = _interopRequire(require("fj-and"));




function isString(obj) {
  return function () {
    return typeof obj === "string";
  };
}

function wrongType() {
  throw new TypeError();
}

function select(dom, selector) {
  return ifElse(isString(dom), function () {
    return [].concat(_toArray(document.querySelectorAll(dom)));
  }, function () {
    return ifElse(and(isDom(dom), function () {
      return !!selector;
    }), function () {
      return [].concat(_toArray(dom.querySelectorAll(selector)));
    }, function () {
      return ifElse(isDom(dom), function () {
        return curry2(select)(dom);
      }, wrongType);
    });
  });
}
exports.__esModule = true;