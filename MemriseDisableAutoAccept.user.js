// ==UserScript==
// @name           Memrise Auto Accept Disabler
// @namespace      https://github.com/stream009
// @description    Disable auto accept feature on Memrise typing test
// @match          https://www.memrise.com/course/*/garden/*
// @version        0.0.1
// @updateURL      https://github.com/stream009/greasemonkey_scripts/raw/master/MemriseDisableAutoAccept.user.js
// @downloadURL    https://github.com/stream009/greasemonkey_scripts/raw/master/MemriseDisableAutoAccept.user.js
// @grant          none
// ==/UserScript==

const TypingTestBox = MEMRISE.garden.box_mapping.typing;

console.log(TypiingTestBox);
