(this["webpackJsonpportfolio-2021"]=this["webpackJsonpportfolio-2021"]||[]).push([[0],{11:function(e,n,t){e.exports={main:"Layout_main__2BliD"}},13:function(e,n,t){e.exports={cont:"NavContainer_cont__XPOC8",backdrop:"NavContainer_backdrop__3nmxZ",show:"NavContainer_show__2cE5R"}},19:function(e,n,t){e.exports={cont:"Content_cont__1QTQ7",slide:"Content_slide__1tW-a"}},20:function(e,n,t){e.exports={drawer:"SideNavCont_drawer__2BGom",show:"SideNavCont_show__j8KpI"}},21:function(e,n,t){e.exports={toolbar:"Toolbar_toolbar__2aTU_",title:"Toolbar_title__3qgPm"}},28:function(e,n,t){},29:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),a=t(22),s=t.n(a),r=(t(28),t(12)),o=t(16),j=(t(29),function(e){return e>=992?"desktop":e>=576?"tablet":"mobile"}),l=window,d=l.innerWidth,u=l.innerHeight,b=Object(c.createContext)({width:d,height:u,device:j(d)}),h=Object(c.createContext)({isOpen:!1,onOpen:function(){}}),O=t(2),_=t(9),x=t.n(_),p=t(1),m=function(){return Object(p.jsx)("div",{className:x.a.cont,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"h1 "+x.a.head,children:"Hi!"}),Object(p.jsxs)("h2",{className:"h1 "+x.a.head,children:["I am"," ",Object(p.jsxs)("span",{className:x.a.name,children:[Object(p.jsx)("span",{children:Object(p.jsx)("img",{src:"assets/logo/SSlogo.png",className:x.a.initials})}),"akshi,"]})]}),Object(p.jsx)("p",{className:"h1 "+x.a.head,children:"Web Developer."})]})})},f=function(){return Object(p.jsx)(O.c,{children:Object(p.jsx)(O.a,{path:"/",children:Object(p.jsx)(m,{})})})},v=t(19),g=t.n(v),C=function(){var e=Object(c.useContext)(h).isOpen,n=Object(c.useContext)(b).device;return Object(p.jsx)("div",{className:[g.a.cont,"desktop"===n||e?g.a.slide:null].join(" "),children:Object(p.jsx)(f,{})})},N=t(20),w=t.n(N),k=function(e){var n=Object(c.useContext)(h).isOpen;return Object(p.jsx)("div",{className:[w.a.drawer,n?w.a.show:null].join(" "),children:e.children})},H=t(13),S=t.n(H),E=function(){var e=Object(c.useContext)(h).isOpen,n=Object(c.useContext)(b).device;return Object(p.jsxs)("div",{className:S.a.cont,children:["desktop"!==n&&Object(p.jsx)("div",{className:[S.a.backdrop,e?S.a.show:null].join(" ")}),Object(p.jsx)(k,{}),Object(p.jsx)(C,{})]})},L=t(11),T=t.n(L),B=function(){return Object(p.jsx)("div",{className:T.a.main,children:Object(p.jsx)(E,{})})},P=t(7),F=t.n(P),I=function(e){var n=Object(c.useContext)(h),t=n.isOpen,i=n.onOpen;return Object(p.jsx)("button",{className:F.a.hamburger+" "+(t?F.a.open:""),onClick:function(){i(!t)},children:Object(p.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 100 100",children:[Object(p.jsx)("path",{className:F.a.line+" "+F.a.line1,d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),Object(p.jsx)("path",{className:F.a.line+" "+F.a.line2,d:"M 20,50 H 80"}),Object(p.jsx)("path",{className:F.a.line+" "+F.a.line3,d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})]})})},y=t(21),z=t.n(y),J=function(){return Object(p.jsxs)("div",{className:z.a.toolbar,children:[Object(p.jsx)(I,{}),Object(p.jsx)("h2",{className:z.a.title,children:"Sakshi Shreya"})]})},K=function(){return Object(p.jsxs)("div",{className:T.a.main,children:[Object(p.jsx)(J,{}),Object(p.jsx)(E,{})]})};function M(){var e=window,n=e.innerWidth;return{width:n,height:e.innerHeight,device:j(n)}}var W=function(){var e=function(){var e=Object(c.useState)(M()),n=Object(r.a)(e,2),t=n[0],i=n[1];return Object(c.useEffect)((function(){function e(){i(M())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}(),n=e.device,t=Object(c.useState)("desktop"===n),i=Object(r.a)(t,2),a=i[0],s=i[1];return Object(c.useEffect)((function(){s("desktop"===n)}),[n]),Object(p.jsx)(b.Provider,{value:e,children:Object(p.jsx)(h.Provider,{value:{isOpen:a,onOpen:s},children:Object(p.jsx)(o.a,{children:"desktop"!==n?Object(p.jsx)(K,{}):Object(p.jsx)(B,{})})})})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(W,{})}),document.getElementById("root")),D()},7:function(e,n,t){e.exports={hamburger:"Hamburger_hamburger__3EE3H",line:"Hamburger_line__3hFlR",line1:"Hamburger_line1__20xNp",line2:"Hamburger_line2__C8fz_",line3:"Hamburger_line3__1STKJ",open:"Hamburger_open__2CfKJ"}},9:function(e,n,t){e.exports={cont:"HomeScreen_cont__2eeUk",head:"HomeScreen_head__1BzkK",initials:"HomeScreen_initials__3ydZI"}}},[[39,1,2]]]);
//# sourceMappingURL=main.241e66a8.chunk.js.map