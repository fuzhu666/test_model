_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{0:function(e,t,n){n("J5xr"),e.exports=n("nOHt")},J5xr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("Q0q4")}])},Q0q4:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("cpVT"),o=(n("VxdY"),n("Ut/D"),n("q1tI")),s=n("Uhsv"),c=n("20a2"),i=n("g4pe"),p=n.n(i),l=n("vJKn"),u=n.n(l),m=n("rg98"),d=n("Pc32");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(){var e=s.a.auth.user(),t=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.from("profiles").select("*").eq("user_id",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(){var n=Object(m.a)(u.a.mark((function n(){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(e.id);case 2:r=n.sent,d.a.setState({user:f(f({},e),{},{profile:r})});case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(o.useEffect)((function(){e&&n()}),[n,e]),Object(o.useEffect)((function(){var e=s.a.auth.onAuthStateChange(function(){var e=Object(m.a)(u.a.mark((function e(n,r){var a,o,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return e.next=3,t(null===r||void 0===r?void 0:r.user.id);case 3:a=e.sent,d.a.setState({user:f(f({},null===r||void 0===r?void 0:r.user),{},{profile:a})}),e.next=8;break;case 7:d.a.setState({user:null});case 8:if(fetch("/api/auth",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),credentials:"same-origin",body:JSON.stringify({event:n,session:r})}).then((function(e){return e.json()})),"SIGNED_IN"!==n){e.next=19;break}return o=r.user,e.next=13,s.a.from("profiles").select("*").eq("user_id",o.id);case 13:if(c=e.sent,(i=c.data).length){e.next=19;break}return e.next=18,s.a.from("profiles").insert([{user_id:o.id,name:o.user_metadata.full_name||o.email,avatar:o.user_metadata.avatar_url}]);case 18:d.a.setState({user:f(f({},o),{},{profile:i[0]})});case 19:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()).data;return function(){e.unsubscribe()}}),[])},h=n("5I6T");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(){var e=window.localStorage.getItem("nightwind-mode");return"string"===typeof e?e:"light"}var g=new function(e){var t=function(e,t){Object.keys(t).forEach((function(n){e[n]=t[n]}))},n={size:2,color:"#29e",className:"bar-of-progress",delay:80};e&&t(n,e);var r,a,o={position:"fixed",top:0,left:0,margin:0,padding:0,border:"none",borderRadius:0,backgroundColor:"currentColor",zIndex:1e4,height:"number"==typeof n.size?n.size+"px":n.size,color:n.color,opacity:0,width:"0%"},s={opacity:1,width:"99%",transition:"width 10s cubic-bezier(0.1, 0.05, 0, 1)"},c={opacity:0,width:"100%",transition:"width 0.1s ease-out, opacity 0.5s ease 0.2s"},i={opacity:.4,boxShadow:"3px 0 8px",height:"100%"};this.start=function(){a&&a.parentNode&&a.parentNode.removeChild(a),(a=document.body.appendChild(document.createElement("div"))).className=n.className+" stopped",t(a.style,o);var e=a.appendChild(document.createElement("div"));e.className="glow",t(e.style,i),null!=r&&clearTimeout(r),r=setTimeout((function(){r=null,a.className=n.className+" started",t(a.style,s)}),n.delay),a.scrollTop=0},this.finish=function(){null!=r&&(clearTimeout(r),r=null),a&&(a.className=n.className+" finished",t(a.style,c))}}({size:3,color:"#2e298b",delay:100,className:"progress"});t.default=function(e){var t=e.Component,n=e.pageProps,a=s.a.auth.user(),i=s.a.auth.session(),l=Object(c.useRouter)();return j(),Object(o.useEffect)((function(){l.events.on("routeChangeStart",g.start),l.events.on("routeChangeComplete",g.finish),l.events.on("routeChangeError",g.finish)}),[l.events]),Object(o.useEffect)((function(){"light"===x()?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"),document.documentElement.classList.add("nightwind"),d.a.setState({darkMode:"dark"===x()})}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(p.a,{children:[Object(r.jsx)("link",{rel:"amphtml",href:"https://market.pmnd.rs"+l.asPath}),Object(r.jsx)("link",{rel:"canonical",href:"https://market.pmnd.rs"+l.asPath}),Object(r.jsx)("meta",{name:"googlebot",content:"follow, index, noarchive"}),Object(r.jsx)("meta",{name:"robots",content:"follow, index, noarchive"}),Object(r.jsx)("meta",{name:"viewport",content:"initial-scale=1,width=device-width"}),Object(r.jsx)("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),Object(r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),Object(r.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),Object(r.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"#000000"}),Object(r.jsx)("meta",{name:"apple-mobile-web-app-title",content:"PMNDRS Market"}),Object(r.jsx)("meta",{name:"application-name",content:"PMNDRS Market"}),Object(r.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),Object(r.jsx)("meta",{name:"msapplication-config",content:"/browserconfig.xml"}),Object(r.jsx)("meta",{name:"msapplication-navbutton-color",content:"#000000"}),Object(r.jsx)("meta",{name:"msapplication-starturl",content:"https://market.pmnd.rs/"}),Object(r.jsx)("meta",{name:"msapplication-tilecolor",content:"#000000"}),Object(r.jsx)("meta",{name:"msapplication-tileimage",content:"/mstile-144x144.png"}),Object(r.jsx)("meta",{name:"msapplication-tooltip",content:"PMNDRS Market"}),Object(r.jsx)("meta",{name:"title",content:"pmndrs market"}),Object(r.jsx)("meta",{name:"description",content:"Your home for downloading web-ready 3D assets. Download CC0 models, textures and HDRI's that are web-ready."}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{property:"og:url",content:"http://market.pmnd.rs/"}),Object(r.jsx)("meta",{property:"og:title",content:"pmndrs market"}),Object(r.jsx)("meta",{property:"og:description",content:"Your home for downloading web-ready 3D assets. Download CC0 models, textures and HDRI's that are web-ready."}),Object(r.jsx)("meta",{property:"og:image",content:"http://market.pmnd.rs/share.png"}),Object(r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),Object(r.jsx)("meta",{property:"twitter:url",content:"http://market.pmnd.rs/"}),Object(r.jsx)("meta",{property:"twitter:title",content:"pmndrs market"}),Object(r.jsx)("meta",{property:"twitter:description",content:"Your home for downloading web-ready 3D assets. Download CC0 models, textures and HDRI's that are web-ready."}),Object(r.jsx)("meta",{property:"twitter:image",content:"http://market.pmnd.rs/share.png"})]}),Object(r.jsx)(t,w({user:a,session:i},n)),Object(r.jsx)(h.a,{})]})}},"Ut/D":function(e,t,n){},VxdY:function(e,t,n){}},[[0,2,1,4,0,3,6]]]);