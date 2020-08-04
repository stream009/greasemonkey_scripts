// ==UserScript==
// @name           Memrise Auto Accept Disabler
// @namespace      https://github.com/stream009
// @description    Disable auto accept feature on Memrise typing test
// @match          https://www.memrise.com/course/*/garden/*
// @match          https://www.memrise.com/garden/review/*
// @match          https://app.memrise.com/course/*/garden/*
// @match          https://app.memrise.com/garden/review/*
// @version        1.1.0
// @updateURL      https://github.com/stream009/greasemonkey_scripts/raw/master/MemriseDisableAutoAccept.user.js
// @downloadURL    https://github.com/stream009/greasemonkey_scripts/raw/master/MemriseDisableAutoAccept.user.js
// @grant          none
// ==/UserScript==

_(MEMRISE.garden).on("activate", box => {
  if (box.template === "typing" && box.$input) {
    box.$input.onResponseChangedHandler = null;
  }
});
