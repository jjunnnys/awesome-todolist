(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{18:function(n,e,t){n.exports=t(27)},27:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(10),i=t.n(a),c=t(1),u=t(2);function d(){var n=Object(c.a)(["\n  width: 512px;\n  height: 768px;\n\n  position: relative; /* \ucd94\uac00 + \uae30\ub2a5\uc744 \ucd5c\ud558\ub2e8\uc5d0 \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\uac8c \ud558\ub294 \uc18d\uc131 */\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);\n\n  margin: 0 auto;\n  margin-top: 96px;\n  margin-bottom: 32px;\n\n  display: flex;\n  flex-direction: column;\n"]);return d=function(){return n},n}var l=u.c.div(d()),f=function(n){var e=n.children;return o.a.createElement(l,null,e)},p=t(4),b=t(16),s=[{id:1,text:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30",done:!0},{id:2,text:"\ucef4\ud3ec\ub10c\ud2b8 \uc2a4\ud0c0\uc77c\ub9c1\ud558\uae30",done:!0},{id:3,text:"Context \ub9cc\ub4e4\uae30",done:!1},{id:4,text:"\uae30\ub2a5 \uad6c\ud604\ud558\uae30",done:!1}],x=Object(r.createContext)(),m=Object(r.createContext)(),v=Object(r.createContext)();function g(n,e){switch(e.type){case"CREATE":return n.concat(e.todo);case"TOGGLE":return n.map((function(n){return n.id===e.id?Object(b.a)({},n,{done:!n.done}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));default:throw new Error("Unhandle action type: ".concat(e.type))}}function E(n){var e=n.children,t=Object(r.useReducer)(g,s),a=Object(p.a)(t,2),i=a[0],c=a[1],u=Object(r.useRef)(5);return o.a.createElement(x.Provider,{value:i},o.a.createElement(m.Provider,{value:c},o.a.createElement(v.Provider,{value:u},e)))}function h(){var n=Object(r.useContext)(x);if(!n)throw new Error("Cannot find TodoProvider");return n}function O(){var n=Object(r.useContext)(m);if(!n)throw new Error("Cannot find TodoProvider");return n}function j(){var n=Object(c.a)(["\n  padding-top: 48px;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e9ecef;\n\n  h1 {\n    margin: 0;\n    font-size: 36px;\n    color: #343a40;\n  }\n  .day {\n    margin-top: 4px;\n    color: #868e96;\n    font-size: 21px;\n  }\n  .tasks-left {\n    color: #20c997;\n    font-size: 18px;\n    margin-top: 40px;\n    font-weight: bold;\n  }\n"]);return j=function(){return n},n}var y=u.c.div(j()),w=function(){var n=h().filter((function(n){return!n.done})),e=new Date,t=e.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),r=e.toLocaleDateString("ko-KR",{weekday:"long"});return o.a.createElement("div",null,o.a.createElement(y,null,o.a.createElement("h1",null,t),o.a.createElement("div",{className:"day"},r),o.a.createElement("div",{className:"tasks-left"},"\ud560\uc77c ",n.length,"\uac1c \ub0a8\uc74c")))},k=t(28),C=t(29);function z(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return z=function(){return n},n}function R(){var n=Object(c.a)(["\n      color: #ced4da;\n    "]);return R=function(){return n},n}function T(){var n=Object(c.a)(["\n  flex: 1;\n  font-size: 21px;\n  color: #495057;\n  ","\n"]);return T=function(){return n},n}function P(){var n=Object(c.a)(["\n      font-size: 18px; /*font-size\uac00 \uc758\ubbf8\ud558\ub294 \uac74 \uc544\uc774\ucf58 \ud06c\uae30*/\n      border: 1px solid #38d9a0;\n      color: #38d9a9;\n    "]);return P=function(){return n},n}function S(){var n=Object(c.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  border: 1px solid #ced4da;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n"]);return S=function(){return n},n}function D(){var n=Object(c.a)(["\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dee2e6;\n  font-size: 24px;\n  cursor: pointer;\n  &:hover {\n    color: #ff6b6b;\n  }\n"]);return D=function(){return n},n}var G=u.c.div(D()),L=u.c.div(S(),(function(n){return n.done&&Object(u.b)(P())})),M=u.c.div(T(),(function(n){return n.done&&Object(u.b)(R())})),A=u.c.div(z(),G),F=o.a.memo((function(n){var e=n.id,t=n.done,r=n.text,a=O();return o.a.createElement("div",null,o.a.createElement(A,null,o.a.createElement(L,{done:t,onClick:function(){return a({type:"TOGGLE",id:e})}},t&&o.a.createElement(k.a,null)),o.a.createElement(M,{done:t},r),o.a.createElement(G,{onClick:function(){return a({type:"REMOVE",id:e})}},o.a.createElement(C.a,null))))}));function J(){var n=Object(c.a)(["\n  flex: 1; /* \uc790\uc2e0\uc774 \ucc28\uc9c0\ud560 \uc218 \uc788\ub294 \uc601\uc5ed \ub2e4 \ucc28\uc9c0\ud568 (display: flex\uac00 \ub41c \uc0c1\ud669\uc5d0\uc11c) */\n  padding: 20px 32px;\n  padding-bottom: 48px;\n  overflow-y: auto;\n"]);return J=function(){return n},n}var K=u.c.div(J()),N=function(){var n=h();return o.a.createElement(K,null,n.map((function(n){return o.a.createElement(F,{key:n.id,id:n.id,text:n.text,done:n.done})})))},V=t(30);function B(){var n=Object(c.a)(["\n  padding: 12px;\n  border-radius: 4px;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n\n  box-sizing: border-box; /*\uc774\ub807\uac8c \ud574\uc57c \ubc15\uc2a4 \ubc16\uc73c\ub85c \uc548 \uc090\uc800\ub098\uac10*/\n"]);return B=function(){return n},n}function I(){var n=Object(c.a)(["\n  background: #f8f9fa;\n  padding: 32px;\n  padding-bottom: 72px;\n  border-bottom-left-radius: 16px; /* \ub465\uadfc \ubaa8\uc11c\ub9ac\ub97c \uc090\uc800\ub098\uac00\uc9c0 \uc54a\uac8c \ud558\uae30\uc704\ud55c \uc791\uc5c5 */\n  border-bottom-right-radius: 16px;\n\n  border-top: 1px solid #e9ecef; /*\uc717\ubd80\ubd84 \ud14c\ub450\ub9ac*/\n"]);return I=function(){return n},n}function U(){var n=Object(c.a)(["\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n"]);return U=function(){return n},n}function q(){var n=Object(c.a)(["\n      background: #ff6b6b;\n      &:hover {\n        background: #ff8787;\n      }\n      &:active {\n        background: #fa5252;\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "]);return q=function(){return n},n}function H(){var n=Object(c.a)(["\n  background: #38d9a9;\n  &:hover {\n    background: #63e6be;\n  }\n  &:active {\n    background: #20c997;\n  }\n\n  z-index: 5; /* \ub531\ud788 5\ub85c \uc9c0\uc815\ud55c \uc774\uc720\ub294 \uc5c6\uc74c \uadf8\ub0e5 \ub192\uc740 \uc22b\uc790 \uc120\ud0dd */\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n\n  /* \ubc84\ud2bc \uc704\uce58 \uc7a1\uae30 */\n  position: absolute;\n  left: 50%;\n  bottom: 0px;\n  transform: translate(-50%, 50%);\n\n  font-size: 60px;\n  color: white;\n  border-radius: 40px;\n\n  border: none;\n  outline: none;\n\n  span {\n    flex: 1;\n  }\n\n  transition: 0.125s all ease-in;\n  ","\n"]);return H=function(){return n},n}var Q=u.c.button(H(),(function(n){return n.open&&Object(u.b)(q())})),W=u.c.div(U()),X=u.c.form(I()),Y=u.c.input(B());var Z=o.a.memo((function(){var n=Object(r.useState)(!1),e=Object(p.a)(n,2),t=e[0],a=e[1],i=Object(r.useState)(""),c=Object(p.a)(i,2),u=c[0],d=c[1],l=O(),f=function(){var n=Object(r.useContext)(v);if(!n)throw new Error("Cannot find TodoProvider");return n}();return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(W,null,o.a.createElement(X,{onSubmit:function(n){n.preventDefault(),l({type:"CREATE",todo:{id:f.current,text:u,done:!1}}),d(""),f.current+=1}},o.a.createElement(Y,{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter\uc744 \ub204\ub974\uc138\uc694.",autoFocus:!0,onChange:function(n){return d(n.target.value)},value:u}))),o.a.createElement(Q,{type:"button",onClick:function(){return a(!t)},open:t},o.a.createElement(V.a,null)))}));function $(){var n=Object(c.a)(["\n  body {\n    background: #e9ecef\n  }\n"]);return $=function(){return n},n}var _=Object(u.a)($());var nn=function(){return o.a.createElement(E,null,o.a.createElement(_,null),o.a.createElement(f,null,o.a.createElement(w,null),o.a.createElement(N,null),o.a.createElement(Z,null)))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(nn,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fbade86a.chunk.js.map