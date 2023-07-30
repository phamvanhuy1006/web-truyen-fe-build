import{b6 as O,aQ as X,b7 as K,_ as d,b8 as k,b9 as v,ba as L,bb as W,bc as z,r as m,bd as I,z as j,j as _,t as M,F as P,w as F,be as C,v as Q,aC as T,x as U,Z,aE as x,y as V}from"./main-6d233343.js";const q=["component","direction","spacing","divider","children","className","useFlexGap"],H=O(),J=X("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function Y(e){return K({props:e,name:"MuiStack",defaultTheme:H})}function ee(e,t){const s=m.Children.toArray(e).filter(Boolean);return s.reduce((o,i,a)=>(o.push(i),a<s.length-1&&o.push(m.cloneElement(t,{key:`separator-${a}`})),o),[])}const te=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],se=({ownerState:e,theme:t})=>{let s=d({display:"flex",flexDirection:"column"},k({theme:t},v({values:e.direction,breakpoints:t.breakpoints.values}),o=>({flexDirection:o})));if(e.spacing){const o=L(t),i=Object.keys(t.breakpoints.values).reduce((n,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(n[r]=!0),n),{}),a=v({values:e.direction,base:i}),l=v({values:e.spacing,base:i});typeof a=="object"&&Object.keys(a).forEach((n,r,h)=>{if(!a[n]){const u=r>0?a[h[r-1]]:"column";a[n]=u}}),s=W(s,k({theme:t},l,(n,r)=>e.useFlexGap?{gap:C(o,n)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${te(r?a[r]:e.direction)}`]:C(o,n)}}))}return s=z(t.breakpoints,s),s};function oe(e={}){const{createStyledComponent:t=J,useThemeProps:s=Y,componentName:o="MuiStack"}=e,i=()=>P({root:["root"]},n=>F(o,n),{}),a=t(se);return m.forwardRef(function(n,r){const h=s(n),c=I(h),{component:u="div",direction:g="column",spacing:B=0,divider:b,children:y,className:N,useFlexGap:A=!1}=c,D=j(c,q),E={direction:g,spacing:B,useFlexGap:A},G=i();return _.jsx(a,d({as:u,ownerState:E,ref:r,className:M(G.root,N)},D,{children:b?ee(y,b):y}))})}function ae(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ne(e){return parseFloat(e)}function re(e){return F("MuiSkeleton",e)}Q("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ie=["animation","className","component","height","style","variant","width"];let f=e=>e,S,R,$,w;const le=e=>{const{classes:t,variant:s,animation:o,hasChildren:i,width:a,height:l}=e;return P({root:["root",s,o,i&&"withChildren",i&&!a&&"fitContent",i&&!l&&"heightAuto"]},re,t)},ce=T(S||(S=f`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ue=T(R||(R=f`
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
`)),de=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],s.animation!==!1&&t[s.animation],s.hasChildren&&t.withChildren,s.hasChildren&&!s.width&&t.fitContent,s.hasChildren&&!s.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const s=ae(e.shape.borderRadius)||"px",o=ne(e.shape.borderRadius);return d({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:Z(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${s}/${Math.round(o/.6*10)/10}${s}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&x($||($=f`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),ce),({ownerState:e,theme:t})=>e.animation==="wave"&&x(w||(w=f`
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
    `),ue,(t.vars||t).palette.action.hover)),pe=m.forwardRef(function(t,s){const o=V({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:a,component:l="span",height:p,style:n,variant:r="text",width:h}=o,c=j(o,ie),u=d({},o,{animation:i,component:l,variant:r,hasChildren:!!c.children}),g=le(u);return _.jsx(de,d({as:l,ref:s,className:M(g.root,a),ownerState:u},c,{style:d({width:h,height:p},n)}))}),fe=pe,he=oe({createStyledComponent:U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>V({props:e,name:"MuiStack"})}),ge=he;export{ge as S,fe as a};
