(()=>{"use strict";var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e);const o=window.wp.domReady;var r=t.n(o);const a=window.wp.apiFetch;var n=t.n(a);window.nfdSurveySurveys;const d=window.nfdSurveyDataAttrListener?.restUrl,i=`${d}/newfold-data/v1/events`;r()((()=>{new window.MutationObserver((t=>{for(const e of t)if("childList"===e.type)for(const t of e.addedNodes)"object"==typeof t&&"function"==typeof t.querySelectorAll&&t.querySelectorAll("[data-survey-action]").forEach((t=>{t.addEventListener("click",(function(t){null!==t.target.getAttribute("data-survey-option")&&n()({url:i,method:"POST",data:{action:this.getAttribute("data-survey-action"),category:this.getAttribute("data-survey-category"),data:{...JSON.parse(this.getAttribute("data-survey-data")),value:t.target.getAttribute("data-survey-option")}}})}))}))})).observe(document.body,{childList:!0,subtree:!0})})),((window.newfold=window.newfold||{}).Survey=window.newfold.Survey||{}).dataAttrListener=e})();