(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,"body {\n  margin: 0;\n  padding: 0;\n  background-color: rgb(17 24 42);\n  color: rgb(226, 226, 226);\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n#main-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n#greetings {\n  text-align: center;\n}\n\n#greetings p {\n  font-size: 1.5rem;\n}\n\n#greetings h1 {\n  font-size: 5rem;\n}\n\nbutton {\n  width: 75px;\n  height: 50px;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 1.2rem;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n#messages {\n  margin-top: 25px;\n}\n\n#boards {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n\n  margin-top: 2%;\n  padding-bottom: 2%;\n}\n\n#player-one,\n#player-two {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n#player-one .square {\n  animation: none;\n}\n\n.grid {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  width: 400px;\n  height: 400px;\n}\n\n.square {\n  width: calc(10% - 2px);\n  height: calc(10% - 2px);\n  margin: 1px;\n  background-color: lightblue;\n  color: lightblue;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.square:hover {\n  cursor: pointer;\n  animation: colorCycle 1.5s infinite;\n}\n\n.own,\n.miss,\n.hit {\n  animation: none !important;\n}\n\n@keyframes colorCycle {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n\n.own {\n  background-color: lightgreen;\n}\n\n.miss {\n  background-color: rgb(218, 140, 116);\n}\n\n.hit {\n  background-color: green;\n}\n",""]);const s=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var h=0;h<n.length;h++){var d=[].concat(n[h]);r&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],s=0;s<n.length;s++){var c=n[s],h=r.base?c[0]+r.base:c[0],d=a[h]||0,l="".concat(h," ").concat(d);a[h]=d+1;var u=t(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var m=i(p,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}o.push(l)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var c=r(n,i),h=0;h<a.length;h++){var d=t(a[h]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;const r=class{constructor(n,e){if(!Number.isInteger(n))throw new Error("Ship size must be an integer");if(n<2||n>5)throw new Error("Invalid ship size");this.size=n,this.health=n,this.initials=e,this.sunk=!1}hit(){this.sunk||(this.health-=1,0==this.health&&this.isSunk())}isSunk(){return this.sunk=!0}},i=class{constructor(){this.board=this.initializeBoard(),this.carrier=new r(5,"ca"),this.battleship=new r(4,"ba"),this.cruiser=new r(3,"cr"),this.submarine=new r(3,"su"),this.destroyer=new r(2,"de"),this.shipsSunk=0,this.ships={ca:this.carrier,ba:this.battleship,cr:this.cruiser,su:this.submarine,de:this.destroyer}}initializeBoard(){const n=[];for(let e=0;e<10;e++){const e=new Array(10).fill(null);n.push(e)}return n}place(n,e,t=!0){const r=n.size,i=n.initials;let a=e[0],o=e[1];if(t&&o+r>10||!t&&a+r>10)throw new Error("Can't place ship here, index out of bounds");for(let n=0;n<r;n++)if(t){if(null!==this.board[a][o+n])throw new Error("Can't place ship here, there's already a ship here")}else if(null!==this.board[a+n][o])throw new Error("Can't place ship here, there's already a ship here");for(let n=0;n<r;n++)t?this.board[a][o+n]=i:this.board[a+n][o]=i}placeRandom(){this.shipPlacementRandomizer(this.carrier),this.shipPlacementRandomizer(this.battleship),this.shipPlacementRandomizer(this.cruiser),this.shipPlacementRandomizer(this.submarine),this.shipPlacementRandomizer(this.destroyer)}shipPlacementRandomizer(n){let e=!1;for(;!e;)try{const t=Math.random()>=.5,r=Math.floor(10*Math.random()),i=Math.floor(10*Math.random());this.place(n,[r,i],t),e=!0}catch(n){console.error(n.message)}}receiveAttack(n){const e=n[0],t=n[1],r=this.board[e][t];if("hit"==r||"miss"==r)throw new Error("Can't attack this square, it was already hit");if(r){if(r&&"hit"!==r||r&&"miss"!==r){const n=this.ships[r];this.board[e][t]="hit",n.hit(),n.sunk&&(this.shipsSunk+=1)}}else this.board[e][t]="miss"}},a=class{constructor(n=!1,e=!1){this.gameBoard=new i,this.isMachine=n,this.hardMode=e}isGameOver(){if(5==this.gameBoard.shipsSunk)return!0}targetedShip=null;calculateAttack(n,e){for(let t=0;t<n.board.length;t++)for(let r=0;r<n.board[t].length;r++)if(n.board[t][r]===e)return[t,r];return null}attackHumanPlayer(n){const e=this.calculateAttack(n,this.targetedShip);for(;;)try{const t=this.targetedShip&&this.hardMode?e[0]:Math.floor(10*Math.random()),r=this.targetedShip&&this.hardMode?e[1]:Math.floor(10*Math.random()),i=n.board[t][r];if("hit"==i||"miss"==i)throw new Error("Can't attack this square, it was already hit");if(!i)return void(n.board[t][r]="miss");if(i&&"hit"!==i||i&&"miss"!==i){const e=n.ships[i];return this.targetedShip=i,n.board[t][r]="hit",e.hit(),void(e.sunk&&(n.shipsSunk+=1,this.targetedShip=null))}}catch(n){console.log(n.message)}}};var o=t(72),s=t.n(o),c=t(825),h=t.n(c),d=t(659),l=t.n(d),u=t(56),p=t.n(u),m=t(540),f=t.n(m),g=t(113),y=t.n(g),b=t(365),v={};v.styleTagTransform=y(),v.setAttributes=p(),v.insert=l().bind(null,"head"),v.domAPI=h(),v.insertStyleElement=f(),s()(b.A,v),b.A&&b.A.locals&&b.A.locals;const w=new a;let x=null,k=!0;function M(n,e){const t=document.createElement("button");t.textContent=e,t.addEventListener("click",(()=>function(n){x="Easy"===n?new a(!0):new a(!0,!0),document.getElementById("greetings").innerHTML="",w.gameBoard.placeRandom(),x.gameBoard.placeRandom(),document.getElementById("player-one").insertAdjacentHTML("afterbegin","<h1>Your Board</h1>"),document.getElementById("player-two").insertAdjacentHTML("afterbegin","<h1>Machine Board</h1>"),B(w.gameBoard.board,"one",!1),B(x.gameBoard.board,"two",!0),E("Good luck!"),document.getElementById("hints").innerHTML="\n    <p>\n      To win this game, you must sink all enemy ships (5). To do so, click\n      on any square on the machine's board that does not have an emoji.\n    </p>\n    <p>\n      If you hit an enemy ship, you'll see this: ✔️. If you miss, you'll see\n      this: ❌.\n    </p>\n    <p>\n      Each player has 5 ships. Try and sink all the machine's ships before\n      they sink yours!\n    </p>\n    <p>PS: I doubt you can win this game on hard settings. If you do, please let me know.</p>\n  "}(e))),n.appendChild(t)}function E(n){document.getElementById("messages").innerHTML=`${n}`}function B(n,e,t){const r=function(n){return"one"===n?document.getElementById("game-board"):document.getElementById("game-board-two")}(e);r.innerHTML="",r.className="grid",n.forEach(((n,e)=>{n.forEach(((n,i)=>{const a=function(n,e,t,r){const i=document.createElement("div");return i.classList.add("square"),"miss"===t?(i.innerHTML="❌",i.classList.add("miss")):"hit"===t&&(i.innerHTML="✔️",i.classList.add("hit")),!r&&t&&i.classList.add("own"),r&&!T()&&i.addEventListener("click",(()=>{k&&(x.gameBoard.receiveAttack([n,e]),x.attackHumanPlayer(w.gameBoard),function(n){const e=T();if(k=!1,e)return E(5==S(x)?"You win!":"The Machine wins..."),B(x.gameBoard.board,"two",n),void B(w.gameBoard.board,"one",!1);B(x.gameBoard.board,"two",n),E("The machine is planning their next attack..."),setTimeout((()=>{B(w.gameBoard.board,"one",!1),E("It's your turn!"),k=!0}),2e3)}(!0))})),i}(e,i,n,t);r.appendChild(a)}))}))}function T(){const n=S(x),e=S(w);if(5==n||5==e)return!0}function S(n){return n.gameBoard.shipsSunk}!function(){const n=document.getElementById("greetings");n.innerHTML="\n    <h1>Battleship</h1>\n    <p>Choose Your Difficulty:</p>\n  ",M(n,"Easy"),M(n,"Hard")}()})();