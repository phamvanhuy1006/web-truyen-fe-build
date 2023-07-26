import{a9 as A,aa as j,Y as G,Z as E,h as R,k as H,R as C,ab as U,l as _,r as P,j as s,ac as w,U as b,C as p,G as c,B as L,T as y,F as M,I as V,n as g,a1 as k}from"./main-3faada18.js";import{P as N}from"./index-a8236ec9.js";import{R as I,a as W}from"./index-a2438136.js";import{G as z}from"./index-bcc785c3.js";import{S as K,T as $}from"./SuneditorCustom-51d0d3b2.js";import{d as q,e as Q}from"./index-19a7c6ba.js";import"./Stack-746ab797.js";import"./KeyboardArrowRight-e6502fcd.js";import"./Pagination-da5528c3.js";const Y=()=>{const{setToastInformation:r}=A(),[i]=q(),[d]=Q();return{createOrUpdateBook:async n=>{const u={name:n.name,author:n.author,genresList:n.genre.map(a=>a.slug).join(","),description:n.description,status:n.status.value,bookCover:n.bookImg,slug:n.slug};try{n.id?(await d({...u,id:n.id}),r({status:j.SUCCESS,message:j.SUCCESS})):(await i(u),r({status:j.SUCCESS,message:j.SUCCESS}))}catch(a){console.log(a)}}}},Z=G.injectEndpoints({endpoints:r=>({uploadFile:r.mutation({query:i=>({url:E.UPLOAD_API,method:"POST",body:i})})})}),{useUploadFileMutation:J}=Z,X=()=>{const[r,i]=J();return{uploadFile:e=>{const n=new FormData;return Array.from(e).forEach((u,a)=>{n.append(`files[${a}]`,u)}),r(n).unwrap()},result:i}},D=r=>{const{open:i,handleClose:d,dataDetail:e}=r,{createOrUpdateBook:n}=Y(),u=R(),{list:a}=H({}),{uploadFile:S}=X(),[h,m]=C.useState(null),f={name:e==null?void 0:e.name,bookCover:(e==null?void 0:e.bookCover)||"",author:e==null?void 0:e.author,genre:e==null?void 0:e.genresList,status:U.find(o=>o.value===(e==null?void 0:e.status)),description:e==null?void 0:e.description,slug:e==null?void 0:e.slug},{control:x,setValue:v,handleSubmit:O}=_({defaultValues:f,reValidateMode:"onChange",mode:"onChange"}),T=P.useRef(null),B=()=>{T.current&&T.current.click()},F=async o=>{let t=e==null?void 0:e.bookCover;h&&(t=(await S(o==null?void 0:o.bookCover))[0].fileUrl);const l={...o,bookImg:t,id:e==null?void 0:e.id};n(l),d()};return s.jsxs(w,{open:i,maxWidth:"lg",handleClose:d,actions:[s.jsx(b,{sx:{background:p.LIGHT_GREEN,color:p.WHITE,"&:hover":{background:p.LIGHT_GREEN}},onClick:O(F),children:"Save"})],dialogTitleProps:{title:e!=null&&e.id?"Chỉnh sửa truyện":"Thêm mới truyện",sx:{fontSize:"18px"}},children:[s.jsx("input",{hidden:!0,type:"file",ref:T,accept:"image/*",onChange:o=>{v("bookCover",o.target.files),m(URL.createObjectURL(o.target.files[0]))}}),s.jsxs(c,{container:!0,spacing:2,mt:1,children:[s.jsxs(c,{item:!0,xs:12,children:[s.jsxs(L,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2,children:[s.jsx(y,{sx:{fontSize:"14px",fontWeight:"bold",color:"#544949",marginLeft:"8px",whiteSpace:"nowrap"},children:"Ảnh bìa"}),s.jsx(b,{startIcon:s.jsx(M.UploadIcon,{}),onClick:B,sx:{color:p.WHITE,background:p.LIGHT_GREEN,"&:hover":{background:p.LIGHT_GREEN}},children:"Upload"})]}),s.jsx(L,{sx:{margin:"auto",display:"flex",justifyContent:"center",padding:"0px"},children:(h||(e==null?void 0:e.bookCover))&&s.jsx(V,{src:h||(e==null?void 0:e.bookCover),alt:"Hinh anh",width:"50%",height:"auto",loading:"lazy"})})]}),s.jsx(c,{item:!0,xs:6,children:s.jsx(g,{name:"name",control:x,render:({field:{onChange:o,value:t}})=>s.jsx(k,{onChange:o,value:t,title:"Tên truyện"})})}),s.jsx(c,{item:!0,xs:6,children:s.jsx(g,{name:"author",control:x,render:({field:{onChange:o,value:t}})=>s.jsx(k,{onChange:o,value:t,title:"Tác giả"})})}),s.jsx(c,{item:!0,xs:6,children:s.jsx(g,{name:"genre",control:x,render:({field:{onChange:o,value:t}})=>s.jsx(I,{title:"Thể loại",onChange:o,value:t,options:[{name:"Tất cả",slug:""},...a||[]],getOptionLabel:l=>l==null?void 0:l.name,getOptionValue:l=>l==null?void 0:l.slug,isMulti:!0})})}),s.jsx(c,{item:!0,xs:6,children:s.jsx(g,{name:"status",control:x,render:({field:{onChange:o,value:t}})=>s.jsx(I,{onChange:o,value:t,title:"Trạng thái",options:U})})}),s.jsx(c,{item:!0,xs:12,children:s.jsx(g,{name:"slug",control:x,render:({field:{onChange:o,value:t}})=>s.jsx(k,{onChange:o,value:t,title:"Tác giả"})})}),s.jsxs(c,{item:!0,xs:12,children:[s.jsx(y,{sx:{fontSize:"14px",fontWeight:"bold",color:"#544949",marginLeft:"8px",whiteSpace:"nowrap"},children:"Mô tả"}),s.jsx(g,{name:"description",control:x,render:({field:{onChange:o,value:t}})=>s.jsx(K,{onChange:o,setContents:t,height:"300px",disableSunEditor:!1,hideToolbarSunEditor:!1})})]}),(e==null?void 0:e.id)&&s.jsx(c,{item:!0,xs:12,children:s.jsx(b,{sx:{background:"none",border:"1px solid #000!important",color:p.BLACK},onClick:()=>u(`/book-management/${e==null?void 0:e.slug}`),children:"Chi tiết chương truyện"})})]})]})},ue=()=>{const[r,i]=C.useState(!1),[d,e]=C.useState(),n=[{Header:"Tên truyện",accessor:"name"},{Header:"Thể Loại",accessor:"genresList",Cell:({row:m})=>{var f;return s.jsx(z,{listGenre:(f=m==null?void 0:m.values)==null?void 0:f.genresList})}},{Header:"Tác giả",accessor:"author"},{Header:"Trạng thái",accessor:"status"},{Header:"Tổng chương",accessor:"totalChapters"},{Header:"",accessor:"Action"}],u=()=>{i(!1),e(void 0)},a=()=>{i(!0),e(void 0)},S=m=>{i(!0),e(m)},h=()=>{console.log("1")};return s.jsx(C.Fragment,{children:s.jsxs(N,{children:[s.jsx(c,{container:!0,spacing:2,children:s.jsxs(c,{item:!0,xs:12,mt:5,mb:5,children:[s.jsx($,{title:"Quản lý truyện"}),s.jsx(W,{columns:n,data:[],onActionEdit:S,onActionDelete:h,onActionCreate:a,deleteUrl:E.DELETE_BOOK,showPagination:!0,endpoint:E.GET_ALL_BOOK})]})}),r&&s.jsx(D,{open:r,handleClose:u,dataDetail:d})]})})};export{ue as default};
