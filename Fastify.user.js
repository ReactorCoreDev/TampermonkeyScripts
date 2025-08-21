// ==UserScript==
// @name         Fastify (Worklink)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Complete any worklink
// @author       ReactorCoreDev
// @match        *://*.work.ink/*
// @grant        none
// ==/UserScript==

(function(){
    'use strict';

    const _0x1a2b=["click","querySelectorAll",".title.svelte-3yab7m","button.interestedBtn.button","innerText","log","div.ocard.curr, div.ocard.next"];
    
    const popup=document.createElement('div');
    popup.style.position='fixed';
    popup.style.right='20px';
    popup.style.top='50%';
    popup.style.transform='translateY(-50%)';
    popup.style.backgroundColor='#111';
    popup.style.color='#fff';
    popup.style.padding='10px 15px';
    popup.style.borderRadius='8px';
    popup.style.boxShadow='0 0 10px rgba(0,0,0,0.5)';
    popup.style.zIndex='9999';
    popup.style.cursor='pointer';
    popup.style.fontFamily='Arial, sans-serif';
    popup.innerText='Click me to complete worklink';
    document.body.appendChild(popup);

    function _0xcomplete(){
        const _0xcards=document[_0x1a2b[1]](_0x1a2b[6]);
        _0xcards.forEach(_0xc=>{
            const _0xtitle=_0xc[_0x1a2b[3]](_0x1a2b[2])?.[_0x1a2b[4]];
            if(_0xtitle==="Install PDF Editor for Google Chrome"){
                const _0xbtn=_0xc[_0x1a2b[3]](_0x1a2b[3]);
                if(_0xbtn){_0xbtn[_0x1a2b[0]]();_0xbtn[_0x1a2b[0]]();console[_0x1a2b[5]](`Clicked Accept on "${_0xtitle}" twice.`);}
            }
        });
    }

    popup.addEventListener('click',_0xcomplete);
})();
