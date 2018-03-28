// ==UserScript==
// @name           Memrise Auto Accept Disabler 2
// @namespace      https://github.com/stream009
// @description    Disable auto accept feature on post-mistake screen's typing box
// @match          https://www.memrise.com/course/*/garden/*
// @match          https://www.memrise.com/garden/review/*
// @version        1.1.0
// @updateURL      https://github.com/stream009/greasemonkey_scripts/raw/master/MemriseDisableAutoAcceptOnPostMistake.user.js
// @downloadURL    https://github.com/stream009/greasemonkey_scripts/raw/master/MemriseDisableAutoAcceptOnPostMistake.user.js
// @grant          none
// ==/UserScript==

function wrap(obj, function_name, wrapper) {
  const orig = obj[function_name];

  obj[function_name] = function () {
    return wrapper.call(this, orig, arguments);
  };
}

_(MEMRISE.garden).on("activate", box => {
  if (box.template !== "copytyping") return;

  box.set_for_complete = function () {
    this.answeredCorrectly = true;

    this.$marking_icon.addClass('tick');
    this.$input.addClass('correct bounce').removeClass('incorrect');

    this.$next.show();
  };

  wrap(box,
    "keydown",
    function (orig, args) {
      const ev = args[0];
      const code = ev.which;

      if (code === KEY_CODES.ENTER && this.answeredCorrectly) {
        this.maybe_register();
      }

      orig.apply(this, args);
    }
  );
});
