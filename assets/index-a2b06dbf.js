import{A as ce,j as n,p as Ve,n as we,B as Y,a1 as de,_ as f,aV as Fe,b as u,D as Ae,f as ue,Q as he,F as Le,C as Me,aW as Ee,t as Ie,i as _,l as Be,al as ze,o as Oe,aN as U,aA as ne,am as V,aX as me,E as Pe,aK as De,V as x,aD as $e,aO as _e,aM as le,an as X}from"./main-3660721f.js";import{C as Ge,a as We,d as Ke,b as Ue,P as Xe}from"./KeyboardArrowRight-1cd8fdb0.js";const Ye={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},qe=Ye,Qe=ce(n.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Je=ce(n.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function Ze(i){return we("MuiRating",i)}const en=Ve("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),$=en,nn=["value"],tn=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function an(i,e,t){return i<e?e:i>t?t:i}function on(i){const e=i.toString().split(".")[1];return e?e.length:0}function ee(i,e){if(i==null)return i;const t=Math.round(i/e)*e;return Number(t.toFixed(on(e)))}const sn=i=>{const{classes:e,size:t,readOnly:l,disabled:h,emptyValueFocused:b,focusVisible:m}=i,v={root:["root",`size${de(t)}`,h&&"disabled",m&&"focusVisible",l&&"readOnly"],label:["label","pristine"],labelEmptyValue:[b&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Be(v,Ze,e)},ln=Y("span",{name:"MuiRating",slot:"Root",overridesResolver:(i,e)=>{const{ownerState:t}=i;return[{[`& .${$.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${de(t.size)}`],t.readOnly&&e.readOnly]}})(({theme:i,ownerState:e})=>f({display:"inline-flex",position:"relative",fontSize:i.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${$.disabled}`]:{opacity:(i.vars||i).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${$.focusVisible} .${$.iconActive}`]:{outline:"1px solid #999"},[`& .${$.visuallyHidden}`]:qe},e.size==="small"&&{fontSize:i.typography.pxToRem(18)},e.size==="large"&&{fontSize:i.typography.pxToRem(30)},e.readOnly&&{pointerEvents:"none"})),pe=Y("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:i},e)=>[e.label,i.emptyValueFocused&&e.labelEmptyValueActive]})(({ownerState:i})=>f({cursor:"inherit"},i.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),rn=Y("span",{name:"MuiRating",slot:"Icon",overridesResolver:(i,e)=>{const{ownerState:t}=i;return[e.icon,t.iconEmpty&&e.iconEmpty,t.iconFilled&&e.iconFilled,t.iconHover&&e.iconHover,t.iconFocus&&e.iconFocus,t.iconActive&&e.iconActive]}})(({theme:i,ownerState:e})=>f({display:"flex",transition:i.transitions.create("transform",{duration:i.transitions.duration.shortest}),pointerEvents:"none"},e.iconActive&&{transform:"scale(1.2)"},e.iconEmpty&&{color:(i.vars||i).palette.action.disabled})),cn=Y("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:i=>Fe(i)&&i!=="iconActive",overridesResolver:(i,e)=>{const{iconActive:t}=i;return[e.decimal,t&&e.iconActive]}})(({iconActive:i})=>f({position:"relative"},i&&{transform:"scale(1.2)"}));function dn(i){const e=ue(i,nn);return n.jsx("span",f({},e))}function re(i){const{classes:e,disabled:t,emptyIcon:l,focus:h,getLabelText:b,highlightSelectedOnly:m,hover:v,icon:a,IconContainerComponent:p,isActive:w,itemValue:r,labelProps:N,name:k,onBlur:I,onChange:o,onClick:d,onFocus:B,readOnly:z,ownerState:g,ratingValue:C,ratingValueRounded:q}=i,F=m?r===C:r<=C,G=r<=v,A=r<=h,Q=r===q,O=he(),H=n.jsx(rn,{as:p,value:r,className:_(e.icon,F?e.iconFilled:e.iconEmpty,G&&e.iconHover,A&&e.iconFocus,w&&e.iconActive),ownerState:f({},g,{iconEmpty:!F,iconFilled:F,iconHover:G,iconFocus:A,iconActive:w}),children:l&&!F?l:a});return z?n.jsx("span",f({},N,{children:H})):n.jsxs(u.Fragment,{children:[n.jsxs(pe,f({ownerState:f({},g,{emptyValueFocused:void 0}),htmlFor:O},N,{children:[H,n.jsx("span",{className:e.visuallyHidden,children:b(r)})]})),n.jsx("input",{className:e.visuallyHidden,onFocus:B,onBlur:I,onChange:o,onClick:d,disabled:t,value:r,id:O,type:"radio",name:k,checked:Q})]})}const un=n.jsx(Qe,{fontSize:"inherit"}),hn=n.jsx(Je,{fontSize:"inherit"});function mn(i){return`${i} Star${i!==1?"s":""}`}const pn=u.forwardRef(function(e,t){const l=Ae({name:"MuiRating",props:e}),{className:h,defaultValue:b=null,disabled:m=!1,emptyIcon:v=hn,emptyLabelText:a="Empty",getLabelText:p=mn,highlightSelectedOnly:w=!1,icon:r=un,IconContainerComponent:N=dn,max:k=5,name:I,onChange:o,onChangeActive:d,onMouseLeave:B,onMouseMove:z,precision:g=1,readOnly:C=!1,size:q="medium",value:F}=l,G=ue(l,tn),A=he(I),[Q,O]=Le({controlled:F,default:b,name:"Rating"}),H=ee(Q,g),fe=Me(),[{hover:T,focus:W},P]=u.useState({hover:-1,focus:-1});let L=H;T!==-1&&(L=T),W!==-1&&(L=W);const{isFocusVisibleRef:te,onBlur:ve,onFocus:be,ref:ye}=Ee(),[ke,J]=u.useState(!1),ae=u.useRef(),Ce=Ie(ye,ae,t),Te=s=>{z&&z(s);const c=ae.current,{right:y,left:K}=c.getBoundingClientRect(),{width:M}=c.firstChild.getBoundingClientRect();let E;fe.direction==="rtl"?E=(y-s.clientX)/(M*k):E=(s.clientX-K)/(M*k);let j=ee(k*E+g/2,g);j=an(j,g,k),P(R=>R.hover===j&&R.focus===j?R:{hover:j,focus:j}),J(!1),d&&T!==j&&d(s,j)},je=s=>{B&&B(s);const c=-1;P({hover:c,focus:c}),d&&T!==c&&d(s,c)},oe=s=>{let c=s.target.value===""?null:parseFloat(s.target.value);T!==-1&&(c=T),O(c),o&&o(s,c)},Se=s=>{s.clientX===0&&s.clientY===0||(P({hover:-1,focus:-1}),O(null),o&&parseFloat(s.target.value)===H&&o(s,null))},Ne=s=>{be(s),te.current===!0&&J(!0);const c=parseFloat(s.target.value);P(y=>({hover:y.hover,focus:c}))},He=s=>{if(T!==-1)return;ve(s),te.current===!1&&J(!1);const c=-1;P(y=>({hover:y.hover,focus:c}))},[Re,se]=u.useState(!1),D=f({},l,{defaultValue:b,disabled:m,emptyIcon:v,emptyLabelText:a,emptyValueFocused:Re,focusVisible:ke,getLabelText:p,icon:r,IconContainerComponent:N,max:k,precision:g,readOnly:C,size:q}),S=sn(D);return n.jsxs(ln,f({ref:Ce,onMouseMove:Te,onMouseLeave:je,className:_(S.root,h,C&&"MuiRating-readOnly"),ownerState:D,role:C?"img":null,"aria-label":C?p(L):null},G,{children:[Array.from(new Array(k)).map((s,c)=>{const y=c+1,K={classes:S,disabled:m,emptyIcon:v,focus:W,getLabelText:p,highlightSelectedOnly:w,hover:T,icon:r,IconContainerComponent:N,name:A,onBlur:He,onChange:oe,onClick:Se,onFocus:Ne,ratingValue:L,ratingValueRounded:H,readOnly:C,ownerState:D},M=y===Math.ceil(L)&&(T!==-1||W!==-1);if(g<1){const E=Array.from(new Array(1/g));return n.jsx(cn,{className:_(S.decimal,M&&S.iconActive),ownerState:D,iconActive:M,children:E.map((j,R)=>{const Z=ee(y-1+(R+1)*g,g);return n.jsx(re,f({},K,{isActive:!1,itemValue:Z,labelProps:{style:E.length-1===R?{}:{width:Z===L?`${(R+1)*g*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),Z)})},y)}return n.jsx(re,f({},K,{isActive:M,itemValue:y}),y)}),!C&&!m&&n.jsxs(pe,{className:_(S.label,S.labelEmptyValue),ownerState:D,children:[n.jsx("input",{className:S.visuallyHidden,value:"",id:`${A}-empty`,type:"radio",name:A,checked:H==null,onFocus:()=>se(!0),onBlur:()=>se(!1),onChange:oe}),n.jsx("span",{className:S.visuallyHidden,children:a})]})]}))}),gn=pn;var ie={},xn=Oe;Object.defineProperty(ie,"__esModule",{value:!0});var ge=ie.default=void 0,fn=xn(ze()),vn=n,bn=(0,fn.default)((0,vn.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonSharp");ge=ie.default=bn;const yn=[{icon:ge,title:"Tác giả",content:"Mặc Mặc"},{icon:U.HashTagSvg,title:"Thể loại",content:Ge,template:We},{icon:U.InfoCircleSvg,title:"Trạng thái",content:"Hoàn Tất",sx:{color:"green"}},{icon:U.TagsSvg,title:"Số chương",content:"6010"},{icon:U.AwardSvg,title:"Chất lượng",content:"Bản Dịch đến chương 5300 | Audio Bản Dịch"}],kn=[{id:1,name:"Sơn biên tiểu thôn",link:"/"},{id:2,name:"Thanh ngưu trấn",link:"/"},{id:3,name:"Thất huyền môn",link:"/"},{id:4,name:"Luyện cốt nhai",link:"/"},{id:5,name:"Mặc đại phu",link:"/"},{id:6,name:"Vô danh khẩu quyết",link:"/"},{id:7,name:"Tu luyện nan",link:"/"},{id:8,name:"Nhập môn đệ tử",link:"/"},{id:9,name:"Tượng giáp công",link:"/"},{id:10,name:"Thần bí bình tử",link:"/"},{id:11,name:"Bình nan khai (Cái bình khó mở)",link:"/"},{id:12,name:"Đập bình tử",link:"/"},{id:13,name:"Dị tượng khởi",link:"/"},{id:14,name:"Thần bí dịch",link:"/"},{id:15,name:"Tứ niên hậu",link:"/"},{id:16,name:"Tiểu toán bàn",link:"/"},{id:17,name:"Lệ sư huynh(1)",link:"/"},{id:18,name:"Lệ sư huynh(2)",link:"/"},{id:19,name:"iang hồ đấu",link:"/"},{id:20,name:"Trừu tủy hoàn",link:"/"},{id:21,name:"Chỉ thống dược",link:"/"},{id:22,name:"Tâm ma sanh",link:"/"},{id:23,name:"Thí dược thỏ",link:"/"},{id:24,name:"Kinh hồn định",link:"/"},{id:25,name:"Sáp liễu thành",link:"/"},{id:26,name:"thôi dược sanh",link:"/"},{id:27,name:"Phối linh dược",link:"/"},{id:28,name:"Mặc lão hồi cốc",link:"/"},{id:29,name:"Xung đột khởi",link:"/"},{id:30,name:"Kiêu hùng mạt lộ",link:"/"},{id:31,name:"Thi Trùng Hoàn",link:"/"},{id:32,name:"Hào khí sinh",link:"/"},{id:33,name:"Tư hạ giao dịch",link:"/"},{id:34,name:"Trát nhãn kiếm pháp",link:"/"},{id:35,name:"Thâu bí tịch",link:"/"},{id:36,name:"Giật mình",link:"/"},{id:37,name:"Tam bất luyện",link:"/"},{id:38,name:"Đêm gặp gian tế",link:"/"},{id:39,name:"Điều kiện biến thái",link:"/"},{id:40,name:"Bí kỹ uyên nguyên",link:"/"},{id:41,name:"Lưu ngôn dạ xuất",link:"/"},{id:42,name:"Vân sí điểu",link:"/"},{id:43,name:"Vạn sự cụ bị",link:"/"},{id:44,name:"Vô nhan đề",link:"/"},{id:45,name:"Ám toán dữ lão nha",link:"/"},{id:46,name:"Phá thang nhất kiếm",link:"/"},{id:47,name:"Ma Ngân thủ đối La Yên bộ",link:"/"},{id:48,name:"Trá ngữ",link:"/"},{id:49,name:"Sáo trung sáo",link:"/"},{id:50,name:"Triền hương ti",link:"/"}],Cn=[{id:1,name:"Tiên Giả",link:"/"},{id:2,name:"Đại Mộng Chủ",link:"/"},{id:3,name:"Luyện Kiếm",link:"/"},{id:4,name:" Phàm Nhân Tu Tiên Chi Tiên Giới Thiên",link:"/"},{id:5,name:"Ma Thiên Tiền Truyện",link:"/"},{id:6,name:"Huyền Giới Chi Môn",link:"/"},{id:7,name:"Đông Châu Ký",link:"/"},{id:8,name:"Ma Thiên Ký",link:"/"}],Tn=[{id:1,name:"Thần Đạo Đan Tôn",categori:"Tiên Hiệp, Huyền Huyễn",background:"#e74c3c",color:"#fff"},{id:2,name:"Mê Vợ Không Lối Về",categori:"Ngôn Tình, Ngược, Sủng",background:"#5eb949",color:"#fff"},{id:3,name:"Linh Vũ Thiên Hạ",categori:"Tiên Hiệp, Dị Giới, Huyền Huyễn",background:"#5cabb8",color:"#fff"},{id:4,name:"Đấu Phá Thương Khung",categori:"Tiên Hiệp, Dị Giới, Huyền Huyễn"},{id:5,name:"Thế Giới Hoàn Mỹ",categori:"Tiên Hiệp, Kiếm Hiệp, Huyền Huyễn"},{id:6,name:"Cô Vợ Ngọt Ngào Có Chút Bất Lương",categori:"Ngôn Tình, Trọng Sinh, Sủng"},{id:7,name:"Phàm Nhân Tu Tiên",categori:"Tiên Hiệp, Kiếm Hiệp"},{id:8,name:"Nhất Niệm Vĩnh Hằng",categori:"Tiên Hiệp, Huyền Huyễn"},{id:9,name:"Đế Bá",categori:"Huyền Huyễn"},{id:10,name:"Rể Quý Trời Cho",categori:"Ngôn Tình, Đô Thị"}],jn=ne(()=>({box:{width:"100%",maxHeight:"400px",background:"#ecf0f1",padding:"10px 20px"},author:{width:"100%",borderBottom:"1px solid #ccc",marginBottom:"10px"},titleAuthor:{fontSize:"16px",borderBottom:"1px solid #4E4E4E",maxWidth:"235px",fontWeight:400},boxItem:{height:"40px",display:"flex",alignItems:"center",borderBottom:"1px dashed #CCC"},itemName:{width:"100%",fontSize:"14px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textDecoration:"none",color:"#000"}})),Sn=i=>{const{data:e}=i,t=jn();return n.jsxs("div",{className:t.box,children:[n.jsx("div",{className:t.author,children:n.jsx("h2",{className:t.titleAuthor,children:"TRUYỆN CÙNG TÁC GIẢ"})}),e&&e.length>0&&e.map((l,h)=>n.jsxs(V,{className:t.boxItem,children:[n.jsx(Ke,{}),n.jsx(me,{to:l.link,className:t.itemName,children:l.name})]}))]})},Nn=ne(()=>({box:{width:"100%",maxHeight:"400px",padding:"10px 20px",marginTop:"10px"},boxTitle:{width:"100%",borderBottom:"1px solid #ccc",marginBottom:"10px"},titleHotStory:{fontSize:"16px",borderBottom:"1px solid #4E4E4E",maxWidth:"235px",fontWeight:400},selectTime:{display:"flex",justifyContent:"center"},time:{width:"68px",height:"30px",borderRadius:"15px",border:"1px solid #AAA",textAlign:"center",lineHeight:"26px",marginLeft:"5px",cursor:"pointer","&:hover":{background:"#4E4E4E",color:"#fff"}},active:{background:"#4E4E4E",color:"#fff"},boxNumber:{width:"35px",height:"32px",borderRadius:"50%",border:"1px solid #eaeaea",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"5px"},boxItem:{height:"50px",display:"flex",alignItems:"center",borderBottom:"1px dashed #CCC"},boxName:{width:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},link:{fontSize:"14px",textDecoration:"none",color:"#000"},categori:{fontSize:"11px"}})),Hn=i=>{const{data:e}=i,t=Nn(),l=new Date,[h,b]=u.useState(l.getDate()),m=[{title:"Ngày",value:l.getDate()},{title:"Tháng",value:l.getMonth()+1},{title:"Năm",value:l.getFullYear()}],v=a=>{b(a)};return n.jsxs(V,{className:t.box,children:[n.jsx("div",{className:t.boxTitle,children:n.jsx("h2",{className:t.titleHotStory,children:"TRUYỆN ĐANG HOT"})}),n.jsx(V,{className:t.selectTime,children:m.map((a,p)=>n.jsx(V,{className:_(t.time,{[t.active]:h===a.value}),onClick:()=>v(a.value),children:a.title},p))}),e&&e.length>0&&e.map((a,p)=>n.jsxs(V,{className:t.boxItem,children:[n.jsx(V,{sx:{background:a==null?void 0:a.background,color:a==null?void 0:a.color},className:t.boxNumber,children:a.id}),n.jsxs(V,{className:t.boxName,children:[n.jsx(me,{to:"/",className:t.link,children:a.name}),n.jsx(Pe,{className:t.categori,children:a.categori})]})]}))]})},xe=ne(()=>({boxBook:{cursor:"pointer"},imageContainer:{width:"100%",height:0,paddingBottom:"calc(396/265 * 100%)",position:"relative","& img":{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"}},titleBook:{fontSeight:600,fontSize:"24px",color:X.MAIN_COLOR},boxIconTitle:{display:"flex",justifyContent:"flex-start",alignItems:"center","& svg":{width:"20px",marginRight:10}},boxContainer:{display:"flex",alignItems:"center",gap:5},rating:{fontSize:25},buttonRead:{backgroundColor:X.MAIN_COLOR,color:X.WHITE,textTransform:"capitalize",fontWeight:"bold","&:hover":{backgroundColor:X.MAIN_COLOR,opacity:.8}},chapter:{width:"100%",borderBottom:"1px solid #ccc",marginBottom:"15px"},titleChapter:{fontSize:"20px",borderBottom:"1px solid #4E4E4E",maxWidth:"220px",fontWeight:400},itemChapter:{padding:"5px 0px",textOverflow:"ellipsis"},nameChapter:{textDecoration:"none",color:"#000"}})),Fn=i=>{const e=xe(),[t]=u.useState(kn),[l]=u.useState(Cn),[h]=u.useState(Tn),[b,m]=u.useState([]),[v,a]=u.useState([]),[p,w]=u.useState(1),r=50,{control:N}=De({defaultValues:{rating:5}}),k=(o,d)=>{w(d)},I=()=>{const o=t.slice((p-1)*r,p*r);m(o.slice(0,r/2)),a(o.slice(r/2,r))};return u.useEffect(()=>{I()},[p]),n.jsxs(x,{container:!0,children:[n.jsx(x,{item:!0,xs:9,children:n.jsxs(x,{container:!0,children:[n.jsx(x,{xs:3,sx:{p:2},children:n.jsx($e,{className:e.imageContainer,src:Ue,alt:"book-cover",loading:"lazy"})}),n.jsxs(x,{xs:9,sx:{p:2,display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[n.jsx("h1",{className:e.titleBook,children:"Võ Luyện Đỉnh Phong"}),n.jsx(x,{container:!0,spacing:2,children:yn.map((o,d)=>n.jsx(Rn,{...o},d))}),n.jsxs("div",{className:e.boxContainer,children:[n.jsx(_e,{control:N,name:"rating",render:({field:{onChange:o,value:d,ref:B},fieldState:{error:z}})=>n.jsx(gn,{sx:{gap:.5},max:10,precision:.5,onChange:o,value:d,classes:{icon:e.rating}})}),"Cảm ơn bạn đã đánh giá!"]}),n.jsxs("div",{className:e.boxContainer,children:[n.jsx(le,{className:e.buttonRead,label:"Đọc từ đầu",variant:"contained"}),n.jsx(le,{className:e.buttonRead,label:"Đọc Mới Nhất",variant:"contained"})]})]}),n.jsxs(x,{item:!0,xs:12,marginBottom:"15px",children:[n.jsx("div",{className:e.chapter,children:n.jsx("h2",{className:e.titleChapter,children:"DANH SÁCH CHƯƠNG"})}),n.jsxs(x,{container:!0,marginLeft:"15px",children:[n.jsx(x,{item:!0,xs:6,children:b.map((o,d)=>n.jsx("div",{className:e.itemChapter,children:n.jsxs("a",{href:o.link,className:e.nameChapter,children:["Chương: ",o.id," ",o.name]})},d))}),n.jsx(x,{item:!0,xs:6,children:v.map((o,d)=>n.jsx("div",{className:e.itemChapter,children:n.jsxs("a",{href:o.link,className:e.nameChapter,children:["Chương ",o.id,": ",o.name]})},d))})]}),n.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:n.jsx(Xe,{count:Math.ceil(t.length/r),page:p,onChange:k,variant:"outlined",shape:"rounded"})})]})]})}),n.jsxs(x,{item:!0,xs:3,sx:{p:2},children:[n.jsx(Sn,{data:l}),n.jsx(Hn,{data:h})]})]})},Rn=i=>{const{icon:e,title:t,content:l,template:h,sx:b}=i,m=xe(),v=e;return n.jsxs(n.Fragment,{children:[n.jsxs(x,{item:!0,xs:3,className:m.boxIconTitle,children:[n.jsx(v,{}),n.jsx("div",{children:t})]}),n.jsx(x,{item:!0,xs:9,children:h?h({listCategory:l}):l})]})};export{Fn as default};