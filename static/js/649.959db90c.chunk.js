"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[649],{649:function(e,t,a){a.r(t),a.d(t,{SharedLayout:function(){return C},default:function(){return w}});var o=a(689),n=a(439),c=a(791),r=a(87),s=a(967),i="HeaderNavBtn_navLink__edJeO",l="HeaderNavBtn_active__VQACq",m="HeaderNavBtn_themeDark__WuAOr",d=a(184),u=function(e){var t=e.to,a=void 0===t?"/":t,n=e.display,c=(0,s.F)().theme,u=(0,o.TH)();return u.state&&u.pathname===a?(0,d.jsx)(r.OL,{className:function(e){return"".concat(i," ").concat(c?"":m," ").concat(e.isActive?l:"")},to:a,state:function(e){return e},children:n||a[0].toUpperCase()+""+"".concat(a).slice(1)}):(0,d.jsx)(r.OL,{className:function(e){return"".concat(i," ").concat(c?"":m," ").concat(e.isActive?l:"")},to:a,state:{from:u.pathname},children:n||a[0].toUpperCase()+""+"".concat(a).slice(1)})},_="ToggleBtn_toggleBtn__f6NMc",h="ToggleBtn_themeDark__Bdx0b",f=function(e){var t=e.display,a=void 0===t?["",""]:t,o=e.toggle,n=void 0===o?console.log:o,c=e.selectedIndex,r=void 0===c?0:c,i=(0,s.F)().theme;return(0,d.jsx)("button",{className:"".concat(_," ").concat(i?"":h),type:"button",onClick:n,children:a[r]})},v="GoBackBtn_button__9TCJQ",p="GoBackBtn_themeDark__YY5ps",x=function(e){var t=e.txt,a=e.hide,n=void 0===a?"/":a,c="/goit-react-hw-05-movies",r=(0,s.F)().theme,i=(0,o.s0)(),l=(0,o.TH)(),m=l.state&&l.state.from;if(!m&&(l.pathname===n||l.pathname===c)||m&&(l.state.from===l.pathname||l.state.from===n||l.state.from===c))return(0,d.jsx)(d.Fragment,{});var u=m?"".concat(l.state.from.substring(l.state.from.lastIndexOf("/")+1)):"Home",_="".concat((""===u?"Home":u)[0].toUpperCase()).concat((""===u?"Home":u).slice(1)),h=_==="".concat(Number(_))?"Movie Details":"".concat(_);return(0,d.jsx)("button",{className:"".concat(v," ").concat(r?"":p),type:"button",onClick:function(){i(m?l.state.from:"/",{replace:!1,state:{from:l.pathname}})},children:t||"Back to \u2192 "+h})},g="Header_header__HXQOm",j="Header_themeDark__3mCq8",N="Header_leftNav__SjTHo",H="Header_rightNav__Wq-VU",k=function(){var e=(0,s.F)(),t=e.theme,a=e.toggleTheme,o=(0,c.useState)(!1),r=(0,n.Z)(o,2),i=r[0],l=r[1],m=document.querySelector(".header"),_=document.querySelector(".footer");return(0,c.useEffect)((function(){i&&_?_.scrollIntoView():window.scrollTo(0,0)}),[i,m,_]),(0,d.jsxs)("header",{className:"header ".concat(g," ").concat(t?"":j),children:[(0,d.jsxs)("nav",{className:N,children:[(0,d.jsx)(u,{to:"/",display:"Home"}),(0,d.jsx)(u,{to:"/movies",display:"Movies"})]}),(0,d.jsxs)("nav",{className:H,children:[(0,d.jsx)(f,{display:["\u21e9","\u21e7"],toggle:function(){return l(!i)},selectedIndex:Number(i)}),(0,d.jsx)(f,{display:["\ud83c\udf18","\u2600\ufe0f"],toggle:a,selectedIndex:Number(t)}),(0,d.jsx)(x,{})]})]})},y="SharedLayout_page__jwxNz",b="SharedLayout_pageContent__EZIcE",B="SharedLayout_themeDark__5F1QH",C=function(){var e=(0,s.F)().theme;return(0,d.jsxs)("div",{className:"".concat(y," ").concat(e?"":B),children:[(0,d.jsx)(k,{}),(0,d.jsxs)("main",{className:b,id:"home",children:[(0,d.jsx)(x,{}),(0,d.jsx)(o.j3,{})]}),(0,d.jsx)("footer",{className:"footer",id:"footer"})]})},w=C}}]);
//# sourceMappingURL=649.959db90c.chunk.js.map