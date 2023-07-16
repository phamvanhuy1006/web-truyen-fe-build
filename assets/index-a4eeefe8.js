import{a as W,b as q,c as h,v as H,_ as r,m as _,j as b,s as j,B as J,w as B,r as E,p as V,n as X,t as T,N as M,f as w,aa as Y,b4 as Z,aA as aa,b5 as A}from"./main-e476a63a.js";function ta(a){return W("MuiPagination",a)}q("MuiPagination",["root","ul","outlined","text"]);const oa=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function ea(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:e=1,defaultPage:x=1,disabled:y=!1,hideNextButton:P=!1,hidePrevButton:i=!1,onChange:p,page:u,showFirstButton:C=!1,showLastButton:$=!1,siblingCount:c=1}=a,l=h(a,oa),[s,z]=H({controlled:u,default:x,name:o,state:"page"}),N=(n,O)=>{u||z(O),p&&p(n,O)},g=(n,O)=>{const Q=O-n+1;return Array.from({length:Q},(Na,D)=>n+D)},R=g(1,Math.min(t,e)),v=g(Math.max(e-t+1,t+1),e),m=Math.max(Math.min(s-c,e-t-c*2-1),t+2),d=Math.min(Math.max(s+c,t+c*2+2),v.length>0?v[0]-2:e-1),I=[...C?["first"]:[],...i?[]:["previous"],...R,...m>t+2?["start-ellipsis"]:t+1<e-t?[t+1]:[],...g(m,d),...d<e-t-1?["end-ellipsis"]:e-t>t?[e-t]:[],...v,...P?[]:["next"],...$?["last"]:[]],L=n=>{switch(n){case"first":return 1;case"previous":return s-1;case"next":return s+1;case"last":return e;default:return null}},k=I.map(n=>typeof n=="number"?{onClick:O=>{N(O,n)},type:"page",page:n,selected:n===s,disabled:y,"aria-current":n===s?"true":void 0}:{onClick:O=>{N(O,L(n))},type:n,page:L(n),selected:!1,disabled:y||n.indexOf("ellipsis")===-1&&(n==="next"||n==="last"?s>=e:s<=1)});return r({items:k},l)}function sa(a){return W("MuiPaginationItem",a)}const na=q("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),f=na,S=_(b.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),G=_(b.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),U=_(b.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),F=_(b.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),ra=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],K=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${M(o.size)}`],o.variant==="text"&&t[`text${M(o.color)}`],o.variant==="outlined"&&t[`outlined${M(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},ia=a=>{const{classes:t,color:o,disabled:e,selected:x,size:y,shape:P,type:i,variant:p}=a,u={root:["root",`size${M(y)}`,p,P,o!=="standard"&&`${p}${M(o)}`,e&&"disabled",x&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[i]],icon:["icon"]};return w(u,sa,t)},la=j("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:K})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${f.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),ca=j(J,{name:"MuiPaginationItem",slot:"Root",overridesResolver:K})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${f.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${f.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${f.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:B(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${f.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:B(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${f.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>r({},t.variant==="text"&&{[`&.${f.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${f.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${f.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${f.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:B(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:B(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:B(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${f.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:B(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${f.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),da=j("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>r({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),pa=E.forwardRef(function(t,o){const e=V({props:t,name:"MuiPaginationItem"}),{className:x,color:y="standard",component:P,components:i={},disabled:p=!1,page:u,selected:C=!1,shape:$="circular",size:c="medium",slots:l={},type:s="page",variant:z="text"}=e,N=h(e,ra),g=r({},e,{color:y,disabled:p,selected:C,shape:$,size:c,type:s,variant:z}),R=X(),v=ia(g),d=(R.direction==="rtl"?{previous:l.next||i.next||F,next:l.previous||i.previous||U,last:l.first||i.first||S,first:l.last||i.last||G}:{previous:l.previous||i.previous||U,next:l.next||i.next||F,first:l.first||i.first||S,last:l.last||i.last||G})[s];return s==="start-ellipsis"||s==="end-ellipsis"?b.jsx(la,{ref:o,ownerState:g,className:T(v.root,x),children:"…"}):b.jsxs(ca,r({ref:o,ownerState:g,component:P,disabled:p,className:T(v.root,x)},N,{children:[s==="page"&&u,d?b.jsx(da,{as:d,ownerState:g,className:v.icon}):null]}))}),ua=pa,ga=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],va=a=>{const{classes:t,variant:o}=a;return w({root:["root",o],ul:["ul"]},ta,t)},fa=j("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),ba=j("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function xa(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const ya=E.forwardRef(function(t,o){const e=V({props:t,name:"MuiPagination"}),{boundaryCount:x=1,className:y,color:P="standard",count:i=1,defaultPage:p=1,disabled:u=!1,getItemAriaLabel:C=xa,hideNextButton:$=!1,hidePrevButton:c=!1,renderItem:l=k=>b.jsx(ua,r({},k)),shape:s="circular",showFirstButton:z=!1,showLastButton:N=!1,siblingCount:g=1,size:R="medium",variant:v="text"}=e,m=h(e,ga),{items:d}=ea(r({},e,{componentName:"Pagination"})),I=r({},e,{boundaryCount:x,color:P,count:i,defaultPage:p,disabled:u,getItemAriaLabel:C,hideNextButton:$,hidePrevButton:c,renderItem:l,shape:s,showFirstButton:z,showLastButton:N,siblingCount:g,size:R,variant:v}),L=va(I);return b.jsx(fa,r({"aria-label":"pagination navigation",className:T(L.root,y),ownerState:I,ref:o},m,{children:b.jsx(ba,{className:L.ul,ownerState:I,children:d.map((k,n)=>b.jsx("li",{children:l(r({},k,{color:P,"aria-label":C(k.type,k.page,k.selected),shape:s,size:R,variant:v}))},n))})}))}),ka=ya,Pa=["name"],Ca=["children","className","clone","component"];function ma(a,t){const o={};return Object.keys(a).forEach(e=>{t.indexOf(e)===-1&&(o[e]=a[e])}),o}function Oa(a){return(o,e={})=>{const{name:x}=e,y=h(e,Pa);let P=x;const p=Y(typeof o=="function"?$=>({root:c=>o(r({theme:$},c))}):{root:o},r({Component:a,name:x||a.displayName,classNamePrefix:P},y));let u;o.filterProps&&(u=o.filterProps,delete o.filterProps),o.propTypes&&(o.propTypes,delete o.propTypes);const C=E.forwardRef(function(c,l){const{children:s,className:z,clone:N,component:g}=c,R=h(c,Ca),v=p(c),m=T(v.root,z);let d=R;if(u&&(d=ma(d,u)),N)return E.cloneElement(s,r({className:T(s.props.className,m)},d));if(typeof s=="function")return s(r({className:m},d));const I=g||a;return b.jsx(I,r({ref:l,className:m},d,{children:s}))});return Z(C,a),C}}const $a=aa.injectEndpoints({endpoints:a=>({getAllBooks:a.query({query:t=>({url:A.GET_ALL_BOOK,method:"GET",params:t}),transformResponse:t=>t.data}),getBook:a.query({query:t=>({url:A.GET_BOOK,method:"GET",params:t}),transformResponse:t=>t}),rateBook:a.mutation({query:t=>({url:A.UPDATE_RATING,method:"POST",body:t}),transformResponse:t=>t.data}),createComment:a.mutation({query:t=>({url:A.CREATE_COMMENT,method:"POST",body:t}),transformResponse:t=>t.data})})}),{useGetAllBooksQuery:za,useGetBookQuery:Ia,useRateBookMutation:Ba,useCreateCommentMutation:La}=$a;export{S as F,G as L,ka as P,Ba as a,Ia as b,La as c,Oa as s,za as u};