(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(2549)}])},2199:function(n,e,r){"use strict";var t=r(2322);r(2784);var i=r(1664),o=r.n(i);e.Z=n=>{let{children:e}=n;return(0,t.jsxs)("div",{children:[(0,t.jsxs)("nav",{style:{padding:"1rem 2rem",backgroundColor:"#f5f5f5",display:"flex",justifyContent:"space-between"},children:[(0,t.jsx)(o(),{href:"/",style:{fontWeight:"bold"},children:"Monorepo Demo"}),(0,t.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,t.jsx)(o(),{href:"/",children:"Home"}),(0,t.jsx)(o(),{href:"/about",children:"About"})]})]}),e,(0,t.jsx)("footer",{style:{padding:"2rem",textAlign:"center",borderTop:"1px solid #eaeaea",marginTop:"2rem"},children:(0,t.jsx)("p",{children:"Lerna Monorepo Demo with Next.js"})})]})}},2549:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return About}});var t=r(2322);r(2784);var i=r(9008),o=r.n(i),s=r(1664),a=r.n(s),c=r(9243),d=r(1110),l=r.n(d),u=r(2199);function About(){return(0,t.jsxs)(u.Z,{children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("title",{children:"About - Lerna Monorepo Demo"}),(0,t.jsx)("meta",{name:"description",content:"About page"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)("main",{className:l().main,children:(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)("h1",{className:l().title,children:"About"}),(0,t.jsx)(c.Z,{title:"About this project",content:"This is a demo project showcasing a Lerna monorepo setup with Next.js, TypeScript, Husky, and automated testing.",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"The monorepo contains three packages:"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"@monorepo/app"}),": Next.js application (this app)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"@monorepo/ui"}),": Shared UI component library"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"@monorepo/utils"}),": Common utility functions"]})]}),(0,t.jsx)("div",{style:{marginTop:"20px"},children:(0,t.jsx)(a(),{href:"/",style:{color:"#0070f3",textDecoration:"none"},children:"← Back to Home"})})]})})]})})]})}},9243:function(n,e,r){"use strict";r.d(e,{z:function(){return Button},Z:function(){return Card}});var t=r(2322),__assign=function(){return(__assign=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},Button=function(n){var e=n.label,r=n.onClick,i=n.variant,o=void 0===i?"primary":i,s=n.disabled,a=void 0!==s&&s;return(0,t.jsx)("button",__assign({style:function(){var n={padding:"10px 20px",fontSize:"16px",border:"none",borderRadius:"4px",cursor:a?"not-allowed":"pointer",opacity:a?.7:1};switch(o){case"primary":return __assign(__assign({},n),{backgroundColor:"#007bff",color:"white"});case"secondary":return __assign(__assign({},n),{backgroundColor:"#6c757d",color:"white"});case"danger":return __assign(__assign({},n),{backgroundColor:"#dc3545",color:"white"});default:return n}}(),onClick:r,disabled:a},{children:e}))},i=r(5762),Card_assign=function(){return(Card_assign=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},Card=function(n){var e=n.title,r=n.content,o=n.date,s=n.children;return(0,t.jsxs)("div",Card_assign({style:{border:"1px solid #ddd",borderRadius:"8px",padding:"16px",margin:"8px 0"}},{children:[(0,t.jsx)("h3",Card_assign({style:{marginTop:0}},{children:e})),(0,t.jsx)("p",{children:r}),o&&(0,t.jsxs)("div",Card_assign({style:{fontSize:"0.8rem",color:"#666"}},{children:["Date: ",(0,i.p)(o)]})),s&&(0,t.jsx)("div",Card_assign({style:{marginTop:"12px"}},{children:s}))]}))}},5762:function(n,e,r){"use strict";r.d(e,{p:function(){return formatDate},x:function(){return formatCurrency}});var formatCurrency=function(n,e){return void 0===e&&(e="USD"),new Intl.NumberFormat("en-US",{style:"currency",currency:e}).format(n)},formatDate=function(n){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(n)}},1110:function(n){n.exports={main:"Home_main__2uIek",container:"Home_container__9OuOz",title:"Home_title__YEn0u",description:"Home_description__zHUB6",navigation:"Home_navigation__zJCaL"}}},function(n){n.O(0,[996,774,888,179],function(){return n(n.s=9212)}),_N_E=n.O()}]);