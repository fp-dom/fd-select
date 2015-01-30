"use strict";

exports.select = select;
var doc = document.body,
    curry = require("fj-curry").curry,
    isDom = require("is-dom"),
    slice = [].slice,
    sliceIt = function (nodeList) {
  return slice.call(nodeList);
};

function select(dom, selector) {
  if (typeof dom === "string") {
    return sliceIt(doc.querySelectorAll(dom));
  }

  if (isDom(dom) && selector) {
    return sliceIt(dom.querySelectorAll(selector));
  }

  return curry(select)(dom);
}
exports.__esModule = true;