import{Y as T,Z as s,ae as i}from"./main-3faada18.js";const{PAGINATION:a}=i,n=T.injectEndpoints({endpoints:r=>({getAllChapters:r.query({query:e=>({url:s.GET_ALL_CHAPTERS,method:"GET",params:e}),providesTags:e=>{var u;let t=JSON.parse(JSON.stringify(e));return t=[...(u=t==null?void 0:t.data)==null?void 0:u.map(({id:o})=>({type:a,id:o})),{type:a,id:"LIST"}],e?t:[{type:a,id:"LIST"}]}}),getChapter:r.query({query:e=>({url:s.GET_CHAPTER,method:"GET",params:e})}),createChapter:r.mutation({query:e=>({url:s.CREATE_CHAPTER,method:"POST",body:e}),invalidatesTags:[{type:a,id:"LIST"}]}),updateChapter:r.mutation({query:e=>({url:s.UPDATE_CHAPTER,method:"POST",body:e}),invalidatesTags:(e,t,{id:p})=>[{type:a,id:p}]}),deleteChapter:r.mutation({query:e=>({url:s.DELETE_BOOK+"/"+e,method:"DELETE"}),invalidatesTags:(e,t,p)=>[{type:a,id:p}]})})}),{useGetChapterQuery:y,useGetAllChaptersQuery:C,useCreateChapterMutation:d,useUpdateChapterMutation:h,useDeleteChapterMutation:A}=n;export{y as a,d as b,h as c,A as d,C as u};
