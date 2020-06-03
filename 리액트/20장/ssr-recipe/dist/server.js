!function(e){var r={},t={0:0};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.e=function(r){if(0!==t[r]){var n=require("./js/"+({1:"pages-BluePage",2:"pages-RedPage",3:"pages-UsersPage"}[r]||r)+".chunk.js"),o=n.modules,u=n.ids;for(var a in o)e[a]=o[a];for(var s=0;s<u.length;s++)t[u[s]]=0}return Promise.all([])},n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/",n.oe=function(e){process.nextTick((function(){throw e}))},n(n.s=23)}([function(e,r){e.exports=require("react")},function(e,r,t){e.exports=t(22)},function(e,r){e.exports=require("react-router-dom")},function(e,r){e.exports=require("redux-saga/effects")},function(e,r){e.exports=require("redux")},function(e,r,t){"use strict";function n(e,r,t,n,o,u,a){try{var s=e[u](a),c=s.value}catch(e){return void t(e)}s.done?r(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var r=this,t=arguments;return new Promise((function(o,u){var a=e.apply(r,t);function s(e){n(a,o,u,s,c,"next",e)}function c(e){n(a,o,u,s,c,"throw",e)}s(void 0)}))}}t.d(r,"a",(function(){return o}))},function(e,r){e.exports=require("redux-saga")},function(e,r){e.exports=require("@loadable/component")},function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,"b",(function(){return m})),t.d(r,"c",(function(){return y})),t.d(r,"d",(function(){return E}));var a=t(1),s=t.n(a),c=t(5),i=t(12),l=t.n(i),p=t(3),f=s.a.mark(g),d=s.a.mark(E),v="users/GET_USER",h=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},m=function(e){return{type:v,payload:e}},y=function(){return function(){var e=Object(c.a)(s.a.mark((function e(r){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"users/GET_USERS_PENDING"}),e.next=4,l.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:"users/GET_USERS_SUCCESS",payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r(h(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},b=function(e){return l.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function g(e){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p.call)(b,e.payload);case 3:return r=t.sent,t.next=6,Object(p.put)({type:"users/GET_USER_SUCCESS",payload:r.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(p.put)({type:"users/GET_USER_FAILURE",payload:t.t0,error:!0});case 12:case"end":return t.stop()}}),f,null,[[0,8]])}function E(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.takeEvery)(v,g);case 2:case"end":return e.stop()}}),d)}var x={users:null,loading:{users:!1,user:!1},error:{users:null,user:null}};r.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return u({},e,{loading:u({},e.loading,{users:!0}),error:u({},e.error,{users:null})});case"users/GET_USERS_SUCCESS":return u({},e,{loading:u({},e.loading,{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return u({},e,{loading:u({},e.loading,{users:!1}),error:u({},e.error,{users:r.payload})});case v:return u({},e,{loading:u({},e.loading,{user:!0}),error:u({},e.error,{user:null})});case"users/GET_USER_SUCCESS":return u({},e,{loading:u({},e.loading,{user:!1}),user:r.payload});case"users/GET_USER_FAILURE":return u({},e,{loading:u({},e.loading,{user:!1}),error:u({},e.error,{user:r.payload})});default:return e}}},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("@loadable/server")},function(e,r){e.exports=require("react-redux")},function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"c",(function(){return a}));var n=t(0),o=Object(n.createContext)(null);r.b=o;var u=function(e){var r=e.resolve,t=Object(n.useContext)(o);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},a=function(e){var r=Object(n.useContext)(o);return r?r.done?null:void r.promises.push(Promise.resolve(e())):null}},function(e,r,t){"use strict";var n=t(0),o=t.n(n),u=t(2),a=t.n(u),s=t(17),c=t(7),i=t.n(c),l=i()({resolved:{},chunkName:function(){return"pages-RedPage"},isReady:function(e){var r=this.resolve(e);return!1!==this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(2).then(t.bind(null,20))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 20}}),p=i()({resolved:{},chunkName:function(){return"pages-BluePage"},isReady:function(e){var r=this.resolve(e);return!1!==this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(1).then(t.bind(null,21))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 21}}),f=i()({resolved:{},chunkName:function(){return"pages-UsersPage"},isReady:function(e){var r=this.resolve(e);return!1!==this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(3).then(t.bind(null,19))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 19}}),d=function(){return o.a.createElement("div",null,o.a.createElement(s.a,null),o.a.createElement("hr",null),o.a.createElement(u.Route,{path:"/red",component:l}),o.a.createElement(u.Route,{path:"/blue",component:p}),o.a.createElement(u.Route,{path:"/users",component:f}))};r.a=d},function(e,r,t){"use strict";var n=t(0),o=t.n(n),u=t(2);r.a=function(){return o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(u.Link,{to:"/red"},"Red")),o.a.createElement("li",null,o.a.createElement(u.Link,{to:"/blue"},"Blue")),o.a.createElement("li",null,o.a.createElement(u.Link,{to:"/users"},"Users")))}},function(e,r){e.exports=require("redux-thunk")},,,,function(e,r){e.exports=require("regenerator-runtime")},function(e,r,t){"use strict";t.r(r);var n=t(1),o=t.n(n),u=t(5),a=t(0),s=t.n(a),c=t(9),i=t.n(c),l=t(10),p=t.n(l),f=t(2),d=t(16),v=t(11),h=t.n(v),m=t(4),y=t(14),b=t(18),g=t.n(b),E=t(6),x=t.n(E),S=t(8),O=t(3),j=o.a.mark(P);function P(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.all)([Object(S.d)()]);case 2:case"end":return e.stop()}}),j)}var _=Object(m.combineReducers)({users:S.a}),R=t(15),w=t(13),k=h.a.resolve("./build/loadable-stats.json");function T(e,r){return'<!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="shortcut icon" href="/favicon.ico" />\n    <meta\n      name="viewport"\n      content="width=device-width,initial-scale=1,shrink-to-fit=no"\n    />\n    <meta name="theme-color" content="#000000" />\n    <title>React App</title>\n    '.concat(r.styles,"\n    ").concat(r.links,'\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root">\n      ').concat(e,"\n    </div>\n    ").concat(r.scripts,"\n  </body>\n  </html>\n    ")}var U=p()(),q=function(){var e=Object(u.a)(o.a.mark((function e(r,t,n){var u,a,c,l,p,v,h,b,S,O,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={},a=x()(),c=Object(m.createStore)(_,Object(m.applyMiddleware)(g.a,a)),l=a.run(P).toPromise(),p={done:!1,promises:[]},v=new w.ChunkExtractor({statsFile:k}),h=s.a.createElement(w.ChunkExtractorManager,{extractor:v},s.a.createElement(R.b.Provider,{value:p},s.a.createElement(y.Provider,{store:c},s.a.createElement(f.StaticRouter,{location:r.url,context:u},s.a.createElement(d.a,null))))),i.a.renderToStaticMarkup(h),c.dispatch(E.END),e.prev=9,e.next=12,l;case 12:return e.next=14,Promise.all(p.promises);case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(9),e.abrupt("return",t.status(500));case 19:p.done=!0,b=i.a.renderToString(h),S=JSON.stringify(c.getState()).replace(/</g,"\\u003c"),O="<script>__PRELOADED_STATE__ = ".concat(S,"<\/script>"),j={scripts:O+v.getScriptTags(),links:v.getLinkTags(),styles:v.getStyleTags()},t.send(T(b,j));case 25:case"end":return e.stop()}}),e,null,[[9,16]])})));return function(r,t,n){return e.apply(this,arguments)}}(),A=p.a.static(h.a.resolve("./build"),{index:!1});U.use(A),U.use(q),U.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);