(this["webpackJsonpportfolio-2021"]=this["webpackJsonpportfolio-2021"]||[]).push([[0],{10:function(e,n,t){e.exports={main:"layout_main__1sOQz"}},12:function(e,n,t){e.exports={cont:"navContainer_cont__2H54S",backdrop:"navContainer_backdrop__1QUke",show:"navContainer_show__1Y_jC"}},18:function(e,n,t){e.exports={cont:"content_cont__22x7x",slide:"content_slide__3kFYx"}},19:function(e,n,t){e.exports={drawer:"sideNavCont_drawer__HsqSn",show:"sideNavCont_show__2WT1y"}},20:function(e,n,t){e.exports={toolbar:"toolbar_toolbar__3SWuj",title:"toolbar_title__vG4_K"}},27:function(e,n,t){},28:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t.n(i),r=t(21),o=t.n(r),s=(t(27),t(11)),a=t(15),j=(t(28),function(e){return e>=992?"desktop":e>=576?"tablet":"mobile"}),u=window,l=u.innerWidth,d=u.innerHeight,b=Object(i.createContext)({width:l,height:d,device:j(l)}),h=Object(i.createContext)({isOpen:!1,onOpen:function(){}}),O=t(2),_=t(1),x=function(){return Object(_.jsx)("div",{children:"Home hjsd"})},f=function(){return Object(_.jsx)(O.c,{children:Object(_.jsx)(O.a,{path:"/",children:Object(_.jsx)(x,{})})})},p=t(18),v=t.n(p),m=function(){var e=Object(i.useContext)(h).isOpen,n=Object(i.useContext)(b).device;return Object(_.jsx)("div",{className:[v.a.cont,"desktop"===n||e?v.a.slide:null].join(" "),children:Object(_.jsx)(f,{})})},w=t(19),g=t.n(w),C=function(e){var n=Object(i.useContext)(h).isOpen;return Object(_.jsx)("div",{className:[g.a.drawer,n?g.a.show:null].join(" "),children:e.children})},k=t(12),N=t.n(k),S=function(){var e=Object(i.useContext)(h).isOpen,n=Object(i.useContext)(b).device;return Object(_.jsxs)("div",{className:N.a.cont,children:["desktop"!==n&&Object(_.jsx)("div",{className:[N.a.backdrop,e?N.a.show:null].join(" ")}),Object(_.jsx)(C,{}),Object(_.jsx)(m,{})]})},H=t(10),L=t.n(H),y=function(){return Object(_.jsx)("div",{className:L.a.main,children:Object(_.jsx)(S,{})})},E=t(7),F=t.n(E),P=function(e){var n=Object(i.useContext)(h),t=n.isOpen,c=n.onOpen;return Object(_.jsx)("button",{className:F.a.hamburger+" "+(t?F.a.open:""),onClick:function(){c(!t)},children:Object(_.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 100 100",children:[Object(_.jsx)("path",{className:F.a.line+" "+F.a.line1,d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),Object(_.jsx)("path",{className:F.a.line+" "+F.a.line2,d:"M 20,50 H 80"}),Object(_.jsx)("path",{className:F.a.line+" "+F.a.line3,d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})})},D=t(20),M=t.n(D),W=function(){return Object(_.jsxs)("div",{className:M.a.toolbar,children:[Object(_.jsx)(P,{}),Object(_.jsx)("h2",{className:M.a.title,children:"Sakshi Shreya"})]})},z=function(){return Object(_.jsxs)("div",{className:L.a.main,children:[Object(_.jsx)(W,{}),Object(_.jsx)(S,{})]})};function B(){var e=window,n=e.innerWidth;return{width:n,height:e.innerHeight,device:j(n)}}var J=function(){var e=function(){var e=Object(i.useState)(B()),n=Object(s.a)(e,2),t=n[0],c=n[1];return Object(i.useEffect)((function(){function e(){c(B())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}(),n=e.device,t=Object(i.useState)("desktop"===n),c=Object(s.a)(t,2),r=c[0],o=c[1];return Object(i.useEffect)((function(){o("desktop"===n)}),[n]),Object(_.jsx)(b.Provider,{value:e,children:Object(_.jsx)(h.Provider,{value:{isOpen:r,onOpen:o},children:Object(_.jsx)(a.a,{children:"desktop"!==n?Object(_.jsx)(z,{}):Object(_.jsx)(y,{})})})})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),i(e),c(e),r(e),o(e)}))};o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(J,{})}),document.getElementById("root")),T()},7:function(e,n,t){e.exports={hamburger:"hamburger_hamburger__2DnmD",line:"hamburger_line__1yhkf",line1:"hamburger_line1__9a1JY",line2:"hamburger_line2__uG4eZ",line3:"hamburger_line3__2OqDP",open:"hamburger_open__3nLnO"}}},[[38,1,2]]]);
//# sourceMappingURL=main.1e0a44fc.chunk.js.map