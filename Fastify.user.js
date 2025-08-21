// ==UserScript==
// @name         Fastify (Worklink)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Complete any worklink automatically
// @author       ReactorCoreDev
// @match        *://*.work.ink/*
// @grant        none
// ==/UserScript==

(function(){'use strict';
    const _0x1a2b=["click","querySelectorAll",".title.svelte-3yab7m","button.interestedBtn.button","innerText","log"];
    function _0xclicker(){
        const _0xbuttons=document[_0x1a2b[1]](_0x1a2b[3]);
        _0xbuttons.forEach(_0xb=>{
            const _0xtitle=_0xb.closest('div.ocard')?.querySelector(_0x1a2b[2])?.[_0x1a2b[4]];
            if(_0xtitle==="Install PDF Editor for Google Chrome"){
                _0xb[_0x1a2b[0]]();
                _0xb[_0x1a2b[0]]();
            }
        });
    }
    const _0xobserver=new MutationObserver(()=>{
        _0xclicker();
    });
    _0xobserver.observe(document.body,{childList:true,subtree:true});
})();
