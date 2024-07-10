(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>o});var r=t(601),i=t.n(r),s=t(314),a=t.n(s)()(i());a.push([n.id,"body {\n  margin: 0;\n  padding: 0;\n  background-color: rgb(250, 250, 250);\n}\n\n#main-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n#messages {\n  margin-top: 10px;\n}\n\n#player-one-ships,\n#player-two-ships {\n  display: flex;\n  flex-direction: column;\n}\n\n#player-two-ships {\n  align-items: flex-end;\n}\n\n.ship {\n  display: flex;\n  flex-direction: row;\n}\n\n.ship .square {\n  background-color: lightgreen;\n  color: lightgreen;\n  min-width: 35px;\n  min-height: 35px;\n}\n\n#boards {\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n\n  margin-top: 2%;\n  padding-bottom: 2%;\n}\n\n#player-one,\n#player-two {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.grid {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 400px;\n  height: 400px;\n}\n\n.square {\n  width: calc(10% - 2px);\n  height: calc(10% - 2px);\n  margin: 1px;\n  background-color: lightblue;\n  color: lightblue;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.square:hover {\n  cursor: pointer;\n}\n\n.square.drag-over {\n  background-color: pink; /* Visual cue for valid drop target */\n}\n\n.own {\n  background-color: lightgreen;\n}\n\n.miss {\n  background-color: rgb(218, 140, 116);\n}\n\n.hit {\n  background-color: green;\n}\n",""]);const o=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,s){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var s={},a=[],o=0;o<n.length;o++){var c=n[o],d=r.base?c[0]+r.base:c[0],l=s[d]||0,u="".concat(d," ").concat(l);s[d]=l+1;var h=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var m=i(p,r);r.byIndex=o,e.splice(o,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var s=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<s.length;a++){var o=t(s[a]);e[o].references--}for(var c=r(n,i),d=0;d<s.length;d++){var l=t(s[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}s=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={id:r,exports:{}};return n[r](s,s.exports,t),s.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;const r=class{constructor(n,e){if(!Number.isInteger(n))throw new Error("Ship size must be an integer");if(n<2||n>5)throw new Error("Invalid ship size");this.size=n,this.health=n,this.initials=e,this.sunk=!1}hit(){this.sunk||(this.health-=1,0==this.health&&this.isSunk())}isSunk(){return this.sunk=!0}},i=class{constructor(){this.board=this.initializeBoard(),this.carrier=new r(5,"ca"),this.battleship=new r(4,"ba"),this.cruiser=new r(3,"cr"),this.submarine=new r(3,"su"),this.destroyer=new r(2,"de"),this.shipsSunk=0,this.ships={ca:this.carrier,ba:this.battleship,cr:this.cruiser,su:this.submarine,de:this.destroyer}}initializeBoard(){const n=[];for(let e=0;e<10;e++){const e=new Array(10).fill(null);n.push(e)}return n}place(n,e,t=!0){const r=n.size,i=n.initials;let s=e[0],a=e[1];if(t&&a+r>10||!t&&s+r>10)throw new Error("Can't place ship here, index out of bounds");for(let n=0;n<r;n++)if(t){if(null!==this.board[s][a+n])throw new Error("Can't place ship here, there's already a ship here")}else if(null!==this.board[s+n][a])throw new Error("Can't place ship here, there's already a ship here");for(let n=0;n<r;n++)t?this.board[s][a+n]=i:this.board[s+n][a]=i}placeRandom(){this.shipPlacementRandomizer(this.carrier),this.shipPlacementRandomizer(this.battleship),this.shipPlacementRandomizer(this.cruiser),this.shipPlacementRandomizer(this.submarine),this.shipPlacementRandomizer(this.destroyer)}shipPlacementRandomizer(n){let e=!1;for(;!e;)try{const t=Math.random()>=.5,r=Math.floor(10*Math.random()),i=Math.floor(10*Math.random());this.place(n,[r,i],t),e=!0}catch(n){console.error(n.message)}}receiveAttack(n){const e=n[0],t=n[1],r=this.board[e][t];if("hit"==r||"miss"==r)throw new Error("Can't attack this square, it was already hit");if(r){if(r&&"hit"!==r||r&&"miss"!==r){const n=this.ships[r];this.board[e][t]="hit",n.hit(),n.sunk&&(this.shipsSunk+=1)}}else this.board[e][t]="miss"}},s=class{constructor(n=!1){this.gameBoard=new i,this.isMachine=n}isGameOver(){if(5==this.gameBoard.shipsSunk)return!0}attackEnemyPlayer(n){for(;;)try{const e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random()),r=n.board[e][t];if("hit"==r||"miss"==r)throw new Error("Can't attack this square, it was already hit");if(!r)return void(n.board[e][t]="miss");if(r&&"hit"!==r||r&&"miss"!==r){const i=n.ships[r];n.board[e][t]="hit",i.hit(),i.sunk&&(n.shipsSunk+=1)}}catch(n){console.log(n.message)}}};var a=t(72),o=t.n(a),c=t(825),d=t.n(c),l=t(659),u=t.n(l),h=t(56),p=t.n(h),m=t(540),f=t.n(m),v=t(113),g=t.n(v),y=t(365),b={};b.styleTagTransform=g(),b.setAttributes=p(),b.insert=u().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=f(),o()(y.A,b),y.A&&y.A.locals&&y.A.locals;const w=new s,x=new s(!0);function k(){document.getElementById("greetings").innerHTML="",E("player-one-ships"),E("player-two-ships"),q(w.gameBoard.board,"one",!1),q(x.gameBoard.board,"two",!0),M()}function E(n){document.getElementById(n).innerHTML='\n  <br></br>\n\n  <p>Cruiser</p>\n  <div class="ship">\n    <div class="square">?</div>\n    <div class="square">?</div>\n    <div class="square">?</div>\n    <div class="square">?</div>\n    <div class="square">?</div>\n  </div>\n\n  <p>Battleship</p>\n  <div class="ship">\n    <div class="square">?</div>\n    <div class="square">?</div>\n    <div class="square">?</div>\n    <div class="square">?</div>\n  </div>\n\n  <p>Cruiser</p>\n  <div class="ship">\n    <div class="square">?</div>\n    <div class="square">?</div>\n    <div class="square">?</div>\n  </div>\n\n  <p>Submarine</p>\n  <div class="ship">\n    <div class="square">?</div>\n    <div class="square">?</div>\n    <div class="square">?</div>\n  </div>\n\n  <p>Destroyer</p>\n  <div class="ship">\n    <div class="square">?</div>\n    <div class="square">?</div>\n  </div>\n  ',"player-one-ships"==n?w.gameBoard.placeRandom():x.gameBoard.placeRandom()}function M(){const n=document.getElementById("messages"),e=C(x),t=B();n.innerHTML="Good luck!",t&&(n.innerHTML="Game Over! "+(5==e?"Player One Wins!":"The Machine Wins!"))}function q(n,e,t){const r=function(n){return"one"===n?document.getElementById("game-board"):document.getElementById("game-board-two")}(e);r.innerHTML="",n.forEach(((n,e)=>{n.forEach(((n,i)=>{const s=function(n,e,t,r){const i=document.createElement("div");return i.classList.add("square"),"miss"===t?(i.innerHTML="❌",i.classList.add("miss")):"hit"===t?(i.innerHTML="✔️",i.classList.add("hit")):i.innerHTML="<p>?</p>",!r&&t&&i.classList.add("own"),r&&!B()&&i.addEventListener("click",(()=>{x.gameBoard.receiveAttack([n,e]),x.attackEnemyPlayer(w.gameBoard),q(w.gameBoard.board,"one",!1),q(x.gameBoard.board,"two",true),M()})),i}(e,i,n,t);r.appendChild(s)}))}))}function B(){const n=C(x),e=C(w);if(5==n||5==e)return!0}function C(n){return n.gameBoard.shipsSunk}!function(){const n=document.getElementById("greetings"),e=document.createElement("button");e.textContent="Easy",e.addEventListener("click",k),n.innerHTML="\n    <h1>Battleship</h1>\n    <p>Choose Your Difficulty:</p>\n  ",n.appendChild(e)}()})();