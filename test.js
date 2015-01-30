"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var select = require("./").select;



test("fp-select", function (t) {
  t.plan(1);
  var HTML = "<textarea style=\"width:300px; height:200px\"></textarea>\n  <ul data-foo=\"bar\" class=\"fruits\">\n  <li class=\"fruit\">apple</li>\n  <li class=\"fruit\">orange</li>\n  <li class=\"fruit\">plum</li>\n  </ul>";
  var fixture = document.createElement("div");
  fixture.innerHTML = HTML;
  document.body.appendChild(fixture);
  t.equal(select(fixture)(".fruits").attr("data-foo"), "bar");
});