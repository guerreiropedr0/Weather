(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);"]),i.push([e.id,"body {\n  color: #fff;\n  font-family: 'Roboto', sans-serif;\n  background: url('https://raw.githubusercontent.com/guerreiropedr0/Weather/dev/src/assets/images/wallpaper.jpg');\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  list-style: none;\n  color: inherit;\n  border: none;\n  outline: none;\n}\n\n.search-bar {\n  padding: 1rem;\n  border-radius: 0.7rem;\n  background: transparent;\n  border: 1px solid #fff;\n  width: 30vw;\n  text-align: center;\n  font-size: 1rem;\n}\n\n.search-bar:focus {\n  border: 2px solid #fff;\n}\n\n.search-bar::placeholder {\n  opacity: 1;\n}\n\nbutton {\n  height: fit-content;\n  margin-left: -2.5rem;\n  background-color: transparent;\n  font-size: 1.4rem;\n}\n\n.weather {\n  display: flex;\n  border-radius: 0.7rem;\n  width: 75%;\n  height: 75%;\n  justify-content: space-between;\n}\n\n.weather-details {\n  width: 100%;\n  border-top-left-radius: 0.7rem;\n  border-bottom-left-radius: 0.7rem;\n  display: flex;\n  align-items: flex-end;\n  background-size: cover;\n  background-position: bottom;\n  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);\n}\n\n.current-weather {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 0 0 2rem 4rem;\n  background-color: rgba(0, 0, 0, 0.4);\n  border-bottom-left-radius: 0.7rem;\n}\n\n.current-weather h1 {\n  font-size: 6rem;\n  margin-right: 1rem;\n}\n\n.current-location {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 1rem;\n}\n\n.current-location h3,\n.current-condition h3 {\n  font-size: 0.9rem;\n  font-weight: normal;\n}\n\n.current-condition {\n  align-self: flex-start;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.current-condition img {\n  width: 62px;\n}\n\n.weather-information {\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(36, 34, 34, 0.6);\n  padding: 2rem;\n  overflow-y: auto;\n  width: 40%;\n  border-top-right-radius: 0.7rem;\n  border-bottom-right-radius: 0.7rem;\n}\n\n.weather-information h3 {\n  align-self: center;\n}\n\n#bar {\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid #fff;\n  margin-bottom: 2rem;\n  width: 100%;\n}\n\n.other-places {\n  display: flex;\n  flex-direction: column;\n}\n\n.other-places li {\n  margin: 0.5rem 0;\n}\n\n.detail-item {\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem 0;\n}\n\nhr {\n  border: 1px solid #fff;\n  margin: 2rem 0;\n  opacity: 0.5;\n}\n\n.next-days {\n  display: flex;\n  flex-direction: column;\n}\n\n.next-days h3 {\n  align-self: center;\n}\n\n.next-days h4 {\n  align-self: center;\n  font-weight: normal;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=async e=>{let n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=891d8ee1554d48498a1210748220202&q=${e}&days=10&aqi=no&alerts=no`),t=await n.json();console.log(t),y(t)},y=e=>{document.body.innerHTML=`    <section class="weather">\n  <div class="weather-details">\n    <div class="current-weather">\n      <h1>${e.current.temp_c}°</h1>\n      <div class="current-location">\n        <h2>${e.location.name}, ${e.location.country}</h2>\n        <h3>${e.location.localtime}</h3>\n      </div>\n      <div class="current-condition">\n        <img src="${e.current.condition.icon}" alt="${e.current.condition.text} icon" />\n        <h3>${e.current.condition.text}</h3>\n      </div>\n    </div>\n  </div>\n  <div class="weather-information">\n    <form class="search">\n      <input id="bar" class="search-bar" type="text" placeholder="Search again" required />\n      <button type="submit"><i class="fas fa-search"></i></button>\n    </form>\n    <h3>Other Countries</h3>\n    <ul class="other-places">\n      <li><a href="#" class="portugal">Portugal</a></li>\n      <li><a href="#" class="usa">USA</a></li>\n      <li><a href="#" class="germany">Germany</a></li>\n      <li><a href="#" class="mexico">Mexico</a></li>\n    </ul>\n    <hr />\n    <h3>Weather Details</h3>\n    <div class="detail-item">\n      <p>Cloudy</p>\n      <p>${e.current.cloud}%</p>\n    </div>\n    <div class="detail-item">\n      <p>Humidity</p>\n      <p>${e.current.humidity}%</p>\n    </div>\n    <div class="detail-item">\n      <p>Wind</p>\n      <p>${e.current.wind_kph}km/h</p>\n    </div>\n    <div class="detail-item">\n      <p>Rain</p>\n      <p>${e.current.precip_mm}mm</p>\n    </div>\n    <hr />\n    <div class="next-days">\n    <h3>Next Days</h3>\n    </div>\n  </div>\n</section>`;for(let n=1;n<3;n+=1)document.querySelector(".next-days").innerHTML+=`<hr><h4>${e.forecast.forecastday[n].date}</h4>\n    <div class="detail-item">\n    <p>Max temperature</p>\n    <p>${e.forecast.forecastday[n].day.maxtemp_c}°</p>\n  </div>\n  <div class="detail-item">\n    <p>Minimum temperature</p>\n    <p>${e.forecast.forecastday[n].day.mintemp_c}°</p>\n  </div>\n  <div class="detail-item">\n    <p>Average temperature</p>\n    <p>${e.forecast.forecastday[n].day.avgtemp_c}°</p>\n  </div>\n  <div class="detail-item">\n    <p>Wind</p>\n    <p>${e.forecast.forecastday[n].day.maxwind_kph}km/h</p>\n  </div>\n  <div class="detail-item">\n    <p>Rain</p>\n    <p>${e.forecast.forecastday[n].day.totalprecip_mm}mm</p>\n  </div>\n  <div class="detail-item">\n    <p>Humidity</p>\n    <p>${e.forecast.forecastday[n].day.avghumidity}%</p>\n  </div>\n  <div class="detail-item">\n  <p>Condition</p>\n  <p>${e.forecast.forecastday[n].day.condition.text}</p>\n</div>`;"Partly cloudy"===e.current.condition.text?document.querySelector(".weather-details").style.backgroundImage='url("https://images.pexels.com/photos/449751/pexels-photo-449751.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")':"Clear"===e.current.condition.text?document.querySelector(".weather-details").style.backgroundImage='url("https://images.pexels.com/photos/754419/pexels-photo-754419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")':"Light rain"===e.current.condition.text||"Light drizzle"===e.current.condition.text||"Patchy rain possible"===e.current.condition.text?document.querySelector(".weather-details").style.backgroundImage='url("https://images.pexels.com/photos/950223/pexels-photo-950223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")':"Mist"===e.current.condition.text?document.querySelector(".weather-details").style.backgroundImage='url("https://images.unsplash.com/photo-1527954513726-611b208be16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80")':"Heavy snow"===e.current.condition.text?document.querySelector(".weather-details").style.backgroundImage='url("https://images.pexels.com/photos/5864098/pexels-photo-5864098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")':"Sunny"===e.current.condition.text?document.querySelector(".weather-details").style.backgroundImage='url("https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")':"Overcast"===e.current.condition.text?document.querySelector(".weather-details").style.backgroundImage='url("https://images.pexels.com/photos/3888585/pexels-photo-3888585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")':"Light snow"===e.current.condition.text&&(document.querySelector(".weather-details").style.backgroundImage='url("https://images.pexels.com/photos/974063/pexels-photo-974063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")');const n=document.querySelector(".search"),t=document.querySelector(".search-bar");n.addEventListener("submit",(e=>{e.preventDefault(),f(t.value),n.reset(),n.focus()}))},g=document.querySelector(".search"),v=document.querySelector(".search-bar");g.addEventListener("submit",(e=>{e.preventDefault(),f(v.value),g.reset(),g.focus()}))})()})();