// ==UserScript==
// @name           Memrise Auto Accept Disabler
// @namespace      https://github.com/stream009
// @description    Disable auto accept feature on Memrise typing test
// @match          https://www.memrise.com/course/*/garden/*
// @match          https://www.memrise.com/garden/review/*
// @version        0.0.2
// @updateURL      https://github.com/stream009/greasemonkey_scripts/raw/master/MemriseDisableAutoAccept.user.js
// @downloadURL    https://github.com/stream009/greasemonkey_scripts/raw/master/MemriseDisableAutoAccept.user.js
// @grant          none
// ==/UserScript==

function wrap(obj, function_name, wrapper) {
  const orig = obj[function_name];

  obj[function_name] = function () {
    return wrapper.call(this, orig, arguments);
  };
}

wrap(MEMRISE.garden.box_mapping.typing.prototype,
  "bind",
  function (orig, args) {
    orig.apply(this, args);

    this.$input.onResponseChangedHandler = null;
  }
);
