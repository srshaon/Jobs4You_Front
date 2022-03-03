import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
 
 reducerPath: 'postApi',
 baseQuery: fetchBaseQuery({
  baseUrl: 'http://localhost:5000/',
 }),

 tagTypes:["Jobs"],
 endpoints: (builder) => ({

  getAllPost: builder.query({
   query: () => ({
    url: 'allgovjobs',
    method: 'GET'
   }),
   providesTags:["Jobs"]
   
  }),
  getPostById: builder.query({
   query: (id) => {
    console.log("ID:", id)
    return {
     url: `posts/${id}`,
     method: 'GET'
    }
   }
  }),

  deletePost: builder.mutation({
   query: (id) => {
    console.log("Delete ID:", id)
    return {
     url: `posts/${id}`,
     method: 'DELETE'
    }
   },
  
  }),

  createPost: builder.mutation({
   query: (newPost) => {
    console.log("Create Post: ", newPost)
    return {
     url: `addgovjob`,
     method: 'POST',
     body: newPost,
     headers: {
      'Content-type': 'application/json; charset=UTF-8',
     }
    }
   },
   invalidatesTags:["Jobs"]
  }),

  updatePost: builder.mutation({
   query: ({_id, ...data }) => ({
     url: `govjobs/${_id}`,
     method: 'PUT',
     body: data,
     headers: {
      'Content-type': 'application/json; charset=UTF-8',
     }
    
   }),
   invalidatesTags:["Jobs"]
  }),
 }),

})

export const { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } = postApi