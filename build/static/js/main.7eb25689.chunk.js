(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{18:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r,o,c,i=t(0),a=t.n(i),u=t(10),l=t.n(u),s=(t(18),t(2)),f=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},d=function(n,e,t){for(var r=t.x,o=t.y,c=0;c<n.tetromino.length;c+=1)for(var i=0;i<n.tetromino[c].length;i+=1)if(0!==n.tetromino[c][i]&&(!e[c+n.pos.y+o]||!e[c+n.pos.y+o][i+n.pos.x+r]||"clear"!==e[c+n.pos.y+o][i+n.pos.x+r][1]))return!0},b=t(3),p=t(4),x=t.p+"static/media/main.cde31350.jpg",j=p.a.div(r||(r=Object(b.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n    h1 {\n      color: white;\n      text-align: center;\n      font-size: 2em;\n      margin: 10px 0 10px 0;\n    }\n"])),x),O=p.a.div(o||(o=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: start-right;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"]))),h=p.a.div(c||(c=Object(b.a)(["\n  text-align: center;\n  margin-left: 40px;\n"]))),g=t(8),m={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},v=function(){var n="IJLOSTZ",e=n[Math.floor(Math.random()*n.length)];return m[e]},y=function(n,e){var t=Object(i.useState)(f()),r=Object(s.a)(t,2),o=r[0],c=r[1],a=Object(i.useState)(0),u=Object(s.a)(a,2),l=u[0],d=u[1];return Object(i.useEffect)((function(){d(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(e,t){e.forEach((function(e,o){0!==e&&(r[t+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(d((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};c((function(n){return t(n)}))}),[n,e]),[o,c,l]};var w,k,S,I,C=p.a.div(w||(w=Object(b.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n"])),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),J=p.a.div(k||(k=Object(b.a)(["\n  width: auto;\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"])),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),E=t(1),L=function(n){var e=n.type;return Object(E.jsx)(J,{type:e,color:m[e].color})},T=a.a.memo(L),A=function(n){var e=n.stage;return Object(E.jsx)(C,{width:e[0].length,height:e.length,children:e.map((function(n){return n.map((function(n,e){return Object(E.jsx)(T,{type:n[0]},e)}))}))})},z=p.a.div(S||(S=Object(b.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center; \n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 2px solid #009799;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 5px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"])),(function(n){return n.gameOver?"red":"#999"})),Z=function(n){var e=n.gameOver,t=n.text;return Object(E.jsx)(z,{gameOver:e,children:t})},F=p.a.button(I||(I=Object(b.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 5px;\n  border: 2px solid #009799;\n  color: white;\n  background: black;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]))),G=function(n){var e=n.callback;return Object(E.jsx)(F,{onClick:e,children:"Start Game"})},P=function(){var n=Object(i.useState)(null),e=Object(s.a)(n,2),t=e[0],r=e[1],o=Object(i.useState)(null),c=Object(s.a)(o,2),a=c[0],u=c[1],l=function(){var n=Object(i.useState)({pos:{x:0,y:0},tetromino:m[0].shape,collided:!1}),e=Object(s.a)(n,2),t=e[0],r=e[1],o=function(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()},c=Object(i.useCallback)((function(){r({pos:{x:4,y:0},tetromino:v().shape,collided:!1})}),[]);return[t,function(n){var e=n.x,t=n.y,o=n.collided;r((function(n){return Object(g.a)(Object(g.a)({},n),{},{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:o})}))},c,function(n,e){var c=JSON.parse(JSON.stringify(t));c.tetromino=o(c.tetromino,e);for(var i=c.pos.x,a=1;d(c,n,{x:0,y:0});)if(c.pos.x+=a,(a=-(a+(a>0?1:-1)))>c.tetromino[0].length)return o(c.tetromino,-e),void(c.pos.x=i);r(c)}]}(),b=Object(s.a)(l,4),p=b[0],x=b[1],w=b[2],k=b[3],S=y(p,w),I=Object(s.a)(S,3),C=I[0],J=I[1],L=function(n){var e=Object(i.useState)(0),t=Object(s.a)(e,2),r=t[0],o=t[1],c=Object(i.useState)(0),a=Object(s.a)(c,2),u=a[0],l=a[1],f=Object(i.useState)(0),d=Object(s.a)(f,2),b=d[0],p=d[1],x=[40,100,300,1200],j=Object(i.useCallback)((function(){n>0&&(o((function(e){return e+x[n-1]*(b+1)})),l((function(e){return e+n})))}),[b,x,n]);return Object(i.useEffect)((function(){j()}),[j,n,r]),[r,o,u,l,b,p]}(I[2]),T=Object(s.a)(L,6),z=T[0],F=T[1],P=T[2],R=T[3],D=T[4],M=T[5],N=function(n){d(p,C,{x:n,y:0})||x({x:n,y:0})},B=function(){P>10*(D+1)&&(M((function(n){return n+1})),r(1e3/(D+1)+200)),d(p,C,{x:0,y:1})?(p.pos.y<1&&(console.log("GAME OVER!!!"),u(!0),r(null)),x({x:0,y:0,collided:!0})):x({x:0,y:1,collided:!1})},H=function(n){a||(37===n.keyCode?N(-1):39===n.keyCode?N(1):40===n.keyCode?(console.log("Interval off"),r(null),B()):38===n.keyCode?k(C,1):n.preventDefault())};return function(n,e){var t=Object(i.useRef)();Object(i.useEffect)((function(){t.current=n}),[n]),Object(i.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){B()}),t),Object(E.jsxs)(j,{role:"button",tabIndex:"0",onKeyDown:function(n){return H(n)},onKeyUp:function(n){var e=n.keyCode;a||40===e&&r(1e3/(D+1)+200)},children:[Object(E.jsx)("h1",{children:" React Tetris Game"}),Object(E.jsxs)(O,{children:[Object(E.jsx)(A,{stage:C}),Object(E.jsxs)(h,{children:[a?Object(E.jsx)(Z,{gameOver:a,text:"Game Over"}):Object(E.jsxs)("div",{children:[Object(E.jsx)(Z,{text:"Score: ".concat(z)}),Object(E.jsx)(Z,{text:"Rows: ".concat(P)}),Object(E.jsx)(Z,{text:"Level: ".concat(D)})]}),Object(E.jsx)(G,{callback:function(){J(f()),r(1e3),w(),u(!1),F(0),R(0),M(0)}})]})]})]})},R=function(n){return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(P,{})})},D=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))};l.a.render(Object(E.jsx)(R,{}),document.getElementById("root")),D()}},[[24,1,2]]]);
//# sourceMappingURL=main.7eb25689.chunk.js.map