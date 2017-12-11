// ==UserScript==
// @name           Memrise Turbo
// @namespace      https://github.com/stream009
// @description    Disable auto accept feature on Memrise typing test
// @match          https://www.memrise.com/course/*/garden/*
// @version        0.0.1
// @updateURL      https://github.com/infofarmer/memrise-turbo/raw/master/MemriseTurbo.user.js
// @downloadURL    https://github.com/infofarmer/memrise-turbo/raw/master/MemriseTurbo.user.js
// @grant          none
// ==/UserScript==

const TypingTestBox = MEMRISE.garden.box_mapping["typing"];

console.log(TypiingTestBox);
