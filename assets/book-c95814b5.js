import{b as n,c as u}from"./index-19a7c6ba.js";const l=o=>{const{data:t,...a}=n(o);return{list:t==null?void 0:t.data,meta:t==null?void 0:t.meta,...a}},B=()=>{const[o,t]=u();return{rateBook:async({bookId:s,point:r})=>{const e=await o({bookId:s,point:r});return e&&localStorage.setItem(`rating-${s}`,`${s}`),e==null?void 0:e.data},result:t}};export{B as a,l as u};
