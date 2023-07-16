import{aX as z,aG as K,aY as Y,_ as p,aZ as _,a_ as y,a$ as Z,b0 as H,b1 as J,r as f,b2 as Q,c as B,j as i,t as O,b3 as j,f as P,a as U,b as ee,ai as V,s as A,w as te,ak as R,p as D,as as se,i as ae,ac as x,ae as S,aV as oe,ax as ne,G as $,aW as re}from"./main-e476a63a.js";import{s as ie}from"./index-a4eeefe8.js";const le=["component","direction","spacing","divider","children","className","useFlexGap"],ce=z(),de=K("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function ue(e){return Y({props:e,name:"MuiStack",defaultTheme:ce})}function pe(e,t){const s=f.Children.toArray(e).filter(Boolean);return s.reduce((a,l,o)=>(a.push(l),o<s.length-1&&a.push(f.cloneElement(t,{key:`separator-${o}`})),a),[])}const he=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],me=({ownerState:e,theme:t})=>{let s=p({display:"flex",flexDirection:"column"},_({theme:t},y({values:e.direction,breakpoints:t.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=Z(t),l=Object.keys(t.breakpoints.values).reduce((n,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(n[r]=!0),n),{}),o=y({values:e.direction,base:l}),c=y({values:e.spacing,base:l});typeof o=="object"&&Object.keys(o).forEach((n,r,m)=>{if(!o[n]){const u=r>0?o[m[r-1]]:"column";o[n]=u}}),s=H(s,_({theme:t},c,(n,r)=>e.useFlexGap?{gap:j(a,n)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${he(r?o[r]:e.direction)}`]:j(a,n)}}))}return s=J(t.breakpoints,s),s};function fe(e={}){const{createStyledComponent:t=de,useThemeProps:s=ue,componentName:a="MuiStack"}=e,l=()=>P({root:["root"]},n=>U(a,n),{}),o=t(me);return f.forwardRef(function(n,r){const m=s(n),d=Q(m),{component:u="div",direction:g="column",spacing:E=0,divider:k,children:C,className:L,useFlexGap:I=!1}=d,W=B(d,le),X={direction:g,spacing:E,useFlexGap:I},q=l();return i.jsx(o,p({as:u,ownerState:X,ref:r,className:O(q.root,L)},W,{children:k?pe(C,k):C}))})}function xe(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ve(e){return parseFloat(e)}function ge(e){return U("MuiSkeleton",e)}ee("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ye=["animation","className","component","height","style","variant","width"];let v=e=>e,w,M,G,N;const be=e=>{const{classes:t,variant:s,animation:a,hasChildren:l,width:o,height:c}=e;return P({root:["root",s,a,l&&"withChildren",l&&!o&&"fitContent",l&&!c&&"heightAuto"]},ge,t)},ke=V(w||(w=v`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Ce=V(M||(M=v`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),_e=A("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],s.animation!==!1&&t[s.animation],s.hasChildren&&t.withChildren,s.hasChildren&&!s.width&&t.fitContent,s.hasChildren&&!s.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const s=xe(e.shape.borderRadius)||"px",a=ve(e.shape.borderRadius);return p({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:te(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${s}/${Math.round(a/.6*10)/10}${s}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&R(G||(G=v`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),ke),({ownerState:e,theme:t})=>e.animation==="wave"&&R(N||(N=v`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Ce,(t.vars||t).palette.action.hover)),je=f.forwardRef(function(t,s){const a=D({props:t,name:"MuiSkeleton"}),{animation:l="pulse",className:o,component:c="span",height:h,style:n,variant:r="text",width:m}=a,d=B(a,ye),u=p({},a,{animation:l,component:c,variant:r,hasChildren:!!d.children}),g=be(u);return i.jsx(_e,p({as:c,ref:s,className:O(g.root,o),ownerState:u},d,{style:p({width:m,height:h},n)}))}),Ue=je,Re=fe({createStyledComponent:A("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>D({props:e,name:"MuiStack"})}),Ve=Re;var b={},Se=ae;Object.defineProperty(b,"__esModule",{value:!0});var F=b.default=void 0,$e=Se(se()),we=i,Me=(0,$e.default)((0,we.jsx)("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"}),"Whatshot");F=b.default=Me;const Ge="_name_nasiw_1",Ne="_icon_nasiw_15",T={name:Ge,icon:Ne},Te=e=>{const{name:t,icon:s}=e;return i.jsxs(x,{display:"flex",alignItems:"center",children:[s&&i.jsx(x,{className:T.icon,children:s}),i.jsx("h2",{className:T.name,children:t})]})},Be=ie(oe)({color:"#72727b",fontSize:"13px",padding:"4px 0",fontWeight:400,borderBottom:"#f5f5f5 solid 2px",marginBottom:"5px","&:hover":{borderBottom:`${S.MAIN_COLOR} solid 2px`,color:S.MAIN_COLOR},textDecoration:"none"}),Ae=()=>{const{list:e}=ne({});return i.jsxs(x,{p:1,sx:{background:"#f5f5f5"},children:[i.jsx(x,{display:"flex",justifyContent:"space-between",mb:1,children:i.jsx(Te,{name:"Thể loại truyện",icon:i.jsx(F,{})})}),i.jsx($,{container:!0,spacing:1.5,sx:{p:2},children:e&&(e==null?void 0:e.length)>0&&e.map(t=>i.jsx($,{xs:6,item:!0,sx:{padding:"6px 16px"},children:i.jsx(Be,{to:`${re.GENRE}${t==null?void 0:t.slug}`,children:t==null?void 0:t.name})},t==null?void 0:t.name))})]})};export{Ae as G,Ue as S,Te as T,Ve as a,F as d};
