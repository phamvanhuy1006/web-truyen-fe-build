import{aP as p,x as g,j as e,Q as j,b0 as C,T as f,s as T,e as b,a6 as M,G as d,h as u,i as x,B as S}from"./main-b898a6f9.js";import{C as y,a as B,A as q,b as v}from"./CardHeader-2be6db8d.js";function h(s,t){return s===1?`${s} ${t}`:`${s} ${t}s`}function w(s,t){const o=s.getTime(),l=t.getTime()-o,a=Math.floor(l/(1e3*60));if(a===0)return"now";if(a<=60)return h(a,"minute");if(a<=24*60){const c=Math.floor(a/60);return h(c,"hour")}else return p(s).format("MMMM DD, YYYY")}g(s=>{const{expand:t,...o}=s;return e.jsx(j,{...o})})(({theme:s,expand:t})=>({transform:t?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:s.transitions.create("transform",{duration:s.transitions.duration.shortest})}));function E(s){const{comment:t}=s;return e.jsxs(y,{children:[e.jsx(B,{avatar:e.jsx(q,{sx:{bgcolor:C[500]},"aria-label":"recipe"}),title:e.jsx("span",{style:{textTransform:"capitalize"},children:t==null?void 0:t.commentator}),subheader:w(new Date(t==null?void 0:t.created_at),new Date)}),e.jsx(v,{sx:{pt:0},children:e.jsx(f,{variant:"body2",color:"text.secondary",children:t==null?void 0:t.content})})]})}const D=T(()=>({rootContainer:{marginBottom:"20px"},titleComponent:{width:"100%",borderBottom:"1px solid #ccc",marginBottom:"15px"},title:{fontSize:"20px",borderBottom:"1px solid #4E4E4E",maxWidth:"fit-content",fontWeight:400}})),Y=s=>{const{data:t,handleSendComment:o}=s,m=D(),{control:l,handleSubmit:a}=b({reValidateMode:"onChange"}),c=r=>{o(r)};return e.jsxs(M,{className:m.rootContainer,sx:{py:"1rem",px:"1.5rem"},children:[e.jsx("div",{className:m.titleComponent,children:e.jsx("h2",{className:m.title,children:"Bình luận"})}),e.jsx(f,{sx:{fontSize:"18px",fontWeight:"bold"},children:"Trả lời"}),e.jsxs(d,{container:!0,spacing:1.5,children:[e.jsx(d,{item:!0,xs:12,children:e.jsx(u,{name:"comment",control:l,rules:{required:{value:!0,message:"This field is required."}},render:({field:{onChange:r,value:i},fieldState:{error:n}})=>e.jsx(x,{title:"Comment",multiline:!0,onChange:r,value:i,errorMessage:n==null?void 0:n.message,minRows:4,placeholder:"Comment"})})}),e.jsx(d,{item:!0,xs:6,sx:{marginTop:1},children:e.jsx(u,{control:l,name:"name",rules:{required:{value:!0,message:"This field is required."}},render:({field:{onChange:r,value:i},fieldState:{error:n}})=>e.jsx(x,{title:"Name",isRequired:!0,onChange:r,value:i,errorMessage:n==null?void 0:n.message,placeholder:"Comment"})})}),e.jsx(d,{item:!0,xs:6,sx:{marginTop:1},children:e.jsx(u,{control:l,name:"email",rules:{required:{value:!0,message:"This field is required."}},render:({field:{onChange:r,value:i},fieldState:{error:n}})=>e.jsx(x,{title:"Email",isRequired:!0,onChange:r,value:i,errorMessage:n==null?void 0:n.message,placeholder:"Email"})})}),e.jsx(d,{item:!0,xs:12,sx:{textAlign:"end"},children:e.jsx(S,{color:"warning",onClick:a(c),children:"Phản hồi"})})]}),e.jsx("div",{style:{marginBottom:"5px",marginTop:"10px"},children:t&&t.map((r,i)=>e.jsx(E,{comment:r}))})]})};export{Y as C};