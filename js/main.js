(()=>{"use strict";window.onload=()=>{document.addEventListener("touchstart",(e=>{e.touches.length>1&&e.preventDefault()}),{passive:!1});let e=0;document.addEventListener("touchend",(t=>{const n=(new Date).getTime();n-e<=300&&t.preventDefault(),e=n}),!1)},document.addEventListener("DOMContentLoaded",(function(e){document.querySelector(".setting-button__setting").addEventListener("click",(function(){const{classList:e}=document.querySelector(".setting-modal");e.contains("open")?document.querySelector(".setting-modal").classList.remove("open"):document.querySelector(".setting-modal").classList.add("open")})),document.querySelector(".setting-button__cancel").addEventListener("click",(function(){document.querySelector(".setting-modal").classList.remove("open")})),new MobileSelect({trigger:"#game-clock-min",wheels:[{data:new Array(60).fill("").map(((e,t)=>t+1))}]}),new MobileSelect({trigger:"#game-clock-sec",wheels:[{data:new Array(60).fill("").map(((e,t)=>t+1))}]}),new MobileSelect({trigger:"#game-reset-min",wheels:[{data:new Array(60).fill("").map(((e,t)=>t+1))}]}),new MobileSelect({trigger:"#game-reset-sec",wheels:[{data:new Array(60).fill("").map(((e,t)=>t+1))}]}),new MobileSelect({trigger:"#attack-limit",wheels:[{data:new Array(30).fill("").map(((e,t)=>t+1))}]}),new MobileSelect({trigger:"#reset-sub-attack",wheels:[{data:new Array(30).fill("").map(((e,t)=>t+1))}]}),new MobileSelect({trigger:"#reset-main-attack",wheels:[{data:new Array(30).fill("").map(((e,t)=>t+1))}]})}))})();