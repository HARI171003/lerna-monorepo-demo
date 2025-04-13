exports.id=693,exports.ids=[693],exports.modules={4607:r=>{r.exports={main:"Home_main__2uIek",container:"Home_container__9OuOz",title:"Home_title__YEn0u",description:"Home_description__zHUB6",navigation:"Home_navigation__zJCaL"}},2199:(r,e,n)=>{"use strict";n.d(e,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var t=n(997);n(6689);var i=n(1664),o=n.n(i);let __WEBPACK_DEFAULT_EXPORT__=({children:r})=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("nav",{style:{padding:"1rem 2rem",backgroundColor:"#f5f5f5",display:"flex",justifyContent:"space-between"},children:[t.jsx(o(),{href:"/",style:{fontWeight:"bold"},children:"Monorepo Demo"}),(0,t.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[t.jsx(o(),{href:"/",children:"Home"}),t.jsx(o(),{href:"/about",children:"About"})]})]}),r,t.jsx("footer",{style:{padding:"2rem",textAlign:"center",borderTop:"1px solid #eaeaea",marginTop:"2rem"},children:t.jsx("p",{children:"Lerna Monorepo Demo with Next.js"})})]})},4807:(r,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>App});var t=n(997);function App({Component:r,pageProps:e}){return t.jsx(r,{...e})}n(108)},9243:(r,e,n)=>{"use strict";n.d(e,{z:()=>Button,Z:()=>Card});var t=n(997),__assign=function(){return(__assign=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r}).apply(this,arguments)},Button=function(r){var e=r.label,n=r.onClick,i=r.variant,o=void 0===i?"primary":i,a=r.disabled,s=void 0!==a&&a;return t.jsx("button",__assign({style:function(){var r={padding:"10px 20px",fontSize:"16px",border:"none",borderRadius:"4px",cursor:s?"not-allowed":"pointer",opacity:s?.7:1};switch(o){case"primary":return __assign(__assign({},r),{backgroundColor:"#007bff",color:"white"});case"secondary":return __assign(__assign({},r),{backgroundColor:"#6c757d",color:"white"});case"danger":return __assign(__assign({},r),{backgroundColor:"#dc3545",color:"white"});default:return r}}(),onClick:n,disabled:s},{children:e}))},i=n(5762),Card_assign=function(){return(Card_assign=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r}).apply(this,arguments)},Card=function(r){var e=r.title,n=r.content,o=r.date,a=r.children;return(0,t.jsxs)("div",Card_assign({style:{border:"1px solid #ddd",borderRadius:"8px",padding:"16px",margin:"8px 0"}},{children:[t.jsx("h3",Card_assign({style:{marginTop:0}},{children:e})),t.jsx("p",{children:n}),o&&(0,t.jsxs)("div",Card_assign({style:{fontSize:"0.8rem",color:"#666"}},{children:["Date: ",(0,i.p)(o)]})),a&&t.jsx("div",Card_assign({style:{marginTop:"12px"}},{children:a}))]}))}},5762:(r,e,n)=>{"use strict";n.d(e,{p:()=>formatDate,x:()=>formatCurrency});var formatCurrency=function(r,e){return void 0===e&&(e="USD"),new Intl.NumberFormat("en-US",{style:"currency",currency:e}).format(r)},formatDate=function(r){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(r)}},108:()=>{}};