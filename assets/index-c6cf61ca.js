import{b as T,A as r,bg as i}from"./main-f1f37423.js";const{PAGINATION:a}=i,m=T.injectEndpoints({endpoints:t=>({getAllBooks:t.query({query:e=>({url:r.GET_ALL_BOOK,method:"GET",params:e}),providesTags:e=>{var u;let o=JSON.parse(JSON.stringify(e));return o=[...(u=o==null?void 0:o.data)==null?void 0:u.map(({id:n})=>({type:a,id:n})),{type:a,id:"LIST"}],e?o:[{type:a,id:"LIST"}]}}),getBook:t.query({query:e=>({url:r.GET_BOOK,method:"GET",params:e}),transformResponse:e=>e}),rateBook:t.mutation({query:e=>({url:r.UPDATE_RATING,method:"POST",body:e}),transformResponse:e=>e.data}),createComment:t.mutation({query:e=>({url:r.CREATE_COMMENT,method:"POST",body:e}),transformResponse:e=>e.data}),createBook:t.mutation({query:e=>({url:r.CREATE_BOOK,method:"POST",body:e}),invalidatesTags:[{type:a,id:"LIST"}]}),updateBook:t.mutation({query:e=>({url:r.UPDATE_BOOK,method:"POST",body:e}),invalidatesTags:(e,o,{id:s})=>[{type:a,id:s}]}),deleteBook:t.mutation({query:e=>({url:r.DELETE_BOOK+"/"+e,method:"DELETE"}),invalidatesTags:(e,o,s)=>[{type:a,id:s}]})})}),{useGetAllBooksQuery:E,useGetBookQuery:O,useRateBookMutation:y,useCreateCommentMutation:d,useCreateBookMutation:B,useUpdateBookMutation:A,useDeleteBookMutation:k}=m;export{A as a,O as b,d as c,E as d,y as e,B as u};
