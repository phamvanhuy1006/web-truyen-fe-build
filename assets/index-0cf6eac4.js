import{as as g,i as p,j as t,aA as I,b5 as j,aa as N,aS as E,ab as R,r as u,R as $,G as f,ac as y,aH as r,ae as b}from"./main-e476a63a.js";import{B as w,P as L}from"./index-fd868624.js";var v={},T=p;Object.defineProperty(v,"__esModule",{value:!0});var d=v.default=void 0,P=T(g()),z=t,G=(0,P.default)((0,z.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");d=v.default=G;var m={},H=p;Object.defineProperty(m,"__esModule",{value:!0});var c=m.default=void 0,M=H(g()),q=t,B=(0,M.default)((0,q.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");c=m.default=B;var C={},D=p;Object.defineProperty(C,"__esModule",{value:!0});var x=C.default=void 0,O=D(g()),F=t,V=(0,O.default)((0,F.jsx)("path",{d:"M19 3H4.99C3.89 3 3 3.9 3 5l.01 14c0 1.1.89 2 1.99 2h10l6-6V5c0-1.1-.9-2-2-2zM7 8h10v2H7V8zm5 6H7v-2h5v2zm2 5.5V14h5.5L14 19.5z"}),"StickyNote2");x=C.default=V;const W="/assets/divider_page-0a692d51.png",_=()=>t.jsx("div",{style:{backgroundImage:`url(${W})`,backgroundRepeat:"no-repeat",backgroundPosition:"0 -51px",backgroundColor:"white",width:"277px",height:"35px",margin:"auto"}}),K=I.injectEndpoints({endpoints:a=>({getAllChapters:a.mutation({query:s=>({url:j.GET_ALL_CHAPTERS,method:"GET",params:s})}),getChapter:a.query({query:s=>({url:j.GET_CHAPTER,method:"GET",params:s})})})}),{useGetChapterQuery:Q,useGetAllChaptersMutation:U}=K,J=()=>{const[a,s]=U();return{getAllChapters:async({bookSlug:e})=>await a({bookSlug:e,per_page:-1}),result:s}},X=N(()=>({storyName:{fontSize:"26px",color:"green",textAlign:"center",marginTop:"10px"},storyChapter:{fontSize:"22px",color:"#000",textAlign:"center",marginTop:"10px"},button:{background:"green",color:b.WHITE,"&:hover":{background:"green",color:b.WHITE,opacity:.5}},content:{fontSize:"1.5rem",marginTop:"18px",marginBottom:"18px",textAlign:"justify"}})),ee=()=>{const a=X(),s=E(),o=R(),{data:e}=Q({bookSlug:s.slug,slug:s.detail}),[k,S]=u.useState([]),{getAllChapters:A}=J(),l=()=>{o("/"+s.slug+"/"+(e==null?void 0:e.previousChapter))},i=()=>{o("/"+s.slug+"/"+(e==null?void 0:e.nextChapter))};return u.useEffect(()=>{const n=h=>{h.keyCode===37?l():h.keyCode===39&&i()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[s]),u.useEffect(()=>{A({bookSlug:s==null?void 0:s.slug}).then(n=>{S(n.data)})},[s==null?void 0:s.slug]),t.jsxs($.Fragment,{children:[t.jsx(w,{preLink:`/${s.slug}`,preContent:e==null?void 0:e.bookName,content:`Chương ${e==null?void 0:e.chapterOrder}`}),t.jsx(L,{children:t.jsx(f,{container:!0,spacing:2,children:t.jsxs(f,{item:!0,xs:12,children:[t.jsx("div",{className:a.storyName,children:e==null?void 0:e.bookName}),t.jsxs("div",{className:a.storyChapter,children:["Chương ",e==null?void 0:e.chapterOrder,": ",e==null?void 0:e.name]}),t.jsxs(y,{display:"flex",justifyContent:"center",my:"18px",gap:"0.75rem",children:[t.jsx(r,{className:a.button,disabled:!(e!=null&&e.previousChapter),startIcon:t.jsx(d,{}),onClick:l,children:"Chương trước"}),t.jsx(r,{className:a.button,startIcon:t.jsx(x,{})}),t.jsx(r,{className:a.button,disabled:!(e!=null&&e.nextChapter),endIcon:t.jsx(c,{}),onClick:i,children:"Chương tiếp"})]}),t.jsx(_,{}),t.jsx("div",{className:a.content,dangerouslySetInnerHTML:{__html:(e==null?void 0:e.content)||""}}),t.jsx(_,{}),t.jsxs(y,{display:"flex",justifyContent:"center",my:"18px",gap:"0.75rem",mb:"20px",children:[t.jsx(r,{className:a.button,disabled:!(e!=null&&e.previousChapter),startIcon:t.jsx(d,{}),onClick:l,children:"Chương trước"}),t.jsx(r,{className:a.button,startIcon:t.jsx(x,{})}),t.jsx(r,{className:a.button,disabled:!(e!=null&&e.nextChapter),endIcon:t.jsx(c,{}),onClick:i,children:"Chương tiếp"})]})]})})})]})};export{ee as default};
