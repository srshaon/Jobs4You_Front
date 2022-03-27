import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profilesApi = createApi({
  reducerPath: "profilesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  tagTypes: ["Profiles"],

  endpoints: (builder) => ({
    getProfiles: builder.query({
      query: () => ({
        url: "allProfiles",
        method: "GET",
      }),
      providesTags: ["Profiles"],
    }),
    getCompanies: builder.query({
      query: () => ({
        url: "companyprofiles",
        method: "GET",
      }),
      providesTags: ["Profiles"],
    }),
    getProfileById: builder.query({
      query: (id) => {
        console.log("ID:", id);
        return {
          url: `profile/${id}`,
          method: "GET",
        };
      },
    }),
    deleteCandidateById: builder.mutation({
      query: (id) => {
        console.log("ID:", id);
        return {
          url: `deleteCandidate/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Profiles"],
    }),
    deleteCompanyById: builder.mutation({
      query: (id) => {
        console.log("ID:", id);
        return {
          url: `deleteCompany/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Profiles"],
    }),

    getCandidateByEmail: builder.query({
      query: (email) => {
        return {
          url: `individualCandidate/${email}`,
          method: "GET",
        };
      },
    }),
    getCompanyByEmail: builder.query({
      query: (email) => {
        return {
          url: `individualCompany/${email}`,
          method: "GET",
        };
      },
    }),

    createProfile: builder.mutation({
      query: (newPost) => {
        console.log(newPost);
        return {
          url: `addProfile`,
          method: "POST",
          body: newPost,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: [""],
    }),

    updateProfile: builder.mutation({
      query: ({ _id, ...data }) => ({
        url: `singleProfile/${_id}`,
        method: "PUT",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Profiles"],
    }),
    updateCompany: builder.mutation({
      query: ({ _id, ...data }) => ({
        url: `singleCompany/${_id}`,
        method: "PUT",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Profiles"],
    }),
  }),
});

export const {
  useGetProfilesQuery,
  useGetProfileByIdQuery,
  useGetCompaniesQuery,
  useGetCandidateByEmailQuery,
  useGetCompanyByEmailQuery,
  useCreateProfileMutation,
  useUpdateProfileMutation,
  useUpdateCompanyMutation,
  useDeleteCandidateByIdMutation,
  useDeleteCompanyByIdMutation
} = profilesApi;
