"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[481],{613:function(e,t,r){r.d(t,{e:function(){return d}});var n=r(984),a=r(689),u=r(87),c=r(967),i="MovieLink_NavLink__02YS-",s="MovieLink_themeDark__HoovL",o="MovieLink_MovieLink__frDj-",f="MovieLink_MovieLi__U-dAF",v=r(184),p=function(e){var t=e.to,r=void 0===t?"":t,n=e.text,p=void 0===n?"":n,l=(0,a.TH)(),d=(0,c.F)().theme;return(0,v.jsx)("li",{className:f,children:(0,v.jsx)("div",{className:o,children:(0,v.jsxs)(u.OL,{className:"".concat(i," ").concat(d?"":s),to:r,state:{from:l.pathname},children:[p," "]})})})},l="MovieList_MovieList__92Iqv",d=function(e){var t=e.list,r=void 0===t?[]:t,a=e.path,u=void 0===a?"/movies":a;return(0,v.jsx)("ul",{className:l,children:r.map((function(e){return(0,v.jsx)(p,{text:e.title||"Title to be announced later",to:"".concat(u,"/").concat(e.id)},(0,n.x0)())}))})}},16:function(e,t,r){r.d(t,{Z:function(){return s}});var n="Separator_horizontal__DeiXg",a="Separator_vertical__Y5adW",u="Separator_absolute__o5u+-",c="Separator_margin__SSK-C",i=r(184),s=function(e){var t=e.vertical,r=void 0!==t&&t,s=e.relative,o=void 0!==s&&s;return(0,i.jsxs)(i.Fragment,{children:[r||o?"":(0,i.jsx)("div",{className:c}),(0,i.jsx)("div",{className:"".concat(r?a:n," ").concat(o?"":u)})]})}},481:function(e,t,r){r.r(t),r.d(t,{SearchMoviesPage:function(){return S},default:function(){return g}});var n=r(861),a=r(439),u=r(757),c=r.n(u),i=r(791),s="Searchbar_button__nkcjk",o="Searchbar_label__BRcTT",f="Searchbar_Searchbar__5WKzV",v="Searchbar_SearchForm__XuPyK",p="Searchbar_input__19umw",l=r(184),d=function(e){var t=e.searchHandle,r=e.query,n=(0,i.useState)(r||""),u=(0,a.Z)(n,2),c=u[0],d=u[1];return(0,l.jsx)("div",{className:f,children:(0,l.jsxs)("form",{className:v,onSubmit:function(e){e.preventDefault(),t(c)},children:[(0,l.jsx)("button",{type:"submit",className:s,children:(0,l.jsx)("span",{className:o,children:"\ud83d\udd0d"})}),(0,l.jsx)("input",{className:p,type:"text",autoComplete:"off",autoFocus:!0,name:"query",value:c,onInput:function(e){return d(e.target.value)},placeholder:"Search for movies"})]})})},_=r(16),h=r(613),m=r(390),x=r(639),b=r(474),S=function(){var e=(0,b.a)(),t=e.query,r=e.setQuery,u=(0,i.useState)(!0),s=(0,a.Z)(u,2),o=s[0],f=s[1],v=(0,i.useState)(!1),p=(0,a.Z)(v,2),S=p[0],g=p[1],k=(0,i.useState)([]),j=(0,a.Z)(k,2),w=j[0],y=j[1];return(0,i.useEffect)((function(){if(""!==t){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!1),f(!0),e.next=5,(0,m.E3)(t);case 5:r=e.sent,y(r.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),g(!0);case 12:return e.prev=12,f(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}else y([]),f(!1)}),[t]),(0,l.jsxs)("article",{children:[(0,l.jsx)(d,{searchHandle:r,query:t}),o?(0,l.jsx)(x.a,{}):S||(0,l.jsx)(h.e,{list:w}),(0,l.jsx)(_.Z,{})]})},g=S},390:function(e,t,r){r.d(t,{E3:function(){return f},Hx:function(){return l},Mc:function(){return v},Tg:function(){return o},uV:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(243),i=new URLSearchParams({api_key:"78f2b6656e3343e055b38455360ff324",page:1,include_adult:!1,language:"en-US"});c.Z.defaults.params=i;var s=c.Z.create({baseURL:"https://api.themoviedb.org/3",params:i}),o=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("search/movie?query=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t,"}/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},984:function(e,t,r){r.d(t,{x0:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=481.cc562910.chunk.js.map