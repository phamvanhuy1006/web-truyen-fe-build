import{w as V,v as E,z as W,W as q,_ as r,P as j,j as d,x as h,Y as D,Z as L,r as G,y as S,U as J,t as U,ac as m,F as w}from"./main-f1f37423.js";function K(a){return V("MuiPagination",a)}E("MuiPagination",["root","ul","outlined","text"]);const Q=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function X(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:s=1,defaultPage:v=1,disabled:b=!1,hideNextButton:x=!1,hidePrevButton:n=!1,onChange:p,page:f,showFirstButton:z=!1,showLastButton:k=!1,siblingCount:y=1}=a,l=W(a,Q),[i,R]=q({controlled:f,default:v,name:o,state:"page"}),I=(e,C)=>{f||R(C),p&&p(e,C)},u=(e,C)=>{const Y=C-e+1;return Array.from({length:Y},(ba,Z)=>e+Z)},N=u(1,Math.min(t,s)),g=u(Math.max(s-t+1,t+1),s),M=Math.max(Math.min(i-y,s-t-y*2-1),t+2),$=Math.min(Math.max(i+y,t+y*2+2),g.length>0?g[0]-2:s-1),B=[...z?["first"]:[],...n?[]:["previous"],...N,...M>t+2?["start-ellipsis"]:t+1<s-t?[t+1]:[],...u(M,$),...$<s-t-1?["end-ellipsis"]:s-t>t?[s-t]:[],...g,...x?[]:["next"],...k?["last"]:[]],O=e=>{switch(e){case"first":return 1;case"previous":return i-1;case"next":return i+1;case"last":return s;default:return null}},P=B.map(e=>typeof e=="number"?{onClick:C=>{I(C,e)},type:"page",page:e,selected:e===i,disabled:b,"aria-current":e===i?"true":void 0}:{onClick:C=>{I(C,O(e))},type:e,page:O(e),selected:!1,disabled:b||e.indexOf("ellipsis")===-1&&(e==="next"||e==="last"?i>=s:i<=1)});return r({items:P},l)}function aa(a){return V("MuiPaginationItem",a)}const ta=E("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),c=ta,F=j(d.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),T=j(d.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),_=j(d.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),A=j(d.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),oa=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],H=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${m(o.size)}`],o.variant==="text"&&t[`text${m(o.color)}`],o.variant==="outlined"&&t[`outlined${m(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},sa=a=>{const{classes:t,color:o,disabled:s,selected:v,size:b,shape:x,type:n,variant:p}=a,f={root:["root",`size${m(b)}`,p,x,o!=="standard"&&`${p}${m(o)}`,s&&"disabled",v&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[n]],icon:["icon"]};return w(f,aa,t)},ea=h("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:H})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${c.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),ia=h(D,{name:"MuiPaginationItem",slot:"Root",overridesResolver:H})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${c.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${c.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:L(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${c.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:L(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${c.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>r({},t.variant==="text"&&{[`&.${c.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${c.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${c.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${c.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:L(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:L(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:L(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:L(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${c.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),na=h("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>r({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),ra=G.forwardRef(function(t,o){const s=S({props:t,name:"MuiPaginationItem"}),{className:v,color:b="standard",component:x,components:n={},disabled:p=!1,page:f,selected:z=!1,shape:k="circular",size:y="medium",slots:l={},type:i="page",variant:R="text"}=s,I=W(s,oa),u=r({},s,{color:b,disabled:p,selected:z,shape:k,size:y,type:i,variant:R}),N=J(),g=sa(u),$=(N.direction==="rtl"?{previous:l.next||n.next||A,next:l.previous||n.previous||_,last:l.first||n.first||F,first:l.last||n.last||T}:{previous:l.previous||n.previous||_,next:l.next||n.next||A,first:l.first||n.first||F,last:l.last||n.last||T})[i];return i==="start-ellipsis"||i==="end-ellipsis"?d.jsx(ea,{ref:o,ownerState:u,className:U(g.root,v),children:"…"}):d.jsxs(ia,r({ref:o,ownerState:u,component:x,disabled:p,className:U(g.root,v)},I,{children:[i==="page"&&f,$?d.jsx(na,{as:$,ownerState:u,className:g.icon}):null]}))}),la=ra,ca=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],da=a=>{const{classes:t,variant:o}=a;return w({root:["root",o],ul:["ul"]},K,t)},pa=h("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),ua=h("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ga(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const va=G.forwardRef(function(t,o){const s=S({props:t,name:"MuiPagination"}),{boundaryCount:v=1,className:b,color:x="standard",count:n=1,defaultPage:p=1,disabled:f=!1,getItemAriaLabel:z=ga,hideNextButton:k=!1,hidePrevButton:y=!1,renderItem:l=P=>d.jsx(la,r({},P)),shape:i="circular",showFirstButton:R=!1,showLastButton:I=!1,siblingCount:u=1,size:N="medium",variant:g="text"}=s,M=W(s,ca),{items:$}=X(r({},s,{componentName:"Pagination"})),B=r({},s,{boundaryCount:v,color:x,count:n,defaultPage:p,disabled:f,getItemAriaLabel:z,hideNextButton:k,hidePrevButton:y,renderItem:l,shape:i,showFirstButton:R,showLastButton:I,siblingCount:u,size:N,variant:g}),O=da(B);return d.jsx(pa,r({"aria-label":"pagination navigation",className:U(O.root,b),ownerState:B,ref:o},M,{children:d.jsx(ua,{className:O.ul,ownerState:B,children:$.map((P,e)=>d.jsx("li",{children:l(r({},P,{color:x,"aria-label":z(P.type,P.page,P.selected),shape:i,size:N,variant:g}))},e))})}))}),fa=va;export{F,T as L,fa as P};
