import{aa as g,r as h,j as t,ac as i,t as p,aV as m,q as u}from"./main-e476a63a.js";const b=[{id:1,name:"Thần Đạo Đan Tôn",categori:"Tiên Hiệp, Huyền Huyễn",background:"#e74c3c",color:"#fff"},{id:2,name:"Mê Vợ Không Lối Về",categori:"Ngôn Tình, Ngược, Sủng",background:"#5eb949",color:"#fff"},{id:3,name:"Linh Vũ Thiên Hạ",categori:"Tiên Hiệp, Dị Giới, Huyền Huyễn",background:"#5cabb8",color:"#fff"},{id:4,name:"Đấu Phá Thương Khung",categori:"Tiên Hiệp, Dị Giới, Huyền Huyễn"},{id:5,name:"Thế Giới Hoàn Mỹ",categori:"Tiên Hiệp, Kiếm Hiệp, Huyền Huyễn"},{id:6,name:"Cô Vợ Ngọt Ngào Có Chút Bất Lương",categori:"Ngôn Tình, Trọng Sinh, Sủng"},{id:7,name:"Phàm Nhân Tu Tiên",categori:"Tiên Hiệp, Kiếm Hiệp"},{id:8,name:"Nhất Niệm Vĩnh Hằng",categori:"Tiên Hiệp, Huyền Huyễn"},{id:9,name:"Đế Bá",categori:"Huyền Huyễn"},{id:10,name:"Rể Quý Trời Cho",categori:"Ngôn Tình, Đô Thị"}],T=g(()=>({box:{width:"100%",padding:"10px 20px",marginTop:"10px"},boxTitle:{width:"100%",borderBottom:"1px solid #ccc",marginBottom:"10px"},titleHotStory:{fontSize:"16px",borderBottom:"1px solid #4E4E4E",maxWidth:"235px",fontWeight:400},selectTime:{display:"flex",justifyContent:"center"},time:{width:"68px",height:"30px",borderRadius:"15px",border:"1px solid #AAA",textAlign:"center",lineHeight:"26px",marginLeft:"5px",cursor:"pointer","&:hover":{background:"#4E4E4E",color:"#fff"}},active:{background:"#4E4E4E",color:"#fff"},boxNumber:{width:"35px",height:"32px",borderRadius:"50%",border:"1px solid #eaeaea",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"5px"},boxItem:{height:"50px",display:"flex",alignItems:"center",borderBottom:"1px dashed #CCC"},boxName:{width:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},link:{fontSize:"14px",textDecoration:"none",color:"#000"},categori:{fontSize:"11px"}})),f=s=>{const{data:a}=s,n=T(),o=new Date,[c,l]=h.useState(o.getDate()),d=[{title:"Ngày",value:o.getDate()},{title:"Tháng",value:o.getMonth()+1},{title:"Năm",value:o.getFullYear()}],x=e=>{l(e)};return t.jsxs(i,{className:n.box,children:[t.jsx("div",{className:n.boxTitle,children:t.jsx("h2",{className:n.titleHotStory,children:"TRUYỆN ĐANG HOT"})}),t.jsx(i,{className:n.selectTime,children:d.map((e,r)=>t.jsx(i,{className:p(n.time,{[n.active]:c===e.value}),onClick:()=>x(e.value),children:e.title},r))}),a&&a.length>0&&a.map((e,r)=>t.jsxs(i,{className:n.boxItem,children:[t.jsx(i,{sx:{background:e==null?void 0:e.background,color:e==null?void 0:e.color},className:n.boxNumber,children:e.id}),t.jsxs(i,{className:n.boxName,children:[t.jsx(m,{to:"/",className:n.link,children:e.name}),t.jsx(u,{className:n.categori,children:e.categori})]})]}))]})};export{b as H,f as T};
