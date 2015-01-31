"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var select = require("./").select;



test("fp-select", function (t) {
  t.plan(4);
  var HTML = "\n    <ul data-foo=\"bar\" class=\"fruits\">\n    <li class=\"fruit\">apple</li>\n    <li class=\"fruit\">orange</li>\n    <li class=\"fruit\">plum</li>\n    </ul>\n  ";
  var fixture = document.createElement("div");
  fixture.innerHTML = HTML;
  document.body.appendChild(fixture);

  t.equal(typeof select(fixture), "function");
  t.equal(select(".fruits").length, 1);
  t.equal(select(fixture)(".fruits").length, 1);
  t.equal(!!select(null), true);
});