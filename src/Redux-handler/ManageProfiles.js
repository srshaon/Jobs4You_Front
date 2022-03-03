import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profilesApi = createApi({

  reducerPath: 'profilesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://afternoon-headland-45054.herokuapp.com/',
  }),

  tagTypes: ["Profiles"],
  endpoints: (builder) => ({

    getProfiles: builder.query({
      query: () => ({
        url: 'allProfiles',
        method: 'GET'
      }),
      providesTags: ["Profiles"]

    }),
    getProfileById: builder.query({
      query: (id) => {
        console.log("ID:", id)
        return {
          url: `profile/${id}`,
          method: 'GET'
        }
      },
    }),

    createProfile: builder.mutation({
      query: (newPost) => {
        console.log(newPost)
        return {
          url: `addProfile`,
          method: 'POST',
          body: newPost,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
      },
      invalidatesTags: [""]
    }),

    updateProfile: builder.mutation({
      query: ({ _id, ...data }) => ({
        url: `singleProfile/${_id}`,
        method: 'PUT',
        body: data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }

      }),
      invalidatesTags: ["Profiles"]
    }),
  }),

})

export const { useGetProfilesQuery, useGetProfileByIdQuery, useCreateProfileMutation, useUpdateProfileMutation } = profilesApi