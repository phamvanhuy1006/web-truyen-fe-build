import{b7 as O,z as X,b8 as K,_ as d,b9 as y,ba as b,bb as L,bc as W,bd as z,r as m,be as I,b as w,j as _,f as M,bf as C,h as P,g as T,a as q,aR as U,s as V,a9 as H,aT as x,u as F}from"./main-cd0faa41.js";const J=["component","direction","spacing","divider","children","className","useFlexGap"],Q=O(),Y=X("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function Z(e){return K({props:e,name:"MuiStack",defaultTheme:Q})}function ee(e,t){const s=m.Children.toArray(e).filter(Boolean);return s.reduce((o,i,a)=>(o.push(i),a<s.length-1&&o.push(m.cloneElement(t,{key:`separator-${a}`})),o),[])}const te=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],se=({ownerState:e,theme:t})=>{let s=d({display:"flex",flexDirection:"column"},y({theme:t},b({values:e.direction,breakpoints:t.breakpoints.values}),o=>({flexDirection:o})));if(e.spacing){const o=L(t),i=Object.keys(t.breakpoints.values).reduce((n,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(n[r]=!0),n),{}),a=b({values:e.direction,base:i}),l=b({values:e.spacing,base:i});typeof a=="object"&&Object.keys(a).forEach((n,r,h)=>{if(!a[n]){const u=r>0?a[h[r-1]]:"column";a[n]=u}}),s=W(s,y({theme:t},l,(n,r)=>e.useFlexGap?{gap:C(o,n)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${te(r?a[r]:e.direction)}`]:C(o,n)}}))}return s=z(t.breakpoints,s),s};function oe(e={}){const{createStyledComponent:t=Y,useThemeProps:s=Z,componentName:o="MuiStack"}=e,i=()=>P({root:["root"]},n=>T(o,n),{}),a=t(se);return m.forwardRef(function(n,r){const h=s(n),c=I(h),{component:u="div",direction:g="column",spacing:B=0,divider:v,children:k,className:N,useFlexGap:A=!1}=c,D=w(c,J),E={direction:g,spacing:B,useFlexGap:A},G=i();return _.jsx(a,d({as:u,ownerState:E,ref:r,className:M(G.root,N)},D,{children:v?ee(k,v):k}))})}function ae(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ne(e){return parseFloat(e)}function re(e){return T("MuiSkeleton",e)}q("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ie=["animation","className","component","height","style","variant","width"];let f=e=>e,R,S,$,j;const le=e=>{const{classes:t,variant:s,animation:o,hasChildren:i,width:a,height:l}=e;return P({root:["root",s,o,i&&"withChildren",i&&!a&&"fitContent",i&&!l&&"heightAuto"]},re,t)},ce=U(R||(R=f`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ue=U(S||(S=f`
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
`)),de=V("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],s.animation!==!1&&t[s.animation],s.hasChildren&&t.withChildren,s.hasChildren&&!s.width&&t.fitContent,s.hasChildren&&!s.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const s=ae(e.shape.borderRadius)||"px",o=ne(e.shape.borderRadius);return d({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:H(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${s}/${Math.round(o/.6*10)/10}${s}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&x($||($=f`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),ce),({ownerState:e,theme:t})=>e.animation==="wave"&&x(j||(j=f`
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
    `),ue,(t.vars||t).palette.action.hover)),pe=m.forwardRef(function(t,s){const o=F({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:a,component:l="span",height:p,style:n,variant:r="text",width:h}=o,c=w(o,ie),u=d({},o,{animation:i,component:l,variant:r,hasChildren:!!c.children}),g=le(u);return _.jsx(de,d({as:l,ref:s,className:M(g.root,a),ownerState:u},c,{style:d({width:h,height:p},n)}))}),fe=pe,he=oe({createStyledComponent:V("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>F({props:e,name:"MuiStack"})}),ge=he;export{fe as S,ge as a};
