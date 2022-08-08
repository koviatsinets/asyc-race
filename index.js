(()=>{"use strict";var e={767:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"button {\n    cursor: pointer;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n    height: 100vh;\n}\n\n.content-garage,\n.content-winners {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n}\n\n.nav {\n    margin-top: 10px;\n}\n\n.control {\n    flex-direction: column;\n    margin: 20px 0 20px 0;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    border-radius: solid white 1px;\n    width: 100%;\n}\n\n.block {\n    width: 100%;\n    border-bottom: solid red 1px;\n    border-top: solid red 1px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.number-garage,\n.number-page {\n    color: white;\n    margin: 10px 0 10px 0;\n}\n\n.number-garage {\n    font-size: 30px;\n    margin: 0;\n}\n\n.number-page {\n    font-size: 25px;\n}\n\n.block-row-1,\n.block-row-2 {\n    margin: 0;\n    padding: 0;\n\n}\n\n.car-img {\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n}\n\n.row {\n    margin: 10px 0 10px 0;\n}\n\n.block-row-1 > div {\n    color: yellow;\n    display: inline-block;\n}\n\n.hidden {\n    display: none;\n}\n\n.show {\n    display: flex;\n}\n\n.nav-bottom {\n    display: flex;\n    margin-top: 30px;\n}\n\n.modal-window {\n    position: absolute;\n    top: calc(50vh - 150px);\n    left: calc(50vw - 250px);\n    width: 500px;\n    height: 300px;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 30px;\n    border-radius: 20px;\n    display: none;\n}\n\n.modal-text {\n    margin-bottom: 20px;\n}\n\ntable {\n    border-collapse: collapse;\n    width: 500px;\n    margin-left: 10px;\n}\n  \nth, td {\n    border: solid white 1px;\n    color: white;\n    text-align: center;\n}\n\nth {\n    color: white;\n    text-align: center;\n}\n\n.table-number {\n    color: white;\n}",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},427:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var o=n(379),r=n.n(o),i=n(767);r()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],l=t.base?c[0]+t.base:c[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=a(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:m(p,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function m(e,t){var n,o,r;if(t.singleton){var i=h++;n=f||(f=l(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=l(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var l=c(e,t),s=0;s<n.length;s++){var d=a(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=l}}}},203:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.updateWinner=t.deleteWinner=t.createWinner=t.getWinner=t.getWinners=t.switchCarEngine=t.startStopCarEngine=t.updateCar=t.deleteCar=t.createCar=t.getCar=t.getCars=void 0;const r=n(607);t.getCars=function(){return o(this,void 0,void 0,(function*(){const e=yield fetch(`http://127.0.0.1:3000/garage/?_page=${r.countPage.page}&_limit=7`),t=yield e.headers.get("X-Total-Count");return{data:yield e.json(),totalCount:t}}))},t.getCar=function(e){return o(this,void 0,void 0,(function*(){const t=yield fetch(`http://127.0.0.1:3000/garage/${e}`);return yield t.json()}))},t.createCar=function(e){return o(this,void 0,void 0,(function*(){const t=yield fetch("http://127.0.0.1:3000/garage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return yield t.json()}))},t.deleteCar=function(e){return o(this,void 0,void 0,(function*(){const t=yield fetch(`http://127.0.0.1:3000/garage/${e}`,{method:"DELETE"});return yield t.json()}))},t.updateCar=function(e,t){return o(this,void 0,void 0,(function*(){const n=yield fetch(`http://127.0.0.1:3000/garage/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return yield n.json()}))},t.startStopCarEngine=function(e,t){return o(this,void 0,void 0,(function*(){const n=yield fetch(`http://127.0.0.1:3000/engine?id=${e}&status=${t}`,{method:"PATCH"});return yield n.json()}))},t.switchCarEngine=function(e,t){return o(this,void 0,void 0,(function*(){const n=yield fetch(`http://127.0.0.1:3000/engine?id=${e}&status=${t}`,{method:"PATCH"});return yield n.json()}))},t.getWinners=function(){return o(this,void 0,void 0,(function*(){const e=yield fetch("http://127.0.0.1:3000/winners");return yield e.json()}))},t.getWinner=function(e){return o(this,void 0,void 0,(function*(){const t=yield fetch(`http://127.0.0.1:3000/winners/${e}`);return yield t.json()}))},t.createWinner=function(e){return o(this,void 0,void 0,(function*(){const t=yield fetch("http://127.0.0.1:3000/winners",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return yield t.json()}))},t.deleteWinner=function(e){return o(this,void 0,void 0,(function*(){const t=yield fetch(`http://127.0.0.1:3000/winners/${e}`,{method:"DELETE"});return yield t.json()}))},t.updateWinner=function(e,t){return o(this,void 0,void 0,(function*(){const n=yield fetch(`http://127.0.0.1:3000/winners/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return yield n.json()}))}},665:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.startCar=t.updateCarButton=t.removeCarButton=t.selectCarButton=t.createCarButton=void 0;const r=n(203),i=n(607),a=n(593),c=n(562),l=n(562);t.createCarButton=function(){return o(this,void 0,void 0,(function*(){yield(0,r.createCar)({name:`${i.inputCreate.value}`,color:i.colorCreate.value}),(0,l.render)(),i.inputCreate.value=""}))},t.selectCarButton=function(){return o(this,void 0,void 0,(function*(){let e=Number(this.parentNode.parentNode.dataset.id),t=yield(0,r.getCar)(e);i.cashSelectCar.name=t.name,i.cashSelectCar.color=t.color,i.cashSelectCar.id=t.id,i.inputUpdate.value=i.cashSelectCar.name,i.colorUpdate.value=i.cashSelectCar.color,i.inputUpdate.disabled=!1,i.buttonUpdate.disabled=!1,i.colorUpdate.disabled=!1}))},t.removeCarButton=function(){return o(this,void 0,void 0,(function*(){let e=Number(this.parentNode.parentNode.dataset.id);yield(0,r.deleteCar)(e),(0,l.render)(),yield(0,r.deleteWinner)(e)}))},t.updateCarButton=function(){return o(this,void 0,void 0,(function*(){""!==i.inputUpdate.value&&(i.cashSelectCar.name=i.inputUpdate.value),yield(0,r.updateCar)(i.cashSelectCar.id,{name:i.inputUpdate.value,color:i.colorUpdate.value}),i.inputUpdate.value="",i.inputUpdate.disabled=!0,i.buttonUpdate.disabled=!0,i.colorUpdate.disabled=!0,(0,l.render)()}))},document.querySelector(".button-generate-cars").addEventListener("click",(function(){return o(this,void 0,void 0,(function*(){for(let e=1;e<=100;e++)yield(0,r.createCar)({name:(0,a.generateCarsName)(),color:(0,a.generateRGB)()});(0,l.render)()}))})),t.startCar=function(){return o(this,void 0,void 0,(function*(){let e=this;e.disabled=!0;let t=Number(this.parentNode.parentNode.dataset.id),n=yield(0,r.startStopCarEngine)(t,"started"),l=n.distance/n.velocity/1e3,s=document.documentElement.clientWidth-150,d=0,u=this.nextElementSibling.nextElementSibling,p=0,f=this.nextElementSibling;f.disabled=!1,f.addEventListener("click",(function(){return o(this,void 0,void 0,(function*(){e.disabled=!1,f.disabled=!0,yield(0,r.startStopCarEngine)(t,"stopped"),cancelAnimationFrame(p),u.style.cssText="transform: translateX(0px)"}))})),requestAnimationFrame((function e(){u.style.cssText=`transform: translateX(${d}px)`,d+=h,d<=s?p=requestAnimationFrame(e):cancelAnimationFrame(p)}));let h=document.documentElement.clientWidth/(60*l);try{yield(0,r.switchCarEngine)(t,"drive"),!1===i.isWin.state&&(0,r.createWinner)({id:Number(t),wins:Number(1),time:Number(l.toFixed(1))}),(0,a.showWinner)(t),(0,c.renderWinners)(),i.buttonStopRace.disabled=!1}catch(e){cancelAnimationFrame(p)}}))}},607:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modalText=t.modalWindow=t.isWin=t.buttonStopRace=t.buttonStartRace=t.cashSelectCar=t.colorUpdate=t.buttonUpdate=t.inputUpdate=t.colorCreate=t.inputCreate=t.buttonCreate=t.countPage=void 0;const o=n(923),r=n(562),i=n(665),a=n(194),c=n(593);n(427),t.countPage={page:1},t.cashSelectCar={name:"",color:"",id:0},document.querySelector(".buttonToGarage").addEventListener("click",o.switchToGarage),document.querySelector(".buttonToWinners").addEventListener("click",o.switchToWinners),window.location.hash="Garage",window.onhashchange=o.switchToStateFromURLHash,(0,o.switchToStateFromURLHash)(),(0,r.render)();let l=document.querySelector(".button-prev"),s=document.querySelector(".button-next");l.addEventListener("click",c.pagePrev),s.addEventListener("click",c.pageNext);let d=document.querySelector(".button-create");t.buttonCreate=d;let u=document.querySelector(".input-create");t.inputCreate=u;let p=document.querySelector(".color-create");t.colorCreate=p,d.addEventListener("click",i.createCarButton);let f=document.querySelector(".input-update");t.inputUpdate=f;let h=document.querySelector(".button-update");t.buttonUpdate=h,h.addEventListener("click",i.updateCarButton);let m=document.querySelector(".color-update");t.colorUpdate=m;let v=document.querySelector(".start-race");t.buttonStartRace=v,v.addEventListener("click",a.startRace);let y=document.querySelector(".stop-race");t.buttonStopRace=y,y.addEventListener("click",a.stopRace),y.disabled=!0,t.isWin={state:!1};let g=document.querySelector(".modal-window");t.modalWindow=g;let b=document.querySelector(".modal-text");t.modalText=b,document.querySelector(".button-modal-close").addEventListener("click",c.closeModal),(0,r.renderWinners)()},194:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.stopRace=t.startRace=void 0;const o=n(607);t.startRace=function(){document.querySelectorAll(".button-start-car").forEach((e=>{e.click()})),o.buttonStartRace.disabled=!0,o.isWin.state=!1},t.stopRace=function(){document.querySelectorAll(".button-stop-car").forEach((e=>{e.click()})),o.buttonStopRace.disabled=!0,o.buttonStartRace.disabled=!1}},923:(e,t)=>{function n(e){let t=e.pagename;location.hash=t}Object.defineProperty(t,"__esModule",{value:!0}),t.switchToWinners=t.switchToGarage=t.switchToState=t.switchToStateFromURLHash=void 0,t.switchToStateFromURLHash=function(){let e={pagename:""},t=document.querySelector(".content-garage"),n=document.querySelector(".content-winners"),o=window.location.hash.substring(1);switch(e=""!=o?{pagename:o.split("_")[0]}:{pagename:"Garage"},e.pagename){case"Garage":t.classList.remove("hidden"),n.classList.add("hidden");break;case"Winners":t.classList.add("hidden"),n.classList.remove("hidden")}},t.switchToState=n,t.switchToGarage=function(){n({pagename:"Garage"})},t.switchToWinners=function(){n({pagename:"Winners"})}},562:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.renderWinners=t.render=void 0;const r=n(203),i=n(607),a=n(593);t.render=function(){return o(this,void 0,void 0,(function*(){let e=document.querySelector(".amount-cars"),t=document.querySelector(".amount-page");const n=document.querySelector(".main");let o="";const c=yield(0,r.getCars)();c.data.forEach((e=>{o+=`<div class="block" data-id="${e.id}">\n                  <div class="block-row-1">\n                      <button class="buttonSelect">SELECT</button>\n                      <button class="buttonRemove">REMOVE</button>\n                      <div>${e.name}</div>\n                  </div>\n                  <div class="block-row-2">\n                      <button class="button-start-car">A</button>\n                      <button class="button-stop-car">B</button>\n                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="70" height="70" viewBox="0 0 256 256" xml:space="preserve">\n  \n                        <defs>\n                        </defs>\n                        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${e.color}; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >\n                          <circle cx="70.735" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${e.color}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>\n                          <circle cx="19.765" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${e.color}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>\n                          <path d="M 75.479 36.045 l -7.987 -1.22 l -2.35 -2.574 c -5.599 -6.132 -13.571 -9.649 -21.874 -9.649 h -6.245 c -1.357 0 -2.696 0.107 -4.016 0.296 c -0.022 0.004 -0.044 0.006 -0.066 0.01 c -7.799 1.133 -14.802 5.468 -19.285 12.106 C 5.706 37.913 0 45.358 0 52.952 c 0 3.254 2.647 5.9 5.9 5.9 h 3.451 c 0.969 4.866 5.269 8.545 10.416 8.545 s 9.447 -3.679 10.416 -8.545 h 30.139 c 0.969 4.866 5.27 8.545 10.416 8.545 s 9.446 -3.679 10.415 -8.545 H 84.1 c 3.254 0 5.9 -2.646 5.9 -5.9 C 90 44.441 83.894 37.331 75.479 36.045 z M 43.269 26.602 c 7.065 0 13.848 2.949 18.676 8.094 H 39.464 l -3.267 -8.068 c 0.275 -0.009 0.55 -0.026 0.826 -0.026 H 43.269 z M 32.08 27.118 l 3.068 7.578 H 18.972 C 22.429 30.813 27.018 28.169 32.08 27.118 z M 19.767 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 s 6.623 2.971 6.623 6.623 C 26.39 60.427 23.419 63.397 19.767 63.397 z M 70.738 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 c 3.651 0 6.622 2.971 6.622 6.623 C 77.36 60.427 74.39 63.397 70.738 63.397 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${e.color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />\n                        </g>\n                        </svg>\n                  </div>\n              </div>\n              `})),n.innerHTML=o,e.innerText=c.totalCount,t.innerText=String(i.countPage.page),(0,a.addListener)()}))},t.renderWinners=function(){return o(this,void 0,void 0,(function*(){let e=document.querySelector(".number-winners"),t=document.querySelector(".table-container"),n=yield(0,r.getWinners)(),o="",i=1;e.innerText=n.length;for(let e of n){let t=yield(0,r.getCar)(e.id);o+=`<tr>\n        <td class="table-number">${i}.</td>\n        <td>\n          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve">\n\n                      <defs>\n                      </defs>\n                      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${t.color}; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >\n                        <circle cx="70.735" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${t.color}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>\n                        <circle cx="19.765" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${t.color}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>\n                        <path d="M 75.479 36.045 l -7.987 -1.22 l -2.35 -2.574 c -5.599 -6.132 -13.571 -9.649 -21.874 -9.649 h -6.245 c -1.357 0 -2.696 0.107 -4.016 0.296 c -0.022 0.004 -0.044 0.006 -0.066 0.01 c -7.799 1.133 -14.802 5.468 -19.285 12.106 C 5.706 37.913 0 45.358 0 52.952 c 0 3.254 2.647 5.9 5.9 5.9 h 3.451 c 0.969 4.866 5.269 8.545 10.416 8.545 s 9.447 -3.679 10.416 -8.545 h 30.139 c 0.969 4.866 5.27 8.545 10.416 8.545 s 9.446 -3.679 10.415 -8.545 H 84.1 c 3.254 0 5.9 -2.646 5.9 -5.9 C 90 44.441 83.894 37.331 75.479 36.045 z M 43.269 26.602 c 7.065 0 13.848 2.949 18.676 8.094 H 39.464 l -3.267 -8.068 c 0.275 -0.009 0.55 -0.026 0.826 -0.026 H 43.269 z M 32.08 27.118 l 3.068 7.578 H 18.972 C 22.429 30.813 27.018 28.169 32.08 27.118 z M 19.767 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 s 6.623 2.971 6.623 6.623 C 26.39 60.427 23.419 63.397 19.767 63.397 z M 70.738 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 c 3.651 0 6.622 2.971 6.622 6.623 C 77.36 60.427 74.39 63.397 70.738 63.397 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${t.color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />\n                      </g>\n                      </svg>\n        </td>\n        <td>${t.name}</td>\n        <td>${e.wins}</td>\n        <td>${e.time}</td>\n    </tr>`,i++}t.innerHTML=o}))}},593:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.pageNext=t.pagePrev=t.closeModal=t.showWinner=t.addListener=t.generateCarsName=t.generateRGB=void 0;const r=n(665),i=n(203),a=n(607),c=n(562),l=n(607),s=n(194);t.generateRGB=function(){function e(){return Math.floor(255*Math.random())+0}return`rgb(${e()}, ${e()}, ${e()})`},t.generateCarsName=function(){function e(){return Math.floor(11*Math.random())+0}return`${["Audi","BMW","Volkswagen","Mercedes","Porshe","Opel","Ferrari","Bugatti","Fiat","Lanica","Alfa-Romeo"][e()]} ${["A6","Polo","S-classe","911","3-series","Vectra","Rome","Veyron","500","Dedra","Giulia"][e()]}`},t.addListener=function(){document.querySelectorAll(".buttonSelect").forEach((e=>{e.addEventListener("click",r.selectCarButton)})),document.querySelectorAll(".buttonRemove").forEach((e=>{e.addEventListener("click",r.removeCarButton)})),document.querySelectorAll(".button-start-car").forEach((e=>{e.addEventListener("click",r.startCar)}))},t.showWinner=function(e){return o(this,void 0,void 0,(function*(){if(!1===a.isWin.state){let t=yield(0,i.getCar)(e);a.modalWindow.style.display="flex",a.modalText.innerText=`Winner: ${t.name}`,a.isWin.state=!0}}))},t.closeModal=function(){a.modalWindow.style.display="none",(0,s.stopRace)()},t.pagePrev=function(){l.countPage.page=l.countPage.page-1,l.countPage.page<1&&(l.countPage.page=1),(0,c.render)()},t.pageNext=function(){l.countPage.page=l.countPage.page+1,(0,c.render)()}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(607)})();