import{g as Ct,a as wt,s as he,_ as p,o as Ue,p as Ve,r as l,u as jt,b as Pt,q as Nt,t as Rt,v as St,w as Et,x as It,y as Ot,c as E,z as He,A as D,j as e,d as _t,e as Lt,f as Mt,m as xe,h as qe,B as y,T as Ye,L as $t,C as At,D as Ft,R as Be,E as Wt,l as kt,F as Ge,S as zt,G as h}from"./main-3faada18.js";import{E as Ht,d as Bt}from"./index-e28abea1.js";import{B as Gt,L as Ut}from"./index-fcfe3212.js";import{C as Vt}from"./index-25e6887f.js";import{P as qt}from"./index-a8236ec9.js";import{P as Ke,d as Yt}from"./KeyboardArrowRight-e6502fcd.js";import{G as Kt}from"./index-bcc785c3.js";import{H as Xt}from"./listChapter-3daab4f5.js";import{a as Qt}from"./book-c95814b5.js";import{u as Jt,a as Zt}from"./index-19a7c6ba.js";import{P as Dt}from"./Pagination-da5528c3.js";import"./CardHeader-690784e6.js";function eo(o){return wt("MuiTooltip",o)}const to=Ct("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),C=to,oo=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function ro(o){return Math.round(o*1e5)/1e5}const so=o=>{const{classes:r,disableInteractive:s,arrow:c,touch:u,placement:f}=o,g={popper:["popper",!s&&"popperInteractive",c&&"popperArrow"],tooltip:["tooltip",c&&"tooltipArrow",u&&"touch",`tooltipPlacement${Ue(f.split("-")[0])}`],arrow:["arrow"]};return _t(g,eo,r)},no=he(Ke,{name:"MuiTooltip",slot:"Popper",overridesResolver:(o,r)=>{const{ownerState:s}=o;return[r.popper,!s.disableInteractive&&r.popperInteractive,s.arrow&&r.popperArrow,!s.open&&r.popperClose]}})(({theme:o,ownerState:r,open:s})=>p({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none"},!r.disableInteractive&&{pointerEvents:"auto"},!s&&{pointerEvents:"none"},r.arrow&&{[`&[data-popper-placement*="bottom"] .${C.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${C.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${C.arrow}`]:p({},r.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${C.arrow}`]:p({},r.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),io=he("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(o,r)=>{const{ownerState:s}=o;return[r.tooltip,s.touch&&r.touch,s.arrow&&r.tooltipArrow,r[`tooltipPlacement${Ue(s.placement.split("-")[0])}`]]}})(({theme:o,ownerState:r})=>p({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:Ve(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium},r.arrow&&{position:"relative",margin:0},r.touch&&{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:`${ro(16/14)}em`,fontWeight:o.typography.fontWeightRegular},{[`.${C.popper}[data-popper-placement*="left"] &`]:p({transformOrigin:"right center"},r.isRtl?p({marginLeft:"14px"},r.touch&&{marginLeft:"24px"}):p({marginRight:"14px"},r.touch&&{marginRight:"24px"})),[`.${C.popper}[data-popper-placement*="right"] &`]:p({transformOrigin:"left center"},r.isRtl?p({marginRight:"14px"},r.touch&&{marginRight:"24px"}):p({marginLeft:"14px"},r.touch&&{marginLeft:"24px"})),[`.${C.popper}[data-popper-placement*="top"] &`]:p({transformOrigin:"center bottom",marginBottom:"14px"},r.touch&&{marginBottom:"24px"}),[`.${C.popper}[data-popper-placement*="bottom"] &`]:p({transformOrigin:"center top",marginTop:"14px"},r.touch&&{marginTop:"24px"})})),ao=he("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(o,r)=>r.arrow})(({theme:o})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:Ve(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let ee=!1,me=null,k={x:0,y:0};function te(o,r){return s=>{r&&r(s),o(s)}}const lo=l.forwardRef(function(r,s){var c,u,f,g,v,a,w,I,z,R,H,t,B,G,oe,U,V,q,O;const _=jt({props:r,name:"MuiTooltip"}),{arrow:L=!1,children:i,components:d={},componentsProps:b={},describeChild:Je=!1,disableFocusListener:Ze=!1,disableHoverListener:ge=!1,disableInteractive:De=!1,disableTouchListener:et=!1,enterDelay:be=100,enterNextDelay:Te=0,enterTouchDelay:tt=700,followCursor:re=!1,id:ot,leaveDelay:ve=0,leaveTouchDelay:rt=1500,onClose:ye,onOpen:Ce,open:st,placement:we="bottom",PopperComponent:se,PopperProps:j={},slotProps:P={},slots:Y={},title:S,TransitionComponent:nt=He,TransitionProps:it}=_,je=Pt(_,oo),ne=Nt(),at=ne.direction==="rtl",[M,Pe]=l.useState(),[ie,lt]=l.useState(null),K=l.useRef(!1),ae=De||re,X=l.useRef(),Q=l.useRef(),N=l.useRef(),Ne=l.useRef(),[pt,Re]=Rt({controlled:st,default:!1,name:"Tooltip",state:"open"});let T=pt;const le=St(ot),$=l.useRef(),J=l.useCallback(()=>{$.current!==void 0&&(document.body.style.WebkitUserSelect=$.current,$.current=void 0),clearTimeout(Ne.current)},[]);l.useEffect(()=>()=>{clearTimeout(X.current),clearTimeout(Q.current),clearTimeout(N.current),J()},[J]);const Se=n=>{clearTimeout(me),ee=!0,Re(!0),Ce&&!T&&Ce(n)},Z=Et(n=>{clearTimeout(me),me=setTimeout(()=>{ee=!1},800+ve),Re(!1),ye&&T&&ye(n),clearTimeout(X.current),X.current=setTimeout(()=>{K.current=!1},ne.transitions.duration.shortest)}),pe=n=>{K.current&&n.type!=="touchstart"||(M&&M.removeAttribute("title"),clearTimeout(Q.current),clearTimeout(N.current),be||ee&&Te?Q.current=setTimeout(()=>{Se(n)},ee?Te:be):Se(n))},Ee=n=>{clearTimeout(Q.current),clearTimeout(N.current),N.current=setTimeout(()=>{Z(n)},ve)},{isFocusVisibleRef:Ie,onBlur:ct,onFocus:ut,ref:dt}=It(),[,Oe]=l.useState(!1),_e=n=>{ct(n),Ie.current===!1&&(Oe(!1),Ee(n))},Le=n=>{M||Pe(n.currentTarget),ut(n),Ie.current===!0&&(Oe(!0),pe(n))},Me=n=>{K.current=!0;const m=i.props;m.onTouchStart&&m.onTouchStart(n)},$e=pe,Ae=Ee,mt=n=>{Me(n),clearTimeout(N.current),clearTimeout(X.current),J(),$.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ne.current=setTimeout(()=>{document.body.style.WebkitUserSelect=$.current,pe(n)},tt)},ht=n=>{i.props.onTouchEnd&&i.props.onTouchEnd(n),J(),clearTimeout(N.current),N.current=setTimeout(()=>{Z(n)},rt)};l.useEffect(()=>{if(!T)return;function n(m){(m.key==="Escape"||m.key==="Esc")&&Z(m)}return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[Z,T]);const xt=Ot(i.ref,dt,Pe,s);!S&&S!==0&&(T=!1);const ce=l.useRef(),ft=n=>{const m=i.props;m.onMouseMove&&m.onMouseMove(n),k={x:n.clientX,y:n.clientY},ce.current&&ce.current.update()},A={},ue=typeof S=="string";Je?(A.title=!T&&ue&&!ge?S:null,A["aria-describedby"]=T?le:null):(A["aria-label"]=ue?S:null,A["aria-labelledby"]=T&&!ue?le:null);const x=p({},A,je,i.props,{className:E(je.className,i.props.className),onTouchStart:Me,ref:xt},re?{onMouseMove:ft}:{}),F={};et||(x.onTouchStart=mt,x.onTouchEnd=ht),ge||(x.onMouseOver=te($e,x.onMouseOver),x.onMouseLeave=te(Ae,x.onMouseLeave),ae||(F.onMouseOver=$e,F.onMouseLeave=Ae)),Ze||(x.onFocus=te(Le,x.onFocus),x.onBlur=te(_e,x.onBlur),ae||(F.onFocus=Le,F.onBlur=_e));const gt=l.useMemo(()=>{var n;let m=[{name:"arrow",enabled:!!ie,options:{element:ie,padding:4}}];return(n=j.popperOptions)!=null&&n.modifiers&&(m=m.concat(j.popperOptions.modifiers)),p({},j.popperOptions,{modifiers:m})},[ie,j]),W=p({},_,{isRtl:at,arrow:L,disableInteractive:ae,placement:we,PopperComponentProp:se,touch:K.current}),de=so(W),Fe=(c=(u=Y.popper)!=null?u:d.Popper)!=null?c:no,We=(f=(g=(v=Y.transition)!=null?v:d.Transition)!=null?g:nt)!=null?f:He,ke=(a=(w=Y.tooltip)!=null?w:d.Tooltip)!=null?a:io,ze=(I=(z=Y.arrow)!=null?z:d.Arrow)!=null?I:ao,bt=D(Fe,p({},j,(R=P.popper)!=null?R:b.popper,{className:E(de.popper,j==null?void 0:j.className,(H=(t=P.popper)!=null?t:b.popper)==null?void 0:H.className)}),W),Tt=D(We,p({},it,(B=P.transition)!=null?B:b.transition),W),vt=D(ke,p({},(G=P.tooltip)!=null?G:b.tooltip,{className:E(de.tooltip,(oe=(U=P.tooltip)!=null?U:b.tooltip)==null?void 0:oe.className)}),W),yt=D(ze,p({},(V=P.arrow)!=null?V:b.arrow,{className:E(de.arrow,(q=(O=P.arrow)!=null?O:b.arrow)==null?void 0:q.className)}),W);return e.jsxs(l.Fragment,{children:[l.cloneElement(i,x),e.jsx(Fe,p({as:se??Ke,placement:we,anchorEl:re?{getBoundingClientRect:()=>({top:k.y,left:k.x,right:k.x,bottom:k.y,width:0,height:0})}:M,popperRef:ce,open:M?T:!1,id:le,transition:!0},F,bt,{popperOptions:gt,children:({TransitionProps:n})=>e.jsx(We,p({timeout:ne.transitions.duration.shorter},n,Tt,{children:e.jsxs(ke,p({},vt,{children:[S,L?e.jsx(ze,p({},yt,{ref:lt})):null]}))}))}))]})}),po=lo;var fe={},co=Mt;Object.defineProperty(fe,"__esModule",{value:!0});var Xe=fe.default=void 0,uo=co(Lt()),mo=e,ho=(0,uo.default)((0,mo.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonSharp");Xe=fe.default=ho;const xo=xe(()=>({box:{width:"100%",maxHeight:"400px",minHeight:"370px",background:"#ecf0f1",padding:"10px 20px"},author:{width:"100%",borderBottom:"1px solid #ccc",marginBottom:"10px"},titleAuthor:{fontSize:"16px",borderBottom:"1px solid #4E4E4E",maxWidth:"235px",fontWeight:400},boxItem:{height:"40px",display:"flex",alignItems:"center",borderBottom:"1px dashed #CCC"},itemName:{width:"100%",fontSize:"14px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textDecoration:"none",color:"#000",cursor:"pointer"}})),fo=o=>{const{data:r}=o,s=qe(),c=xo();return e.jsxs("div",{className:c.box,children:[e.jsx("div",{className:c.author,children:e.jsx("h2",{className:c.titleAuthor,children:"TRUYỆN CÙNG TÁC GIẢ"})}),r&&r.length>0&&r.map((u,f)=>e.jsxs(y,{className:c.boxItem,children:[e.jsx(Yt,{}),e.jsx(Ye,{className:c.itemName,onClick:()=>{s("/"+(u==null?void 0:u.slug))},children:u.name})]},f))]})},go=xe(()=>({box:{width:"100%",padding:"10px 20px",marginTop:"10px"},boxTitle:{width:"100%",borderBottom:"1px solid #ccc",marginBottom:"10px"},titleHotStory:{fontSize:"16px",borderBottom:"1px solid #4E4E4E",maxWidth:"235px",fontWeight:400},selectTime:{display:"flex",justifyContent:"center"},time:{width:"68px",height:"30px",borderRadius:"15px",border:"1px solid #AAA",textAlign:"center",lineHeight:"26px",marginLeft:"5px",cursor:"pointer","&:hover":{background:"#4E4E4E",color:"#fff"}},active:{background:"#4E4E4E",color:"#fff"},boxNumber:{width:"35px",height:"32px",borderRadius:"50%",border:"1px solid #eaeaea",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"5px"},boxItem:{height:"50px",display:"flex",alignItems:"center",borderBottom:"1px dashed #CCC"},boxName:{width:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},link:{fontSize:"14px",textDecoration:"none",color:"#000"},categori:{fontSize:"11px"}})),bo=o=>{const{data:r}=o,s=go(),c=new Date,[u,f]=l.useState(c.getDate()),g=[{title:"Ngày",value:c.getDate()},{title:"Tháng",value:c.getMonth()+1},{title:"Năm",value:c.getFullYear()}],v=a=>{f(a)};return e.jsxs(y,{className:s.box,children:[e.jsx("div",{className:s.boxTitle,children:e.jsx("h2",{className:s.titleHotStory,children:"TRUYỆN ĐANG HOT"})}),e.jsx(y,{className:s.selectTime,children:g.map((a,w)=>e.jsx(y,{className:E(s.time,{[s.active]:u===a.value}),onClick:()=>v(a.value),children:a.title},w))}),r&&r.length>0&&r.map((a,w)=>e.jsxs(y,{className:s.boxItem,children:[e.jsx(y,{sx:{background:a==null?void 0:a.background,color:a==null?void 0:a.color},className:s.boxNumber,children:a.id}),e.jsxs(y,{className:s.boxName,children:[e.jsx($t,{to:"/",className:s.link,children:a.name}),e.jsx(Ye,{className:s.categori,children:a.categori})]})]}))]})},Qe=xe(()=>({boxBook:{cursor:"pointer"},imageContainer:{width:"100%",height:0,paddingBottom:"calc(322/215 * 100%)",position:"relative","& img":{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"}},titleBook:{fontSeight:600,fontSize:"24px",marginBottom:"8px",color:At.MAIN_COLOR},boxIconTitle:{display:"flex",justifyContent:"flex-start",alignItems:"center","& svg":{width:"20px",marginRight:10}},boxContainer:{display:"flex",alignItems:"center",gap:5},rating:{fontSize:25},buttonRead:{textTransform:"capitalize",fontWeight:"bold"},chapter:{width:"100%",borderBottom:"1px solid #ccc",marginBottom:"15px"},titleChapter:{fontSize:"20px",borderBottom:"1px solid #4E4E4E",maxWidth:"fit-content",fontWeight:400},itemChapter:{padding:"5px 0px",textOverflow:"ellipsis"},nameChapter:{textDecoration:"none",color:"#000","&:hover":{textDecoration:"underline",cursor:"pointer"}},textEllipsis:{display:"-webkit-box",WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",WebkitLineClamp:3,lineClamp:3}})),_o=()=>{var L;const o=Qe(),r=Ft(),[s,c]=Be.useState(!1),u=()=>{c(!s)},{rateBook:f,result:{isSuccess:g}}=Qt(),[v]=l.useState(Xt),[a,w]=l.useState([]),[I,z]=l.useState(1),R=50,H=qe(),{data:t,refetch:B}=Jt({slug:r.slug});Wt(t==null?void 0:t.id);const[G]=Zt(),{control:oe,reset:U}=kt({defaultValues:{author:"",bookCover:"",category:{},description:"",genresList:[],id:NaN,name:"",rating:NaN,slug:"",status:"",totalChapters:NaN}}),V=l.useMemo(()=>{var i;return[{icon:Xe,title:"Tác giả",content:t==null?void 0:t.author},{icon:Ge.HashTagSvg,title:"Thể loại",content:t==null?void 0:t.genresList,template:Kt},{icon:Ge.InfoCircleSvg,title:"Trạng thái",content:(i=zt)==null?void 0:i[t==null?void 0:t.status],sx:{color:"green"}}]},[t]),q=(i,d)=>{z(d),O(d)},O=i=>{if(t!=null&&t.chapter){const d=((t==null?void 0:t.chapter)||"").slice((i-1)*R,i*R);w(d)}},_=async i=>{const d={content:i.comment,email:i.email,commentator:i.name,bookId:t==null?void 0:t.id};try{await G(d),B()}catch(b){console.log(b)}};return l.useEffect(()=>{U(t),O(I)},[t]),e.jsxs(Be.Fragment,{children:[e.jsx(Gt,{content:t==null?void 0:t.name}),e.jsx(qt,{children:e.jsxs(h,{container:!0,children:[e.jsx(h,{item:!0,sm:12,md:9,children:e.jsxs(h,{container:!0,children:[e.jsx(h,{xs:12,md:5,sx:{p:2,display:"flex",justifyContent:"center"},children:e.jsx("img",{src:t==null?void 0:t.bookCover,width:215,height:322,alt:"book-cover",loading:"lazy"})}),e.jsxs(h,{xs:12,md:7,sx:{p:2},children:[e.jsx("h1",{className:o.titleBook,children:t==null?void 0:t.name}),e.jsx(h,{container:!0,spacing:{xs:1,sm:2},children:V.map((i,d)=>e.jsx(To,{...i},d))}),e.jsx(y,{sx:{width:"100%",textAlign:"end"},children:e.jsx(Ht,{expand:s,onClick:u,"aria-expanded":s,"aria-label":"show more",children:e.jsx(po,{title:"Xem thêm",placement:"top-start",children:e.jsx(Bt,{})})})}),e.jsx("div",{className:E({[o.textEllipsis]:!s}),dangerouslySetInnerHTML:{__html:(t==null?void 0:t.description)+""}})]}),e.jsxs(h,{item:!0,xs:12,marginBottom:"15px",children:[e.jsx("div",{className:o.chapter,children:e.jsx("h2",{className:o.titleChapter,children:"DANH SÁCH CHƯƠNG"})}),e.jsx(h,{container:!0,marginLeft:"15px",children:(a==null?void 0:a.length)>0&&a.map((i,d)=>e.jsx(h,{item:!0,xs:6,children:e.jsx("div",{className:o.itemChapter,children:e.jsxs(Ut,{onClick:()=>{H((i==null?void 0:i.slug)||"/")},className:o.nameChapter,children:["Chương ",i==null?void 0:i.chapterOrder,": ",i.name]})},d)}))}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Dt,{count:Math.ceil((((L=t==null?void 0:t.chapter)==null?void 0:L.length)||0)/R),page:I-1,onChange:q,variant:"outlined",shape:"rounded"})})]}),e.jsx(h,{item:!0,xs:12,children:e.jsx(Vt,{data:t==null?void 0:t.comments,handleSendComment:_})})]})}),e.jsxs(h,{item:!0,xs:12,md:3,sx:{p:2},children:[e.jsx(fo,{data:t==null?void 0:t.booksByTheSameAuthor}),e.jsx(bo,{data:v})]})]})})]})},To=o=>{const{icon:r,title:s,content:c,template:u,sx:f}=o,g=Qe(),v=r;return e.jsxs(e.Fragment,{children:[e.jsxs(h,{item:!0,xs:3,className:g.boxIconTitle,children:[e.jsx(v,{}),e.jsx("div",{children:s})]}),e.jsx(h,{item:!0,xs:9,children:u?u({listGenre:c}):c})]})};export{_o as default};