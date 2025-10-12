// ==UserScript==
// @name         Fastify (Worklink)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Complete any worklink automatically
// @author       ReactorCoreDev
// @match        *://*.work.ink/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function _0x35ba5d() {
    const _0x2842d8 = document.querySelectorAll("button.interestedBtn.button");
    _0x2842d8.forEach(_0x4b39f7 => {
      const _0x4ca3a6 = _0x4b39f7.closest("div.ocard")?.['querySelector'](".title.svelte-3yab7m")?.["innerText"];
      if (_0x4ca3a6 === "Install PDF Editor for Google Chrome") {
        _0x4b39f7.click();
        _0x4b39f7.click();
      }
    });
  }
  const _0x3cf7d5 = new MutationObserver(() => {
    _0x35ba5d();
  });
  _0x3cf7d5.observe(document.body, {
    'childList': true,
    'subtree': true
  });
})();
